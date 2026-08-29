import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isRelocated, RELOCATION_DATE_DISPLAY, NEW_LOCATION } from '../config/relocation.js';

const DISMISS_KEY = 'reloc-splash-dismissed';

export default function RelocationSplash() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isRelocated()) return; // nothing to announce once already moved
    if (localStorage.getItem(DISMISS_KEY) === '1') return;
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => { if (e.key === 'Escape') dismiss(); };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, '1');
    setOpen(false);
  }

  function learnMore() {
    localStorage.setItem(DISMISS_KEY, '1');
    setOpen(false);
    navigate('/new-location');
  }

  if (!open) return null;

  return (
    <div
      className="reloc-splash-backdrop"
      role="presentation"
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div className="reloc-splash" role="dialog" aria-modal="true" aria-labelledby="reloc-splash-title">
        <button className="reloc-splash-close" onClick={dismiss} aria-label="Close">×</button>

        <div className="reloc-splash-kicker">
          <span className="reloc-dot" aria-hidden="true" />
          We're Moving
        </div>
        <h2 id="reloc-splash-title" className="reloc-splash-title">New Consulting Rooms in Bundall</h2>
        <p className="reloc-splash-body">
          From <strong>{RELOCATION_DATE_DISPLAY}</strong>, Dr Khatri's consulting rooms move to{' '}
          <strong>{NEW_LOCATION.name}</strong>, {NEW_LOCATION.addressLine}.
        </p>
        <p className="reloc-splash-body reloc-splash-note">
          This is a consulting rooms move only — inpatient care and procedures continue as
          usual at John Flynn Private Hospital (Tugun) and Pindara Private Hospital (Benowa).
        </p>

        <div className="reloc-splash-actions">
          <button className="btn btn-gold" onClick={learnMore}>Learn More</button>
          <button className="reloc-splash-dismiss" onClick={dismiss}>Got it, thanks</button>
        </div>
      </div>
    </div>
  );
}
