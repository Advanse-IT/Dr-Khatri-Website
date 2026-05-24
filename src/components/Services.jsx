import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ SERVICES ═══════════════════════════════════════════════ -->
<section class="sec bg2" id="services" aria-labelledby="services-title">
<div class="wrap">
<div class="svc-head-grid">
<div class="a lft">
<span class="kicker">Specialisations</span>
<h2 class="sec-title" id="services-title">Interventional Cardiology <em>Services</em></h2>
</div>
<p class="sec-lead wide a rgt">A comprehensive suite of catheter-based cardiac procedures — each underpinned by 25 years of Gold Coast experience, international training, and a 15,000+ procedure track record.</p>
</div>
<div class="svc-grid">
<div class="svc-c a up d1"><div class="svc-num">01</div><svg aria-hidden="true" class="card-icon"><use href="#ic-ecg"></use></svg><svg aria-hidden="true" class="card-wm"><use href="#ic-ecg"></use></svg><h3 class="svc-h">Coronary Angiography</h3><p class="svc-p">Catheter-based imaging to precisely map the coronary arteries, identify blockages, and guide optimal treatment planning. The gold standard for coronary artery disease diagnosis on the Gold Coast.</p></div>
<div class="svc-c a up d2"><div class="svc-num">02</div><svg aria-hidden="true" class="card-icon"><use href="#ic-vessel"></use></svg><svg aria-hidden="true" class="card-wm"><use href="#ic-vessel"></use></svg><h3 class="svc-h">Angioplasty &amp; Stenting</h3><p class="svc-p">Minimally invasive restoration of coronary blood flow using balloon angioplasty and drug-eluting stents — achieving open-artery results without open-heart surgery.</p></div>
<div class="svc-c a up d3"><div class="svc-num">03</div><svg aria-hidden="true" class="card-icon"><use href="#ic-pci"></use></svg><svg aria-hidden="true" class="card-wm"><use href="#ic-pci"></use></svg><h3 class="svc-h">Primary PCI — Heart Attack</h3><p class="svc-p">Emergency angioplasty for acute myocardial infarction, available 24 hours a day across the Gold Coast. Rapid restoration of blood flow to limit heart muscle damage. <span class="svc-badge">1,500+ · 24/7</span></p></div>
<div class="svc-c a up d4"><div class="svc-num">04</div><svg aria-hidden="true" class="card-icon"><use href="#ic-valve"></use></svg><svg aria-hidden="true" class="card-wm"><use href="#ic-valve"></use></svg><h3 class="svc-h">TAVI — Transcatheter Aortic Valve Implantation</h3><p class="svc-p">Transcatheter Aortic Valve Implantation — catheter-based valve replacement avoiding open-heart surgery. One of the most experienced TAVI operators on the Gold Coast. <span class="svc-badge">400+ procedures</span></p></div>
</div>
</div>
</section>
`;

export default function Services() {
  return <RawHtml html={markup} />;
}
