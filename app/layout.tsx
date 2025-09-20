import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import AosInitializer from './ClientWrapper';
// ...existing code...
import Navbar from './components/Navbar';
// ...existing code...




// Initialize AOS for animations
export const ClientWrapper = AosInitializer;

// Metadata for the application
// This will be used for SEO and social sharing
// Adjust the title and description as needed
// You can also add Open Graph tags here if needed
// Example: Open Graph tags for better social media sharing
// <meta property="og:title" content="Hejaar Construction" />
// <meta property="og:description" content="Professional construction and finishing services in Egypt." />
// <meta property="og:image" content="/path/to/image.jpg" />
// <meta property="og:url" content="https://hejaar.com" />
// <meta name="twitter:card" content="summary_large_image" />
// <meta name="twitter:title" content="Hejaar Construction" />
// <meta name="twitter:description" content="Professional construction and finishing services in Egypt." />
// <meta name="twitter:image" content="/path/to/image.jpg" />
export const metadata: Metadata = {
  title: 'Hejaar Construction',
  description: 'Professional construction and finishing services in Egypt.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        {/* Import Navbar once it's created */}
       <Navbar />
    

        <ClientWrapper />

        <main className="max-w-6xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
