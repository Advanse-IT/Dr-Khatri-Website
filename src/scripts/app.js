
// ── Nav scroll
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('up',scrollY>56),{passive:true});

// ── Mobile menu
const hbg=document.getElementById('hbg'),mn=document.getElementById('mobNav');
hbg.addEventListener('click',()=>{hbg.classList.toggle('on');mn.classList.toggle('on');document.body.style.overflow=mn.classList.contains('on')?'hidden':''});
mn.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{hbg.classList.remove('on');mn.classList.remove('on');document.body.style.overflow=''}));

// ── Animated logo ECG (from original)
function initAnimatedLogos(){
  const X0=10,X1=36,BASELINE=30,AMP=6,bpm=72,sweepMs=2400;
  const cycleMs=60000/bpm;
  const ecg=(t)=>{
    const p=((t%1)+1)%1;
    if(p<0.12)return 0;
    if(p<0.20)return Math.sin(((p-0.12)/0.08)*Math.PI)*0.16;
    if(p<0.26)return 0;
    if(p<0.275)return -((p-0.26)/0.015)*0.22;
    if(p<0.295)return -0.22+((p-0.275)/0.020)*1.25;
    if(p<0.315)return 1.03-((p-0.295)/0.020)*1.38;
    if(p<0.335)return -0.35+((p-0.315)/0.020)*0.35;
    if(p<0.46)return 0;
    if(p<0.66)return Math.sin(((p-0.46)/0.20)*Math.PI)*0.38;
    return 0;
  };
  document.querySelectorAll('[data-ecg-logo]').forEach(root=>{
    const svg=root.querySelector('svg');if(!svg)return;
    const staticPath=svg.querySelector('.ecg-static');
    const live=svg.querySelector('.ecg-live');
    const tracePath=svg.querySelector('.ecg-trace');
    const dot=svg.querySelector('.ecg-dot');
    const dotGlow=svg.querySelector('.ecg-dot-glow');
    const grad=svg.querySelector('linearGradient');
    if(!staticPath||!live||!tracePath||!dot||!dotGlow||!grad)return;
    let raf=0,start=0;
    const render=(ts)=>{
      if(!start)start=ts;
      const elapsed=ts-start;
      const sweep=(elapsed%sweepMs)/sweepMs;
      const headX=X0+(X1-X0)*sweep;
      const tailX=Math.max(X0,headX-(X1-X0)*0.9);
      grad.setAttribute('x1',tailX.toFixed(2));
      grad.setAttribute('x2',headX.toFixed(2));
      const N=96;let d='',hy=BASELINE;
      for(let i=0;i<=N;i++){
        const x=X0+((headX-X0)*i)/N;
        const frac=(x-X0)/(X1-X0);
        const ageMs=(sweep-frac)*sweepMs;
        const drawnAt=elapsed-ageMs;
        const t=drawnAt/cycleMs;
        const y=BASELINE-ecg(t)*AMP;
        d+=(i===0?'M':'L')+x.toFixed(2)+','+y.toFixed(2);
        if(i===N)hy=y;
      }
      tracePath.setAttribute('d',d);
      dot.setAttribute('cx',headX.toFixed(2));dot.setAttribute('cy',hy.toFixed(2));
      dotGlow.setAttribute('cx',headX.toFixed(2));dotGlow.setAttribute('cy',hy.toFixed(2));
      raf=requestAnimationFrame(render);
    };
    root.addEventListener('mouseenter',()=>{
      staticPath.style.display='none';live.style.display='block';
      cancelAnimationFrame(raf);start=0;raf=requestAnimationFrame(render);
    });
    root.addEventListener('mouseleave',()=>{
      cancelAnimationFrame(raf);raf=0;start=0;
      tracePath.setAttribute('d','');
      dot.setAttribute('cx',String(X0));dot.setAttribute('cy',String(BASELINE));
      dotGlow.setAttribute('cx',String(X0));dotGlow.setAttribute('cy',String(BASELINE));
      live.style.display='none';staticPath.style.display='block';
    });
  });
}
initAnimatedLogos();

