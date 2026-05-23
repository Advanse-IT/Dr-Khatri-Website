import fs from 'node:fs';
import path from 'node:path';
import { allRoutes } from '../src/data/siteData.js';

const dist = path.resolve('dist');
const required = ['rel="canonical"', 'application/ld+json', 'og:title', 'twitter:card'];
const failures = [];

for (const route of allRoutes) {
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(file)) { failures.push(`${route}: missing static index.html`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  for (const token of required) if (!html.includes(token)) failures.push(`${route}: missing ${token}`);
  if (!/<h1|id="root"/.test(html)) failures.push(`${route}: missing render target`);
}

const headers = path.join(dist, '_headers');
if (!fs.existsSync(headers)) failures.push('missing Cloudflare Pages _headers file');

if (failures.length) {
  console.error('SEO validation failed:\n' + failures.join('\n'));
  process.exit(1);
}
console.log(`SEO validation passed for ${allRoutes.length} routes.`);
