import RawHtml from './RawHtml.jsx';

const markup = `
<section class="sec" id="authority">
<div class="wrap">
<span class="kicker">Clinical Leadership</span>
<h2 class="sec-title">Trusted <em>Cardiac Expertise</em> Across the Gold Coast</h2>
<p class="sec-lead wide">Dr Shailesh Khatri is a Senior Interventional Cardiologist with more than 25 years of clinical experience in advanced coronary and structural heart procedures. He provides evidence-based cardiac care with a strong focus on patient safety, minimally invasive treatment, and long-term cardiovascular health outcomes.</p>
<div class="svc-grid">
<div class="svc-c"><div class="svc-h">Hospital Affiliations</div><p class="svc-p">Consulting and admitting rights associated with John Flynn Private Hospital and Pindara Private Hospital, supporting advanced cardiac diagnostics, emergency intervention, and ongoing cardiac management.</p></div>
<div class="svc-c"><div class="svc-h">Professional Memberships</div><p class="svc-p">Fellow of the Royal Australasian College of Physicians (FRACP) and Fellow of the Cardiac Society of Australia and New Zealand (FCSANZ).</p></div>
<div class="svc-c"><div class="svc-h">Advanced Interventional Care</div><p class="svc-p">Special interests include coronary angiography, coronary stenting, angioplasty, TAVI, acute heart attack intervention, chest pain assessment, and preventive cardiology.</p></div>
</div>
</div>
</section>`;

export default function MedicalAuthority(){return <RawHtml html={markup} />}
