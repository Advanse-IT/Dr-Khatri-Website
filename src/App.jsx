import { useEffect, useMemo, useState } from 'react';
import SvgIcons from './components/SvgIcons.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CareerTimeline from './components/CareerTimeline.jsx';
import About from './components/About.jsx';
import CoreStrengths from './components/CoreStrengths.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
import MedicalAuthority from './components/MedicalAuthority.jsx';
import Conditions from './components/Conditions.jsx';
import Education from './components/Education.jsx';
import PatientJourney from './components/PatientJourney.jsx';
import Recognition from './components/Recognition.jsx';
import PioneerStory from './components/PioneerStory.jsx';
import Reviews from './components/Reviews.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import MobileBottomBar from './components/MobileBottomBar.jsx';
import DirectionsPicker from './components/DirectionsPicker.jsx';
import LegalInformation from './components/LegalInformation.jsx';
import CookieConsent from './components/CookieConsent.jsx';
import useSiteEffects from './hooks/useSiteEffects.js';
import ServicePage from './pages/ServicePage.jsx';
import LocationPage from './pages/LocationPage.jsx';
import EducationPage from './pages/EducationPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { servicePages, articles } from './data/siteData.js';
import { baseSchema, breadcrumbSchema, faqSchema, findRoute, injectSchema, medicalWebPageSchema, articleSchema, setMeta } from './utils/seo.js';

function HomePage() {
  return <>
    <SvgIcons />
    <Header />
    <main id="main-content">
      <Hero />
      <CareerTimeline />
      <About />
      <CoreStrengths />
      <Stats />
      <Services />
      <Conditions />
      <MedicalAuthority />
      <Education />
      <PatientJourney />
      <Recognition />
      <PioneerStory />
      <Reviews />
      <Faq />
      <Contact />
      <LegalInformation />
    </main>
    <Footer />
    <MobileBottomBar />
    <DirectionsPicker />
    <CookieConsent />
  </>;
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  const route = useMemo(() => findRoute(path), [path]);
  useSiteEffects();

  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href.includes('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) return;
      e.preventDefault();
      window.history.pushState({}, '', href);
      setPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const onPop = () => setPath(window.location.pathname);
    document.addEventListener('click', onClick);
    window.addEventListener('popstate', onPop);
    return () => { document.removeEventListener('click', onClick); window.removeEventListener('popstate', onPop); };
  }, []);

  useEffect(() => {
    if (route.type === 'home') {
      setMeta({ title:'Dr Shailesh Khatri | Senior Interventional Cardiologist Gold Coast', description:'Senior Interventional Cardiologist on the Gold Coast specialising in coronary angiography, angioplasty, stenting, TAVI and 24-hour emergency cardiac care.', path:'/' });
      injectSchema([baseSchema(), faqSchema([['Do I need a referral to see Dr Khatri?','Yes. A GP referral is required for routine consultations.'],['Where does Dr Khatri consult?','Dr Khatri consults and has admitting rights through John Flynn Private Hospital in Tugun and Pindara Private Hospital in Benowa.'],['What does an interventional cardiologist do?','An interventional cardiologist diagnoses and treats heart artery and valve conditions using catheter-based procedures such as angiography, angioplasty, stenting and TAVI.']]), breadcrumbSchema([{name:'Home',path:'/'}])]);
    }
    if (route.type === 'service') {
      const p = route.data; const url = `/${p.slug}`;
      setMeta({ title:p.title, description:p.summary, path:url });
      injectSchema([baseSchema(), medicalWebPageSchema({ title:p.title, description:p.summary, path:url }), faqSchema(p.faqs), breadcrumbSchema([{name:'Home',path:'/'},{name:'Services',path:'/coronary-angiography'},{name:p.h1,path:url}])]);
    }
    if (route.type === 'location') {
      const p = route.data; const url = `/${p.slug}`;
      setMeta({ title:p.title, description:p.summary, path:url });
      injectSchema([baseSchema(), medicalWebPageSchema({ title:p.title, description:p.summary, path:url }), breadcrumbSchema([{name:'Home',path:'/'},{name:p.h1,path:url}])]);
    }
    if (route.type === 'education') {
      setMeta({ title:'Heart Health Patient Education Gold Coast', description:'Patient education articles about cardiology symptoms, procedures, angiograms, angioplasty, stents and when to see a cardiologist.', path:'/patient-education' });
      injectSchema([baseSchema(), breadcrumbSchema([{name:'Home',path:'/'},{name:'Patient Education',path:'/patient-education'}])]);
    }
    if (route.type === 'article') {
      const a = route.data; const url = `/patient-education/${a.slug}`;
      setMeta({ title:a.title, description:a.description, path:url, type:'article' });
      injectSchema([baseSchema(), articleSchema(a, url), faqSchema(a.faqs), breadcrumbSchema([{name:'Home',path:'/'},{name:'Patient Education',path:'/patient-education'},{name:a.title,path:url}])]);
    }
  }, [route]);

  if (route.type === 'service') return <ServicePage page={route.data} />;
  if (route.type === 'location') return <LocationPage page={route.data} />;
  if (route.type === 'education') return <EducationPage />;
  if (route.type === 'article') return <EducationPage article={route.data} />;
  if (route.type === 'notFound') return <NotFoundPage />;
  return <HomePage />;
}
