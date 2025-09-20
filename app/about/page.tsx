'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen pt-20 px-6">
      <section className="max-w-6xl mx-auto">
        {/* OUR STORY */}
        <h1 className="text-4xl md:text-5xl font text-[#e3cd85] mb-6" data-aos="fade-up"   style={{ fontFamily: 'ImprintMTShadow' }} >
          Our Story
        </h1>
        <p className="text-lg text-gray-300 leading-7 mb-4" data-aos="fade-up" data-aos-delay="100">
          <strong>HEJAAR: A Legacy of Vision, Craftsmanship, and Innovation.</strong>
        </p>
        <p className="text-lg text-gray-300 leading-7 mb-4" data-aos="fade-up" data-aos-delay="200">
          HEJAAR is the embodiment of a shared vision—a collective of pioneers united under one name, driven by a singular mission: to redefine the standards of architecture, design, and finishing.
          Our purpose is unwavering—to deliver not only satisfaction, but moments of joy that exceed expectations.
        </p>
        <p className="text-lg text-gray-300 leading-7 mb-4" data-aos="fade-up" data-aos-delay="300">
          Born at the intersection of cultural heritage and modern innovation, HEJAAR blends timeless elegance with modern design. From creative hubs to sophisticated commercial spaces,
          we craft environments that honor the past and embrace the future.
        </p>
        <p className="text-lg text-gray-300 leading-7 mb-4" data-aos="fade-up" data-aos-delay="400">
          Today, HEJAAR has evolved into more than a name—it’s a symbol of excellence, creativity, and commitment. As part of our growth, HEJAAR serves as the umbrella for:
        </p>
      
  <ul className="list-disc ml-6 text-gray-300 mb-10" data-aos="fade-up" data-aos-delay="500">
  <li>
    <span className="text-[#dabe6d] font-medium text-xl" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      HEJAAR
    </span> – High-end finishing and interior contracting
  </li>
  <li>
    <span className="text-[#dabe6d] font-medium text-xl" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      SITE
    </span> – Engineering, construction, and site execution
  </li>
  <li>
    <span className="text-[#dabe6d] font-medium text-xl" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      Mawan.com
    </span> – Digital e-commerce for construction materials
  </li>
</ul>


        {/* VISION */}
        <h2 className="text-4xl font text-[#e3cd85] mb-4" data-aos="fade-up"  style={{ fontFamily: 'ImprintMTShadow' }} >Vision</h2>
        <p className="text-lg text-gray-300 leading-7 mb-10" data-aos="fade-up" data-aos-delay="100">
          To be a leading force in architectural innovation and construction excellence, where heritage meets modernity,
          and every project becomes a benchmark of quality, creativity, and client satisfaction across the region and beyond.
        </p>

        {/* MISSION */}
        <h2 className="text-4xl font  text-[#e3cd85] mb-4" data-aos="fade-up"   style={{ fontFamily: 'ImprintMTShadow' }}>Mission</h2>
        <ul className="list-disc ml-6 text-gray-300 leading-7 space-y-3 mb-10" data-aos="fade-up" data-aos-delay="100">
          <li>Deliver exceptional construction and finishing services by merging classic artistry with modern execution.</li>
          <li>Ensure client satisfaction through transparency, accuracy, and dedication.</li>
          <li>Empower our team with innovation, integrity, and passion for excellence.</li>
          <li>Continuously raise quality, safety, and sustainability standards.</li>
        </ul>

        {/* VALUES */}
        <h2 className="text-4xl font text-[#e3cd85] mb-6" data-aos="fade-up"   style={{ fontFamily: 'ImprintMTShadow' }} >Goals & Values</h2>
        <div className="space-y-6 text-gray-300" data-aos="fade-up" data-aos-delay="100">
          <div>
            <h3 className="text-lg font-semibold text-white">1. Deliver Unmatched Excellence</h3>
            <p>We consistently deliver superior construction and finishing services that exceed expectations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">2. Honor Heritage, Drive Innovation</h3>
            <p>We blend timeless craftsmanship with modern techniques to inspire across generations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">3. Commit to Client Delight</h3>
            <p>We foster partnerships through accuracy, care, and passion.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">4. Grow Beyond Borders</h3>
            <p>We aim to expand across the Middle East with a strong brand and quality-first approach.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">5. Champion Sustainability & Safety</h3>
            <p>We prioritize eco-friendly practices and top-tier safety in all projects.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">6. Invest in People</h3>
            <p>We empower our team through collaboration, growth, and innovation.</p>
          </div>
        </div>

        {/* SUBCOMPANIES */}
        <h2 className="text-5xl font  text-[#e3cd85] mt-16 mb-10 text-center" data-aos="fade-up"   
        style={{ fontFamily: 'ImprintMTShadow' }} >
          Our Brands
        </h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
  {/* SITE - Left */}
  <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
    <img
      src="/site-logo.png"
      alt="Site Logo"
      className="w-36 h-36 rounded-full object-cover mb-4 border-2 border-[#dabe6d]"
    />
    
    <p className="text-lg text-gray-300 mt-2 max-w-xs">
      Engineering, construction, and site execution
    </p>
  </div>

  {/* MAWAN - Right */}
  <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
    <img
      src="/mawan-logo.png"
      alt="Mawan Logo"
      className="w-36 h-36 rounded-full object-cover mb-4 border-2 border-[#dabe6d]"
    />
    
    <p className="text-lg text-gray-300 mt-2 max-w-xs">
      Digital e-commerce for construction materials
    </p>
  </div>
</div>

      </section>
    </main>
  );
}
