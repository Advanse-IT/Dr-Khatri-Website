import { SITE, locations, servicePages, locationPages, articles } from '../data/siteData.js';

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${SITE.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function setMeta({ title, description, path = '/', image = SITE.image, type = 'website' }) {
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
  upsert('meta[property="og:title"]', 'content', fullTitle);
  upsert('meta[property="og:description"]', 'content', description);
  upsert('meta[property="og:url"]', 'content', absoluteUrl(path));
  upsert('meta[property="og:type"]', 'content', type);
  upsert('meta[property="og:image"]', 'content', absoluteUrl(image));
  upsert('meta[name="twitter:title"]', 'content', fullTitle);
  upsert('meta[name="twitter:description"]', 'content', description);
  upsert('meta[name="twitter:image"]', 'content', absoluteUrl(image));
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
  canonical.setAttribute('href', absoluteUrl(path));
}

const postalAddress = (l) => ({ '@type': 'PostalAddress', streetAddress: l.street, addressLocality: l.locality, addressRegion: l.region, postalCode: l.postcode, addressCountry: 'AU' });

export function baseSchema() {
  return [
    { '@context':'https://schema.org', '@type':'Physician', '@id':`${SITE.baseUrl}/#physician`, name:SITE.name, url:SITE.baseUrl, image:absoluteUrl(SITE.image), telephone:SITE.phoneDisplay, medicalSpecialty:['Cardiology','Interventional Cardiology'], description:'Dr Shailesh Khatri is a senior interventional cardiologist on the Gold Coast specialising in coronary angiography, angioplasty, stenting, emergency PCI and TAVI.', knowsAbout:['Interventional cardiology','Coronary angiography','Coronary angioplasty','Heart stents','TAVI','Chest pain assessment','Coronary artery disease','Preventive cardiology','Hypertension','Echocardiography'], areaServed:['Gold Coast','Tugun','Benowa','Robina','Southport','Northern NSW'], hospitalAffiliation:locations.map(l=>({ '@type':'Hospital', name:l.name, address:postalAddress(l) })), memberOf:[ {'@type':'Organization',name:'Royal Australasian College of Physicians'}, {'@type':'Organization',name:'Cardiac Society of Australia and New Zealand'}, {'@type':'Organization',name:'Australian Medical Association'}, {'@type':'Organization',name:'Society for Cardiovascular Angiography & Interventions'} ] },
    { '@context':'https://schema.org', '@type':'MedicalClinic', '@id':`${SITE.baseUrl}/#clinic`, name:'Dr Shailesh Khatri Cardiology', url:SITE.baseUrl, telephone:SITE.phoneDisplay, medicalSpecialty:'Cardiology', address:locations.map(postalAddress), areaServed:['Gold Coast','Tugun','Benowa','Robina','Southport','Northern NSW'] },
    { '@context':'https://schema.org', '@type':'WebSite', '@id':`${SITE.baseUrl}/#website`, url:SITE.baseUrl, name:'Dr Shailesh Khatri | Senior Interventional Cardiologist Gold Coast', publisher:{ '@id':`${SITE.baseUrl}/#physician` } }
  ];
}

export function faqSchema(faqs) { return { '@context':'https://schema.org', '@type':'FAQPage', mainEntity:faqs.map(([q,a])=>({ '@type':'Question', name:q, acceptedAnswer:{ '@type':'Answer', text:a } })) }; }
export function breadcrumbSchema(items) { return { '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:items.map((item,index)=>({ '@type':'ListItem', position:index+1, name:item.name, item:absoluteUrl(item.path) })) }; }
export function medicalWebPageSchema({ title, description, path }) { return { '@context':'https://schema.org', '@type':'MedicalWebPage', name:title, description, url:absoluteUrl(path), reviewedBy:{ '@id':`${SITE.baseUrl}/#physician` }, about:{ '@type':'MedicalSpecialty', name:'Cardiology' } }; }
export function articleSchema(article, path) { return { '@context':'https://schema.org', '@type':'MedicalWebPage', name:article.title, headline:article.title, description:article.description, url:absoluteUrl(path), author:{ '@id':`${SITE.baseUrl}/#physician` }, reviewedBy:{ '@id':`${SITE.baseUrl}/#physician` }, about:{ '@type':'MedicalSpecialty', name:'Cardiology' } }; }

export function injectSchema(schemas) {
  document.querySelectorAll('script[data-managed-schema="true"]').forEach(el => el.remove());
  schemas.flat().filter(Boolean).forEach(schema => { const script=document.createElement('script'); script.type='application/ld+json'; script.dataset.managedSchema='true'; script.textContent=JSON.stringify(schema); document.head.appendChild(script); });
}

export function findRoute(path) {
  const clean = path.replace(/\/$/, '') || '/';
  if (clean === '/') return { type:'home' };
  const service = servicePages.find(p => `/${p.slug}` === clean); if (service) return { type:'service', data:service };
  const location = locationPages.find(p => `/${p.slug}` === clean); if (location) return { type:'location', data:location };
  if (clean === '/patient-education') return { type:'education' };
  const article = articles.find(p => `/patient-education/${p.slug}` === clean); if (article) return { type:'article', data:article };
  return { type:'notFound' };
}
