import { BrowserRouter, Routes, Route, useEffect } from 'react-router-dom';
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

function PageContent({ scrollTo }) {
  useSiteEffects();
  
  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [scrollTo]);

  return (
    <>
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/about" element={<PageContent scrollTo="about" />} />
        <Route path="/career-timeline" element={<PageContent scrollTo="career-timeline" />} />
        <Route path="/core-strengths" element={<PageContent scrollTo="core-strengths" />} />
        <Route path="/stats" element={<PageContent scrollTo="stats" />} />
        <Route path="/services" element={<PageContent scrollTo="services" />} />
        <Route path="/patient-journey" element={<PageContent scrollTo="patient-journey" />} />
        <Route path="/recognition" element={<PageContent scrollTo="recognition" />} />
        <Route path="/pioneer-story" element={<PageContent scrollTo="pioneer-story" />} />
        <Route path="/reviews" element={<PageContent scrollTo="reviews" />} />
        <Route path="/faq" element={<PageContent scrollTo="faq" />} />
        <Route path="/contact" element={<PageContent scrollTo="contact" />} />
        <Route path="/legal" element={<PageContent scrollTo="legal-information" />} />
        <Route path="*" element={<PageContent />} />
      </Routes>
    </BrowserRouter>
  );
}
