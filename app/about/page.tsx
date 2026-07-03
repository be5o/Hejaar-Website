import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us | Hejaar Contracting',
  description:
    'Learn about Hejaar Contracting — a Cairo and Giza based finishing and contracting company blending timeless craftsmanship with modern architecture and design.',
  alternates: { canonical: 'https://hejaar-contracting-eg.com/about' },
};

export default function AboutPage() {
  return <AboutContent />;
}
