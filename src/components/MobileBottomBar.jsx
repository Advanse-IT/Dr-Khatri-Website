import { createPortal } from 'react-dom';
import RawHtml from './RawHtml.jsx';
import { currentPhone } from '../config/relocation.js';

const phone = currentPhone();

const markup = `
<!-- ═══ MOBILE STICKY BAR ══════════════════════════════════════ -->
<button class="stt-float" onclick="window.scrollTo({top:0,behavior:'smooth'})" id="mobSTT" aria-label="Scroll to top"><svg aria-hidden="true" style="width:20px;height:20px;display:block;color:#fff" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>
<div class="mob-bar" data-mobile-bottom-bar="true">
<div class="mb-row">
<a class="mb-btn" href="tel:${phone.tel}"><svg aria-hidden="true" class="mb-icon"><use href="#ic-phone"></use></svg>Call</a>
<a class="mb-btn acc" href="/contact"><svg aria-hidden="true" class="mb-icon"><use href="#ic-calendar"></use></svg>Appointment</a>
<a class="mb-btn" href="https://maps.google.com/?q=42+Inland+Drive+Tugun+QLD+4224" id="mb-directions" onclick="showDirectionsPicker(event)" rel="noopener" target="_blank"><svg aria-hidden="true" class="mb-icon"><use href="#ic-pin"></use></svg>Directions</a>
</div>
</div>
`;

export default function MobileBottomBar() {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <RawHtml html={markup} />,
    document.body
  );
}
