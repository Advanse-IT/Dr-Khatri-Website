import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import MobileBottomBar from '../components/MobileBottomBar.jsx';
import LegalInformation from '../components/LegalInformation.jsx';
import CookieConsent from '../components/CookieConsent.jsx';
import SvgIcons from '../components/SvgIcons.jsx';
import Contact from '../components/Contact.jsx';
import { articles, servicePages } from '../data/siteData.js';

export default function EducationPage({ article }) {
  const isArticle = Boolean(article);
  return <>
    <SvgIcons /><Header />
    <main id="main-content" className="route-main">
      <section className="route-hero"><div className="wrap"><span className="kicker">Patient Education</span><h1 className="route-title">{isArticle ? article.h1 : 'Heart Health Patient Education'}</h1><p className="route-lead">{isArticle ? article.description : 'Professional, patient-friendly guides about symptoms, cardiac testing, procedures and when to seek urgent help.'}</p></div></section>
      <section className="sec bg-white"><div className="wrap content-shell"><article className="content-main">
        {isArticle ? <><div className="answer-box" aria-label="Article summary"><strong>Key takeaway</strong><p>{article.description} This guide is general information and should be interpreted with your GP or cardiologist.</p></div>{article.body.map(p => <p key={p}>{p}</p>)}<h2>Related cardiology services</h2><div className="entity-links" aria-label="Related cardiology services">{servicePages.slice(0,5).map(p => <a key={p.slug} href={`/${p.slug}`}>{p.h1}</a>)}</div><div className="medical-note"><strong>Medical disclaimer:</strong> This article is general information only and is not a substitute for individual medical advice. Call 000 for emergencies.</div><h2>FAQs</h2><div className="faq-list route-faqs">{article.faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></> : <div className="article-grid">{articles.map(a => <a className="article-card" key={a.slug} href={`/patient-education/${a.slug}`}><span>Patient guide</span><h2>{a.title}</h2><p>{a.description}</p></a>)}</div>}
      </article><aside className="content-side"><h2>Core cardiac services</h2><div className="side-links">{servicePages.slice(0,8).map(p => <a key={p.slug} href={`/${p.slug}`}>{p.h1}</a>)}</div></aside></div></section>
      <Contact /><LegalInformation />
    </main><Footer /><MobileBottomBar /><CookieConsent />
  </>;
}
