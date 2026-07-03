import type { Metadata } from 'next';
import OffersContent from './OffersContent';

export const metadata: Metadata = {
  title: 'Exclusive Finishing Offers in Cairo & Giza | Hejaar Contracting',
  description:
    'عروض تشطيب حصرية لشقق وفلل ومكاتب في القاهرة والجيزة — تشطيب كامل، إشراف بخصم، وباقة VIP Smart. Exclusive finishing offers for apartments, villas, and offices in Cairo and Giza.',
  alternates: { canonical: 'https://hejaar-contracting-eg.com/offers' },
};

export default function OffersPage() {
  return <OffersContent />;
}
