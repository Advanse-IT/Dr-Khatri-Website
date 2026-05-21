import RawHtml from './RawHtml.jsx';

const markup = `
<!-- ═══ DIRECTIONS PICKER MODAL ══════════════════════════════ -->
<div class="dir-overlay" id="dirOverlay" onclick="hideDirectionsPicker()"></div>
<div class="dir-sheet" id="dirSheet">
<div class="dir-handle"></div>
<div class="dir-title">Choose a Location</div>
<p class="dir-sub">Which hospital or clinic would you like directions to?</p>
<a class="dir-btn dir-btn--primary" href="https://maps.google.com/?q=John+Flynn+Private+Hospital,+42+Inland+Drive,+Tugun+QLD+4224" onclick="hideDirectionsPicker()" rel="noopener" target="_blank">
<svg aria-hidden="true" style="width:28px;height:28px;color:var(--gold);flex-shrink:0"><use href="#ic-hospital"></use></svg>
<div class="dir-btn-text">
<strong>John Flynn Private Hospital</strong>
<span>42 Inland Drive, Tugun QLD 4224</span>
</div>
<svg aria-hidden="true" class="arr-ic" fill="none" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</a>
<a class="dir-btn" href="https://maps.google.com/?q=Pindara+Private+Hospital,+Allchurch+Avenue,+Benowa+QLD+4217" onclick="hideDirectionsPicker()" rel="noopener" target="_blank">
<svg aria-hidden="true" style="width:28px;height:28px;color:var(--gold);flex-shrink:0"><use href="#ic-hospital"></use></svg>
<div class="dir-btn-text">
<strong>Pindara Private Hospital</strong>
<span>Allchurch Avenue, Benowa QLD 4217</span>
</div>
<svg aria-hidden="true" class="arr-ic" fill="none" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
</a>
<button class="dir-cancel" onclick="hideDirectionsPicker()">Cancel</button>
</div>
`;

export default function DirectionsPicker() {
  return <RawHtml html={markup} />;
}
