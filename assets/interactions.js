(() => {
 'use strict';
 document.querySelectorAll('[data-theme-select]').forEach(select => select.addEventListener('change', () => {document.documentElement.dataset.theme=select.value;}));
 document.querySelectorAll('[data-filter-root]').forEach(root => {
  const input=root.querySelector('[data-search]'), category=root.querySelector('[data-category]');
  const items=[...root.querySelectorAll('[data-filter-item]')].filter(item=>item.closest('[data-filter-root]')===root), status=root.querySelector('[data-count]'), empty=root.querySelector('[data-empty]');
  function update(){const term=input.value.trim().toLocaleLowerCase();let count=0;
   items.forEach(item=>{const show=(!category || category.value==='all' || item.dataset.category===category.value) && item.textContent.toLocaleLowerCase().includes(term);item.hidden=!show;if(show)count++;});
   status.textContent=`${count}개 표시`;if(empty)empty.hidden=count!==0;
  } input.addEventListener('input',update);if(category)category.addEventListener('change',update);update();
 });
 document.querySelectorAll('[data-tabs]').forEach(root => {
  const buttons=[...root.querySelectorAll('[data-tab]')];const bar=root.querySelector('.tab-buttons');
  bar.hidden=false;bar.setAttribute('role','tablist');bar.setAttribute('aria-label',root.dataset.label || '보기 선택');
  const panels=buttons.map(b=>document.getElementById(b.dataset.tab));
  function activate(index,focus=false){buttons.forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;panels[i].hidden=i!==index;});if(focus)buttons[index].focus();}
  buttons.forEach((b,i)=>{b.setAttribute('role','tab');b.setAttribute('aria-controls',panels[i].id);panels[i].setAttribute('role','tabpanel');panels[i].setAttribute('aria-labelledby',b.id);panels[i].tabIndex=0;b.addEventListener('click',()=>activate(i));b.addEventListener('keydown',e=>{let next=i;if(e.key==='ArrowRight')next=(i+1)%buttons.length;else if(e.key==='ArrowLeft')next=(i-1+buttons.length)%buttons.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=buttons.length-1;else return;e.preventDefault();activate(next,true);});});activate(0);
 });
 document.querySelectorAll('[data-edges]').forEach(root=>{
  const svg=root.querySelector('.connectors'), layer=svg.querySelector('[data-lines]');const edges=JSON.parse(root.dataset.edges);
  function redraw(){const box=root.getBoundingClientRect();if(!box.width)return;svg.setAttribute('viewBox',`0 0 ${box.width} ${box.height}`);layer.replaceChildren();
   edges.forEach(([a,b])=>{const from=root.querySelector(`[data-node="${a}"]`),to=root.querySelector(`[data-node="${b}"]`);if(!from||!to)return;
    const A=from.getBoundingClientRect(),B=to.getBoundingClientRect();let x1=A.left+A.width/2-box.left,y1=A.top+A.height/2-box.top,x2=B.left+B.width/2-box.left,y2=B.top+B.height/2-box.top;
    const dx=x2-x1,dy=y2-y1;const ta=Math.min(dx?A.width/2/Math.abs(dx):Infinity,dy?A.height/2/Math.abs(dy):Infinity),tb=Math.min(dx?B.width/2/Math.abs(dx):Infinity,dy?B.height/2/Math.abs(dy):Infinity);
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');let route=`M ${x1+dx*ta} ${y1+dy*ta} L ${x2-dx*tb} ${y2-dy*tb}`;if(Math.abs(dy)<8 && Math.abs(dx)>1.4*Math.max(A.width,B.width)){const lane=Math.max(2,Math.min(A.top,B.top)-box.top-24);route=`M ${x1} ${A.top-box.top} V ${lane} H ${x2} V ${B.top-box.top}`;}path.setAttribute('d',route);path.setAttribute('fill','none');path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','1.5');path.setAttribute('marker-end',`url(#${svg.dataset.marker})`);layer.appendChild(path);
   });
  } if('ResizeObserver' in window){const observer=new ResizeObserver(redraw);observer.observe(root);root.querySelectorAll('[data-node]').forEach(n=>observer.observe(n));}window.addEventListener('resize',redraw);redraw();
 });
})();

