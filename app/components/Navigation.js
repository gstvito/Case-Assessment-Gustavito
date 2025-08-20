'use client';
import { useState } from 'react';

export default function Navigation({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { text: "Beranda", href: "#home" },
    { text: "Tentang", href: "#about" },
    { text: "Benefit", href: "#benefits" },
    { text: "Testimoni", href: "#testimonials" }
  ];

  const handleNavClick = (e, href) => {
    if (e) e.preventDefault();
    const sectionId = href.replace('#', '');
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick(null, '#home')}>
            <img 
              src="/logo_belajarlinkedin.png" 
              alt="Belajar LinkedIn Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <div className="text-lg md:text-xl font-bold text-[#0A66C2]">
              Belajar LinkedIn
            </div>
          </div>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 text-gray-700 hover:text-[#0A66C2] hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium cursor-pointer"
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <button 
            onClick={() => scrollToSection('cta')}
            className="hidden lg:block relative px-6 py-3 bg-[#0A66C2] text-white rounded-xl font-semibold hover:bg-[#004182] hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Daftar Sekarang
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-3 text-gray-700 hover:text-[#0A66C2] hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium cursor-pointer"
              >
                {item.text}
              </a>
            ))}
            {/* Mobile CTA Button */}
            <button 
              onClick={() => {
                scrollToSection('cta');
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 px-6 py-3 bg-[#0A66C2] text-white rounded-xl font-semibold hover:bg-[#004182] transition-all duration-200"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
