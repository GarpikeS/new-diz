import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { OrganizationJsonLd } from '@/components/seo'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-heading',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://krasny-yar.ru'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1A2332',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Индустриальный парк Красный Яр — аренда производственных площадей',
    template: '%s | ИП Красный Яр',
  },
  description:
    'Современный индустриальный парк для размещения производственных и логистических объектов. Участки от 1500 м², готовая инфраструктура: электричество до 2 МВт, газ, ж/д ветка.',
  keywords: [
    'индустриальный парк',
    'промышленный парк',
    'аренда производственных площадей',
    'аренда склада',
    'логистический комплекс',
    'Красный Яр',
    'Красноярск',
    'производственные помещения',
    'земля под производство',
  ],
  authors: [{ name: 'ИП Красный Яр' }],
  creator: 'Индустриальный парк Красный Яр',
  publisher: 'ИП Красный Яр',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Индустриальный парк Красный Яр',
    title: 'Индустриальный парк Красный Яр',
    description:
      'Аренда производственных и складских площадей. Участки от 1500 м² с готовой инфраструктурой.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Индустриальный парк Красный Яр',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Индустриальный парк Красный Яр',
    description: 'Аренда производственных и складских площадей с готовой инфраструктурой',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    yandex: 'verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  )
}
