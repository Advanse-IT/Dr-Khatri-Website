# Blog Module — Cloudflare Setup Instructions

These are the one-time steps to get the blog module live on drskhatri.com.au.
Everything runs on Cloudflare's free tier — no cost.

## 1. Unzip and merge into the repo

Copy the contents of this zip into your local clone of
`Advanse-IT/Dr-Khatri-Website`, preserving folder structure (it will add
`functions/`, `migrations/`, new files under `src/components/blog/`, and a
few modified files: `src/App.jsx`, `package.json`, `public/_redirects`,
`wrangler.toml`).

Then:
```
git checkout -b feature/blog-module
git add .
git commit -m "Add blog module with admin panel"
git push origin feature/blog-module
```
Open a PR / merge into your main branch as usual — Cloudflare Pages will
auto-deploy on merge, same as your existing setup.

## 2. Create the D1 database

Install Wrangler if you don't have it: `npm install -g wrangler`

```
wrangler login
wrangler d1 create dr-khatri-blog
```

This prints a `database_id` — copy it into `wrangler.toml` in place of
`REPLACE_WITH_D1_DATABASE_ID` (this only matters for local dev; the next
step handles the live binding).

## 3. Bind the database to your Pages project (Cloudflare Dashboard)

1. Cloudflare Dashboard → **Workers & Pages** → your Pages project
2. **Settings** → **Functions** → **D1 database bindings**
3. Add binding: Variable name = `DB`, D1 database = `dr-khatri-blog`
4. Save (this applies on next deploy)

## 4. Run the schema migration

```
wrangler d1 execute dr-khatri-blog --remote --file=./migrations/0001_init.sql
```

## 5. Set environment variables/secrets (Cloudflare Dashboard)

Same Pages project → **Settings** → **Environment variables** (add as
**Secrets**, not plain text):

| Name | Value |
|---|---|
| `JWT_SECRET` | any long random string (e.g. generate with `openssl rand -hex 32`) |
| `SETUP_KEY` | any long random string — used once to create your admin login |

Add both to the **Production** environment. Redeploy (or trigger a new
deploy) so the Functions pick up the new bindings/vars.

## 6. Create your admin account (one-time)

Run once, from your terminal:

```
curl -X POST https://drskhatri.com.au/api/setup \
  -H "Content-Type: application/json" \
  -H "X-Setup-Key: <the SETUP_KEY value you set above>" \
  -d '{"email":"you@advanseit.com.au","password":"choose-a-strong-password"}'
```

This endpoint refuses to run again once an admin exists, so it's safe to
leave in place.

## 7. Log in and start posting

Go to `https://drskhatri.com.au/admin/login`, log in, and create posts.
Published posts appear at `https://drskhatri.com.au/blog`.

## Notes

- Cover images: paste a direct image URL (e.g. hosted in `public/` on the
  repo, or any external host). File upload isn't included in this version —
  can be added later via Cloudflare R2 (also free tier) if wanted.
- SEO: this is a client-rendered SPA, so blog content isn't server-rendered.
  Meta tags (title/description/OG) are set dynamically per post via
  `react-helmet-async`, which covers most SEO needs, but if search ranking
  for blog content becomes a priority later, worth revisiting server-side
  rendering for the `/blog/*` routes specifically.
- Everything (Pages, Functions, D1) stays within Cloudflare's free tier at
  the traffic levels this site would see.
