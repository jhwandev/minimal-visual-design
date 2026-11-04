#!/usr/bin/env python3
"""Offline structural checks, not a browser/accessibility conformance test."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import argparse
import sys

class Inspect(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids=set();self.errors=[];self.refs=[];self.tags=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs);self.tags.append(tag)
        if 'id' in a:
            if a['id'] in self.ids:self.errors.append('Duplicate id: '+a['id'])
            self.ids.add(a['id'])
        for name in ('aria-controls','aria-labelledby','aria-describedby'):
            for target in a.get(name,'').split():self.refs.append(('#'+target,True))
        if tag=='a' and 'href' in a:self.refs.append((a['href'],False))
        for name in ('src','poster'):
            if name in a and not a[name].startswith('data:'):self.errors.append('Non-inline asset: '+a[name])
        if tag=='link' and a.get('rel')=='stylesheet':self.errors.append('External stylesheet')
        if 'srcset' in a:self.errors.append('Review non-inline srcset')
        if tag=='html' and not a.get('lang'):self.errors.append('Missing document language')
    def handle_startendtag(self,tag,attrs):self.handle_starttag(tag,attrs)

def check(paths):
    errors=[];count=0
    for p in paths:
        count+=1;text=p.read_text(encoding='utf-8');doc=Inspect();doc.feed(text)
        fragment='patterns' in p.parts
        if not fragment:
            for required in ('html','title','main'):
                if required not in doc.tags:doc.errors.append('Missing '+required)
            if '__ID__' in text:doc.errors.append('Unresolved composition prefix')
        for ref,aria in doc.refs:
            link=urlsplit(ref)
            if aria or (not link.path and link.fragment):
                if unquote(link.fragment) not in doc.ids:doc.errors.append('Missing target: '+ref)
            elif not link.scheme and link.path and not (p.parent/unquote(link.path)).exists():doc.errors.append('Missing local file: '+ref)
        for error in doc.errors:errors.append(str(p)+': '+error)
    return count,errors

def main():
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('paths',nargs='*',type=Path,default=[Path('.')]);args=parser.parse_args()
    paths=sorted(set(p for arg in args.paths for p in (arg.rglob('*.html') if arg.is_dir() else [arg])))
    count,errors=check(paths)
    if not count:parser.error('No HTML files found')
    print(f'Checked {count} HTML files; {len(errors)} issue(s).')
    for error in errors:print(error)
    sys.exit(bool(errors))
if __name__=='__main__':main()
