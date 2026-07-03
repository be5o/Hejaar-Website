import type { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = {
  title: 'Our Projects in Cairo & Giza | Hejaar Contracting',
  description:
    'Explore residential and commercial finishing and contracting projects delivered by Hejaar Contracting across New Cairo, Giza, 6th of October, and the New Administrative Capital.',
  alternates: { canonical: 'https://hejaar-contracting-eg.com/Projects' },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
