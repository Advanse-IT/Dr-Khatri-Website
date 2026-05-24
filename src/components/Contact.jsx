import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ CONTACT ════════════════════════════════════════════════ -->
<section class="sec bg2" id="contact" aria-labelledby="contact-title">
<div class="wrap">
<div class="contact-grid">
<div class="cl-left a lft">
<span class="kicker">Contact</span>
<h2 class="sec-title" id="contact-title">Get in <em>Touch</em></h2>
<p class="sec-lead">Dr Khatri consults and holds admitting rights at <strong>John Flynn Private Hospital</strong> (Tugun) and <strong>Pindara Private Hospital</strong> (Benowa), ensuring patients across the Gold Coast have convenient access to expert cardiac care. A GP referral is required for consultations.</p>
<div class="cc-stack" style="margin-top:20px">
<!--        <div class="cc"><svg class="cc-icon" aria-hidden="true"><use href="#ic-pin"/></svg><div><div class="cc-lbl">Consulting Rooms</div><div class="cc-val">John Flynn Specialist Suites<br>Level 3, Suites 301–303<br>42 Inland Drive, Tugun QLD 4224</div></div></div> -->
<div class="cc"><svg aria-hidden="true" class="cc-icon"><use href="#ic-calendar"></use></svg><div><div class="cc-lbl">Appointments</div><div class="cc-val">Phone <a class="cc-lnk" href="tel:+61755980322">(07) 5598 0322</a><br/>GP referral required</div></div></div>
<div class="cc hl"><svg aria-hidden="true" class="cc-icon"><use href="#ic-emergency"></use></svg><div><div class="cc-lbl">24 / 7 Cardiac Emergency</div><div class="cc-val">Round-the-clock emergency cardiology at both hospitals. <br/><br/>Life-threatening emergency: call <strong>000</strong> immediately.</div></div></div>
<div class="cc"><svg aria-hidden="true" class="cc-icon"><use href="#ic-hospital"></use></svg><div><div class="cc-lbl">Admitting Hospitals</div><div class="cc-val"><strong>John Flynn Private Hospital</strong><br/>42 Inland Drive, Tugun QLD 4224<br/><br/><strong>Pindara Private Hospital</strong><br/>Allchurch Avenue, Benowa QLD 4217</div></div></div>
</div>
</div>
<div class="map-col a rgt">
<div class="map-block">
<div class="map-lbl">John Flynn Private Hospital · Tugun</div>
<div class="map-box">
<iframe allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=John+Flynn+Private+Hospital,+42+Inland+Drive,+Tugun+QLD+4224&amp;z=16&amp;output=embed" title="John Flynn Private Hospital"></iframe>
</div>
<a class="map-cta" href="https://maps.google.com/?q=John+Flynn+Private+Hospital+Tugun+QLD+4224" rel="noopener noreferrer ugc" target="_blank"><svg aria-hidden="true" style="width:16px;height:16px;flex-shrink:0"><use href="#ic-pin"></use></svg> Get Directions — John Flynn, Tugun</a>
</div>
<div class="map-block">
<div class="map-lbl">Pindara Private Hospital · Benowa</div>
<div class="map-box">
<iframe allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Pindara+Private+Hospital,+Allchurch+Avenue,+Benowa+QLD+4217&amp;z=16&amp;output=embed" title="Pindara Private Hospital"></iframe>
</div>
<a class="map-cta" href="https://maps.google.com/?q=Pindara+Private+Hospital+Benowa+QLD+4217" rel="noopener noreferrer ugc" target="_blank"><svg aria-hidden="true" style="width:16px;height:16px;flex-shrink:0"><use href="#ic-pin"></use></svg> Get Directions — Pindara, Benowa</a>
</div>
</div>
</div>
<div align="center" class="map-note" style="margin-top:20px">Consulting rooms are within the John Flynn and Pindara precincts. Use the maps above for directions to either admitting hospital.</div>
</div>
</section>
<!-- AHPRA -->
<div class="ahpra-bar">
<div class="ahpra-in">
<p><strong>AHPRA Compliance:</strong> This website complies with Australian Health Practitioner Regulation Agency advertising guidelines. Patient testimonials are not displayed on this site. Reviews are linked to independent third-party platforms only. All information is factual and verifiable under the <em>Health Practitioner Regulation National Law</em>.</p>
</div>
</div>
`;

export default function Contact() {
  return <RawHtml html={markup} />;
}
