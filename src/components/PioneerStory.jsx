import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ PIONEER STORY ══════════════════════════════════════════ -->
<section class="sec bg-white" id="pioneer">
<div class="wrap">
<div class="pio-grid">
<div class="pio-text a lft">
<span class="kicker">A Pioneer's Legacy</span>
<h2 class="sec-title">The Service That Changed <em>Northern Rivers</em> Cardiac Care</h2>
<p class="sec-lead">Over 20 years ago, Dr Khatri identified a critical gap: patients experiencing heart attacks in the <strong>Northern Rivers region of NSW</strong> — many uninsured — had no access to emergency angioplasty close to home.</p>
<p class="sec-lead" style="margin-top:12px">Without mandate or financial incentive, he established the <strong>Primary PCI service at Tweed Hospital</strong> entirely for uninsured patients from across the NSW border. That service operates to this day, saving lives that would otherwise be lost.</p>
<p class="sec-lead" style="margin-top:12px">This is the measure of Dr Khatri's commitment — not just to his private patients, but to anyone in the community whose heart needs urgent care, regardless of circumstance.</p>
<div class="pio-pull">
<span class="pio-mark">"</span>
<p class="pio-q">Access to life-saving cardiac care should not depend on which side of a border you live on, or whether you hold private health insurance.</p>
</div>
</div>
<div class="pio-vis a rgt">
<picture><source type="image/avif" srcset="/images/photo2-480.avif 480w, /images/photo2-768.avif 768w" sizes="(max-width: 760px) 92vw, 520px"><source type="image/webp" srcset="/images/photo2-480.webp 480w, /images/photo2-768.webp 768w" sizes="(max-width: 760px) 92vw, 520px"><img alt="Dr Khatri in a cardiac catheterisation laboratory" class="pio-img" width="768" height="1024" loading="lazy" decoding="async" src="/images/photo2-480.webp"/></picture>
<div class="pio-badge"><span class="pb-n">20+</span><span class="pb-l">Years of Service<br/>Tweed Hospital</span></div>
</div>
</div>
</div>
</section>
`;

export default function PioneerStory() {
  return <RawHtml html={markup} />;
}
