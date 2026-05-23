import { createPortal } from 'react-dom';
import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ MOBILE STICKY BAR ══════════════════════════════════════ -->
<div class="mob-bar" data-mobile-bottom-bar="true">
<div class="mb-row">
<a class="mb-btn" href="tel:+61755980322"><svg aria-hidden="true" class="mb-icon"><use href="#ic-phone"></use></svg>Call</a>
<a class="mb-btn acc" href="/contact"><svg aria-hidden="true" class="mb-icon"><use href="#ic-calendar"></use></svg>Appointment</a>
<a class="mb-btn" href="https://maps.google.com/?q=42+Inland+Drive+Tugun+QLD+4224" id="mb-directions" onclick="showDirectionsPicker(event)" rel="noopener" target="_blank"><svg aria-hidden="true" class="mb-icon"><use href="#ic-pin"></use></svg>Directions</a>
<button class="mb-btn stt" onclick="window.scrollTo({top:0,behavior:'smooth'})" id="mobSTT"><svg aria-hidden="true" class="mb-icon" style="transform:rotate(0deg)"><use href="#ic-chevron"></use></svg>Top</button>
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
