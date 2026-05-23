import RawHtml from './RawHtml.jsx';

const markup = `
<section class="sec bg2" id="services">
<div class="wrap">
<div class="svc-head-grid">
<div class="a lft"><span class="kicker">Specialisations</span><h2 class="sec-title">Interventional Cardiology <em>Services</em></h2></div>
<p class="sec-lead wide a rgt">A comprehensive suite of catheter-based cardiac procedures — each underpinned by 25 years of Gold Coast experience, international training, and a 15,000+ procedure track record.</p>
</div>
<div class="svc-grid">
<a class="svc-c a up d1" href="/coronary-angiography"><div class="svc-num">01</div><svg aria-hidden="true" class="card-icon"><use href="#ic-ecg"></use></svg><div class="svc-h">Coronary Angiography</div><p class="svc-p">Catheter-based imaging to precisely map the coronary arteries, identify blockages, and guide optimal treatment planning.</p><span class="text-link">Learn more</span></a>
<a class="svc-c a up d2" href="/angioplasty-stenting"><div class="svc-num">02</div><svg aria-hidden="true" class="card-icon"><use href="#ic-vessel"></use></svg><div class="svc-h">Angioplasty &amp; Stenting</div><p class="svc-p">Minimally invasive restoration of coronary blood flow using balloon angioplasty and drug-eluting stents.</p><span class="text-link">Learn more</span></a>
<a class="svc-c a up d3" href="/chest-pain"><div class="svc-num">03</div><svg aria-hidden="true" class="card-icon"><use href="#ic-pci"></use></svg><div class="svc-h">Chest Pain &amp; Primary PCI</div><p class="svc-p">Specialist assessment and emergency angioplasty pathways for suspected heart attack and coronary artery disease.</p><span class="text-link">Learn more</span></a>
<a class="svc-c a up d4" href="/tavi-aortic-valve"><div class="svc-num">04</div><svg aria-hidden="true" class="card-icon"><use href="#ic-valve"></use></svg><div class="svc-h">TAVI</div><p class="svc-p">Transcatheter Aortic Valve Implantation for suitable patients with severe aortic stenosis.</p><span class="text-link">Learn more</span></a>
<a class="svc-c a up d1" href="/preventive-cardiology"><div class="svc-num">05</div><div class="svc-h">Preventive Cardiology</div><p class="svc-p">Risk reduction for blood pressure, cholesterol, family history and long-term cardiovascular prevention.</p><span class="text-link">Learn more</span></a>
<a class="svc-c a up d2" href="/hypertension"><div class="svc-num">06</div><div class="svc-h">Hypertension</div><p class="svc-p">Cardiology review for persistent high blood pressure and cardiovascular risk management.</p><span class="text-link">Learn more</span></a>
</div>
</div>
</section>`;

export default function Services() { return <RawHtml html={markup} />; }
