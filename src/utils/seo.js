import { SITE, locations, servicePages, locationPages, articles, trustSignals } from '../data/siteData.js';

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${SITE.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function setMeta({ title, description, path = '/', image = SITE.image, type = 'website', keywords = '' }) {
  const fullTitle = title?.includes('Dr Shailesh Khatri') ? title : `${title} | Dr Shailesh Khatri`;
  document.title = fullTitle;
  const upsert = (selector, attr, value) => {
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      const prop = selector.match(/property="([^"]+)"/)?.[1];
      const name = selector.match(/name="([^"]+)"/)?.[1];
      if (prop) el.setAttribute('property', prop);
      if (name) el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };
  upsert('meta[name="description"]', 'content', description);
  upsert('meta[name="keywords"]', 'content', keywords || 'interventional cardiologist Gold Coast, cardiologist Gold Coast, coronary angiography, angioplasty, heart stents, TAVI, chest pain cardiologist');
  upsert('meta[property="og:title"]', 'content', fullTitle);
  upsert('meta[property="og:description"]', 'content', description);
  upsert('meta[property="og:url"]', 'content', absoluteUrl(path));
  upsert('meta[property="og:type"]', 'content', type);
  upsert('meta[property="og:image"]', 'content', absoluteUrl(image));
  upsert('meta[name="twitter:card"]', 'content', 'summary_large_image');
  upsert('meta[name="twitter:title"]', 'content', fullTitle);
  upsert('meta[name="twitter:description"]', 'content', description);
  upsert('meta[name="twitter:image"]', 'content', absoluteUrl(image));
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
  canonical.setAttribute('href', absoluteUrl(path));
}

export const postalAddress = (l) => ({
  '@type': 'PostalAddress',
  streetAddress: l.street,
  addressLocality: l.locality,
  addressRegion: l.region,
  postalCode: l.postcode,
  addressCountry: 'AU'
});

const hospitalNodes = () => locations.map((l) => ({
  '@type': 'Hospital',
  '@id': `${SITE.baseUrl}/#${l.slug || l.area.toLowerCase()}-hospital`,
  name: l.name,
  address: postalAddress(l),
  url: l.map,
  areaServed: ['Gold Coast', 'Queensland', 'Northern NSW']
}));

const availableServices = () => servicePages.map((service) => ({
  '@type': 'MedicalProcedure',
  '@id': `${SITE.baseUrl}/${service.slug}#procedure`,
  name: service.h1,
  description: service.summary,
  url: absoluteUrl(`/${service.slug}`),
  howPerformed: service.intro,
  preparation: 'A GP or specialist referral and individual clinical assessment are required before any procedure or consultation pathway.'
}));

export function baseSchema() {
  const physicianId = `${SITE.baseUrl}/#physician`;
  const clinicId = `${SITE.baseUrl}/#clinic`;
  const websiteId = `${SITE.baseUrl}/#website`;

  return [{
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'Physician'],
        '@id': physicianId,
        name: SITE.name,
        honorificPrefix: 'Dr',
        jobTitle: 'Senior Interventional Cardiologist',
        url: SITE.baseUrl,
        image: absoluteUrl(SITE.image),
        telephone: SITE.phone,
        medicalSpecialty: ['Cardiology', 'Interventional Cardiology'],
        description: 'Dr Shailesh Khatri is a senior interventional cardiologist on the Gold Coast with expertise in coronary angiography, angioplasty, stenting, emergency PCI and TAVI.',
        knowsAbout: [
          'Interventional cardiology', 'Coronary angiography', 'Coronary angioplasty', 'Heart stents', 'TAVI',
          'Chest pain assessment', 'Coronary artery disease', 'Preventive cardiology', 'Hypertension', 'Echocardiography',
          'Primary PCI', 'Aortic stenosis', 'Cardiac risk assessment'
        ],
        areaServed: ['Gold Coast', 'Tugun', 'Benowa', 'Robina', 'Southport', 'Queensland', 'Northern NSW'],
        worksFor: { '@id': clinicId },
        hospitalAffiliation: hospitalNodes().map(h => ({ '@id': h['@id'] })),
        memberOf: trustSignals.memberships.map(name => ({ '@type': 'Organization', name })),
        hasCredential: trustSignals.credentials.map(name => ({ '@type': 'EducationalOccupationalCredential', credentialCategory: 'professional qualification', name })),
        sameAs: SITE.sameAs
      },
      {
        '@type': ['MedicalClinic', 'LocalBusiness'],
        '@id': clinicId,
        name: 'Dr Shailesh Khatri Cardiology',
        url: SITE.baseUrl,
        image: absoluteUrl(SITE.image),
        telephone: SITE.phone,
        priceRange: '$$',
        medicalSpecialty: ['Cardiology', 'Interventional Cardiology'],
        address: locations.map(postalAddress),
        areaServed: ['Gold Coast', 'Tugun', 'Benowa', 'Robina', 'Southport', 'Queensland', 'Northern NSW'],
        founder: { '@id': physicianId },
        employee: { '@id': physicianId },
        availableService: availableServices(),
        contactPoint: [{
          '@type': 'ContactPoint',
          telephone: SITE.phone,
          contactType: 'appointments and cardiology enquiries',
          areaServed: 'AU-QLD',
          availableLanguage: ['English']
        }],
        sameAs: SITE.sameAs
      },
      ...hospitalNodes(),
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE.baseUrl,
        name: 'Dr Shailesh Khatri | Senior Interventional Cardiologist Gold Coast',
        inLanguage: 'en-AU',
        publisher: { '@id': physicianId },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE.baseUrl}/patient-education?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  }];
}

