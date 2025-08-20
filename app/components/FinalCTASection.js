export default function FinalCTASection() {
  return (
    <section id="cta" className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Gambar Banner */}
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Transform Your LinkedIn Presence"
              className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/90 to-[#004182]/80"></div>

            {/* Overlay konten */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  Siap Tingkatkan
                  <br />
                  Karir LinkedIn Anda?
                </h2>
                <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
                  Transformasi karir Anda dimulai dari profile LinkedIn yang
                  powerful. Pelajari strategi terbukti untuk membangun personal
                  brand dan menarik peluang terbaik.
                </p>
                <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-xl md:rounded-2xl text-base md:text-lg lg:text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span className="relative flex items-center justify-center">
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
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
