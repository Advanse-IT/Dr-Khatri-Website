import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ REVIEWS — AHPRA COMPLIANT ════════════════════════════ -->
<section class="sec bg2" id="reviews" aria-labelledby="reviews-title">
<div class="wrap">
<div style="text-align:center;margin-bottom:6px"><span class="kicker center a up">Patient Reviews</span></div>
<h2 class="sec-title a up d1" id="reviews-title" style="text-align:center;margin-bottom:6px">What Gold Coast Patients <em>Are Saying</em></h2>
<p class="sec-lead a up d2" style="text-align:center;margin:0 auto 28px">Dr Khatri is reviewed on independent third-party platforms. In line with AHPRA guidelines, we link to these platforms rather than displaying testimonials directly.</p>
<div class="reviews-notice a up d3">
<svg aria-hidden="true" class="ahpra-icon"><use href="#ic-shield"></use></svg>
<p class="rn-p"><strong>AHPRA Compliance:</strong> In accordance with Australian Health Practitioner Regulation Agency advertising guidelines, patient testimonials are not reproduced on this website. Patient reviews are independently hosted on the third-party platforms below — follow the links to read unmoderated patient feedback directly.</p>
</div>
<div class="rp-grid">
<!-- PRIMARY: RateMDs -->
<a class="rp-card primary a up d1" href="https://www.ratemds.com/doctor-ratings/114846/Dr-Shailesh-Khatri-Gold+Coast-QLD.html/" rel="noopener noreferrer ugc" target="_blank">
<svg aria-hidden="true" class="rp-ico" style="color:var(--gold)"><use href="#ic-star"></use></svg>
<div class="rp-name">RateMDs</div>
<div class="rp-tagline">Australia's leading independent doctor review platform</div>
<span class="rp-stars">★★★★★</span>
<span class="rp-score">4.7 / 5 — Verified Patient Reviews</span>
<span class="rp-count">Read independent, unmoderated patient reviews of Dr Khatri — Gold Coast Interventional Cardiologist — on RateMDs — Australia's most trusted doctor rating platform.</span>
<span class="rp-cta"><span class="rp-cta-text">Read Reviews on RateMDs</span><span class="rp-cta-arrow"> →</span></span>
</a>
<!-- SECONDARY: Google (being set up) -->
<div class="rp-card secondary a up d2">
<svg aria-hidden="true" class="rp-ico" style="color:var(--text3)"><use href="#ic-globe"></use></svg>
<div class="rp-name">Google Reviews</div>
<div class="rp-tagline">Coming soon</div>
<span class="rp-count" style="margin-bottom:0;font-size:.8rem;color:var(--text2);line-height:1.65">Dr Khatri's Google Business profile is currently being set up. Patient reviews will be available here shortly.</span>
</div>
</div>
<div class="reviews-bar a up">
<div class="rb-left">
<strong>Independently reviewed on RateMDs</strong>
<span>Read genuine, unmoderated patient feedback at ratemds.com — in compliance with AHPRA advertising guidelines</span>
</div>
<a class="btn btn-navy" href="https://www.ratemds.com/doctor-ratings/114846/Dr-Shailesh-Khatri-Gold+Coast-QLD.html/" rel="noopener noreferrer ugc" target="_blank">Read Patient Reviews →</a>
</div>
</div>
</section>
`;

export default function Reviews() {
  return <RawHtml html={markup} />;
}
