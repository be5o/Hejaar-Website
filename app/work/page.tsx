import type { Metadata } from 'next';
import WorkContent from './WorkContent';

export const metadata: Metadata = {
  title: 'Work With Us | Hejaar Contracting',
  description:
    'Join Hejaar Contracting or submit your residential or commercial finishing project in Cairo and Giza.',
  alternates: { canonical: 'https://hejaar-contracting-eg.com/work' },
};

export default function WorkWithUsPage() {
  return <WorkContent />;
}
