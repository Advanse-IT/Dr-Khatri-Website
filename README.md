# Dr Khatri Website

Modern React + Vite project configured for Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Cloudflare Pages settings

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Deploy command: leave blank

This project intentionally does not include `wrangler.toml` or Worker deploy config because it is a static React/Vite site intended for Cloudflare Pages.
