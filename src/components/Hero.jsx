import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ HERO ═══════════════════════════════════════════════════ -->
<section class="hero" id="top">
<div class="hero-glow"></div>
<div class="hero-ecg">
<svg preserveaspectratio="none" viewbox="0 0 1400 64">
<path class="ecg-path" d="M-50,32 L90,32 L108,32 L113,30 L118,8 L123,56 L128,22 L133,32
           L220,32 L238,32 L243,30 L248,6 L253,58 L258,20 L263,32
           L350,32 L368,32 L373,30 L378,8 L383,56 L388,22 L393,32
           L480,32 L498,32 L503,30 L508,6 L513,58 L518,20 L523,32
           L610,32 L628,32 L633,30 L638,8 L643,56 L648,22 L653,32
           L740,32 L758,32 L763,30 L768,6 L773,58 L778,20 L783,32
           L870,32 L888,32 L893,30 L898,8 L903,56 L908,22 L913,32
           L1000,32 L1018,32 L1023,30 L1028,6 L1033,58 L1038,20 L1043,32
           L1130,32 L1148,32 L1153,30 L1158,8 L1163,56 L1168,22 L1173,32
           L1260,32 L1278,32 L1283,30 L1288,6 L1293,58 L1298,20 L1303,32 L1450,32" fill="none" stroke="rgba(196,154,56,.45)" stroke-linecap="round" stroke-width="1.8"></path>
</svg>
</div>
<img src="/images/anatomical-heart.svg" class="heart-bg" style="width:500px;right:-30px;bottom:30px;position:absolute;opacity:0.15;pointer-events:none;z-index:1" alt="" />
<div class="hero-in">
<div>
<div class="hero-tag a up">
<div class="hero-tagline"></div>
<span class="hero-tagtext">Gold Coast · Est. 2000 · 24 / 7</span>
</div>
<h1 class="hero-title a up d1">Dr Shailesh Khatri</h1>
<p class="hero-cred a up d2">MBBS · FRACP · FCSANZ · SCAI · AMA · ACOR-Accredited TAVI Operator</p>
<p class="hero-desc a up d3">A leading Cardiologist on the Gold Coast, Dr Shailesh Khatri is a highly experienced Heart Specialist and Senior Interventional Cardiologist specialising in coronary angiography, angioplasty, stenting, and TAVI. He provides consultations and holds admitting rights at both John Flynn Private Hospital (Tugun) and Pindara Private Hospital (Benowa), offering a 24-hour emergency cardiology service across the Gold Coast.</p>
<div class="hero-btns a up d4">
<a class="btn btn-gold" href="/contact">Book a Consultation</a>
<a class="btn btn-ghost" href="/about">About Dr Khatri</a>
</div>
<div class="hero-strip a up d5">
<div class="hsi"><span class="hsi-n">15,000+</span><span class="hsi-l">Procedures</span></div>
<div class="hsi"><span class="hsi-n">1,500+</span><span class="hsi-l">Primary PCI</span></div>
<div class="hsi"><span class="hsi-n">400+</span><span class="hsi-l">TAVI</span></div>
<div class="hsi"><span class="hsi-n">24/7</span><span class="hsi-l">Emergency</span></div>
</div>
</div>
<div class="hero-photo">
<div class="hero-frame a up d2">
<div class="hero-img-border"></div>
<img alt="Dr Shailesh Khatri" class="hero-img" loading="eager" src="/images/photo3.jpeg"/>
<!----      <div class="hero-award">Best Cardiologist — Gold Coast 2024 &amp; 2025</div>     -->
<div aria-label="Best Cardiologist Gold Coast 2024 and 2025" class="hero-award" role="img">
<div aria-hidden="true" class="hero-award-stars">
<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
</div>
<div aria-hidden="true" class="hero-award-tooltip">
Recognised Excellence
              Voted Best Cardiologist on the Gold Coast — two years running
            </div>
<div class="hero-award-inner">
<svg aria-hidden="true" fill="none" height="18" stroke="rgba(255,255,255,0.9)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewbox="0 0 24 24" width="18">
<circle cx="12" cy="15" r="5"></circle>
<path d="M12 10V3"></path>
<path d="M8.5 6.5L5 3h4l3 4-3 3z"></path>
<path d="M15.5 6.5L19 3h-4l-3 4 3 3z"></path>
<path d="M10 15h4M12 13v4"></path>
</svg>
<div class="hero-award-text">
<span class="hero-award-top">Best Cardiologist - Gold Coast</span>
</div>
<div class="hero-award-years">
<span class="hero-award-pill">2024</span>
<span class="hero-award-pill">2025</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="h-wave"><svg preserveaspectratio="none" viewbox="0 0 1440 70"><path d="M0,35 C480,70 960,0 1440,35 L1440,70 L0,70 Z" fill="var(--bg)"></path></svg></div>
</section>
`;

export default function Hero() {
  return <RawHtml html={markup} />;
}
