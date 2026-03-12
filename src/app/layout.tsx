import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
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

export const metadata: Metadata = {
  title: {
    default: 'Индустриальный парк Красный Яр',
    template: '%s | ИП Красный Яр',
  },
  description:
    'Современный индустриальный парк для размещения производственных и логистических объектов. Готовая инфраструктура, выгодное расположение.',
  keywords: [
    'индустриальный парк',
    'промышленный парк',
    'аренда производственных площадей',
    'склад',
    'логистика',
    'Красный Яр',
  ],
  authors: [{ name: 'ИП Красный Яр' }],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Индустриальный парк Красный Яр',
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
        {children}
      </body>
    </html>
  )
}
