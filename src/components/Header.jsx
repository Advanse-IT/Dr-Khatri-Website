import RawHtml from './RawHtml.jsx';
import { articles } from '../data/siteData.js';

const serviceLinks = [
  ['Services Overview', '/services'],
  ['Coronary Angiography', '/coronary-angiography'],
  ['Angioplasty & Stenting', '/angioplasty-stenting'],
  ['Chest Pain Assessment', '/chest-pain'],
  ['TAVI Aortic Valve Care', '/tavi-aortic-valve'],
  ['Preventive Cardiology', '/preventive-cardiology'],
  ['Hypertension Care', '/hypertension'],
  ['Heart Disease Management', '/heart-disease-management'],
  ['Arrhythmia & Palpitations', '/arrhythmia-palpitations'],
  ['Cardiac Testing', '/echocardiography-cardiac-testing'],
];

const educationLinks = [
  ['Education Overview', '/patient-education'],
  ...articles.map(article => [article.title, `/patient-education/${article.slug}`]),
];

const serviceMenu = serviceLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join('');
const educationMenu = educationLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join('');

const markup = `
<!-- ═══ NAV ══════════════════════════════════════════════════════ -->
<header class="site-header" role="banner">
<nav class="nav" id="nav" aria-label="Primary navigation">
  <div class="nav-inner">
    <a class="logo" href="/" aria-label="Dr Shailesh Khatri homepage">
      <div class="sk-seal" data-color="#c49a38" data-ecg-logo="" data-highlight="#ffd770" data-id="v1">
        <svg fill="none" height="46" viewBox="0 0 46 46" width="46" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter height="200%" id="glow-v1" width="200%" x="-50%" y="-50%">
              <feGaussianBlur result="b1" stdDeviation="0.7"></feGaussianBlur>
              <feGaussianBlur in="SourceGraphic" result="b2" stdDeviation="0.25"></feGaussianBlur>
              <feMerge><feMergeNode in="b1"></feMergeNode><feMergeNode in="b2"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="trail-v1" x1="10" x2="10" y1="0" y2="0">
              <stop offset="0%" stop-color="#c49a38" stop-opacity="0"></stop>
              <stop offset="55%" stop-color="#c49a38" stop-opacity=".55"></stop>
              <stop offset="92%" stop-color="#ffd770" stop-opacity=".95"></stop>
              <stop offset="100%" stop-color="#ffffff" stop-opacity="1"></stop>
            </linearGradient>
            <clipPath id="clip-v1"><rect height="20" width="30" x="8" y="18"></rect></clipPath>
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

    <div class="nav-links" aria-label="Main menu">
      <a class="nl" href="/#about">About</a>
      <div class="nav-dd">
        <a class="nl nav-dd-trigger" href="/services" aria-haspopup="true" aria-expanded="false">Services <span aria-hidden="true">▾</span></a>
        <div class="nav-dd-menu nav-dd-wide" aria-label="Services submenu">${serviceMenu}</div>
      </div>
      <div class="nav-dd">
        <a class="nl nav-dd-trigger" href="/patient-education" aria-haspopup="true" aria-expanded="false">Patient Education <span aria-hidden="true">▾</span></a>
        <div class="nav-dd-menu nav-dd-education" aria-label="Patient education submenu">${educationMenu}</div>
      </div>
      <a class="nl" href="/#recognition">Recognition</a>
      <a class="nl" href="/#contact">Contact</a>
      <a class="nl nlbook" href="/#contact">Book Appointment</a>
    </div>

    <button aria-label="Open menu" aria-controls="mobNav" aria-expanded="false" class="hbg" id="hbg" type="button"><span></span><span></span><span></span></button>
  </div>
</nav>

<div class="mob-nav" id="mobNav" aria-hidden="true">
  <a href="/#about">About Dr Khatri</a>
  <div class="mob-group">
    <a class="mob-parent" href="/services">Services</a>
    <div class="mob-sub">${serviceMenu}</div>
  </div>
  <div class="mob-group">
    <a class="mob-parent" href="/patient-education">Patient Education</a>
    <div class="mob-sub">${educationMenu}</div>
  </div>
  <a href="/#recognition">Recognition</a>
  <a href="/#contact">Contact</a>
  <a class="mob-cta" href="/#contact">Book Appointment</a>
</div>
</header>
`;

export default function Header() {
  return <RawHtml html={markup} />;
}
