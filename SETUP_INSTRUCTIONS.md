# Blog Theme Update — Setup Instructions

This is a pure visual/styling pass — no schema, migration, API, or route
changes. All 6 files are drop-in replacements.

## What changed

Pulled your site's real design system straight from `src/styles/global.css`
(navy `#0b2240` / gold `#c49a38`, Inter font, the same card/button/kicker
conventions used across the rest of the site) and applied it consistently:

- **AdminLogin.jsx** — dark navy background matching the site's hero, gold
  "Blog Admin" kicker label, practice name/title branding, gold primary
  button (reuses the site's real `.btn-gold` class)
- **AdminDashboard.jsx** — navy header bar, gold "+ New Post" button, cleaner
  card-based table with gold status pills for published posts
- **PostEditor.jsx** — navy header bar, sidebar cards (Tags, Featured Image,
  SEO) with gold section labels, gold Publish button, outlined Save Draft
  button — both using the site's real button classes
- **RichTextEditor.jsx** — toolbar active-state now gold-tinted instead of
  generic green, editor typography set to Inter to match the site
- **BlogList.jsx** — proper kicker + heading treatment matching other site
  sections, card-style post rows with hover lift, gold tag labels
- **BlogPost.jsx** — matching heading/typography treatment, gold tag pills,
  styled blog body content (headings, links, blockquotes, lists all themed)

All of this reuses the site's existing CSS custom properties (`var(--navy)`,
`var(--gold)`, `var(--border)`, etc.) and existing utility classes
(`.btn-gold`, `.btn-outline`, `.btn-ghost`, `.kicker`, `.sec-lead`) from
`global.css` — nothing new was added to that file, so there's no risk of
conflicting with the rest of the site's styling.

## Setup steps

Just replace these 6 files in your repo (paths match exactly):

```
src/components/blog/AdminLogin.jsx
src/components/blog/AdminDashboard.jsx
src/components/blog/PostEditor.jsx
src/components/blog/RichTextEditor.jsx
src/components/blog/BlogList.jsx
src/components/blog/BlogPost.jsx
```

Then:
```
git checkout -b feature/blog-theme
# copy the files in, preserving paths
git add .
git commit -m "Match blog admin and public blog pages to site theme"
git push origin feature/blog-theme
```
Merge as usual. No migrations, no new environment variables, no D1 changes —
this is styling only.

## Verified locally

- `vite build` passes clean
- Every CSS variable and class referenced (`--navy`, `--gold`, `--border`,
  `.btn-gold`, `.btn-outline`, `.btn-ghost`, `.kicker`, `.sec-lead`) confirmed
  to exist in your actual `src/styles/global.css` — not guessed colors