export function faqSchema(faqs = []) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}

export function breadcrumbSchema(items) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.path) })) };
}

export function medicalWebPageSchema({ title, description, path, about = 'Cardiology' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    name: title,
    headline: title,
    description,
    url: absoluteUrl(path),
    inLanguage: 'en-AU',
    isPartOf: { '@id': `${SITE.baseUrl}/#website` },
    primaryImageOfPage: absoluteUrl(SITE.image),
    reviewedBy: { '@id': `${SITE.baseUrl}/#physician` },
    author: { '@id': `${SITE.baseUrl}/#physician` },
    publisher: { '@id': `${SITE.baseUrl}/#clinic` },
    about: { '@type': 'MedicalSpecialty', name: about },
    audience: { '@type': 'MedicalAudience', audienceType: 'Patients and referring doctors' }
  };
}

export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalProcedure', 'Service'],
    '@id': `${SITE.baseUrl}/${service.slug}#service`,
    name: service.h1,
    serviceType: service.title,
    description: service.summary,
    url: absoluteUrl(`/${service.slug}`),
    provider: { '@id': `${SITE.baseUrl}/#physician` },
    areaServed: ['Gold Coast', 'Tugun', 'Benowa', 'Robina', 'Southport', 'Northern NSW'],
    medicalSpecialty: 'Interventional Cardiology',
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: SITE.phone,
      serviceUrl: absoluteUrl(`/${service.slug}`)
    },
    procedureType: 'Diagnostic or therapeutic cardiology service',
    bodyLocation: 'Heart and coronary arteries'
  };
}

export function locationSchema(location) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${SITE.baseUrl}/${location.slug}#local-clinic-page`,
    name: `${SITE.name} Cardiology - ${location.area}`,
    url: absoluteUrl(`/${location.slug}`),
    telephone: SITE.phone,
    medicalSpecialty: ['Cardiology', 'Interventional Cardiology'],
    areaServed: location.area,
    parentOrganization: { '@id': `${SITE.baseUrl}/#clinic` },
    physician: { '@id': `${SITE.baseUrl}/#physician` }
  };
}

export function articleSchema(article, path) {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalWebPage', 'Article'],
    '@id': `${absoluteUrl(path)}#article`,
    name: article.title,
    headline: article.title,
    description: article.description,
    url: absoluteUrl(path),
    inLanguage: 'en-AU',
    author: { '@id': `${SITE.baseUrl}/#physician` },
    reviewedBy: { '@id': `${SITE.baseUrl}/#physician` },
    publisher: { '@id': `${SITE.baseUrl}/#clinic` },
    about: { '@type': 'MedicalSpecialty', name: 'Cardiology' },
    mainEntityOfPage: { '@id': `${absoluteUrl(path)}#webpage` },
    audience: { '@type': 'MedicalAudience', audienceType: 'Patients and referring doctors' },
    keywords: article.keywords || ['cardiology', 'heart health', 'Gold Coast cardiologist']
  };
}

export function reviewPolicySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPageElement',
    '@id': `${SITE.baseUrl}/#review-policy`,
    name: 'AHPRA-compliant patient review policy',
    description: 'Patient testimonials are not reproduced on this website. Independent third-party review platforms may be linked for users who wish to read externally hosted feedback.',
    isPartOf: { '@id': `${SITE.baseUrl}/#website` }
  };
}

export function injectSchema(schemas) {
  document.querySelectorAll('script[data-managed-schema="true"], script[data-static-schema="true"]').forEach(el => el.remove());
  schemas.flat().filter(Boolean).forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.managedSchema = 'true';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export function findRoute(path) {
  const clean = path.replace(/\/$/, '') || '/';
  if (clean === '/') return { type: 'home' };
  const service = servicePages.find(p => `/${p.slug}` === clean); if (service) return { type: 'service', data: service };
  const location = locationPages.find(p => `/${p.slug}` === clean); if (location) return { type: 'location', data: location };
  if (clean === '/patient-education') return { type: 'education' };
  const article = articles.find(p => `/patient-education/${p.slug}` === clean); if (article) return { type: 'article', data: article };
  return { type: 'notFound' };
}
