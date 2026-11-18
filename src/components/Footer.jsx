import { useEffect } from 'react';
import RawHtml from './RawHtml.jsx';
import { isRelocated, currentPhone, NEW_LOCATION, OLD_LOCATIONS } from '../config/relocation.js';

const relocated = isRelocated();
const phone = currentPhone();
const [johnFlynn, pindara] = OLD_LOCATIONS;

const locationColumn = relocated
  ? `<strong style="color:rgba(255,255,255,.7);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase">Consulting Rooms</strong><br/>
<strong>${NEW_LOCATION.name}</strong><br/>${NEW_LOCATION.addressLine}<br/><br/>
<strong style="color:rgba(255,255,255,.7);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase">Admitting Hospitals</strong><br/>
<strong>John Flynn Private Hospital</strong> — ${johnFlynn.addressLine}<br/>
<strong>Pindara Private Hospital</strong> — ${pindara.addressLine}<br/><br/>
<a href="tel:${phone.tel}" style="color:var(--gold2);font-weight:600">${phone.display}</a>`
  : `<strong style="color:rgba(255,255,255,.7);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase">Consulting & Admitting Rooms</strong><br/>
<strong>John Flynn Private Hospital</strong><br/>John Flynn Specialist Suites, Level 3, Suites 301–303<br/>42 Inland Drive, Tugun QLD 4224<br/><br/>
<strong>Pindara Private Hospital</strong><br/>Allchurch Avenue, Benowa QLD 4217<br/><br/>
<a href="tel:${phone.tel}" style="color:var(--gold2);font-weight:600">${phone.display}</a>`;

const markup = `
<!-- ═══ FOOTER ══════════════════════════════════════════════════ -->
<footer class="footer">
<div class="wrap">
<div class="footer-grid">
<div class="fg-brand">
<div class="sk-seal" data-color="#c49a38" data-ecg-logo="" data-highlight="#ffd770" data-id="f1">
<svg fill="none" height="42" viewbox="0 0 46 46" width="42">
<defs>
<filter height="200%" id="glow-f1" width="200%" x="-50%" y="-50%"><fegaussianblur result="b1" stddeviation="0.7"></fegaussianblur><fegaussianblur in="SourceGraphic" result="b2" stddeviation="0.25"></fegaussianblur><femerge><femergenode in="b1"></femergenode><femergenode in="b2"></femergenode><femergenode in="SourceGraphic"></femergenode></femerge></filter>
<lineargradient gradientunits="userSpaceOnUse" id="trail-f1" x1="10" x2="10" y1="0" y2="0"><stop offset="0%" stop-color="#c49a38" stop-opacity="0"></stop><stop offset="55%" stop-color="#c49a38" stop-opacity=".55"></stop><stop offset="92%" stop-color="#ffd770" stop-opacity=".95"></stop><stop offset="100%" stop-color="#ffffff" stop-opacity="1"></stop></lineargradient>
<clippath id="clip-f1"><rect height="20" width="30" x="8" y="18"></rect></clippath>
</defs>
<circle cx="23" cy="23" r="21.5" stroke="#c49a38" stroke-width="1.2"></circle>
<path class="ecg-static" d="M10,30 L14,30 L15,29 L16,25 L17,35 L18,27 L19,30 L36,30" fill="none" opacity=".7" stroke="#c49a38" stroke-linecap="round" stroke-width="1.1"></path>
<g class="ecg-live" clip-path="url(#clip-f1)" filter="url(#glow-f1)" style="display:none">
<line stroke="#c49a38" stroke-opacity=".15" stroke-width=".35" x1="10" x2="36" y1="30" y2="30"></line>
<path class="ecg-trace" d="" fill="none" stroke="url(#trail-f1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.15"></path>
<circle class="ecg-dot" cx="10" cy="30" fill="#ffd770" r=".85"></circle>
<circle class="ecg-dot-glow" cx="10" cy="30" fill="#ffd770" fill-opacity=".25" r="1.6"></circle>
</g>
<text fill="#c49a38" font-family="Inter,sans-serif" font-size="12" font-weight="900" letter-spacing="-1" text-anchor="middle" x="23" y="27">SK</text>
</svg>
</div>
<h3>Dr Shailesh Khatri</h3>
<p>Interventional Cardiologist — Coronary Angiography, Angioplasty &amp; Stenting, TAVI<br/>Serving the Gold Coast community for over 25 years</p>
</div>
<div class="fg-col"><h4>Navigation</h4><ul>
<li><a href="/">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/services">Services</a></li>
<li><a href="/recognition">Recognition</a></li>
<li><a href="/reviews">Patient Reviews</a></li>
<li><a href="/leave-a-review">Leave a Review</a></li>
<li><a href="/blog">Blog</a></li>
<li><a href="/faq">FAQ</a></li>
<li><a href="/contact">Contact</a></li>
<li><a href="/legal">Privacy Policy, Terms of Use &amp; Medical Disclaimer</a></li>
</ul></div>
<div class="fg-col"><h4>Location</h4>
<p>${locationColumn}</p>
</div>
<div class="fg-col"><h4>Emergency</h4><p>Dr Khatri has provided a 24-hour cardiology service to the Gold Coast for over two decades. Cardiac emergencies are prioritised at both hospitals at any time.<br/><br/>Life-threatening emergency: call <strong style="color:#fff">000</strong> immediately.</p></div>
</div>
<div class="footer-doctify">
<a class="doctify-badge" href="https://www.doctify.com/au/practice/nuevo-medical" target="_blank" rel="noopener noreferrer" aria-label="Nuevo Medical on Doctify — verified patient reviews">
<img src="/images/verified-by-doctify.png" alt="Verified by Doctify" width="175" height="103" loading="lazy" />
</a>
<div class="doctify-widget" id="doctify-widget-slot"></div>
</div>
<div class="footer-base">
<p>© 2026 Dr Shailesh Khatri — Interventional Cardiologist. All rights reserved. AHPRA compliant.</p>
<p><a href="/legal">Privacy Policy, Terms of Use &amp; Medical Disclaimer</a></p>
</div>
</div>

  <div class="footer-credit-center">
    <a class="site-credit" href="https://ausprostudios.com.au" target="_blank" rel="noopener noreferrer" aria-label="Auspro Studios website">
      <img src="/images/auspro-logo.svg" alt="Auspro Studios" />
      <span>Digital experience crafted by <strong>Auspro Studios</strong></span>
    </a>
  </div>

</footer>
`;

