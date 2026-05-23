import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ CORE STRENGTHS ════════════════════════════════════════ -->
<section class="sec-sm bg2" id="core-strengths" aria-labelledby="strengths-title">
<div class="wrap">
<div style="text-align:center;margin-bottom:6px"><span class="kicker center a up">Core Strengths</span></div>
<h2 class="sec-title a up d1" id="strengths-title" style="text-align:center;margin-bottom:0">What Sets Dr Khatri <em>Apart</em></h2>
<div class="strength-grid">
<div class="str-card a up d1"><svg aria-hidden="true" class="card-icon"><use href="#ic-globe"></use></svg><svg aria-hidden="true" class="card-wm"><use href="#ic-globe"></use></svg><h3 class="str-h">International Training Pedigree</h3><p class="str-p">In 2001, Dr Khatri undertook a Fellowship at St Paul's Hospital, Vancouver under Professor John Webb, an internationally renowned interventional cardiologist — completing over 1,200 procedures. This world-class training underpins every procedure he performs today.</p></div>
<div class="str-card a up d2"><svg aria-hidden="true" class="card-icon"><use href="#ic-chart"></use></svg><svg aria-hidden="true" class="card-wm"><use href="#ic-chart"></use></svg><h3 class="str-h">High-Volume, High-Expertise Practice</h3><p class="str-p">Over 15,000 procedures performed since settling on the Gold Coast in 2001 — including 400+ TAVI and 1,500+ emergency Primary PCI procedures. Experience at this volume translates directly into superior patient safety and outcomes.</p></div>
<div class="str-card a up d3"><svg aria-hidden="true" class="card-icon"><use href="#ic-clock"></use></svg><svg aria-hidden="true" class="card-wm"><use href="#ic-clock"></use></svg><h3 class="str-h">24-Hour Cardiology Service</h3><p class="str-p">Dr Khatri has provided a 24-hour cardiology service to the Gold Coast for over two decades. Cardiac emergencies receive priority care and timely access to treatment at both Pindara Private Hospital and John Flynn Private Hospital.</p></div>
<div class="str-card a up d1"><svg aria-hidden="true" class="card-icon"><use href="#ic-cap"></use></svg><svg aria-hidden="true" class="card-wm"><use href="#ic-cap"></use></svg><h3 class="str-h">Education &amp; Professional Development</h3><p class="str-p">Actively involved in postgraduate education and clinical audit programs on the Gold Coast. Dr Khatri regularly participates in professional development and training programs both within Australia and internationally.</p></div>
<div class="str-card a up d2"><svg aria-hidden="true" class="card-icon"><use href="#ic-care"></use></svg><svg aria-hidden="true" class="card-wm"><use href="#ic-care"></use></svg><h3 class="str-h">Holistic, Patient-Centred Care</h3><p class="str-p">Dr Khatri's approach encompasses appropriate investigations, evidence-based treatment, procedural intervention, cardiac rehabilitation, and lifestyle modification. He places strong emphasis on patient involvement in decision-making throughout their care journey.</p></div>
<div class="str-card a up d3"><svg aria-hidden="true" class="card-icon"><use href="#ic-shield"></use></svg><svg aria-hidden="true" class="card-wm"><use href="#ic-shield"></use></svg><h3 class="str-h">Dedicated Cardiac Nursing Team</h3><p class="str-p">Patients are initially assessed by Dr Khatri's experienced cardiac nursing team, who are always available for heart-related concerns and remain involved throughout each patient's hospital stay — providing a consistent, highly personalised standard of care.</p></div>
</div>
</div>
</section>
`;

export default function CoreStrengths() {
  return <RawHtml html={markup} />;
}
