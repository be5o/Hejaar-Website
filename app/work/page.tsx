'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WorkWithUsPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const [category, setCategory] = useState('');

  return (
    <main className="bg-black text-white min-h-screen pt-20 px-6">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <h1
          className="text-4xl md:text-5xl text-[#dabe6d] mb-10 text-center"
          style={{ fontFamily: 'ImprintMTShadow' }}
        >
          Work With Us
        </h1>

        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSeuUMrrUJyO3oSA2sBU5Z2h5q-P1DXLb0B3s7j1bjX9pDJoWQ/formResponse"
          method="POST"
          target="_blank"
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-1 text-[#dabe6d]">Name *</label>
            <input
              type="text"
              name="entry.1729513073"
              required
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#444] rounded-md text-white"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block mb-1 text-[#dabe6d]">Company Name</label>
            <input
              type="text"
              name="entry.1440508953"
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#444] rounded-md text-white"
            />
          </div>

          {/* Type of Project */}
          <div>
            <label className="block mb-1 text-[#dabe6d]">Type of Project *</label>
            <select
              name="entry.1784420581"
              required
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#444] rounded-md text-white"
            >
              <option value="">-- Select --</option>
              <option value="Finishing">Finishing</option>
              <option value="Redesign">Redesign</option>
            </select>
          </div>

          {/* Project Category */}
          <div>
            <label className="block mb-1 text-[#dabe6d]">Project Category *</label>
            <select
              name="entry.565020474"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#444] rounded-md text-white"
            >
              <option value="">-- Select --</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          {/* If Commercial */}
          {category === 'Commercial' && (
            <div>
              <label className="block mb-1 text-[#dabe6d]">Type of Commercial Project *</label>
              <input
                type="text"
                name="entry.2087749605"
                required
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#444] rounded-md text-white"
              />
            </div>
          )}

          {/* If Residential */}
          {category === 'Residential' && (
            <>
              <div>
                <label className="block mb-1 text-[#dabe6d]">Villa or Apartment *</label>
                <select
                  name="entry.556267431"
                  required
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#444] rounded-md text-white"
                >
                  <option value="">-- Select --</option>
                  <option value="Villa">Villa</option>
                  <option value="Apartment">Apartment</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-[#dabe6d]">Area (m²) *</label>
                <input
                  type="number"
                  name="entry.2116250539"
                  required
                  className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#444] rounded-md text-white"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="bg-[#dabe6d] text-black px-6 py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
