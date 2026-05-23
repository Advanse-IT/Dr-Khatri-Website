import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ JOURNEY / HOW TO SEE DR KHATRI ══════════════════════ -->
<section class="sec bg-white">
<div class="wrap">
<div style="text-align:center;margin-bottom:6px"><span class="kicker center a up">Your Care Pathway</span></div>
<h2 class="sec-title a up d1" style="text-align:center;margin-bottom:0">How to See <em>Dr Khatri</em></h2>
<div class="journey-steps">
<div class="jstep a up d1">
<div class="jstep-n">1</div>
<div class="jstep-h">See Your GP First</div>
<p class="jstep-p">A referral from your General Practitioner is required for all consultations. Your GP will assess your symptoms, arrange initial tests, and write a referral to Dr Shailesh Khatri.</p>
<div class="jstep-arr">→</div>
</div>
<div class="jstep a up d2">
<div class="jstep-n">2</div>
<div class="jstep-h">Book Your Appointment</div>
<p class="jstep-p">Contact Dr Khatri with your GP referral on <a href="tel:+61755980322" style="color:var(--navy2);font-weight:700">(07) 5598 0322</a> to schedule a consultation. His consulting rooms are at John Flynn Specialist Suites, Level 3, Suites 301–303, 42 Inland Drive, Tugun QLD 4224. Dr Khatri also holds admitting rights at Pindara Private Hospital (Benowa), allowing you to choose the location most convenient to you.</p>
<div class="jstep-arr">→</div>
</div>
<div class="jstep a up d3">
<div class="jstep-n">3</div>
<div class="jstep-h">Your Consultation &amp; Ongoing Care</div>
<p class="jstep-p">You will initially be assessed by Dr Khatri's experienced cardiac nursing team. Dr Khatri will then review your history, explain your diagnosis, and plan your care — investigations, medication, procedural intervention, cardiac rehabilitation, or lifestyle modification. His nursing team remains involved throughout your hospital stay, providing personalised, ongoing support.</p>
</div>
</div>
<div class="a up d4" style="margin-top:18px;background:rgba(var(--ar),.06);border:1px solid rgba(var(--ar),.18);border-radius:7px;padding:14px 18px;display:flex;align-items:center;gap:12px;max-width:680px;margin-left:auto;margin-right:auto">
<svg aria-hidden="true" style="width:22px;height:22px;color:var(--gold);flex-shrink:0;margin-top:0"><use href="#ic-emergency"></use></svg>
<p style="font-size:.84rem;color:var(--text2);line-height:1.6"><strong style="color:var(--navy)">Cardiac Emergency?</strong> Dr Khatri provides a genuine 24/7 emergency cardiac service. In a life-threatening emergency, call <strong style="color:var(--navy)">000</strong> immediately.</p>
</div>
</div>
</section>
`;

export default function PatientJourney() {
  return <RawHtml html={markup} />;
}
