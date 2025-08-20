export default function FinalCTASection() {
  return (
    <section id="cta" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Banner Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Transform Your LinkedIn Presence"
              className="w-full h-[400px] object-cover"
            />

            {/* Overlay untuk kontras text */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/90 to-[#004182]/80"></div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Siap Tingkatkan
                  <br />
                  Karir LinkedIn Anda?
                </h2>
                <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Transformasi karir Anda dimulai dari profile LinkedIn yang
                  powerful. Pelajari strategi terbukti untuk membangun personal
                  brand dan menarik peluang terbaik.
                </p>
                <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold py-4 px-12 rounded-2xl text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span className="relative flex items-center">
                    Daftar Sekarang
                    <svg
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
