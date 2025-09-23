'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-0 pb-10 px-6 mt-20">
      {/* Golden Line at the Top */}
      <div className="h-0.5 w-full bg-[#dabe6d]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-[#dabe6d] mb-3">Hejaar Contracting</h3>
          <p className="text-sm text-gray-400">
            Founded in 2019 in Cairo, Egypt. We specialize in construction, finishing, and interior design solutions for residential and commercial projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#dabe6d] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#dabe6d]">Home</Link></li>
            <li><Link href="/#services" className="hover:text-[#dabe6d]">Our Services</Link></li>
            <li><Link href="/about" className="hover:text-[#dabe6d]">About Us</Link></li>
            <li><Link href="/work" className="hover:text-[#dabe6d]">Work With Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#dabe6d]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#dabe6d] mb-3">Contact</h3>
          <p className="text-sm text-gray-400">📍 Cairo, Egypt</p>
          <p className="text-sm text-gray-400">📞 +20 100 000 0000</p>
          <p className="text-sm text-gray-400">✉️ info@hejaar.com</p>
        </div>
      </div>

      <div className="mt-2 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Hejaar Contracting. All rights reserved.
      </div>
    </footer>
  );
}
