// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://hejaar-contracting-eg.com'),
  title: {
    default: 'Hejaar Contracting | Finishing & Contracting Company in Cairo & Giza',
    template: '%s | Hejaar Contracting',
  },
  description:
    'Hejaar Contracting provides premium residential and commercial finishing, contracting, architecture, and design services across Cairo and Giza, Egypt. تشطيبات شقق، فلل، محلات وواجهات في القاهرة والجيزة.',
  keywords: [
    'Hejaar Contracting',
    'contracting company Cairo',
    'finishing company Egypt',
    'apartment finishing Cairo',
    'villa finishing Giza',
    'shop finishing Egypt',
    'facade design Cairo',
    'construction company Cairo Giza',
    'تشطيبات',
    'تشطيب',
    'تشطيب شقة',
    'تشطيب فيلا',
    'تشطيب فلة',
    'تشطيب محل',
    'واجهات',
  ],
  alternates: {
    canonical: 'https://hejaar-contracting-eg.com',
  },
  openGraph: {
    title: 'Hejaar Contracting | Finishing & Contracting Company in Cairo & Giza',
    description:
      'Premium residential and commercial finishing, contracting, and design services across Cairo and Giza, Egypt.',
    url: 'https://hejaar-contracting-eg.com',
    siteName: 'Hejaar Contracting',
    locale: 'en_EG',
    alternateLocale: 'ar_EG',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Hejaar Contracting',
  alternateName: 'هجار للمقاولات والتشطيبات',
  description:
    'Residential and commercial finishing, contracting, architecture, and design services in Cairo and Giza, Egypt.',
  url: 'https://hejaar-contracting-eg.com',
  image: 'https://hejaar-contracting-eg.com/logo.png',
  areaServed: [
    { '@type': 'City', name: 'Cairo' },
    { '@type': 'City', name: 'Giza' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressRegion: 'Cairo Governorate',
    addressCountry: 'EG',
  },
  knowsLanguage: ['en', 'ar'],
  keywords:
    'تشطيبات, تشطيب, تشطيب شقة, تشطيب فيلا, تشطيب محل, واجهات, apartment finishing, villa finishing, shop finishing, facades, contracting company Cairo, finishing company Giza',
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Apartment Finishing / تشطيب شقة' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Villa Finishing / تشطيب فيلا' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shop Finishing / تشطيب محل' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facades / واجهات' } },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
