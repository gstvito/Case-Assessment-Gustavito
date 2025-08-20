'use client';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);


  // Fungsi handle navigation
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fungsi subscribe newsletter
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0A66C2] to-[#004182] animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96 bg-white rounded-full filter blur-3xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96 bg-cyan-300 rounded-full filter blur-3xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sosial Media dan Brand */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-xl md:text-2xl font-bold text-white drop-shadow-lg group-hover:text-[#0A66C2] transition-colors duration-300">
                Belajar LinkedIn
              </div>
            </div>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
              Platform pembelajaran terdepan untuk mengoptimalkan LinkedIn dan mengakselerasi karir profesional Anda.
            </p>
            
            {/* Newsletter sederhana */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 mb-6 border border-gray-800 hover:border-[#0A66C2] transition-colors duration-300">
              <h4 className="text-sm font-semibold mb-3 text-[#0A66C2]">Dapatkan Update Terbaru</h4>
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-3 py-2 bg-gray-800 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {subscribed ? '✓ Berhasil!' : 'Subscribe'}
                </button>
              </form>
              {subscribed && (
                <p className="text-green-400 text-xs mt-2 animate-pulse">
                  Terima kasih! Anda akan mendapat update terbaru dari kami.
                </p>
              )}
            </div>
            
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/company/belajar-linkedin" className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center hover:bg-[#004182] transition-all duration-300 group hover:scale-110 hover:rotate-3 hover:shadow-lg">
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/belajarlinkedin/" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 group hover:scale-110 hover:-rotate-3 hover:shadow-lg">
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Navigasi */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-[#0A66C2]">Quick Links</h3>
            <ul className="space-y-3 md:space-y-4">
              {[
                { label: "Tentang", href: "#about" },
                { label: "Manfaat", href: "#benefits" },
                { label: "Testimoni", href: "#testimonials" },
                { label: "Daftar Sekarang", href: "#cta" }
              ].map((link, index) => (
                <li key={index}> 
                  <button 
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-200 hover:text-white transition-all duration-300 flex items-center justify-center md:justify-start group hover:translate-x-2 cursor-pointer w-full text-left"
                  >
                    <span className="group-hover:text-[#0A66C2] transition-colors duration-300">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi Kontak dengan hover effects */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-[#0A66C2]">Kontak</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3 justify-center md:justify-start group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#0A66C2] rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#004182] group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-200 text-sm md:text-base group-hover:text-white transition-colors duration-300">Jakarta, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-center md:justify-start group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#0A66C2] rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#004182] group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-200 text-sm md:text-base group-hover:text-white transition-colors duration-300">belajarlinkedin@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-center md:justify-start group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#0A66C2] rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#004182] group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-200 text-sm md:text-base group-hover:text-white transition-colors duration-300">+62 xxx-xxxx-xxxx</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Copyright */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="text-gray-400 text-xs md:text-sm hover:text-white transition-colors duration-300">
              © {new Date().getFullYear()} Belajar LinkedIn. All rights reserved. 
            </div>
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-xs md:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:underline">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:underline">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:underline">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