(() => {'use strict';document.querySelectorAll('[data-advanced]').forEach(root=>{
 const kind=root.dataset.advanced,live=root.querySelector('[data-live]');
 const say=(t,error=false)=>{if(live){live.textContent=t;live.setAttribute('role',error?'alert':'status');}};
 const read=key=>{const input=root.querySelector(`[data-param="${key}"]`);return input.checkValidity()&&input.value!==''?Number(input.value):NaN;};
 if(['load','sensitivity','calculator'].includes(kind)){
  const update=()=>{let message='';if(kind==='load'){const a=read('agents'),r=read('rate');if(!Number.isFinite(a+r)){say('허용 범위 안의 숫자를 입력하세요.',true);return;}const total=a*r;message=`가정: 처리 용량 500회/초. 요청량 ${total}회/초 · 초과 요청 ${Math.max(0,total-500)}회/초.`;root.querySelector('[data-load-bar]').style.setProperty('--v',Math.min(100,total/500*100)+'%');}
   if(kind==='sensitivity'){const m=read('margin');if(!Number.isFinite(m)){say('1–100 사이의 숫자를 입력하세요.',true);return;}message=`가정 고정비 100점 · 손익분기 수량 ${(100/m).toFixed(2)}개`;const rawEnd=10*m-100;const maxX=rawEnd>400?500/m:10;const endY=Math.min(400,rawEnd);root.querySelector('[data-sensitivity-line]').setAttribute('d',`M60 200 L${60+maxX*50} ${200-(endY+100)*.36}`);}
   if(kind==='calculator'){const c=read('count'),m=read('minutes');if(!Number.isFinite(c+m)){say('허용 범위 안의 숫자를 입력하세요.',true);return;}message=`총 ${c*m}분 · ${(c*m/60).toFixed(2)}시간`;}
   say(message);
  };root.querySelectorAll('input').forEach(n=>n.addEventListener('input',update));update();
 }
 if(kind==='series'){const enabled={A:true,B:true},data={A:[20,30,40],B:[10,20,25]},month=root.querySelector('[data-month]');const update=()=>{const index=Number(month.value);const active=Object.keys(data).filter(k=>enabled[k]);say(active.length?`${index+1}월 · `+active.map(k=>`${k} ${data[k][index]}건`).join(' · '):'표시 시리즈 없음');};root.querySelectorAll('[data-series-button]').forEach(b=>b.addEventListener('click',()=>{const key=b.dataset.seriesButton;enabled[key]=!enabled[key];b.setAttribute('aria-pressed',String(enabled[key]));root.querySelector(`[data-series="${key}"]`).style.display=enabled[key]?'':'none';update();}));month.addEventListener('change',update);update();}
 if(kind==='sort'){let ascending=true;root.querySelector('[data-sort]').addEventListener('click',()=>{const tbody=root.querySelector('tbody'),rows=[...tbody.rows];rows.sort((a,b)=>(Number(a.cells[1].textContent)-Number(b.cells[1].textContent))*(ascending?1:-1));rows.forEach(r=>tbody.appendChild(r));root.querySelector('thead th:last-child').setAttribute('aria-sort',ascending?'ascending':'descending');say(ascending?'완료 건수 오름차순':'완료 건수 내림차순');ascending=!ascending;});}
 if(kind==='drilldown'){root.querySelectorAll('[data-dept]').forEach(b=>b.addEventListener('click',()=>{const key=b.dataset.dept;root.querySelectorAll('[data-detail]').forEach(n=>n.hidden=key!=='all'&&n.dataset.detail!==key);say(key==='all'?'전체 · 조사 2건 / 설계 3건':key==='content'?'콘텐츠 팀 · 조사 2건':'디자인 팀 · 설계 3건');}));}
 if(kind==='scrubber'){const input=root.querySelector('[data-time]');input.addEventListener('input',()=>{const i=Number(input.value),value=[20,30,40][i];say(`${i+1}월 · 완료 ${value}건`);root.querySelector('[data-time-bar]').style.setProperty('--v',value/50*100+'%');});}
 if(kind==='stepper'){const steps=[...root.querySelectorAll('[data-step]')];let index=0;const prev=root.querySelector('[data-prev]'),next=root.querySelector('[data-next]');root.querySelector('.step-controls').hidden=false;const update=()=>{steps.forEach((s,i)=>s.hidden=i!==index);prev.disabled=index===0;next.disabled=index===steps.length-1;say(`${index+1} / ${steps.length} 단계`);};prev.addEventListener('click',()=>{index=Math.max(0,index-1);update();});next.addEventListener('click',()=>{index=Math.min(steps.length-1,index+1);update();});update();}
 if(kind==='calendar'){const events={4:'자료 검토',12:'중간 리뷰',20:'결과 공유'};root.querySelectorAll('[data-date]').forEach(b=>b.addEventListener('click',()=>{root.querySelectorAll('[data-date]').forEach(n=>n.setAttribute('aria-pressed',String(n===b)));say(`11월 ${b.dataset.date}일 · ${events[b.dataset.date]||'일정 없음'}`);}));}
});})();
