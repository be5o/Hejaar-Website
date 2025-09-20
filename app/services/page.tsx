'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen pt-20 px-6">
      <section className="max-w-6xl mx-auto">
        <h1
          className="text-4xl md:text-5xl mb-12 text-[#dabe6d]"
          style={{ fontFamily: 'ImprintMTShadow' }}
          data-aos="fade-up"
        >
          Our Services
        </h1>

        {/* Service 1 */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">
          <div data-aos="fade-right">
            <img
              src="/services/finishing.jpg"
              alt="Finishing"
              className="rounded-lg w-full h-auto border-2 border-[#dabe6d]"
            />
          </div>
          <div data-aos="fade-left">
            <h2
              className="text-2xl text-[#dabe6d] mb-3"
              style={{ fontFamily: 'ImprintMTShadow' }}
            >
              1. Finishing & Contracting for Residential Projects
            </h2>
            <p className="text-gray-300 text-lg">
              High-end architectural finishing and contracting tailored for residential developments, with attention to craftsmanship and lasting quality.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">
          <div className="md:order-2" data-aos="fade-left">
            <img
              src="/services/materials.jpeg"
              alt="Material Supply"
              className="rounded-lg w-full h-auto border-2 border-[#dabe6d]"
            />
          </div>
          <div className="md:order-1" data-aos="fade-right">
            <h2
              className="text-2xl text-[#dabe6d] mb-3"
              style={{ fontFamily: 'ImprintMTShadow' }}
            >
              2. Construction Material Supply
            </h2>
            <p className="text-gray-300 text-lg">
              Supplying construction materials with efficiency, reliability, and logistics support across all project scales.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">
          <div data-aos="fade-right">
            <img
              src="/services/management.jpg"
              alt="Project Management"
              className="rounded-lg w-full h-auto border-2 border-[#dabe6d]"
            />
          </div>
          <div data-aos="fade-left">
            <h2
              className="text-2xl text-[#dabe6d] mb-3"
              style={{ fontFamily: 'ImprintMTShadow' }}
            >
              3. Project Management & Consultation
            </h2>
            <ul className="text-gray-300 text-lg list-disc pl-5 space-y-2">
              <li>End-to-end management for residential and commercial builds.</li>
              <li>Site inspections and feasibility analysis.</li>
              <li>Budgeting, scheduling, and resource coordination.</li>
              <li>Collaboration with architects, engineers, and subcontractors.</li>
              <li>Quality control and compliance assurance.</li>
              <li>Post-construction support and maintenance.</li>
            </ul>
          </div>
        </div>

        {/* Company-wide summary */}
        <div className="mt-10 border-t border-gray-700 pt-10 text-gray-400 text-lg" data-aos="fade-up">
          <p>
            All services provided by <span className="text-[#dabe6d] font-semibold">HEJAAR CO.</span> are delivered with quality and care.
            Our team of professionals is fully integrated across all project phases — including structural design, interior decoration,
            technical office services, material supply, and electro-mechanical work. We deliver projects with precision and excellence.
          </p>
        </div>
      </section>
    </main>
  );
}
