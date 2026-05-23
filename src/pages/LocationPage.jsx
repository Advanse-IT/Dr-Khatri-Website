import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import MobileBottomBar from '../components/MobileBottomBar.jsx';
import Contact from '../components/Contact.jsx';
import LegalInformation from '../components/LegalInformation.jsx';
import CookieConsent from '../components/CookieConsent.jsx';
import SvgIcons from '../components/SvgIcons.jsx';
import { servicePages, locations } from '../data/siteData.js';

export default function LocationPage({ page }) {
  return <>
    <SvgIcons /><Header />
    <main id="main-content" className="route-main">
      <section className="route-hero">
        <div className="wrap route-grid">
          <div><span className="kicker">Local Cardiology Care</span><h1 className="route-title">{page.h1}</h1><p className="route-lead">{page.summary}</p><div className="route-actions"><a className="btn btn-gold" href="#contact">Book Appointment</a><a className="btn btn-ghost dark" href="tel:+61755980322">Call (07) 5598 0322</a></div></div>
          <aside className="authority-card"><strong>Hospital access</strong>{locations.map(l => <span key={l.name}>{l.name}, {l.area}</span>)}</aside>
        </div>
      </section>
      <section className="sec bg-white"><div className="wrap content-shell"><article className="content-main"><h2>Cardiology care for {page.area}</h2><p>Dr Shailesh Khatri provides specialist interventional cardiology care for patients across {page.area} and the wider Gold Coast. Patients are supported through assessment, investigation, treatment planning, procedural care where required, rehabilitation and long-term risk reduction.</p><h2>Services commonly accessed by {page.area} patients</h2><ul className="check-list">{servicePages.slice(0,8).map(s => <li key={s.slug}><a href={`/${s.slug}`}>{s.h1}</a></li>)}</ul><h2>When urgent care is required</h2><p>For severe chest pain, suspected heart attack symptoms, fainting, sudden breathlessness or any life-threatening emergency, call <strong>000</strong> immediately.</p></article><aside className="content-side"><h2>Gold Coast service areas</h2><div className="side-links"><a href="/cardiologist-gold-coast">Gold Coast</a><a href="/cardiologist-tugun">Tugun</a><a href="/cardiologist-benowa">Benowa</a><a href="/patient-education">Patient education</a></div></aside></div></section>
      <Contact /><LegalInformation />
    </main><Footer /><MobileBottomBar /><CookieConsent />
  </>;
}
