'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOutWelcome, setFadeOutWelcome] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOutWelcome(true), 3000); // start fading out
    const timer2 = setTimeout(() => {
      setShowWelcome(false);
      setShowLogo(true);
    }, 2000); // after fade completes

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
     <section className="relative h-[85vh] w-full overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dimmed Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center text-[#dabe6d] h-full px-4">
          {/* Welcome Text */}
          {showWelcome && (
            <h1
              className={`text-4xl md:text-6xl mb-4 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)] transition-opacity duration-1000 ease-in-out ${fadeOutWelcome ? 'opacity-0' : 'opacity-100'}`}
              style={{ fontFamily: 'ImprintMTShadow' }}
            >
              WELCOME TO HEJAAR CONTRACTING
            </h1>
          )}

          {/* Logo and Content */}
          {showLogo && (
            <div className="animate-fade-in flex flex-col items-center">
              <Image
                src="/logo.png"
                alt="Hejaar Logo"
                width={400}
                height={400}
                className="mb-6"
              />
              <h2 className="text-2xl italic mb-6">Crafting Your Imagination</h2>
              <p className="text-base md:text-lg max-w-5xl text-[#fff5d8]" >
                We are a leading diversified company carrying out and serve a full services of construction technologies dedicated to building
                 and improving all aspects of construction field,according to client needs and desires.Founded in 2019 and based in 
                 <span className="text-[#dabe6d] font-medium">(Cairo, Egypt)</span> and aim to
                expand internationally. We’re capable of developing any type of project to the desired state of the client.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section id="services" className="py-20 px-4 bg-[#fff5d8]">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl font-bold text-[#191970]">Service Provided</h2>
          <p className="italic text-2xl mt-2 text-[#000080]">What We Aim For</p>
          <p className="mt-4 max-w-6xl mx-auto text-[#265183]">
            All services provided by HEJAAR are done so with quality and care. Our team of professionals are
            stick together over the years of working in the industry under different capacities. Our line of work is
            vast: Structural & Architectural Design, Interior & Decoration, Technical Office, Supplying, and
            Electro-mechanical works. We're capable of developing any type of project to the desired state of the client.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: 'Construction Technology',
              subtitle: 'Passion For Excellence',
              image: '/1.jpg',
            },
            {
              title: 'Design & Work-Shop Drawing',
              subtitle: 'Building Options',
              image: '/2.jpg',
            },
            {
              title: 'Architecture Design',
              subtitle: 'Design the Beauty',
              image: '/3.jpg',
            },
            {
              title: 'Finishing',
              subtitle: 'Customized For You',
              image: '/4.jpg',
            },
            {
              title: 'Mega Project Construction',
              subtitle: 'Professional Integration',
              image: '/5.jpg',
            },
            {
              title: 'Renovation & Repair',
              subtitle: 'Renew Your Life',
              image: '/6.jpg',
            },
            {
              title: 'Earth Works',
              subtitle: 'Crafted For You',
              image: '/7.jpg',
            },
            {
              title: 'Roads Construction',
              subtitle: 'Perfect Quality',
              image: '/8.jpg',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden rounded-md"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-black">{service.title}</h3>
                <p className="italic text-[#dabe6d] mt-2">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* Tailwind animation (put in globals.css or tailwind config if not already present) */
/*
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
*/
