import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ CAREER TIMELINE ══════════════════════════════════════════ -->
<section class="tl-band" id="career-timeline" aria-labelledby="career-title">
<div class="wrap">
<h2 class="tl-title" id="career-title">Career Milestones</h2>
<div class="tl-track">
<div class="tl-item"><div class="tl-dot"></div><div class="tl-year">1983</div><div class="tl-txt">Arrived in Australia from Fiji</div></div>
<div class="tl-item"><div class="tl-dot"></div><div class="tl-year">1990</div><div class="tl-txt">MBBS — University of Queensland</div></div>
<div class="tl-item"><div class="tl-dot"></div><div class="tl-year">1990s</div><div class="tl-txt">Cardiology training at Royal Brisbane, Prince Charles &amp; John Hunter Hospitals</div></div>
<div class="tl-item"><div class="tl-dot"></div><div class="tl-year">2001</div><div class="tl-txt">Fellowship — St. Paul's Hospital, Vancouver under Prof. John Webb. 1,200+ procedures</div></div>
<div class="tl-item"><div class="tl-dot"></div><div class="tl-year">2001+</div><div class="tl-txt">Established Gold Coast practice. Founded Tweed Hospital Primary PCI service</div></div>
<div class="tl-item"><div class="tl-dot"></div><div class="tl-year">Today</div><div class="tl-txt">15,000+ procedures · Adjunct Professor, Bond University · Best Cardiologist 2024 &amp; 2025</div></div>
</div>
</div>
</div>
<!-- ECG stripe -->
<div class="ecg-stripe" style="background:var(--bg)">
<svg preserveaspectratio="none" viewbox="0 0 1440 32">
<path d="M0,16 L180,16 L196,16 L200,14 L204,4 L208,28 L212,10 L216,16 L380,16 L396,16 L400,14 L404,4 L408,28 L412,10 L416,16 L580,16 L596,16 L600,14 L604,4 L608,28 L612,10 L616,16 L780,16 L796,16 L800,14 L804,4 L808,28 L812,10 L816,16 L980,16 L996,16 L1000,14 L1004,4 L1008,28 L1012,10 L1016,16 L1180,16 L1196,16 L1200,14 L1204,4 L1208,28 L1212,10 L1216,16 L1440,16" fill="none" opacity=".22" stroke="var(--gold)" stroke-linecap="round" stroke-width="1.3"></path>
</svg>
</div>
`;

export default function CareerTimeline() {
  return <RawHtml html={markup} />;
}
