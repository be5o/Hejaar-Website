import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Finishing & Contracting Services in Cairo & Giza | Hejaar Contracting',
  description:
    'Full finishing and contracting services for apartments, villas, shops, and commercial facades in Cairo and Giza — تشطيب شقة، تشطيب فيلا، تشطيب محل، واجهات.',
  alternates: { canonical: 'https://hejaar-contracting-eg.com/services' },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
