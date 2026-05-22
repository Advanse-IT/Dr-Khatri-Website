import RawHtml from './RawHtml.jsx';

const markup = `
<footer class="footer">
  <div class="wrap footer-grid">
    <div>
      <a class="brand footer-brand" href="#top" aria-label="Dr Shailesh Khatri home">
        <svg class="brand-mark" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="23" cy="23" r="21.5" stroke="#C49A38" stroke-width="1.4"/>
          <circle cx="23" cy="23" r="17.5" stroke="#C49A38" stroke-opacity=".4" stroke-width=".7"/>
          <path d="M10 30H14L15 29L16 25L17 35L18 27L19 30H36" stroke="#C49A38" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="23" y="27" text-anchor="middle" font-family="Georgia, serif" font-size="12" font-weight="700" fill="#C49A38">SK</text>
        </svg>
        <span>
          <strong>Dr Shailesh Khatri</strong>
          <small>General &amp; Laparoscopic Surgeon</small>
        </span>
      </a>
      <p class="footer-copy">Specialist surgical care delivered with clarity, compassion and precision.</p>
    </div>

    <nav aria-label="Footer navigation">
      <h3>Explore</h3>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Procedures</a></li>
        <li><a href="#locations">Locations</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#legal-information">Privacy Policy, Terms of Use &amp; Medical Disclaimer</a></li>
      </ul>
    </nav>

    <div>
      <h3>Contact</h3>
      <p>For appointments and enquiries, please contact the consulting rooms directly.</p>
      <a class="footer-cta" href="#contact">Contact the Practice</a>
    </div>
  </div>

  <div class="wrap footer-bottom">
    <p>© 2026 Dr Shailesh Khatri. All rights reserved.</p>

    <a class="site-credit" href="https://ausprostudios.com.au" target="_blank" rel="noopener noreferrer" aria-label="Auspro Studios website">
      <img src="/images/auspro-logo.svg" alt="Auspro Studios" />
      <span>Digital experience crafted by <strong>Auspro Studios</strong></span>
    </a>
  </div>
</footer>
`;

export default function Footer() {
  return <RawHtml html={markup} />;
}
