import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import MobileBottomBar from '../components/MobileBottomBar.jsx';
import { isRelocated, currentPhone, RELOCATION_DATE_DISPLAY, NEW_LOCATION, OLD_LOCATIONS, OLD_PHONE } from '../config/relocation.js';

export default function NewLocation() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // No dark hero behind the nav on this page — keep it solid at all times.
    const nav = document.getElementById('nav');
    const forceNavSolid = () => nav?.classList.add('up');
    forceNavSolid();
    window.addEventListener('scroll', forceNavSolid, { passive: true });
    return () => window.removeEventListener('scroll', forceNavSolid);
  }, []);

  const relocated = isRelocated();
  const phone = currentPhone();
  const [johnFlynn, pindara] = OLD_LOCATIONS;

  return (
    <>
      <Helmet>
        <title>{relocated ? 'Our New Consulting Rooms' : "We're Moving"} | Dr Shailesh Khatri | Gold Coast Cardiologist</title>
        <meta name="description" content={`Dr Shailesh Khatri's consulting rooms are relocating to ${NEW_LOCATION.addressLine} from ${RELOCATION_DATE_DISPLAY}. Hospital admitting rights at John Flynn and Pindara are unaffected.`} />
        <link rel="canonical" href="https://drskhatri.com.au/new-location" />
      </Helmet>
      <Header />
      <main style={{ background: 'var(--bg)' }}>
        <div className="wrap" style={{ maxWidth: 760, padding: '150px 28px 90px' }}>
          <div className="kicker">{relocated ? 'Our New Consulting Rooms' : "We're Moving"}</div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,2.7rem)', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.12, letterSpacing: '-.03em', marginBottom: 20 }}>
            {relocated ? 'A New Home for Consultations' : 'New Consulting Rooms Coming Soon'}
          </h1>

          <p className="sec-lead" style={{ marginBottom: 20 }}>
            {relocated ? (
              <>Dr Khatri's <strong>consulting rooms</strong> are now located at <strong>{NEW_LOCATION.name}</strong>, {NEW_LOCATION.addressLine}.</>
            ) : (
              <>From <strong>{RELOCATION_DATE_DISPLAY}</strong>, Dr Khatri's <strong>consulting rooms</strong> will move to <strong>{NEW_LOCATION.name}</strong>, a newly built medical centre at {NEW_LOCATION.addressLine}.</>
            )}
          </p>

          {/* Important clarification, called out prominently per the practice's request */}
          <div style={{ background: '#fff', border: '2px solid var(--gold)', borderRadius: 8, padding: '18px 22px', marginBottom: 28 }}>
            <p style={{ color: 'var(--navy)', fontWeight: 700, marginBottom: 6, fontSize: '.95rem' }}>
              This is a consulting rooms move only.
            </p>
            <p style={{ color: 'var(--text2)', fontSize: '.92rem', lineHeight: 1.6 }}>
              For inpatient care and procedures — including angioplasty, stenting, and TAVI — Dr Khatri
              continues to operate at and hold admitting rights at <strong>John Flynn Private Hospital</strong> (Tugun)
              and <strong>Pindara Private Hospital</strong> (Benowa), exactly as before. Nothing about hospital
              care changes.
            </p>
          </div>

          <p className="sec-lead" style={{ marginBottom: 28 }}>
            Nuevo Medical Bundall is a purpose-built, multidisciplinary medical
            centre in the heart of the Gold Coast's central commercial and
            health precinct — designed around a coordinated model of care that
            brings GPs, specialists, allied health, diagnostics and pharmacy
            together under one roof. Its Bundall Road location gives patients
            easy access from Benowa, Surfers Paradise, Southport, Ashmore,
            Broadbeach and Main Beach.
          </p>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: 24, marginBottom: 20 }}>
            <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>
              Consulting Rooms {!relocated && `— Effective ${RELOCATION_DATE_DISPLAY}`}
            </div>
            <p style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1.05rem', marginBottom: 4 }}>{NEW_LOCATION.name}</p>
            <p style={{ color: 'var(--text2)', marginBottom: 16 }}>{NEW_LOCATION.addressLine}</p>
            <p style={{ color: 'var(--text2)' }}>
              Phone: <a href={`tel:${phone.tel}`} style={{ color: 'var(--navy2)', fontWeight: 700 }}>{phone.display}</a>
              {!relocated && <span style={{ color: 'var(--text3)', fontSize: '.85rem' }}> (active from {RELOCATION_DATE_DISPLAY})</span>}
            </p>
          </div>

          <div style={{ background: 'var(--bg2)', borderRadius: 8, padding: 24, marginBottom: 40 }}>
            <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 14 }}>
              Hospitals — Inpatient Care &amp; Procedures (Unchanged)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>{johnFlynn.name}</p>
                <p style={{ color: 'var(--text2)', fontSize: '.92rem' }}>{johnFlynn.addressLine}</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>{pindara.name}</p>
                <p style={{ color: 'var(--text2)', fontSize: '.92rem' }}>{pindara.addressLine}</p>
              </div>
            </div>
          </div>

          {!relocated && (
            <div style={{ background: 'var(--bg2)', borderLeft: '3px solid var(--gold)', borderRadius: 6, padding: '16px 20px', marginBottom: 40, color: 'var(--text2)', fontSize: '.92rem' }}>
              Until {RELOCATION_DATE_DISPLAY}, please continue to book appointments and reach the practice on{' '}
              <a href={`tel:${OLD_PHONE.tel}`} style={{ color: 'var(--navy2)', fontWeight: 700 }}>{OLD_PHONE.display}</a> as usual.
            </div>
          )}

          <div className="map-block">
            <div className="map-lbl">{NEW_LOCATION.name} · {NEW_LOCATION.addressLocality} · Consulting Rooms</div>
            <div className="map-box">
              <iframe
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(NEW_LOCATION.mapEmbedQuery)}&z=16&output=embed`}
                title={NEW_LOCATION.name}
              />
            </div>
            <a
              className="map-cta"
              href={`https://maps.google.com/?q=${encodeURIComponent(NEW_LOCATION.mapDirectionsQuery)}`}
              rel="noopener"
              target="_blank"
            >
              <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }}><use href="#ic-pin" /></svg>
              Get Directions — {NEW_LOCATION.name}
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
