# Phone Number Fix — /new-location page

## The bug

On the "Consulting Rooms" card on `/new-location`, the phone number shown
was `currentPhone()` — which correctly resolves to the OLD number before
5 Oct — but the card labeled it "(active from 5 October 2026)". That's
backwards: it was showing the currently-valid old number while claiming
it becomes active in the future.

That card describes the *new* Bundall location's details, so it should
always show the *new* number (1300 068 386) with the "active from" caveat
before the date, and no caveat after. It was accidentally wired to
whichever number happens to be currently valid instead.

## The fix

Only one file changed — `src/pages/NewLocation.jsx`. The Consulting Rooms
card now always shows the new number (1300 068 386), with "(active from
5 October 2026)" appended only before the switch date. The separate
notice further down the page — "Until 5 October 2026, continue to reach
the practice on (07) 5598 0322" — was already correct and is unchanged.

Nothing else on the site was affected. I re-audited every other file that
references the phone number (Contact, Footer, About, FAQ, Legal
Information, Patient Journey, mobile call button, structured data) and
confirmed they all correctly use `currentPhone()` to show whichever
number is presently valid — this bug was isolated to the one card on the
`/new-location` page that specifically needed to always reference the new
number regardless of date.

## Setup steps

```
git checkout -b fix/new-location-phone
# copy the file in, replacing the existing one
git add .
git commit -m "Fix phone number shown on new-location consulting rooms card"
git push origin fix/new-location-phone
```
Merge and deploy as usual.

## Verified locally

`npm run build` passes clean. Traced both states by hand:
- **Before 5 Oct**: card shows "1300 068 386 (active from 5 October 2026)";
  separate notice below shows "(07) 5598 0322 as usual"
- **On/after 5 Oct**: card shows "1300 068 386" with no caveat; the old-number
  notice disappears entirely