const DOCTIFY_CONTAINER_ID = '0jvu4pnw';
const DOCTIFY_SCRIPT_SRC =
  'https://www.doctify.com/get-script/au?widget_container_id=' + DOCTIFY_CONTAINER_ID +
  '&type=horizontal-widget&tenant=athena-au&language=en&profileType=specialist' +
  '&layoutType=layoutM&slugs=shailesh-khatri&background=transparent' +
  '&linkUrl=https://www.doctify.com/au/specialist/shailesh-khatri';

export default function Footer() {
  // Footer markup is injected as raw HTML, and scripts inside innerHTML never
  // execute, so the Doctify widget is mounted here after render instead.
  useEffect(() => {
    const slot = document.getElementById('doctify-widget-slot');
    if (!slot) return undefined;
    slot.innerHTML = '<div id="' + DOCTIFY_CONTAINER_ID + '"></div>';
    const script = document.createElement('script');
    script.src = DOCTIFY_SCRIPT_SRC;
    script.async = true;
    slot.appendChild(script);

    // Recolour the widget's teal stars (#00e5d0) to the site's gold. The Doctify
    // logo uses different teals, so matching the exact star colour leaves it alone.
    const STAR = 'rgb(0, 229, 208)';
    const GOLD = '#c49a38';
    // Walk the widget DOM, including any open shadow roots.
    const walk = (root, fn) => {
      root.querySelectorAll('*').forEach((el) => {
        fn(el);
        if (el.shadowRoot) walk(el.shadowRoot, fn);
      });
    };
    const paint = (el) => {
      const cs = window.getComputedStyle(el);
      if (cs.fill === STAR) el.style.setProperty('fill', GOLD, 'important');
      if (cs.stroke === STAR) el.style.setProperty('stroke', GOLD, 'important');
      if (cs.color === STAR) el.style.setProperty('color', GOLD, 'important');
      if (cs.backgroundColor === STAR) el.style.setProperty('background-color', GOLD, 'important');
      const f = (el.getAttribute && el.getAttribute('fill') || '').toLowerCase();
      if (f === '#00e5d0') el.setAttribute('fill', GOLD);
    };
    const recolour = () => walk(slot, paint);
    const observer = new MutationObserver(recolour);
    observer.observe(slot, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class', 'fill'] });
    recolour();

    return () => { observer.disconnect(); slot.innerHTML = ''; };
  }, []);

  return <RawHtml html={markup} />;
}
