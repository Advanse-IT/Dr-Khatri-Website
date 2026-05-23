import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import SvgIcons from './components/SvgIcons.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CareerTimeline from './components/CareerTimeline.jsx';
import About from './components/About.jsx';
import CoreStrengths from './components/CoreStrengths.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
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

// Full page component (home)
function HomePage() {
  useSiteEffects();

  useEffect(() => {
    // Scroll to top on home page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Dr Shailesh Khatri | Senior Interventional Cardiologist | Gold Coast</title>
        <meta name="description" content="Senior Interventional Cardiologist in Gold Coast with 25+ years experience. Specialising in TAVI and Angioplasty with admitting rights at John Flynn and Pindara Private Hospitals." />
        <meta property="og:title" content="Dr Shailesh Khatri | Senior Interventional Cardiologist | Gold Coast" />
        <meta property="og:description" content="Senior Interventional Cardiologist in Gold Coast with 25+ years experience. Specialising in TAVI and Angioplasty with admitting rights at John Flynn and Pindara Private Hospitals." />
        <meta property="og:url" content="https://drskhatri.com.au/" />
        <meta property="twitter:title" content="Dr Shailesh Khatri | Senior Interventional Cardiologist | Gold Coast" />
        <meta property="twitter:description" content="Senior Interventional Cardiologist in Gold Coast with 25+ years experience. Specialising in TAVI and Angioplasty with admitting rights at John Flynn and Pindara Private Hospitals." />
        <link rel="canonical" href="https://drskhatri.com.au/" />
      </Helmet>
      <SvgIcons />
      <Header />
      <Hero />
      <CareerTimeline />
      <About />
      <CoreStrengths />
      <Stats />
      <Services />
      <PatientJourney />
      <Recognition />
      <PioneerStory />
      <Reviews />
      <Faq />
      <Contact />
      <LegalInformation />
      <Footer />
      <MobileBottomBar />
      <DirectionsPicker />
      <CookieConsent />
    </>
  );
}

// Section-specific pages (render full page but scroll to section)
function SectionPage({ sectionId, title, description, path }) {
  useSiteEffects();

  useEffect(() => {
    // Scroll to the target section after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Scroll to the element with a slight offset for fixed headers
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // If section not found, scroll to top
        window.scrollTo(0, 0);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [sectionId]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://drskhatri.com.au${path}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <link rel="canonical" href={`https://drskhatri.com.au${path}`} />
      </Helmet>
      <SvgIcons />
      <Header />
      <Hero />
      <CareerTimeline />
      <About />
      <CoreStrengths />
      <Stats />
      <Services />
      <PatientJourney />
      <Recognition />
      <PioneerStory />
      <Reviews />
      <Faq />
      <Contact />
      <LegalInformation />
      <Footer />
      <MobileBottomBar />
      <DirectionsPicker />
      <CookieConsent />
    </>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<SectionPage sectionId="about" title="About Dr Shailesh Khatri | Gold Coast Cardiologist" description="Learn about Dr Shailesh Khatri's background, training, and commitment to cardiac care on the Gold Coast." path="/about" />} />
      <Route path="/services" element={<SectionPage sectionId="services" title="Cardiac Services | Dr Shailesh Khatri | Gold Coast" description="Explore Dr Khatri's specialist services including TAVI, coronary angiography, angioplasty, and 24/7 emergency cardiac care." path="/services" />} />
      <Route path="/recognition" element={<SectionPage sectionId="recognition" title="Recognition & Credentials | Dr Shailesh Khatri" description="Dr Shailesh Khatri's professional achievements, awards, and international training credentials." path="/recognition" />} />
      <Route path="/reviews" element={<SectionPage sectionId="reviews" title="Patient Reviews | Dr Shailesh Khatri | Gold Coast Cardiologist" description="Read independent patient reviews of Dr Shailesh Khatri on RateMDs and other trusted medical review platforms." path="/reviews" />} />
      <Route path="/faq" element={<SectionPage sectionId="faq" title="FAQ | Dr Shailesh Khatri | Cardiologist Gold Coast" description="Frequently asked questions about cardiology, procedures, referrals, and Dr Khatri's practice." path="/faq" />} />
      <Route path="/contact" element={<SectionPage sectionId="contact" title="Contact & Appointments | Dr Shailesh Khatri" description="Book an appointment with Dr Shailesh Khatri. Consulting at John Flynn and Pindara Private Hospitals." path="/contact" />} />
      <Route path="/legal" element={<SectionPage sectionId="legal-information" title="Legal Information | Dr Shailesh Khatri" description="Website information, privacy policy, terms of use, and AHPRA compliance details." path="/legal" />} />
      {/* Catch-all for undefined routes */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
