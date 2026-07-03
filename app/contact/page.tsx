import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Hejaar Contracting',
  description:
    'Get in touch with Hejaar Contracting for finishing and contracting services in Cairo and Giza, Egypt.',
  alternates: { canonical: 'https://hejaar-contracting-eg.com/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
