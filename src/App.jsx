import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect, Suspense, lazy } from 'react';
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
import LeaveReview from './components/LeaveReview.jsx';
import ReviewQrKiosk from './components/ReviewQrKiosk.jsx';
import BlogList from './components/blog/BlogList.jsx';
import BlogPost from './components/blog/BlogPost.jsx';
import AdminLogin from './components/blog/AdminLogin.jsx';
import AdminDashboard from './components/blog/AdminDashboard.jsx';
// Lazy-loaded: pulls in the Tiptap rich text editor, only needed on this
// one admin route — keeps it out of the public site's main bundle.
const PostEditor = lazy(() => import('./components/blog/PostEditor.jsx'));
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
        <title>Trusted Cardiologist Gold Coast | Dr Shailesh Khatri</title>
        <meta name="description" content="Looking for a trusted Cardiologist on the Gold Coast? Dr Shailesh Khatri provides expert heart care, angioplasty, stenting, TAVI, and cardiac consultations" />
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

// Standalone review-collection page — shared via QR code / direct link
function LeaveReviewPage() {
  useSiteEffects();

  useEffect(() => {
    window.scrollTo(0, 0);
    // This page has no dark hero behind the nav, so the nav must stay in its
    // solid/scrolled ("up") state at all times -- not just on mount. The
    // site-wide scroll handler in useSiteEffects toggles 'up' off whenever
    // scrollY <= 56, which would otherwise make the nav go transparent again
    // every time this page is scrolled back to the top. Attaching this
    // listener AFTER useSiteEffects' means it runs second on every scroll
    // event, so it always has the final say and keeps 'up' forced on.
    const nav = document.getElementById('nav');
    const forceNavSolid = () => nav?.classList.add('up');
    forceNavSolid();
    window.addEventListener('scroll', forceNavSolid, { passive: true });
    return () => window.removeEventListener('scroll', forceNavSolid);
  }, []);

  return (
    <>
      <Helmet>
        <title>Leave a Review | Dr Shailesh Khatri | Gold Coast Cardiologist</title>
        <meta name="description" content="Share feedback on your visit with Dr Shailesh Khatri and leave a review on Google or RateMDs." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://drskhatri.com.au/leave-a-review" />
      </Helmet>
      <SvgIcons />
      <Header />
      <LeaveReview />
      <Footer />
      <MobileBottomBar />
      <CookieConsent />
    </>
  );
}

// Unlisted, full-screen kiosk display -- point a clinic iPad/reception
// screen at /review-qr. No header, footer, or nav chrome on purpose: it's
// meant to sit on a stand and just show the code.
function ReviewQrKioskPage() {
  return (
    <>
      <Helmet>
        <title>Leave a Review | Dr Shailesh Khatri</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <ReviewQrKiosk />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<SectionPage sectionId="about" title="About Dr. Shailesh Khatri | Top Rated Cardiologist" description="Looking for a trusted Cardiologist on the Gold Coast? Dr. Shailesh Khatri provides expert heart care, angioplasty, stenting, TAVI, and cardiac consultations" path="/about" />} />
      <Route path="/services" element={<SectionPage sectionId="services" title="Angioplasty & Stenting Specialist | Dr. Shailesh Khatri" description="Looking for an angioplasty doctor or TAVI specialist near you? Dr. Shailesh Khatri offers expert care for chest pain, heart attacks, stenting and angiograms." path="/services" />} />
      <Route path="/recognition" element={<SectionPage sectionId="recognition" title="Best Cardiologist at Gold Coast | Dr. Shailesh Khatri" description="Recognized for excellence in heart care, Dr. Shailesh Khatri is a trusted heart specialist and private cardiologist serving Gold Coast patients." path="/recognition" />} />
      <Route path="/reviews" element={<SectionPage sectionId="reviews" title="Patient Reviews | Dr. Shailesh Khatri | Gold Coast Cardiologist" description="Read independent patient reviews of Dr. Shailesh Khatri on RateMDs and other trusted medical review platforms." path="/reviews" />} />
      <Route path="/faq" element={<SectionPage sectionId="faq" title="FAQ | Dr. Shailesh Khatri | Cardiologist Gold Coast" description="Frequently asked questions about cardiology, procedures, referrals, and Dr. Khatri's practice." path="/faq" />} />
      <Route path="/contact" element={<SectionPage sectionId="contact" title="Book an Urgent Heart Specialist Appointment" description="Book an urgent appointment with Dr. Shailesh Khatri, an experienced cardiologist providing prompt cardiac consultations on the Gold Coast." path="/contact" />} />
      <Route path="/legal" element={<SectionPage sectionId="legal-information" title="Legal Information | Dr. Shailesh Khatri" description="Website information, privacy policy, terms of use, and AHPRA compliance details." path="/legal" />} />
      <Route path="/leave-a-review" element={<LeaveReviewPage />} />
      <Route path="/review-qr" element={<ReviewQrKioskPage />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/posts/new" element={<Suspense fallback={null}><PostEditor /></Suspense>} />
      <Route path="/admin/posts/:id/edit" element={<Suspense fallback={null}><PostEditor /></Suspense>} />
      {/* Catch-all for undefined routes - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
