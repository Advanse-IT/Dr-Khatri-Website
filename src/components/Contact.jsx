import RawHtml from './RawHtml.jsx';
import { isRelocated, currentPhone, NEW_LOCATION, OLD_LOCATIONS, RELOCATION_DATE_DISPLAY } from '../config/relocation.js';

const relocated = isRelocated();
const phone = currentPhone();
const [johnFlynn, pindara] = OLD_LOCATIONS;

// The two hospitals (admitting rights / inpatient care / procedures) never
// change — only the consulting rooms location and phone number do.
const introText = relocated
  ? `Dr Khatri consults from <strong>${NEW_LOCATION.name}</strong>. For inpatient care and procedures — angioplasty, stenting, and TAVI — he operates at and holds admitting rights at <strong>John Flynn Private Hospital</strong> (Tugun) and <strong>Pindara Private Hospital</strong> (Benowa). A GP referral is required for consultations.`
  : `Dr Khatri consults and holds admitting rights at <strong>John Flynn Private Hospital</strong> (Tugun) and <strong>Pindara Private Hospital</strong> (Benowa), ensuring patients across the Gold Coast have convenient access to expert cardiac care. A GP referral is required for consultations.`;

const consultingRoomsCard = relocated
  ? `<div class="cc"><svg aria-hidden="true" class="cc-icon"><use href="#ic-pin"/></svg><div><div class="cc-lbl">Consulting Rooms</div><div class="cc-val"><strong>${NEW_LOCATION.name}</strong><br/>${NEW_LOCATION.addressLine}</div></div></div>`
  : '';

const relocationNotice = !relocated
  ? `<div class="cc"><svg aria-hidden="true" class="cc-icon"><use href="#ic-pin"/></svg><div><div class="cc-lbl">Consulting Rooms Are Moving</div><div class="cc-val">From <strong>${RELOCATION_DATE_DISPLAY}</strong>, consultations move to <strong>${NEW_LOCATION.name}</strong>, ${NEW_LOCATION.addressLine}. <a class="cc-lnk" href="/new-location">Learn more →</a></div></div></div>`
  : '';

const bundallMapBlock = relocated
  ? `<div class="map-block">
<div class="map-lbl">${NEW_LOCATION.name} · Consulting Rooms</div>
<div class="map-box">
<iframe allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent(NEW_LOCATION.mapEmbedQuery)}&z=16&output=embed" title="${NEW_LOCATION.name}"></iframe>
</div>
<a class="map-cta" href="https://maps.google.com/?q=${encodeURIComponent(NEW_LOCATION.mapDirectionsQuery)}" rel="noopener" target="_blank"><svg aria-hidden="true" style="width:16px;height:16px;flex-shrink:0"><use href="#ic-pin"></use></svg> Get Directions — ${NEW_LOCATION.name}</a>
</div>`
  : '';

const bottomNote = relocated
  ? `Consulting Rooms are at ${NEW_LOCATION.name}. John Flynn and Pindara are Dr Khatri's admitting hospitals for inpatient care and procedures — use the maps above for directions to any of the three.`
  : `Consulting rooms are within the John Flynn and Pindara precincts. Use the maps above for directions to either admitting hospital.`;

const markup = `
<!-- ═══ CONTACT ════════════════════════════════════════════════ -->
<section class="sec bg2" id="contact">
<div class="wrap">
<div class="contact-grid">
<div class="cl-left a lft">
<span class="kicker">Contact</span>
<h2 class="sec-title">Get in <em>Touch</em></h2>
<p class="sec-lead">${introText}</p>
<div class="cc-stack" style="margin-top:20px">
${consultingRoomsCard}
${relocationNotice}
<div class="cc"><svg aria-hidden="true" class="cc-icon"><use href="#ic-calendar"></use></svg><div><div class="cc-lbl">Appointments</div><div class="cc-val">Phone <a class="cc-lnk" href="tel:${phone.tel}">${phone.display}</a><br/>GP referral required</div></div></div>
<div class="cc hl"><svg aria-hidden="true" class="cc-icon"><use href="#ic-emergency"></use></svg><div><div class="cc-lbl">24 / 7 Cardiac Emergency</div><div class="cc-val">Round-the-clock emergency cardiology at both hospitals. <br/><br/>Life-threatening emergency: call <strong>000</strong> immediately.</div></div></div>
<div class="cc"><svg aria-hidden="true" class="cc-icon"><use href="#ic-hospital"></use></svg><div><div class="cc-lbl">Hospitals — Inpatient Care &amp; Procedures</div><div class="cc-val">Dr Khatri operates and treats inpatients at:<br/><br/><strong>John Flynn Private Hospital</strong><br/>${johnFlynn.addressLine}<br/><br/><strong>Pindara Private Hospital</strong><br/>${pindara.addressLine}</div></div></div>
</div>
</div>
<div class="map-col a rgt">
${bundallMapBlock}
<div class="map-block">
<div class="map-lbl">John Flynn Private Hospital · Tugun</div>
<div class="map-box">
<iframe allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent(johnFlynn.mapEmbedQuery)}&z=16&output=embed" title="John Flynn Private Hospital"></iframe>
</div>
<a class="map-cta" href="https://maps.google.com/?q=${encodeURIComponent(johnFlynn.mapDirectionsQuery)}" rel="noopener" target="_blank"><svg aria-hidden="true" style="width:16px;height:16px;flex-shrink:0"><use href="#ic-pin"></use></svg> Get Directions — John Flynn, Tugun</a>
</div>
<div class="map-block">
<div class="map-lbl">Pindara Private Hospital · Benowa</div>
<div class="map-box">
<iframe allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent(pindara.mapEmbedQuery)}&z=16&output=embed" title="Pindara Private Hospital"></iframe>
</div>
<a class="map-cta" href="https://maps.google.com/?q=${encodeURIComponent(pindara.mapDirectionsQuery)}" rel="noopener" target="_blank"><svg aria-hidden="true" style="width:16px;height:16px;flex-shrink:0"><use href="#ic-pin"></use></svg> Get Directions — Pindara, Benowa</a>
</div>
</div>
</div>
<div align="center" class="map-note" style="margin-top:20px">${bottomNote}</div>
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
