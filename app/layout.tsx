// app/layout.tsx — Root layout | Xtream Ranker | Luxury Dark-Blue & Gold

import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://xtreamranker.site'),
  title: {
    default: 'Xtream Ranker | Digital Marketing Agency UK — SEO, Ads & Web Design',
    template: '%s | Xtream Ranker',
  },
  description:
    'Xtream Ranker is a UK-based digital marketing agency specializing in SEO, Google Ads, Meta Ads, Web Development, Social Media & Content Writing. Get more leads, sales & growth — 24/7 support.',
  keywords: [
    'digital marketing agency UK',
    'SEO agency London',
    'Google Ads management UK',
    'Meta Ads agency',
    'web development London',
    'social media marketing UK',
    'content writing agency',
    'AI SEO optimization',
    'Xtream Ranker',
    'Bethnal Green marketing agency',
  ],
  authors: [{ name: 'Xtream Ranker', url: 'https://xtreamranker.site' }],
  creator: 'Xtream Ranker',
  publisher: 'Xtream Ranker',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: [
      { url: '/favicon.ico',        sizes: 'any' },
      { url: '/favicon-16x16.png',  sizes: '16x16',  type: 'image/png' },
      { url: '/favicon-32x32.png',  sizes: '32x32',  type: 'image/png' },
      { url: '/favicon-48x48.png',  sizes: '48x48',  type: 'image/png' },
      { url: '/favicon-192x192.png',sizes: '192x192',type: 'image/png' },
      { url: '/favicon-512x512.png',sizes: '512x512',type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xtreamranker.site',
    siteName: 'Xtream Ranker',
    title: 'Xtream Ranker | Digital Marketing Agency UK',
    description: 'SEO, Ads, Web Dev & Social Media — helping UK businesses grow 24/7.',
    images: [{ url: '/favicon-512x512.png', width: 512, height: 512, alt: 'Xtream Ranker' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xtream Ranker | Digital Marketing Agency UK',
    description: 'SEO, Ads, Web Dev & Social Media — helping UK businesses grow 24/7.',
    images: ['/favicon-512x512.png'],
  },
  alternates: { canonical: 'https://xtreamranker.site' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://xtreamranker.site/#business',
  name: 'Xtream Ranker',
  description: 'Digital marketing agency offering SEO, AI Optimization, Web Development, Google Ads, Meta Ads, Social Media Marketing, and Content Writing across the UK.',
  url: 'https://xtreamranker.site',
  telephone: '+447354908420',
  email: 'hello@xtreamranker.site',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Malcolm Rd, Bethnal Green',
    addressLocality: 'London',
    postalCode: 'E1 4HN',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.524, longitude: -0.055 },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  }],
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  priceRange: '££',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* ── Favicons ── */}
        <link rel="icon"             href="/favicon.ico"         sizes="any" />
        <link rel="icon"             href="/favicon-16x16.png"   sizes="16x16"   type="image/png" />
        <link rel="icon"             href="/favicon-32x32.png"   sizes="32x32"   type="image/png" />
        <link rel="icon"             href="/favicon-48x48.png"   sizes="48x48"   type="image/png" />
        <link rel="icon"             href="/favicon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon"    href="/favicon.ico" />
        <meta name="theme-color"     content="#050d1a" />
        <meta name="msapplication-TileColor"  content="#050d1a" />
        <meta name="msapplication-TileImage" content="/favicon-192x192.png" />
      </head>
      <body style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#050d1a', color: '#c8d6e8' }}>
        <Header />
        <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
