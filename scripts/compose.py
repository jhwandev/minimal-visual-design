#!/usr/bin/env python3
"""Assemble offline example fragments; semantic pattern choice remains with the agent."""
import argparse
import html
import json
import re
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
CATALOG = json.loads((ROOT / 'assets/catalog.json').read_text())
BY_ID = {item['id']: item for item in CATALOG}
def fragment(identifier, prefix):
    if identifier not in BY_ID:
        raise ValueError(f'Unknown pattern: {identifier}')
    return (ROOT / f'assets/patterns/{identifier}.html').read_text().replace('__ID__',prefix)
def section(identifier, index, body=None):
    entry = BY_ID[identifier]
    content = fragment(identifier, f's{index}-') if body is None else body
    return f'<section class="section" aria-labelledby="s{index}-heading"><header class="section-head"><h2 id="s{index}-heading">{html.escape(entry["name"])}</h2><span class="badge">{html.escape(entry["category"])}</span></header>{content}</section>'
def document(title, content, theme='light', lead='내용에 맞는 구조를 선택하고 조합하는 HTML 시각화 예제입니다.', sample=True):
    if theme not in ('light','dark','editorial','dashboard'):
        raise ValueError('Unknown theme')
    css = (ROOT/'assets/tokens.css').read_text()
    js = (ROOT/'assets/interactions.js').read_text()
    notice = '<p class="notice">모든 수치·일정·조직·시스템은 가상 예시입니다. 실제 제품 평가나 관측 데이터가 아닙니다.</p>' if sample else ''
    return f"""<!doctype html>
<html lang="ko" data-theme="{theme}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>{html.escape(title)}</title><style>{css}</style></head><body><a class="skip" href="#main">본문으로 건너뛰기</a><main class="wrap" id="main"><header class="hero"><p class="eyebrow">Minimal Visual Design / Open web patterns</p><h1>{html.escape(title)}</h1><p class="lead">{html.escape(lead)}</p></header>{notice}{content}<footer class="sample-line"><p class="muted">HTML · CSS Grid/Flex · Inline SVG · 외부 의존성 없음</p></footer></main><script>{js}</script></body></html>"""

def compact_document(title, content, theme='light', sample=True):
    if theme not in ('light','dark','editorial','dashboard'):
        raise ValueError('Unknown theme')
    css=(ROOT/'assets/tokens.css').read_text()
    interactive=any(token in content for token in ('data-tabs','data-filter-root','data-edges','data-theme-select','data-advanced'))
    script='<script>'+ (ROOT/'assets/interactions.js').read_text()+'</script>' if interactive else ''
    note='<p class="sample-note">가상 예시 · 실제 사용 시 원자료, 수치와 적용 조건을 확인하세요.</p>' if sample else ''
    qualification=re.search(r'<p class="comparison-note">(.*?)</p>',content,re.S)
    if qualification:
        note='<p class="sample-note">'+qualification.group(1)+'</p>' if sample else ''
        content=content.replace(qualification.group(0),'')
    # The single composition title is h1; immediate card headings become h2.
    content=content.replace('<h3>','<h2>').replace('</h3>','</h2>')
    return f'''<!doctype html><html lang="ko" data-theme="{theme}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>{html.escape(title)}</title><style>{css}</style></head><body class="compact-page"><a class="skip" href="#main">본문으로 건너뛰기</a><main class="compact-main" id="main"><section class="visual-frame" aria-labelledby="visual-title"><h1 id="visual-title">{html.escape(title)}</h1>{content}</section>{note}</main>{script}</body></html>'''

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--patterns',nargs='+',choices=list(BY_ID),required=True)
    parser.add_argument('--title',default='시각화 초안')
    parser.add_argument('--theme',choices=['light','dark','editorial','dashboard'],default='light')
    parser.add_argument('--output',type=Path,required=True)
    parser.add_argument('--layout',choices=['auto','compact','report'],default='auto',help='Auto uses a compact visual for one pattern and a report for multiple patterns.')
    args=parser.parse_args()
    if args.layout=='compact' and len(args.patterns)!=1:
        parser.error('Compact mode takes one primary pattern; use report for a multi-section document.')
    if len(args.patterns)==1 and args.layout!='report':
        text=compact_document(args.title,fragment(args.patterns[0],'visual-'),args.theme)
    else:
        text=document(args.title,''.join(section(p,i) for i,p in enumerate(args.patterns)),args.theme)
    args.output.parent.mkdir(parents=True,exist_ok=True)
    args.output.write_text(text,encoding='utf-8')
    print(args.output)
if __name__=='__main__':main()
