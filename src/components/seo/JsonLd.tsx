import Script from 'next/script'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://krasny-yar.ru'

interface OrganizationJsonLdProps {
  name?: string
}

export function OrganizationJsonLd({ name = 'Индустриальный парк Красный Яр' }: OrganizationJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Современный индустриальный парк для размещения производственных и логистических объектов.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Промышленная, 1',
      addressLocality: 'Красный Яр',
      addressRegion: 'Красноярский край',
      postalCode: '660000',
      addressCountry: 'RU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-391-XXX-XX-XX',
      contactType: 'sales',
      availableLanguage: 'Russian',
    },
    sameAs: [],
  }

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface RealEstateListingJsonLdProps {
  id: string
  name: string
  description: string
  area: number
  price: number
  status: string
}

export function RealEstateListingJsonLd({
  id,
  name,
  description,
  area,
  price,
  status,
}: RealEstateListingJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name,
    description,
    url: `${SITE_URL}/plots/${id}`,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'RUB',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price,
        priceCurrency: 'RUB',
        unitText: 'м²/год',
      },
      availability:
        status === 'available'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      value: area,
      unitCode: 'MTK',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Красный Яр',
      addressRegion: 'Красноярский край',
      addressCountry: 'RU',
    },
  }

  return (
    <Script
      id={`listing-${id}-jsonld`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface BreadcrumbJsonLdProps {
  items: Array<{ name: string; url: string }>
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }

  return (
    <Script
      id="breadcrumb-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface FAQJsonLdProps {
  items: Array<{ question: string; answer: string }>
}

export function FAQJsonLd({ items }: FAQJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
