'use client';

export default function Navigation({ scrollToSection }) {
  const navItems = [
    { text: "Beranda", href: "#home" },
    { text: "Tentang", href: "#about" },
    { text: "Benefit", href: "#benefits" },
    { text: "Testimoni", href: "#testimonials" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo_belajarlinkedin.png" 
              alt="Belajar LinkedIn Logo" 
              className="w-16 h-16 object-contain"
            />
            <div className="text-xl font-bold text-[#0A66C2]">
              Belajar LinkedIn
            </div>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-1">
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

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('cta')}
            className="relative px-6 py-3 bg-[#0A66C2] text-white rounded-xl font-semibold hover:bg-[#004182] hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
}
