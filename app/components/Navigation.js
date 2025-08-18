'use client';

export default function Navigation({ scrollToSection }) {
  const navItems = [
    { text: "Beranda", href: "/" },
    { text: "Tentang Kami", href: "#about" },
    { text: "Testimoni", href: "#testimonials" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Belajar LinkedIn</div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors focus-ring"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
}
