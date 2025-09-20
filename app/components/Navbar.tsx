'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/Projects' },
    { name: 'Work With Us', href: '/work' },
    { name: 'Offers', href: '/offers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const linkClasses = (href: string) =>
    `transition-colors duration-200 text-lg font-medium px-1 ${
      pathname === href ? 'text-white' : 'text-[#dabe6d] hover:text-white'
    }`;

  return (
    <header
      className="sticky top-0 z-50 w-full px-6 py-4 border-b border-[#dabe6d] bg-black/80 backdrop-blur-md text-white"
          /*bright yellow #facc15 */
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Hejaar Logo Image */}
        <Link href="/">
          <img
            src="/logo-navbar.png"
            alt="Hejaar Logo"
            className="h-28 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8" style={{ fontFamily: 'Times New Roman, serif' }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className={linkClasses(link.href)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul
          className="md:hidden mt-4 flex flex-col gap-4 text-lg font-medium text-center"
          style={{ fontFamily: 'Times New Roman, serif' }}
          data-aos="fade-down"
          data-aos-duration="600"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={linkClasses(link.href)}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
