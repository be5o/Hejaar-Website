// app/layout.tsx
import './globals.css';
import Navbar from '../app/components/Navbar';
 // adjust if path differs

 import Footer from '../app/components/footer'; // make sure the path is correct


export const metadata = {
  title: 'Hejaar Contracting',
  description: 'Build to Last',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}