# Dr Khatri Blog — Editor Upgrade Setup Instructions

Same upgrade as AdvanseIT's blog: rich text editor + SEO/organisation fields.
This repo has no `_worker.js` complication — it uses plain Cloudflare Pages
Functions throughout, so this is a straightforward merge + one migration.

## What's new

- **Rich text editor** replaces the plain markdown textarea — toolbar for
  headings (H1–H3), bold, italic, bullet/numbered lists, quotes, links, and
  inserting images by URL. Content is now saved as HTML.
- **Meta Title** — separate SEO/browser-tab title (falls back to the post
  title if left blank)
- **Meta Description** — new field, with a 160-character guide
- **Tags/Keywords** — new, comma-separated, shown as pills on the public post page
- **Featured Image** — already existed (cover image URL), now with a live preview
- **URL Slug/Permalink** — already existed, editable, unchanged

## What changed

- **New:** `src/components/blog/RichTextEditor.jsx`
- **Rewritten:** `src/components/blog/PostEditor.jsx` — rich text editor +
  reorganised layout (content column + sidebar with Tags, Featured Image, SEO)
- **Modified:** `src/components/blog/BlogPost.jsx` — uses Meta Title/Description
  when set, renders tags as pills, detects HTML vs. legacy Markdown content
  automatically (no posts exist yet on this site, so this is just future-proofing)
- **Modified:** `src/App.jsx` — PostEditor is now lazy-loaded (Tiptap is a large
  library; this keeps it out of the public site's main bundle)
- **Modified:** `functions/api/admin/posts/index.js`, `[id].js`,
  `functions/api/posts/index.js`, `[slug].js` — read/write the new
  `tags`, `meta_title`, `meta_description` columns
- **New migration:** `migrations/0002_add_seo_fields.sql`
- **Modified:** `package.json` / `package-lock.json` — added
  `@tiptap/*` and `lucide-react`

## Setup steps

### 1. Merge the code

```
git checkout -b feature/rich-text-editor
# copy the zip contents into your local clone, preserving paths
git add .
git commit -m "Add rich text editor, meta title/description, and tags"
git push origin feature/rich-text-editor
```
Merge into main as usual — Cloudflare Pages auto-deploys.

### 2. Run the new migration

```
wrangler d1 execute dr-khatri-blog --remote --file=./migrations/0002_add_seo_fields.sql
```
(Use whatever your actual D1 database name is if different.)

No other setup changes — same database, same secrets, same admin login.

## Notes

- Since this site has no existing posts yet, there's no backward-compatibility
  concern like AdvanseIT's migrated posts — every post you create from now on
  goes straight into the rich text editor and saves as HTML.
- Featured image and in-editor images are pasted by URL — no upload pipeline
  in this version.