// ── Hero ECG live sweep
function initHeroECG(){
  const ecg=(t)=>{
    const p=((t%1)+1)%1;
    if(p<0.12)return 0;
    if(p<0.20)return Math.sin(((p-0.12)/0.08)*Math.PI)*0.16;
    if(p<0.26)return 0;
    if(p<0.275)return -((p-0.26)/0.015)*0.22;
    if(p<0.295)return -0.22+((p-0.275)/0.020)*1.25;
    if(p<0.315)return 1.03-((p-0.295)/0.020)*1.38;
    if(p<0.335)return -0.35+((p-0.315)/0.020)*0.35;
    if(p<0.46)return 0;
    if(p<0.66)return Math.sin(((p-0.46)/0.20)*Math.PI)*0.38;
    return 0;
  };
  document.querySelectorAll('.hero-ecg svg').forEach((svg,idx)=>{
    const path=svg.querySelector('.ecg-path');if(!path)return;
    const vb=(svg.getAttribute('viewBox')||'0 0 1400 64').split(/\s+/).map(Number);
    const X0=(vb[0]||0)-50,X1=(vb[0]||0)+(vb[2]||1400)+50;
    const BASELINE=(vb[3]||64)/2,AMP=Math.max(5.4,(vb[3]||64)*0.24);
    const cycleMs=60000/68,sweepMs=6200;
    const id='ht'+idx;
    let defs=svg.querySelector('defs');
    if(!defs){defs=document.createElementNS('http://www.w3.org/2000/svg','defs');svg.insertBefore(defs,svg.firstChild)}
    const g=document.createElementNS('http://www.w3.org/2000/svg','linearGradient');
    g.setAttribute('id',id);g.setAttribute('gradientUnits','userSpaceOnUse');
    g.setAttribute('x1',String(X0));g.setAttribute('y1','0');g.setAttribute('x2',String(X0));g.setAttribute('y2','0');
    const c=path.getAttribute('stroke')||'rgba(196,154,56,.45)';
    g.innerHTML='<stop offset="0%" stop-color="'+c+'" stop-opacity="0"/><stop offset="58%" stop-color="'+c+'" stop-opacity=".42"/><stop offset="92%" stop-color="'+c+'" stop-opacity=".8"/><stop offset="100%" stop-color="#ffffff" stop-opacity="1"/>';
    defs.appendChild(g);
    path.setAttribute('stroke','url(#'+id+')');path.setAttribute('stroke-width','2');
    const bl=document.createElementNS('http://www.w3.org/2000/svg','line');
    bl.setAttribute('x1',String(X0));bl.setAttribute('x2',String(X1));
    bl.setAttribute('y1',String(BASELINE));bl.setAttribute('y2',String(BASELINE));
    bl.setAttribute('stroke',c);bl.setAttribute('stroke-opacity','.10');bl.setAttribute('stroke-width','.8');
    svg.insertBefore(bl,path);
    const glow=document.createElementNS('http://www.w3.org/2000/svg','circle');
    glow.setAttribute('r','4.2');glow.setAttribute('fill','#fff');glow.setAttribute('fill-opacity','.12');
    const dot=document.createElementNS('http://www.w3.org/2000/svg','circle');
    dot.setAttribute('r','1.6');dot.setAttribute('fill','#fff');
    svg.appendChild(glow);svg.appendChild(dot);
    const start=performance.now(),N=320;
    const render=(ts)=>{
      const elapsed=ts-start;
      const sweep=(elapsed%sweepMs)/sweepMs;
      const headX=X0+(X1-X0)*sweep;
      const tailX=Math.max(X0,headX-(X1-X0)*0.9);
      g.setAttribute('x1',tailX.toFixed(2));g.setAttribute('x2',headX.toFixed(2));
      let d='',hy=BASELINE;
      for(let i=0;i<=N;i++){
        const x=X0+((headX-X0)*i)/N;
        const frac=(x-X0)/(X1-X0);
        const ageMs=(sweep-frac)*sweepMs;
        const t=(elapsed-ageMs)/cycleMs;
        const y=BASELINE-ecg(t)*AMP;
        d+=(i===0?'M':'L')+x.toFixed(2)+','+y.toFixed(2);
        if(i===N)hy=y;
      }
      path.setAttribute('d',d);
      dot.setAttribute('cx',headX.toFixed(2));dot.setAttribute('cy',hy.toFixed(2));
      glow.setAttribute('cx',headX.toFixed(2));glow.setAttribute('cy',hy.toFixed(2));
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  });
}
initHeroECG();

// ── Scroll reveal
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target)}});
},{threshold:.08,rootMargin:'0px 0px -28px 0px'});
document.querySelectorAll('.a').forEach(el=>obs.observe(el));

// ── Animated counters
document.querySelectorAll('[data-target]').forEach(el=>{
  const co=new IntersectionObserver(entries=>{
    if(!entries[0].isIntersecting)return;
    const t=parseInt(el.dataset.target),suf=t===25?' yrs':'+';
    let v=0,inc=t/(2400/16);
    const run=()=>{v+=inc;el.textContent=(v>=t?t:Math.floor(v)).toLocaleString()+suf;if(v<t)requestAnimationFrame(run)};
    run();co.disconnect();
  },{threshold:.35});
  co.observe(el);
});

// ── FAQ accordion
function faq(q){
  const item=q.parentElement;
  document.querySelectorAll('.faq-item.open').forEach(i=>{if(i!==item)i.classList.remove('open')});
  item.classList.toggle('open');
}

// ── Directions location picker
// This file is loaded as an ES module by Vite, so functions are not global by default.
// The mobile bottom-bar Directions button opens this bottom sheet with two choices.
const dirOverlay = document.getElementById('dirOverlay');
const dirSheet = document.getElementById('dirSheet');
const dirTrigger = document.getElementById('mb-directions');

function showDirectionsPicker(e){
  if(e) e.preventDefault();
  if(!dirOverlay || !dirSheet) return;
  dirOverlay.classList.add('on');
  dirSheet.classList.add('on');
  dirSheet.setAttribute('aria-hidden', 'false');
  document.body.classList.add('dir-open');
}

function hideDirectionsPicker(){
  if(!dirOverlay || !dirSheet) return;
  dirOverlay.classList.remove('on');
  dirSheet.classList.remove('on');
  dirSheet.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('dir-open');
}

// Keep inline handlers working after Vite bundles this module.
window.showDirectionsPicker = showDirectionsPicker;
window.hideDirectionsPicker = hideDirectionsPicker;

// Also bind via JS so the behaviour works even if inline handlers are removed later.
dirTrigger?.addEventListener('click', showDirectionsPicker);
dirOverlay?.addEventListener('click', hideDirectionsPicker);
dirSheet?.querySelectorAll('a,button').forEach(el=>el.addEventListener('click', hideDirectionsPicker));
document.addEventListener('keydown',e=>{if(e.key==='Escape')hideDirectionsPicker()});

