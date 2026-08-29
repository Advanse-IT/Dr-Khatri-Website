import { Helmet } from 'react-helmet-async';
import { isRelocated, currentPhone, NEW_LOCATION, OLD_LOCATIONS } from '../config/relocation.js';

export default function StructuredData() {
  const relocated = isRelocated();
  const phone = currentPhone();

  // The hospitals are unaffected by the office move — Dr Khatri continues
  // to operate and treat inpatients there. The Bundall address is his
  // *consulting rooms* only, added alongside the hospitals once active.
  const hospitalAddresses = OLD_LOCATIONS.map((loc) => ({
    '@type': 'PostalAddress',
    streetAddress: loc.streetAddress,
    addressLocality: loc.addressLocality,
    addressRegion: loc.addressRegion,
    postalCode: loc.postalCode,
    addressCountry: 'AU',
  }));

  const address = relocated
    ? [
        {
          '@type': 'PostalAddress',
          streetAddress: NEW_LOCATION.streetAddress,
          addressLocality: NEW_LOCATION.addressLocality,
          addressRegion: NEW_LOCATION.addressRegion,
          postalCode: NEW_LOCATION.postalCode,
          addressCountry: 'AU',
        },
        ...hospitalAddresses,
      ]
    : hospitalAddresses;

  // No verified geo-coordinates for the new Bundall address yet — omitted
  // rather than guessed. Add once confirmed (e.g. from Google's listing).
  const geo = OLD_LOCATIONS.map((loc) => ({ '@type': 'GeoCoordinates', ...loc.geo }));

  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr Shailesh Khatri',
    image: 'https://drskhatri.com.au/images/photo3.jpeg',
    '@id': 'https://drskhatri.com.au/',
    url: 'https://drskhatri.com.au/',
    telephone: phone.display,
    address,
    geo,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [
      'https://www.facebook.com/drshaileshkhatri',
      'https://www.linkedin.com/in/shailesh-khatri-0b1b1b1b',
      'https://www.ratemds.com/doctor-ratings/3416434/dr-shailesh-khatri-tugun-qld.html',
    ],
    knowsAbout: ['TAVI', 'Coronary Angiography', 'Angioplasty', 'Stenting', 'Interventional Cardiology'],
    memberOf: [
      { '@type': 'Organization', name: 'Royal Australasian College of Physicians' },
      { '@type': 'Organization', name: 'Cardiac Society of Australia and New Zealand' },
    ],
    medicalSpecialty: 'Cardiology',
    description: 'Dr Shailesh Khatri is a Senior Interventional Cardiologist based on the Gold Coast, specialising in TAVI, coronary angiography, and angioplasty.',
  };

  const whereConsult = relocated
    ? `Dr Khatri consults from ${NEW_LOCATION.name}, ${NEW_LOCATION.addressLine}. For inpatient care and procedures such as angioplasty and TAVI, he operates at and holds admitting rights at John Flynn Private Hospital (Tugun) and Pindara Private Hospital (Benowa).`
    : 'Dr Khatri provides consultations and holds admitting rights at both John Flynn Private Hospital (Tugun) and Pindara Private Hospital (Benowa). His consulting rooms are located at John Flynn Specialist Suites, Level 3, Suites 301–303, 42 Inland Drive, Tugun QLD 4224.';

  // Unaffected by the office move — Dr Khatri's hospital admitting rights
  // and inpatient/procedure care stay the same regardless of consulting
  // rooms location.
  const emergencyCare = 'Yes. Dr Khatri provides 24-hour emergency cardiology care and holds admitting rights at both John Flynn Private Hospital (Tugun) and Pindara Private Hospital (Benowa), where inpatients are treated and procedures performed. He has provided this life-saving service to the Gold Coast for over two decades.';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a referral to see Dr Khatri?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — a GP referral is required for all consultations. Your GP will assess your symptoms, arrange initial tests, and write a referral to Dr Shailesh Khatri.' },
      },
      {
        '@type': 'Question',
        name: 'Where does Dr Khatri consult?',
        acceptedAnswer: { '@type': 'Answer', text: whereConsult },
      },
      {
        '@type': 'Question',
        name: 'What is an interventional cardiologist?',
        acceptedAnswer: { '@type': 'Answer', text: 'An interventional cardiologist uses catheter-based techniques to diagnose and treat heart conditions, such as coronary angiography, angioplasty, stenting, and TAVI.' },
      },
      {
        '@type': 'Question',
        name: 'Is emergency cardiac care available after hours?',
        acceptedAnswer: { '@type': 'Answer', text: emergencyCare },
      },
      {
        '@type': 'Question',
        name: 'What is TAVI?',
        acceptedAnswer: { '@type': 'Answer', text: 'TAVI (Transcatheter Aortic Valve Implantation) is a minimally invasive procedure to replace the aortic valve via catheter, without open-heart surgery.' },
      },
      {
        '@type': 'Question',
        name: "What are Dr Khatri's qualifications?",
        acceptedAnswer: { '@type': 'Answer', text: 'Dr Khatri holds an MBBS from the University of Queensland and is a Fellow of the Royal Australasian College of Physicians (FRACP) and the Cardiac Society of Australia and New Zealand (FCSANZ).' },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(physicianSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
}
