# Sticky Bar Icons Fix — Missing SVG Sprite Sheet

Found the actual cause of the visual difference you spotted.

## Root cause

The site's icons (phone, calendar, pin, hospital, etc.) all render via
`<svg><use href="#ic-phone"></use></svg>` — a reference to an icon symbol
defined once in `SvgIcons.jsx` and rendered as a hidden sprite sheet
somewhere in the page.

`/new-location` never included `<SvgIcons />` in its page, so every icon
referencing `#ic-...` had nothing to point to — they rendered as blank
space. That's exactly what made the sticky bar (Call / Appointment /
Directions) "look different" — same layout and gold highlight, just
missing icons.

**Same gap existed on the blog pages** (`BlogList.jsx`, `BlogPost.jsx`) —
fixed proactively since it's the identical issue.

## Also found while checking

Comparing against the working pages, two more small consistency gaps:

- **Cookie consent banner** was missing on `/new-location` and the blog
  pages — added.
- **`LeaveReviewPage`** (in `App.jsx`) was missing `<DirectionsPicker />`
  — same category of bug as the one from your last report, just not yet
  surfaced. Fixed while in there.

Every patient-facing page now renders the exact same set of shared
components: `SvgIcons`, `Header`, `Footer`, `MobileBottomBar`,
`DirectionsPicker`, `CookieConsent` — verified by counting each one
across every page's render path.

## Setup steps

```
git checkout -b fix/missing-icon-sprite
# copy the zip contents in, preserving paths — these replace existing files
git add .
git commit -m "Fix missing icons and cookie consent on new-location and blog pages"
git push origin fix/missing-icon-sprite
```
Merge and deploy as usual. No migrations, no environment variables.

## Verified locally

`npm run build` passes clean, and I cross-checked that every page now
renders an identical, matched count of all six shared components.
