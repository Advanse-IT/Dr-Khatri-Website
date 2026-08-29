# Practice Relocation — Bundall Consulting Rooms

This adds an automatic, date-triggered switch-over for Dr Khatri's new
consulting rooms at Nuevo Medical Bundall, effective **5 October 2026**.

## The key distinction this respects

- **Consulting Rooms** (where patients see him for appointments) → moves to
  Nuevo Medical Bundall, 100 Bundall Road, Bundall QLD 4217, on 5 Oct 2026
- **Hospitals** (where he operates and treats inpatients — admitting rights)
  → John Flynn Private Hospital (Tugun) and Pindara Private Hospital
  (Benowa) — **completely unaffected**, unchanged everywhere on the site

Every place this is mentioned across the site (About, FAQ, Contact, Footer,
mobile call bar, directions picker, legal page, patient journey, and the
site's SEO schema markup) now draws from one file —
`src/config/relocation.js` — and displays the correct combination
automatically based on the visitor's current date. No manual edit needed on
the day itself.

## What's new

- **`src/config/relocation.js`** — single source of truth: the relocation
  date, old/new phone numbers, and the new + existing location details
- **Announcement banner** (`RelocationBanner.jsx`) — a dismissible bar above
  the nav, visible site-wide until 5 Oct, linking to `/new-location`. Uses a
  subtle pulsing accent rather than literal flashing text (better for both
  professionalism and accessibility — actual flashing content can be a real
  problem for some visitors). Dismissing it hides it for that browser
  session; it reappears on the next visit.
- **`/new-location` page** — the dedicated announcement page, with the new
  address, an explicit "this is a consulting-rooms move only" callout
  (per Dr Khatri's request for clarity), both hospitals listed separately,
  and a map
- **SEO structured data** (`StructuredData.jsx`) — replaces the static
  schema previously hardcoded in `index.html`; now auto-switches with
  everything else, and correctly *adds* the Bundall address alongside the
  two hospitals rather than replacing them

## What changed in existing content

Each of these now shows the current, accurate combination automatically:

- **About** — the bio paragraph splits into "consults from Bundall" +
  "holds admitting rights at both hospitals for inpatient care"
- **FAQ** — "Where does Dr Khatri consult?" and the referral question
  updated; the emergency-care answer is unaffected (hospitals don't change)
- **Contact page** — now shows a distinct "Consulting Rooms" card (Bundall)
  alongside the existing "Hospitals — Inpatient Care & Procedures" card,
  plus a third map for Bundall once active; before the date, a "Consulting
  Rooms Are Moving" notice links to `/new-location`
- **Footer** — location column splits into "Consulting Rooms" and
  "Admitting Hospitals"
- **Mobile call button** and **directions picker** — phone number and a new
  "Bundall Consulting Rooms" directions option, alongside the unchanged
  hospital options
- **Legal Information page** and **Patient Journey step** — phone number
  and consulting/hospital wording updated consistently

## Setup steps

```
git checkout -b feature/bundall-relocation
# copy the zip contents into your local clone, preserving paths
git add .
git commit -m "Add automatic relocation switch-over for Bundall consulting rooms"
git push origin feature/bundall-relocation
```
Merge and deploy as usual. **No migrations, no environment variables, no D1
changes** — this is entirely front-end logic based on the visitor's date.

## Open items worth your attention

1. **Geo-coordinates for Bundall**: the structured data includes precise
   lat/long for the two hospitals (already on the site) but *not* for
   Nuevo Medical Bundall — I didn't have a verified coordinate and didn't
   want to guess one into your SEO markup. Once you have the exact
   coordinates (e.g. from Google's own listing for the building), let me
   know and I'll add them.
2. **Clock-based, not server-based**: the switch relies on each visitor's
   own device clock reaching 5 Oct 2026, re-checked fresh on every page
   load. This is standard practice for this kind of site-wide content
   change and needs no server component, but it's worth knowing the
   mechanism if anything ever looks off on that day.
3. **Static OG/Twitter preview tags** in `index.html` (used by non-JS
   social-media link-preview bots, e.g. when someone pastes the site URL
   into Facebook/LinkedIn) still mention the hospitals — left as-is since
   that's accurate both before and after the move, so no change was needed
   there.

## Verified locally

- `npm run build` passes clean
- Date-switch logic tested explicitly: fires exactly at midnight AEST on
  5 October 2026, not a moment before
- The conditionally-assembled Contact page HTML was checked for balanced
  tags in both states (before/after) to rule out a malformed layout
