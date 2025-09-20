// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import ClientWrapper from './components/ClientWrapper';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hejaar Contracting',
  description: 'Build to Last',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
