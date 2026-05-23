import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import MobileBottomBar from '../components/MobileBottomBar.jsx';
import DirectionsPicker from '../components/DirectionsPicker.jsx';
import Contact from '../components/Contact.jsx';
import LegalInformation from '../components/LegalInformation.jsx';
import CookieConsent from '../components/CookieConsent.jsx';
import SvgIcons from '../components/SvgIcons.jsx';
import { servicePages, articles } from '../data/siteData.js';

function InternalLinks({ current }) {
  return <div className="authority-links" aria-label="Related cardiology services">
    {servicePages.filter(p => p.slug !== current).slice(0, 6).map(p => <a key={p.slug} href={`/${p.slug}`}>{p.h1}</a>)}
    <a href="/patient-education">Patient education articles</a>
  </div>;
}

export default function ServicePage({ page }) {
  return <>
    <SvgIcons /><Header />
    <main id="main-content" className="route-main">
      <section className="route-hero">
        <div className="wrap route-grid">
          <div>
            <span className="kicker">Gold Coast Interventional Cardiology</span>
            <h1 className="route-title">{page.h1}</h1>
            <p className="route-lead">{page.summary}</p>
            <div className="route-actions"><a className="btn btn-gold" href="#contact">Book Appointment</a><a className="btn btn-ghost dark" href="tel:+61755980322">Call {`(07) 5598 0322`}</a></div>
          </div>
          <aside className="authority-card" aria-label="Specialist credentials">
            <strong>Specialist-led cardiac care</strong>
            <span>25+ years serving the Gold Coast</span>
            <span>15,000+ cardiac procedures</span>
            <span>400+ TAVI procedures</span>
            <span>Admitting rights at John Flynn Private Hospital and Pindara Private Hospital</span>
          </aside>
        </div>
      </section>
      <section className="sec bg-white">
        <div className="wrap content-shell">
          <article className="content-main">
            <div className="answer-box" aria-label="Quick answer">
              <strong>Quick clinical summary</strong>
              <p>{page.summary} This page is written for patients and referring doctors seeking specialist cardiology care on the Gold Coast.</p>
            </div>
            <h2>What this service involves</h2>
            <p>{page.intro}</p>
            <h2>Clinical focus</h2>
            <ul className="check-list">{page.clinical.map(item => <li key={item}>{item}</li>)}</ul>
            <h2>Why patients are referred to Dr Khatri</h2>
            <p>{page.why}</p>
            <h2>Related heart conditions and care pathways</h2>
            <p>Depending on symptoms and test results, this service may connect with chest pain assessment, coronary artery disease management, preventive cardiology, cardiac testing or longer-term follow-up after procedures.</p>
            <div className="entity-links" aria-label="Related condition and treatment pathways">
              <a href="/chest-pain">Chest pain assessment</a>
              <a href="/heart-disease-management">Heart disease management</a>
              <a href="/preventive-cardiology">Preventive cardiology</a>
              <a href="/echocardiography-cardiac-testing">Cardiac testing</a>
            </div>
            <div className="medical-note"><strong>Emergency notice:</strong> If symptoms are severe, sudden or life-threatening, call <strong>000</strong> immediately. Website information is general and does not replace individual medical advice.</div>
            <h2>Frequently asked questions</h2>
            <div className="faq-list route-faqs">{page.faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
          </article>
          <aside className="content-side">
            <h2>Related services</h2>
            <InternalLinks current={page.slug} />
            <h2>Helpful articles</h2>
            <div className="side-links">{articles.map(a => <a key={a.slug} href={`/patient-education/${a.slug}`}>{a.title}</a>)}</div>
          </aside>
        </div>
      </section>
      <Contact /><LegalInformation />
    </main>
    <Footer /><MobileBottomBar /><DirectionsPicker /><CookieConsent />
  </>;
}
