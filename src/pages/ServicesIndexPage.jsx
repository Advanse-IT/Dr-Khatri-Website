import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import MobileBottomBar from '../components/MobileBottomBar.jsx';
import DirectionsPicker from '../components/DirectionsPicker.jsx';
import Contact from '../components/Contact.jsx';
import LegalInformation from '../components/LegalInformation.jsx';
import CookieConsent from '../components/CookieConsent.jsx';
import SvgIcons from '../components/SvgIcons.jsx';
import { servicePages, articles, locationPages } from '../data/siteData.js';

const serviceIcons = ['#ic-ecg', '#ic-vessel', '#ic-valve', '#ic-pci'];

export default function ServicesIndexPage() {
  return <>
    <SvgIcons />
    <Header />
    <main id="main-content" className="route-main services-route">
      <section className="route-hero service-hub-hero">
        <div className="wrap route-grid">
          <div>
            <span className="kicker">Specialist Cardiology Services</span>
            <h1 className="route-title">Interventional Cardiology Services on the Gold Coast</h1>
            <p className="route-lead">Explore Dr Shailesh Khatri’s specialist cardiac services, including coronary angiography, angioplasty and stenting, TAVI, chest pain assessment, preventive cardiology and long-term heart disease management.</p>
            <div className="route-actions">
              <a className="btn btn-gold" href="#services-list">View Services</a>
              <a className="btn btn-ghost dark" href="/#contact">Book Appointment</a>
            </div>
          </div>
          <aside className="authority-card" aria-label="Cardiology service overview">
            <strong>Senior interventional cardiologist</strong>
            <span>25+ years serving Gold Coast patients</span>
            <span>15,000+ cardiac procedures</span>
            <span>400+ TAVI procedures</span>
            <span>Hospital access at John Flynn Private Hospital and Pindara Private Hospital</span>
          </aside>
        </div>
      </section>

      <section className="sec bg2" id="services-list">
        <div className="wrap">
          <div className="svc-head-grid">
            <div>
              <span className="kicker">Services Directory</span>
              <h2 className="sec-title">Choose a <em>cardiology service</em></h2>
            </div>
            <p className="sec-lead wide">Each service page provides a focused explanation, clinical indications, related services, patient FAQs and clear appointment pathways. This keeps the homepage premium while giving Google and AI search engines dedicated, high-intent pages to understand and rank.</p>
          </div>
          <div className="svc-grid service-directory-grid">
            {servicePages.map((service, index) => (
              <a className="svc-c service-directory-card" href={`/${service.slug}`} key={service.slug}>
                <div className="svc-num">{String(index + 1).padStart(2, '0')}</div>
                <svg aria-hidden="true" className="card-icon"><use href={serviceIcons[index % serviceIcons.length]} /></svg>
                <div className="svc-h">{service.h1}</div>
                <p className="svc-p">{service.summary}</p>
                <span className="text-link">Open service page</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg-white">
        <div className="wrap content-shell">
          <article className="content-main">
            <h2>How the services are organised</h2>
            <p>The services are grouped by patient intent: symptoms such as chest pain and palpitations, procedures such as angiography, angioplasty and TAVI, and long-term care such as prevention, hypertension and heart disease management.</p>
            <p>This structure gives patients a clear path while strengthening the site’s on-page SEO through dedicated specialist pages, contextual internal links and medically relevant content clusters.</p>
            <h2>When urgent care is needed</h2>
            <p>For severe chest pain, suspected heart attack symptoms, fainting, sudden breathlessness or any life-threatening emergency, call <strong>000</strong> immediately.</p>
          </article>
          <aside className="content-side">
            <h2>Helpful links</h2>
            <div className="side-links">
              {articles.slice(0, 3).map(article => <a key={article.slug} href={`/patient-education/${article.slug}`}>{article.title}</a>)}
              {locationPages.slice(0, 3).map(location => <a key={location.slug} href={`/${location.slug}`}>{location.h1}</a>)}
            </div>
          </aside>
        </div>
      </section>
      <Contact />
      <LegalInformation />
    </main>
    <Footer />
    <MobileBottomBar />
    <DirectionsPicker />
    <CookieConsent />
  </>;
}
