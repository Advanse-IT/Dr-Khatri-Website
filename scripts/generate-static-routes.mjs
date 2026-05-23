import fs from 'node:fs';
import path from 'node:path';
import { SITE, servicePages, locationPages, articles, allRoutes } from '../src/data/siteData.js';
import { absoluteUrl, baseSchema, breadcrumbSchema, faqSchema, medicalWebPageSchema, articleSchema, serviceSchema, locationSchema, reviewPolicySchema } from '../src/utils/seo.js';

const dist = path.resolve('dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const fullTitle = (title) => title.includes('Dr Shailesh Khatri') ? title : `${title} | Dr Shailesh Khatri`;

function routeDetails(route) {
  if (route === '/') {
    const title = 'Dr Shailesh Khatri | Senior Interventional Cardiologist Gold Coast';
    const description = 'Senior Interventional Cardiologist on the Gold Coast specialising in coronary angiography, angioplasty, stenting, TAVI and 24-hour emergency cardiac care.';
    return {
      title,
      description,
      type: 'website',
      schemas: [
        ...baseSchema(),
        reviewPolicySchema(),
        faqSchema([
          ['Do I need a referral to see Dr Khatri?', 'Yes. A GP referral is required for routine consultations.'],
          ['Where does Dr Khatri consult?', 'Dr Khatri consults and has admitting rights through John Flynn Private Hospital in Tugun and Pindara Private Hospital in Benowa.'],
          ['What does an interventional cardiologist do?', 'An interventional cardiologist diagnoses and treats heart artery and valve conditions using catheter-based procedures such as angiography, angioplasty, stenting and TAVI.']
        ]),
        breadcrumbSchema([{ name: 'Home', path: '/' }])
      ]
    };
  }

  const service = servicePages.find(p => `/${p.slug}` === route);
  if (service) {
    return {
      title: service.title,
      description: service.summary,
      type: 'website',
      schemas: [
        ...baseSchema(),
        medicalWebPageSchema({ title: service.title, description: service.summary, path: route, about: service.h1 }),
        serviceSchema(service),
        faqSchema(service.faqs),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/coronary-angiography' }, { name: service.h1, path: route }])
      ]
    };
  }

  const locationPage = locationPages.find(p => `/${p.slug}` === route);
  if (locationPage) {
    return {
      title: locationPage.title,
      description: locationPage.summary,
      type: 'website',
      schemas: [
        ...baseSchema(),
        medicalWebPageSchema({ title: locationPage.title, description: locationPage.summary, path: route, about: `Cardiology care for ${locationPage.area}` }),
        locationSchema(locationPage),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: locationPage.h1, path: route }])
      ]
    };
  }

  if (route === '/patient-education') {
    const title = 'Heart Health Patient Education Gold Coast';
    const description = 'Patient education articles about cardiology symptoms, procedures, angiograms, angioplasty, stents and when to see a cardiologist.';
    return {
      title,
      description,
      type: 'website',
      schemas: [
        ...baseSchema(),
        medicalWebPageSchema({ title, description, path: route, about: 'Patient cardiac education' }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Patient Education', path: route }])
      ]
    };
  }

  const article = articles.find(a => `/patient-education/${a.slug}` === route);
  if (article) {
    return {
      title: article.title,
      description: article.description,
      type: 'article',
      schemas: [
        ...baseSchema(),
        medicalWebPageSchema({ title: article.title, description: article.description, path: route, about: 'Cardiology patient education' }),
        articleSchema(article, route),
        faqSchema(article.faqs),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Patient Education', path: '/patient-education' }, { name: article.title, path: route }])
      ]
    };
  }

  return null;
}

function renderHead(route, details) {
  const title = fullTitle(details.title);
  const url = absoluteUrl(route);
  const image = absoluteUrl(SITE.image);
  const schemas = details.schemas.map(schema => `<script type="application/ld+json" data-static-schema="true">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`).join('\n');
  return `
<title>${esc(title)}</title>
<meta name="description" content="${esc(details.description)}" />
<meta name="keywords" content="interventional cardiologist Gold Coast, cardiologist Gold Coast, coronary angiography, angioplasty, heart stents, TAVI, chest pain cardiologist" />
<link rel="canonical" href="${esc(url)}" />
<meta property="og:type" content="${esc(details.type)}" />
<meta property="og:url" content="${esc(url)}" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(details.description)}" />
<meta property="og:image" content="${esc(image)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(details.description)}" />
<meta name="twitter:image" content="${esc(image)}" />
${schemas}`;
}

function inject(html, route, details) {
  const head = renderHead(route, details);
  return html
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[\s\S]*?>/g, '')
    .replace(/<meta name="keywords"[\s\S]*?>/g, '')
    .replace(/<link rel="canonical"[\s\S]*?>/g, '')
    .replace(/<meta property="og:[\s\S]*?>/g, '')
    .replace(/<meta name="twitter:[\s\S]*?>/g, '')
    .replace(/<script type="application\/ld\+json"[\s\S]*?<\/script>/g, '')
    .replace('</head>', `${head}\n</head>`);
}

for (const route of allRoutes) {
  const details = routeDetails(route);
  if (!details) continue;
  const output = inject(template, route, details);
  const dir = route === '/' ? dist : path.join(dist, route.replace(/^\//, ''));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), output);
}

console.log(`Generated static HTML metadata and JSON-LD for ${allRoutes.length} routes.`);
