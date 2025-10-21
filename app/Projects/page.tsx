"use client";

import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const projects = [
    "SARAI NEW CAIRO (S1 & S2)",
    "PGS CO (OIL & GAS) FRENCH BRANCH IN EGYPT",
    "EL MANSOURA 7 NEW ADMINISTRATIVE CAPITAL",
    "NEW GIZA COMPOUND, GIZA",
    "CELIA COMPOUND ADMINISTRATIVE CAPITAL",
    "AL-MAADI APARTMENT",
    "ARABIA COMPOUND 'SHOP-DRAWING'",
    "PALACE RENOVATION (NORTH-COAST)",
    "R6 VILLA ADMINISTRATIVE CAPITAL",
    "AL-NASR EXTENSION PROJECT APARTMENT",
    "OCTOBER PLAZA (6TH OF OCTOBER CITY)",
    "MIRAGE GARDENS PROJECT",
    "FIFTH SETTLEMENT VILLA",
  ];

  // 10 total images (5 per side)
  const sideImages = [
    "/proj1.png", "/proj2.png", "/proj3.png", "/proj4.jpg", "/proj5.jpg",
    "/proj6.jpg", "/proj7.jpg", "/proj8.jpg", "/proj9.png", "/proj10.png",
  ];

  const listRef = useRef<HTMLDivElement | null>(null);
const [listHeight, setListHeight] = useState(0);

useEffect(() => {
  if (typeof window !== "undefined" && listRef.current) {
    setListHeight(listRef.current.clientHeight);
  }
}, []);


  // Split the 10 images into 5 left + 5 right
  const leftImages = sideImages.slice(0, 5);
  const rightImages = sideImages.slice(5, 10);

  return (
    <main className="bg-black text-white pt-24 pb-32 px-4">
      <h1
        className="text-center text-4xl md:text-5xl text-[#dabe6d] mb-16"
        style={{ fontFamily: "ImprintMTShadow" }}
        data-aos="fade-down"
      >
        Our Projects
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Side Images */}
        <div
          className="hidden md:flex flex-col justify-between gap-6"
          style={{ height: `${listHeight}px` }}
        >
          {leftImages.map((src, index) => (
            <img
              key={`left-${index}`}
              src={src}
              alt={`Project Left ${index}`}
              className="rounded-lg object-cover w-52 flex-1 shadow-lg hover:scale-105 transition-transform duration-300"
              data-aos="fade-right"
              data-aos-delay={`${index * 100}`}
            />
          ))}
        </div>

        {/* Project List */}
        <div
          className="flex-1 w-full max-w-2xl space-y-4"
          ref={listRef}
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] text-white py-4 px-6 rounded-md shadow-lg border-l-4 border-[#dabe6d]"
              data-aos="fade-up"
              data-aos-delay={`${idx * 50}`}
            >
              {project}
            </div>
          ))}
        </div>

        {/* Right Side Images */}
        <div
          className="hidden md:flex flex-col justify-between gap-6"
          style={{ height: `${listHeight}px` }}
        >
          {rightImages.map((src, index) => (
            <img
              key={`right-${index}`}
              src={src}
              alt={`Project Right ${index}`}
              className="rounded-lg object-cover w-52 flex-1 shadow-lg hover:scale-105 transition-transform duration-300"
              data-aos="fade-left"
              data-aos-delay={`${index * 100}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
