// Single source of truth for the practice relocation to Bundall.
// Everything site-wide that references the phone number or consulting
// location reads from here, so the switch-over on the effective date
// happens automatically with no manual edits needed on the day.

// Queensland does not observe daylight saving, so this is a fixed AEST
// (UTC+10) offset year-round.
export const RELOCATION_DATE = new Date('2026-10-05T00:00:00+10:00');

export function isRelocated(now = new Date()) {
  return now.getTime() >= RELOCATION_DATE.getTime();
}

export const RELOCATION_DATE_DISPLAY = '5 October 2026';

export const OLD_PHONE = { display: '(07) 5598 0322', tel: '+61755980322' };
export const NEW_PHONE = { display: '1300 068 386', tel: '1300068386' };

export function currentPhone(now = new Date()) {
  return isRelocated(now) ? NEW_PHONE : OLD_PHONE;
}

export const NEW_LOCATION = {
  name: 'Nuevo Medical Bundall',
  addressLine: '100 Bundall Road, Bundall QLD 4217',
  streetAddress: '100 Bundall Road',
  addressLocality: 'Bundall',
  addressRegion: 'QLD',
  postalCode: '4217',
  mapEmbedQuery: 'Nuevo Medical Bundall, 100 Bundall Road, Bundall QLD 4217',
  mapDirectionsQuery: 'Nuevo Medical Bundall 100 Bundall Road Bundall QLD 4217',
};

// Current consulting/admitting locations — accurate until the relocation date.
export const OLD_LOCATIONS = [
  {
    name: 'John Flynn Private Hospital',
    locality: 'Tugun',
    addressLine: '42 Inland Drive, Tugun QLD 4224',
    streetAddress: '42 Inland Drive',
    addressLocality: 'Tugun',
    addressRegion: 'QLD',
    postalCode: '4224',
    geo: { latitude: -28.1488, longitude: 153.4851 },
    mapEmbedQuery: 'John Flynn Private Hospital, 42 Inland Drive, Tugun QLD 4224',
    mapDirectionsQuery: 'John Flynn Private Hospital Tugun QLD 4224',
  },
  {
    name: 'Pindara Private Hospital',
    locality: 'Benowa',
    addressLine: 'Allchurch Avenue, Benowa QLD 4217',
    streetAddress: 'Allchurch Avenue',
    addressLocality: 'Benowa',
    addressRegion: 'QLD',
    postalCode: '4217',
    geo: { latitude: -28.0167, longitude: 153.3933 },
    mapEmbedQuery: 'Pindara Private Hospital, Allchurch Avenue, Benowa QLD 4217',
    mapDirectionsQuery: 'Pindara Private Hospital Benowa QLD 4217',
  },
];
