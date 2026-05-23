import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ RECOGNITION ════════════════════════════════════════════ -->
<section class="sec bg2" id="recognition" aria-labelledby="recognition-title">
<div class="wrap">
<div class="rec-grid">
<div class="rec-stack a lft">
<span class="kicker">Recognition</span>
<div class="rec-c"><svg aria-hidden="true" class="rec-icon"><use href="#ic-trophy"></use></svg><div><div class="rc-h">Best Cardiologist — Gold Coast</div><p class="rc-p">Recognised as one of Gold Coast's finest cardiologists, reflecting 25 years of consistently excellent clinical outcomes, patient care and medical leadership.</p><span class="rc-tag">2024</span></div></div>
<div class="rec-c"><svg aria-hidden="true" class="rec-icon"><use href="#ic-trophy"></use></svg><div><div class="rc-h">Best Cardiologist — Gold Coast</div><p class="rc-p">A second consecutive award confirming Dr Khatri's standing as one of the region's most accomplished and trusted interventional cardiologists.</p><span class="rc-tag">2025</span></div></div>
<div class="rec-c"><svg aria-hidden="true" class="rec-icon"><use href="#ic-cap"></use></svg><div><div class="rc-h">Adjunct Professor — Bond University</div><p class="rc-p">Appointed to contribute to post-graduate medical education on the Gold Coast, mentoring and training the next generation of cardiologists.</p></div></div>
<div class="rec-c"><svg aria-hidden="true" class="rec-icon"><use href="#ic-shield"></use></svg><div><div class="rc-h">Pioneer — Tweed Hospital Primary PCI</div><p class="rc-p">Established the emergency cardiac service at Tweed Hospital over 20 years ago, extending life-saving care to uninsured patients from the NSW Northern Rivers region.</p></div></div>
<div class="fellowship"><div class="fl-pre">International Fellowship · Vancouver, Canada · 2001</div><div class="fl-h">St. Paul's Hospital — Under Professor John Webb</div><p class="fl-p">Trained under one of the world's most celebrated interventional cardiologists, completing over 1,200 procedures. This international pedigree is the foundation of a world-class Gold Coast practice.</p></div>
</div>
<div class="rec-info a rgt">
<div class="rec-info-text">
<h2 class="sec-title" id="recognition-title">Recognised by Peers &amp; <em>The Community</em></h2>
<p class="sec-lead wide" style="margin-bottom:13px">Combining extensive clinical expertise with a compassionate and personalised approach to care, Dr Khatri remains committed to supporting the heart health and wellbeing of patients across the Gold Coast community.</p>
<p class="sec-lead wide" style="margin-bottom:13px">He holds admitting rights at both <strong>John Flynn Private Hospital</strong> (Tugun) and <strong>Pindara Private Hospital</strong> (Benowa) — ensuring patients across the Gold Coast have timely access to expert cardiac care at the hospital most convenient to them, at any time of day or night.</p>
<p class="sec-lead wide">Dr Khatri's 24-hour cardiology service — including over 1,500 emergency Primary PCI procedures for patients experiencing acute heart attacks — reflects over two decades of unwavering commitment to the Gold Coast community.</p>
</div>
<div class="rec-photo">
<img alt="Dr Khatri mentoring a medical student — reflecting his commitment to Gold Coast postgraduate medical education" loading="lazy" width="480" height="360" src="/images/photo1.jpeg"/>
</div>
</div>
</div>
</div>
</section>
`;

export default function Recognition() {
  return <RawHtml html={markup} />;
}
