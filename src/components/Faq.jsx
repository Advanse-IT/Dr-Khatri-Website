import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ FAQ ════════════════════════════════════════════════════ -->
<section class="sec bg-white" id="faq">
<div class="wrap">
<div class="faq-grid">
<div class="a lft">
<span class="kicker">FAQ</span>
<h2 class="sec-title">Common <em>Questions</em></h2>
<p class="sec-lead">Everything you need to know before your first appointment. Can't find your answer? <a href="#contact" style="color:var(--gold);font-weight:700">Get in touch</a>.</p>
</div>
<div class="faq-list a rgt">
<div class="faq-item"><button class="faq-q" onclick="faq(this)" aria-expanded="false">Do I need a referral to see Dr Khatri?<span class="faq-arr">▼</span></button><div class="faq-body"><div class="faq-body-in">Yes — a GP referral is required for all consultations. Your GP will assess your symptoms, arrange initial tests, and write a referral to Dr Shailesh Khatri. Contact the rooms on (07) 5598 0322 with your referral to schedule an appointment at John Flynn Specialist Suites, Tugun.</div></div></div>
<div class="faq-item"><button class="faq-q" onclick="faq(this)" aria-expanded="false">Where does Dr Khatri consult?<span class="faq-arr">▼</span></button><div class="faq-body"><div class="faq-body-in">Dr Khatri's consulting rooms are at John Flynn Specialist Suites, Level 3, Suites 301–303, 42 Inland Drive, Tugun QLD 4224. He holds admitting rights at <strong>John Flynn Private Hospital</strong> (Tugun) and <strong>Pindara Private Hospital</strong> (Benowa, QLD 4217), allowing patients across the Gold Coast to be admitted to the hospital most convenient to them.</div></div></div>
<div class="faq-item"><button class="faq-q" onclick="faq(this)" aria-expanded="false">What is an interventional cardiologist?<span class="faq-arr">▼</span></button><div class="faq-body"><div class="faq-body-in">An interventional cardiologist uses catheter-based techniques to diagnose and treat heart conditions. Dr Khatri specialises in coronary angiography, angioplasty and stenting, and TAVI (transcatheter aortic valve implantation). He has performed over 15,000 procedures since establishing his Gold Coast practice in 2001.</div></div></div>
<div class="faq-item"><button class="faq-q" onclick="faq(this)" aria-expanded="false">Is emergency cardiac care available after hours?<span class="faq-arr">▼</span></button><div class="faq-body"><div class="faq-body-in">Yes. Dr Khatri has provided a 24-hour cardiology service to the Gold Coast for over two decades. Recognising that cardiac emergencies can occur at any time, he prioritises care and timely access to treatment at both Pindara Private Hospital and John Flynn Private Hospital. He has personally performed over 1,500 Primary PCI procedures for patients experiencing acute heart attacks. In a life-threatening emergency, always call 000 first.</div></div></div>
<div class="faq-item"><button class="faq-q" onclick="faq(this)" aria-expanded="false">What is TAVI and does Dr Khatri perform it?<span class="faq-arr">▼</span></button><div class="faq-body"><div class="faq-body-in">TAVI (Transcatheter Aortic Valve Implantation) is a minimally invasive procedure to replace the aortic valve via catheter, without open-heart surgery. Dr Khatri has performed over 400 TAVI procedures and is one of the most experienced TAVI operators on the Gold Coast.</div></div></div>
<div class="faq-item"><button class="faq-q" onclick="faq(this)" aria-expanded="false">What are Dr Khatri's qualifications?<span class="faq-arr">▼</span></button><div class="faq-body"><div class="faq-body-in">Dr Khatri holds an MBBS from the University of Queensland (1990). He is a Fellow of the Royal Australasian College of Physicians (FRACP), a Fellow of the Cardiac Society of Australia and New Zealand (FCSANZ), a Member of the Society for Cardiovascular Angiography and Interventions (SCAI), and a Member of the Australian Medical Association (AMA). He is also accredited by ACOR to perform TAVI procedures.</div></div></div>
<div class="faq-item"><button class="faq-q" onclick="faq(this)" aria-expanded="false">Why choose Dr Khatri as your cardiologist on the Gold Coast?<span class="faq-arr">▼</span></button><div class="faq-body"><div class="faq-body-in">As a leading cardiologist on the Gold Coast with over 25 years of experience, Dr Shailesh Khatri brings international training, a 15,000+ procedure track record, and a commitment to 24-hour emergency cardiology care. His expertise in interventional cardiology, combined with his compassionate approach to patient care, makes him the trusted choice for heart specialist services across the Gold Coast region.</div></div></div>
</div>
</div>
</div>
</section>
`;

export default function Faq() {
  return <RawHtml html={markup} />;
}
