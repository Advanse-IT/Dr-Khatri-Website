# Relocation Splash Screen + Contact Map Fix

This builds on the previous relocation package (`drkhatri-bundall-relocation.zip`).
If you haven't merged that one yet, do that first — these 4 files replace
versions from that package, they're not standalone additions.

## What's new

**Splash screen** (`RelocationSplash.jsx`) — a one-time modal that appears
as soon as the site loads, announcing the move:
- Shows automatically on first visit (until 5 Oct 2026 — no point showing
  it after the move has happened)
- Close via the × button, the "Got it, thanks" link, clicking outside the
  modal, or pressing Escape — all four dismiss it
- Once dismissed, it's saved to the browser's `localStorage`, so it will
  **never show again on that browser**, even across future visits, closing
  the tab, restarting the browser, etc. (This is different from the
  announcement banner, which reappears each new visit — you asked
  specifically for the splash to be gone for good once closed.)
- "Learn More" also dismisses it permanently and takes them to
  `/new-location` for full details
- Same "consulting rooms only, hospitals unaffected" clarity as the rest
  of the site

## What's fixed

**Contact page map alignment** — per your screenshot:
- The Bundall consulting rooms map now shows in the "Get in Touch" section
  too (previously it only appeared on the dedicated `/new-location` page),
  using the same working text-search map embed — no GPS coordinates needed,
  it geocodes the address automatically. Shows year-round, labeled "Coming
  5 October 2026" beforehand and "Consulting Rooms" once active.
- Reduced the map height (240px → 190px desktop, 200px → 160px mobile) and
  tightened the spacing between stacked maps, so the three maps (Bundall +
  John Flynn + Pindara) sit at a height that lines up much closer to the
  text cards column next to it.

## Setup steps

```
git checkout -b feature/relocation-splash
# copy the zip contents in, preserving paths — these replace existing files
git add .
git commit -m "Add relocation splash screen, show Bundall map on Contact page"
git push origin feature/relocation-splash
```
Merge and deploy as usual. No migrations, no environment variables.

## Verified locally

`npm run build` passes clean.
