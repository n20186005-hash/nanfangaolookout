import { ATTRACTION, SITE_URL } from '../data/site';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CrumbItem {
  name: string;
  url: string;
}

/** TouristAttraction（含評價、電話、地圖與 Plus Code），全站共用同一 @id */
export function buildAttraction() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Place'],
    '@id': `${SITE_URL}#attraction`,
    name: ATTRACTION.name,
    alternateName: [...ATTRACTION.alternateName],
    description: ATTRACTION.description,
    url: SITE_URL,
    image: [
      `${SITE_URL}images/og-nanfangao-lookout.jpg`,
      `${SITE_URL}images/neipi-1920.webp`,
      `${SITE_URL}images/dusk-1920.webp`,
    ],
    isAccessibleForFree: true,
    publicAccess: true,
    touristType: ['攝影旅客', '自駕旅客', '海岸風景旅客'],
    telephone: ATTRACTION.telephone,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ATTRACTION.latitude,
      longitude: ATTRACTION.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: ATTRACTION.streetAddress,
      addressLocality: ATTRACTION.addressLocality,
      addressRegion: ATTRACTION.addressRegion,
      postalCode: ATTRACTION.postalCode,
      addressCountry: ATTRACTION.addressCountry,
    },
    hasMap: ATTRACTION.mapsUrl,
    sameAs: [ATTRACTION.mapsUrl],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ATTRACTION.ratingValue,
      reviewCount: ATTRACTION.ratingCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function buildFaq(faqs: readonly FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumb(items: readonly CrumbItem[], id?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    ...(id ? { '@id': id } : {}),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildWebPage(options: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${options.url}#webpage`,
    name: options.name,
    description: options.description,
    url: options.url,
    inLanguage: 'zh-Hant-TW',
    dateModified: ATTRACTION.lastChecked,
    isPartOf: { '@id': `${SITE_URL}#website` },
    about: { '@id': `${SITE_URL}#attraction` },
    breadcrumb: { '@id': `${options.url}#breadcrumb` },
  };
}

export function buildWebSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: '南方澳觀景台',
    url: SITE_URL,
    inLanguage: 'zh-Hant-TW',
  };
}
