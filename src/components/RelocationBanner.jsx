import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isRelocated, RELOCATION_DATE_DISPLAY } from '../config/relocation.js';

const DISMISS_KEY = 'reloc-banner-dismissed';

export default function RelocationBanner() {
  const [dismissed, setDismissed] = useState(() => sessionStorage.getItem(DISMISS_KEY) === '1');
  const barRef = useRef(null);
  const navigate = useNavigate();
  const relocated = isRelocated();
  const visible = !relocated && !dismissed;

  // Measure the banner's real rendered height (handles text wrapping on
  // narrow screens) and expose it as a CSS var so the nav and page content
  // below can shift down by exactly the right amount.
  useEffect(() => {
    const root = document.documentElement;
    if (!visible) {
      root.style.setProperty('--rb-offset', '0px');
      return;
    }
    const el = barRef.current;
    if (!el) return;

    const setOffset = () => root.style.setProperty('--rb-offset', `${el.offsetHeight}px`);
    setOffset();

    const observer = new ResizeObserver(setOffset);
    observer.observe(el);
    return () => {
      observer.disconnect();
      root.style.setProperty('--rb-offset', '0px');
    };
  }, [visible]);

  if (!visible) return null;

  function handleDismiss(e) {
    e.stopPropagation();
    sessionStorage.setItem(DISMISS_KEY, '1');
    setDismissed(true);
  }

  return (
    <div
      ref={barRef}
      className="reloc-banner"
      role="button"
      tabIndex={0}
      onClick={() => navigate('/new-location')}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/new-location'); }}
    >
      <span className="reloc-dot" aria-hidden="true" />
      <span>
        We're relocating to a new Bundall location from <strong>{RELOCATION_DATE_DISPLAY}</strong> — click to learn more
      </span>
      <button className="reloc-close" onClick={handleDismiss} aria-label="Dismiss announcement">×</button>
    </div>
  );
}
