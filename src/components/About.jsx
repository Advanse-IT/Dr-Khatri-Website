import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ ABOUT ══════════════════════════════════════════════════ -->
<section class="sec bg-white" id="about">
<div class="wrap">
<div class="about-grid">
<div class="ap-col a lft">
<div class="ap-main"><img alt="Dr Shailesh Khatri" loading="lazy" src="/images/photo4.jpeg"/></div>
<div class="ap-stats">
<div class="as-i"><span class="as-n">15,000+</span><span class="as-l">Procedures</span></div>
<div class="as-i"><span class="as-n">400+</span><span class="as-l">TAVI</span></div>
<div class="as-i"><span class="as-n">1,500+</span><span class="as-l">Primary PCI</span></div>
<div class="as-i"><span class="as-n">25 yrs</span><span class="as-l">Gold Coast</span></div>
</div>
<div style="margin-top:20px">
<p class="sec-lead">Originally from Fiji, Dr Khatri migrated to Australia in 1983 where he completed his secondary education in Brisbane before obtaining his medical degree from the University of Queensland. He became a registered medical practitioner in 1990 and went on to complete his cardiology training across The Royal Brisbane Hospital and Prince Charles Hospital in Brisbane, and John Hunter Hospital in Newcastle.</p>
<p class="sec-lead">In 2001, Dr Khatri undertook a Fellowship in Interventional Cardiology at St Paul's Hospital in Vancouver under the mentorship of Professor John Webb, an internationally renowned interventional cardiologist. Following his return to Australia later that year, he settled on the Gold Coast and has since become an integral member of the region's interventional cardiology services, performing over 15,000 procedures. Dr Khatri is also accredited by ACOR to perform TAVI procedures.</p>
</div>
</div>
<div class="at-col a rgt">
<span class="kicker">About</span>
<h2 class="sec-title">Serving the Gold Coast <em>for Over 25 Years</em></h2>
    <h3 style="display:none">Expert Cardiac Care Gold Coast by Dr Shailesh Khatri</h3>
<p class="sec-lead">Dr Shailesh Khatri is a highly experienced interventional cardiologist who has been serving the Gold Coast community for more than 25 years. He specialises in coronary angiography, angioplasty and stenting, and transcatheter aortic valve implantation (TAVI).</p>
<p class="sec-lead">Dr Khatri is dedicated to delivering high-quality, patient-centred care, and has provided a 24-hour cardiology service to the Gold Coast for over two decades. Recognising that cardiac emergencies can occur at any time, he prioritises care and timely access to treatment at both Pindara Private Hospital and John Flynn Private Hospital, where he holds admitting rights.</p>
<p class="sec-lead">Dr Khatri is passionate about improving both cardiovascular health and overall quality of life for his patients. His approach to patient care is holistic and comprehensive, encompassing appropriate investigations, evidence-based treatment, procedural intervention when required, cardiac rehabilitation, and lifestyle modification. He places strong emphasis on involving patients in decision-making and ensuring they feel supported throughout their cardiac care journey.</p>
<p class="sec-lead">Patients seeing Dr Khatri are initially assessed by his experienced cardiac nursing team, who play an important role in patient support and are always available to assist with heart-related concerns. They remain involved throughout each patient's hospital stay, providing a consistent and highly personalised level of care.</p>
<div class="creds-grid" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;width:100%">
<div class="cred"><span class="cred-a">FRACP</span><span class="cred-f">Fellow, Royal Australasian College of Physicians</span></div>
<div class="cred"><span class="cred-a">FCSANZ</span><span class="cred-f">Fellow, Cardiac Society of Australia &amp; New Zealand</span></div>
<div class="cred"><span class="cred-a">SCAI</span><span class="cred-f">Member, Society for Cardiovascular Angiography &amp; Interventions</span></div>
<div class="cred"><span class="cred-a">AMA</span><span class="cred-f">Member, Australian Medical Association</span></div>
<div class="cred" style="grid-column:1/-1"><span class="cred-a">ACOR</span><span class="cred-f">ACOR-Accredited TAVI Operator</span></div>
</div>
</div>
</div>
</div>
</section>
`;

export default function About() {
  return <RawHtml html={markup} />;
}
