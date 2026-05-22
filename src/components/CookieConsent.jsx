import { useEffect, useState } from 'react';

const STORAGE_KEY = 'dr-khatri-cookie-consent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      setIsVisible(localStorage.getItem(STORAGE_KEY) !== 'accepted');
    } catch {
      setIsVisible(false);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      // Ignore storage errors, for example private browsing restrictions.
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie notice">
      <div>
        <strong>Cookie notice</strong>
        <p>
          We use essential cookies and basic analytics to improve this website. By selecting Accept, you consent to this use.
        </p>
      </div>
      <div className="cookie-actions">
        <a href="#cookies">Learn more</a>
        <button type="button" onClick={accept}>Accept</button>
      </div>
    </div>
  );
}
