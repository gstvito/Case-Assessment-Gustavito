'use client';

export default function HeroSection({ isVisible, scrollToSection }) {
  return (
    <section className={`pt-24 pb-16 px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Mastering LinkedIn for 
          <span className="text-blue-600 block">Career Growth</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transformasi karir Anda dimulai dari profile LinkedIn yang powerful. Pelajari strategi terbukti untuk membangun personal brand dan menarik peluang terbaik.
        </p>
        <button 
          onClick={() => scrollToSection('cta')}
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus-ring"
        >
          Daftar Sekarang - Mulai Transformasi! 🚀
        </button>
        <div className="mt-12">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4 animate-float">📈</div>
                <h3 className="text-2xl font-bold mb-2">Your LinkedIn Success Journey</h3>
                <p className="text-blue-100">Starts Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
