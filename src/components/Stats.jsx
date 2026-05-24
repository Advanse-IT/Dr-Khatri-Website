import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ STATS ══════════════════════════════════════════════════ -->
<section class="stats-band" id="stats" aria-labelledby="stats-title">
<div class="stats-ecg-bg">
<svg preserveaspectratio="none" style="width:100%;height:60px;display:block" viewbox="0 0 1440 60">
<path d="M0,30 L140,30 L156,30 L161,28 L166,6 L171,54 L176,18 L181,30 L300,30 L316,30 L321,28 L326,6 L331,54 L336,18 L341,30 L460,30 L476,30 L481,28 L486,6 L491,54 L496,18 L501,30 L620,30 L636,30 L641,28 L646,6 L651,54 L656,18 L661,30 L780,30 L796,30 L801,28 L806,6 L811,54 L816,18 L821,30 L940,30 L956,30 L961,28 L966,6 L971,54 L976,18 L981,30 L1100,30 L1260,30 L1440,30" fill="none" stroke="white" stroke-linecap="round" stroke-width="1.5"></path>
</svg>
</div>
<svg class="stats-heart" viewbox="0 0 200 180"><path d="M100 158C100 158 18 108 18 58C18 33 38 13 63 13C79 13 91 22 100 34C109 22 121 13 137 13C162 13 182 33 182 58C182 108 100 158 100 158Z"></path></svg>
<div class="wrap" style="position:relative;z-index:2">
<div class="stats-top">
<div>
<span class="kicker light a lft">Track Record</span>
<h2 class="sec-title light a lft d1" id="stats-title">A Career Measured in <em>Lives Saved</em></h2>
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
<!-- ECG stripe -->
<div class="ecg-stripe" style="background:var(--bg2)">
<svg preserveaspectratio="none" viewbox="0 0 1440 32">
<path d="M0,16 L180,16 L196,16 L200,14 L204,4 L208,28 L212,10 L216,16 L380,16 L400,16 L600,16 L800,16 L1000,16 L1200,16 L1440,16" fill="none" opacity=".2" stroke="var(--gold)" stroke-linecap="round" stroke-width="1.3"></path>
</svg>
</section>
`;

export default function Stats() {
  return <RawHtml html={markup} />;
}
