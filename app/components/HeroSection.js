'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function HeroSection({ isVisible, scrollToSection }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCTAClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      scrollToSection("cta");
      setIsLoading(false);
    }, 800);
  };
  return (
    <section
      className={`relative pt-32 pb-20 px-4 overflow-hidden transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Konten Bagian Kiri */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Judul Utama */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-800">
              Mastering LinkedIn
              <br />
              <span className="text-[#0A66C2]">for Career Growth</span>
            </h1>

            {/* Sub Judul */}
            <p className="text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-600 leading-relaxed px-4 lg:px-0">
              Transformasi karir Anda dimulai dari profile LinkedIn yang
              powerful. Pelajari strategi terbukti untuk membangun personal brand dan
              menarik peluang terbaik.
            </p>

            {/* Tombol CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <button
                onClick={handleCTAClick}
                disabled={isLoading}
                className="group relative px-6 md:px-8 lg:px-6 xl:px-8 py-3 md:py-4 bg-[#0A66C2] text-white rounded-2xl text-base md:text-lg lg:text-base xl:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-[#004182] whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </>
                  ) : (
                    <>
                      Daftar Sekarang
                      <svg
                        className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="px-6 md:px-8 lg:px-6 xl:px-8 py-3 md:py-4 bg-white text-gray-700 rounded-2xl text-base md:text-lg lg:text-base xl:text-lg font-semibold border-2 border-gray-200 hover:border-[#0A66C2] hover:bg-blue-50 transition-all duration-300 flex items-center justify-center whitespace-nowrap"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>

          {/* Konten Bagian Kanan (Gambar) */}
          <div className="relative mt-8 lg:mt-0">
            {/* Kontainer Gambar */}
            <div className="relative z-10 max-w-md md:max-w-lg mx-auto lg:max-w-md xl:max-w-none">
              {/* Gambar Utama */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/hero_image.jpg"
                  alt="LinkedIn Mastery Course"
                  width={600}
                  height={450}
                  className="w-full h-[300px] md:h-[400px] lg:h-[380px] xl:h-[450px] object-cover transform hover:scale-105 transition-transform duration-500"
                />

                {/* Elemen overlay */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-[#0A66C2] rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistik */}
            <div className="mt-6 md:mt-8 grid grid-cols-3 gap-3 md:gap-4 max-w-md md:max-w-lg mx-auto lg:max-w-md xl:max-w-none">
              <div className="bg-white p-3 md:p-4 lg:p-4 xl:p-6 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-[#0A66C2] group-hover:text-[#004182] transition-colors duration-300">300%</div>
                <div className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Network Growth</div>
              </div>
              <div className="bg-white p-3 md:p-4 lg:p-4 xl:p-6 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-[#0A66C2] group-hover:text-[#004182] transition-colors duration-300">5x</div>
                <div className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">More Interviews</div>
              </div>
              <div className="bg-white p-3 md:p-4 lg:p-4 xl:p-6 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-[#0A66C2] group-hover:text-[#004182] transition-colors duration-300">50%</div>
                <div className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Salary Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
