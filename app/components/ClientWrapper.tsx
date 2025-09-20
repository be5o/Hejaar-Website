'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Hide after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showWelcome ? (
        <div
          className="w-screen h-screen flex items-center justify-center text-4xl md:text-6xl font-bold text-[#dabe6d] bg-black z-50 fixed top-0 left-0 animate-fadeInOut"
        >
          Welcome to Hejaar Contracting
        </div>
      ) : (
        <>
          <div data-aos="fade-down" className="text-center py-4">
            <img
              src="/logo.png"
              alt="Hejaar Logo"
              className="w-32 mx-auto"
              data-aos="zoom-in"
            />
          </div>
          {children}
        </>
      )}
    </>
  );
};

export default ClientWrapper;
