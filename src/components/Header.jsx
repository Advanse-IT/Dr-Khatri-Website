import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ NAV ══════════════════════════════════════════════════════ -->
<nav class="nav" id="nav">
<div class="nav-inner">
<a class="logo" href="/">
<div class="sk-seal" data-color="#c49a38" data-ecg-logo="" data-highlight="#ffd770" data-id="v1">
<svg fill="none" height="46" viewbox="0 0 46 46" width="46" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter height="200%" id="glow-v1" width="200%" x="-50%" y="-50%">
<fegaussianblur result="b1" stddeviation="0.7"></fegaussianblur>
<fegaussianblur in="SourceGraphic" result="b2" stddeviation="0.25"></fegaussianblur>
<femerge><femergenode in="b1"></femergenode><femergenode in="b2"></femergenode><femergenode in="SourceGraphic"></femergenode></femerge>
</filter>
<lineargradient gradientunits="userSpaceOnUse" id="trail-v1" x1="10" x2="10" y1="0" y2="0">
<stop offset="0%" stop-color="#c49a38" stop-opacity="0"></stop>
<stop offset="55%" stop-color="#c49a38" stop-opacity=".55"></stop>
<stop offset="92%" stop-color="#ffd770" stop-opacity=".95"></stop>
<stop offset="100%" stop-color="#ffffff" stop-opacity="1"></stop>
</lineargradient>
<clippath id="clip-v1"><rect height="20" width="30" x="8" y="18"></rect></clippath>
</defs>
<circle cx="23" cy="23" r="21.5" stroke="#c49a38" stroke-width="1.2"></circle>
<circle cx="23" cy="23" r="17.5" stroke="#c49a38" stroke-opacity=".2" stroke-width=".6"></circle>
<path class="ecg-static" d="M10,30 L14,30 L15,29 L16,25 L17,35 L18,27 L19,30 L36,30" fill="none" opacity=".7" stroke="#c49a38" stroke-linecap="round" stroke-width="1.1"></path>
<g class="ecg-live" clip-path="url(#clip-v1)" filter="url(#glow-v1)" style="display:none">
<line stroke="#c49a38" stroke-opacity=".15" stroke-width=".35" x1="10" x2="36" y1="30" y2="30"></line>
<path class="ecg-trace" d="" fill="none" stroke="url(#trail-v1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.15"></path>
<circle class="ecg-dot" cx="10" cy="30" fill="#ffd770" r=".85"></circle>
<circle class="ecg-dot-glow" cx="10" cy="30" fill="#ffd770" fill-opacity=".25" r="1.6"></circle>
</g>
<text fill="#c49a38" font-family="Inter,sans-serif" font-size="12" font-weight="900" letter-spacing="-1" text-anchor="middle" x="23" y="27">SK</text>
</svg>
</div>
<div class="logo-txt">
<span class="logo-name">Dr Shailesh Khatri</span>
<span class="logo-role">Interventional Cardiologist · Gold Coast</span>
</div>
</a>
<nav class="nav-links">
<a class="nl" href="/#about">About</a>
<a class="nl" href="/coronary-angiography">Services</a>
<a class="nl" href="/#recognition">Recognition</a>
<a class="nl" href="/#reviews">Reviews</a>
<a class="nl" href="/#faq">FAQ</a>
<a class="nl" href="/#contact">Contact</a>
<a class="nl nlbook" href="/#contact">Book Appointment</a>
</nav>
<button aria-label="Open menu" class="hbg" id="hbg"><span></span><span></span><span></span></button>
</div>
</nav>
<div class="mob-nav" id="mobNav">
<a href="/#about">About</a>
<a href="/coronary-angiography">Services</a>
<a href="/#recognition">Recognition</a>
<a href="/#reviews">Reviews</a>
<a href="/#faq">FAQ</a>
<a href="/#contact">Contact</a>
<a class="mob-cta" href="/#contact">Book Appointment</a>
</div>
`;

export default function Header() {
  return <RawHtml html={markup} />;
}
