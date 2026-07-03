import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Hejaar Contracting | Finishing & Contracting Company in Cairo & Giza',
  description:
    'Hejaar Contracting builds and finishes apartments, villas, shops, and facades across Cairo and Giza with premium craftsmanship. تشطيبات شقق وفلل ومحلات وواجهات في القاهرة والجيزة.',
  alternates: { canonical: 'https://hejaar-contracting-eg.com' },
};

export default function HomePage() {
  return <HomeContent />;
}
