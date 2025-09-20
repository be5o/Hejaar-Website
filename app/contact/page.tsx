'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-[#dabe6d] mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300">Have a question or want to work with us? We’d love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
  className="space-y-6 bg-[#171717] p-8 rounded-lg shadow-lg"
  data-aos="fade-right"
  action="https://formsubmit.co/abdullahmohbekhit@gmail.com"
  method="POST"
>
  {/* Optional Formsubmit settings */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_autoresponse" value="Thanks for contacting HEJAAR! We received your message and will get back to you soon." />

  <div>
    <label className="block mb-2 text-sm font-medium text-[#dabe6d]">Your Name</label>
    <input
      type="text"
      name="name"
      required
      className="w-full p-3 rounded bg-black border border-[#dabe6d] text-white placeholder-gray-400 focus:outline-none"
      placeholder="Enter your name"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-medium text-[#dabe6d]">Your Email</label>
    <input
      type="email"
      name="email"
      required
      className="w-full p-3 rounded bg-black border border-[#dabe6d] text-white placeholder-gray-400 focus:outline-none"
      placeholder="Enter your email"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-medium text-[#dabe6d]">Subject</label>
    <input
      type="text"
      name="subject"
      required
      className="w-full p-3 rounded bg-black border border-[#dabe6d] text-white placeholder-gray-400 focus:outline-none"
      placeholder="What's your inquiry?"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-medium text-[#dabe6d]">Message</label>
    <textarea
      name="message"
      rows={5}
      required
      className="w-full p-3 rounded bg-black border border-[#dabe6d] text-white placeholder-gray-400 focus:outline-none"
      placeholder="Type your message here..."
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-[#dabe6d] text-black font-semibold py-3 rounded hover:bg-[#e3cd85] transition duration-200"
  >
    Send Message
  </button>
</form>


          {/* Contact Info */}
          <div className="bg-[#0f0f0f] p-8 rounded-lg shadow-lg" data-aos="fade-left">
            <h2 className="text-2xl font-semibold text-[#dabe6d] mb-4">Our Contact Info</h2>
            <p className="text-gray-300 mb-4">
              Reach out to us via phone, email, or visit our office. We're happy to answer your questions and discuss
              your ideas.
            </p>
            <ul className="text-gray-300 space-y-4">
              <li><span className="text-[#dabe6d] font-medium">📍 Address:</span> Cairo, Egypt</li>
              <li><span className="text-[#dabe6d] font-medium">📞 Phone:</span> +20 123 456 7890</li>
              <li><span className="text-[#dabe6d] font-medium">📧 Email:</span> contact@hejaar.com</li>
            </ul>

            {/* Optional Map */}
            <div className="mt-6">
              <iframe
                src="https://maps.google.com/maps?q=cairo,%20egypt&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
