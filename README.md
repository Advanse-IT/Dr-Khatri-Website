# Dr Khatri Website

React + Vite static website configured for Cloudflare Pages.

## Local setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare Pages settings

- Framework preset: Vite
- Build command: npm run build
- Output directory: dist
- Deploy command: leave blank
- Environment variable: NODE_VERSION = 20

Do not use `npx wrangler deploy` for this project.
