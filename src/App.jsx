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
import LegalNotice from './components/LegalNotice.jsx';
import CookieConsent from './components/CookieConsent.jsx';
import useSiteEffects from './hooks/useSiteEffects.js';

export default function App() {
  useSiteEffects();

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
      <LegalNotice />
      <Footer />
      <MobileBottomBar />
      <DirectionsPicker />
      <CookieConsent />
    </>
  );
}
