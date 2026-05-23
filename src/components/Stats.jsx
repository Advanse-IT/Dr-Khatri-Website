import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ STATS ══════════════════════════════════════════════════ -->
<div class="stats-band">
<!-- ECG Removed -->
<img src="/images/anatomical-heart.svg" class="stats-heart" style="position:absolute;width:380px;right:0px;bottom:-10px;opacity:0.08;pointer-events:none;z-index:1" alt="" />
<div class="wrap" style="position:relative;z-index:2">
<div class="stats-top">
<div>
<div style="font-size:.82rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--gold2);margin-bottom:14px">Track Record</div>
<h2 class="sec-title light a lft d1">A Career Measured in <em>Lives Saved</em></h2>
<h3 style="display:none">Experienced Gold Coast Cardiologist Track Record</h3>
</div>
<p class="sec-lead light a rgt">Since settling on the Gold Coast in 2001 following his international fellowship, Dr Khatri has become an integral member of the region's interventional cardiology services — providing a 24-hour cardiology service for over two decades at both Pindara Private Hospital and John Flynn Private Hospital.</p>
</div>
<div class="stats-grid">
<div class="stat-c a up d1"><svg aria-hidden="true" class="stat-icon"><use href="#ic-hospital"></use></svg><span class="stat-n" data-target="15000">0+</span><span class="stat-l">Total Cardiac Procedures Performed</span></div>
<div class="stat-c a up d2"><svg aria-hidden="true" class="stat-icon"><use href="#ic-pci"></use></svg><span class="stat-n" data-target="1500">0+</span><span class="stat-l">Primary PCI — Emergency Heart Attacks</span></div>
<div class="stat-c a up d3"><svg aria-hidden="true" class="stat-icon"><use href="#ic-valve"></use></svg><span class="stat-n" data-target="400">0+</span><span class="stat-l">TAVI Procedures Performed</span></div>
<div class="stat-c a up d4"><svg aria-hidden="true" class="stat-icon"><use href="#ic-star"></use></svg><span class="stat-n" data-target="25">0</span><span class="stat-l">Years Serving the Gold Coast</span></div>
</div>
</div>
</div>

`;

export default function Stats() {
  return <RawHtml html={markup} />;
}
