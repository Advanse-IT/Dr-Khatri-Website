import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem('dr-khatri-cookie-consent') !== 'accepted') {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    window.localStorage.setItem('dr-khatri-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    window.localStorage.setItem('dr-khatri-cookie-consent', 'declined');
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
