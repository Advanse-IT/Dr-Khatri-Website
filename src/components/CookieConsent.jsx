import { useEffect, useState } from 'react';

const GA_MEASUREMENT_ID = 'G-F03FWN03TJ';
const CONSENT_KEY = 'dr-khatri-cookie-consent';

// Loads Google Analytics only once, only when called -- never on page load
// by default. Called either on return visits where consent was previously
// accepted, or the moment the person clicks Accept.
function loadAnalytics() {
  if (window.gtag) return; // already loaded, don't double-inject
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    if (consent === 'accepted') {
      // Returning visitor who already said yes -- load GA immediately.
      loadAnalytics();
    } else if (consent !== 'declined') {
      // No choice recorded yet -- ask, and don't load anything until they do.
      setVisible(true);
    }
  }, []);

  const accept = () => {
    window.localStorage.setItem(CONSENT_KEY, 'accepted');
    loadAnalytics();
    setVisible(false);
  };

  const decline = () => {
    window.localStorage.setItem(CONSENT_KEY, 'declined');
    // If analytics was somehow already loaded this session, stop it from
    // sending anything further -- trackEvent()-style calls elsewhere in the
    // app check `typeof window.gtag === 'function'` before firing, so
    // clearing it here makes those calls silently no-op from this point on.
    window.gtag = undefined;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie notice">
      <div>
        <strong>Cookie notice</strong>
        <p>
          This website uses essential cookies and may use basic analytics to improve performance and user experience.
        </p>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-secondary" onClick={decline}>Decline</button>
        <button type="button" className="cookie-primary" onClick={accept}>Accept</button>
      </div>
    </div>
  );
}
