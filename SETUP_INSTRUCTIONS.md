# Mobile Bottom Bar Consistency Fix

Two real bugs found and fixed, plus one proactive fix on pages with the
same issue you hadn't flagged yet.

## Bug 1: `/new-location` mobile bar behaved differently

Every other page renders three things together: `<MobileBottomBar />`,
`<DirectionsPicker />`, and calls the `useSiteEffects()` hook. The
`DirectionsPicker` is the actual slide-up sheet component — `MobileBottomBar`
just renders the bar with buttons that call `window.showDirectionsPicker()`,
a function defined inside `useSiteEffects()`.

When I built `/new-location` earlier, I only added `MobileBottomBar` and
missed the other two. So tapping "Directions" there called a function that
didn't exist, and there was no sheet to show even if it had. That's exactly
why it looked and worked differently.

**Fixed** in `NewLocation.jsx` — now wired identically to every other page.

**Also found the same bug on the blog pages** (`BlogList.jsx`, `BlogPost.jsx`)
— built with the same gap. Fixed proactively since it's the identical issue.

## Bug 2: Cancel button hidden in the directions sheet

This one was site-wide, not just on `/new-location`. The mobile bottom bar
had `z-index: 2147483000` (an extreme value) on mobile screens, while the
directions sheet has `z-index: 9900`. That meant the bottom bar rendered
*on top of* the sheet, covering its bottom portion — including the Cancel
button — every time the sheet opened, on every page.

**Fixed**: reduced the bottom bar's mobile z-index to `9600`, which keeps
it above ordinary page content but correctly below the directions sheet,
the relocation splash screen, and the cookie consent banner — all of which
are supposed to appear above it when active.

## Also added, per your request

The Bundall consulting rooms now appears as a directions option
**year-round**, not just after 5 Oct — same pattern as the Contact page's
map preview. Before the move it's labeled "Consulting Rooms (from 5 Oct
2026)"; after, just "Consulting Rooms." John Flynn and Pindara remain
listed unchanged either way.

## Setup steps

```
git checkout -b fix/mobile-bar-consistency
# copy the zip contents in, preserving paths — these replace existing files
git add .
git commit -m "Fix mobile bottom bar consistency and hidden cancel button"
git push origin fix/mobile-bar-consistency
```
Merge and deploy as usual. No migrations, no environment variables.

## Verified locally

`npm run build` passes clean.
