export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-[#0A66C2] rounded-full text-sm font-semibold mb-4">
                TENTANG KURSUS
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Mengapa Kursus Ini 
                <span className="block bg-gradient-to-r from-[#0A66C2] to-[#004182] bg-clip-text text-transparent">
                  Berbeda?
                </span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Kursus "Mastering LinkedIn for Career Growth" dirancang khusus untuk profesional Indonesia yang ingin memaksimalkan potensi LinkedIn untuk mengembangkan karir mereka.
            </p>

            {/* Key Features */}
            <div className="space-y-4">
              {[
                "Strategi profil yang terbukti meningkatkan visibilitas",
                "Teknik networking yang efektif dengan C-level executives",
                "Content strategy yang membangun personal brand",
                "Panduan mendapatkan job offer melalui LinkedIn"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#0A66C2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">Materi Kursus</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    12 Modul
                  </span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { title: "LinkedIn Profile Optimization", duration: "2 jam", progress: 100 },
                    { title: "Advanced Networking Strategies", duration: "3 jam", progress: 85 },
                    { title: "Content Creation & Strategy", duration: "2.5 jam", progress: 70 },
                    { title: "Job Search Mastery", duration: "2 jam", progress: 45 },
                    { title: "Personal Branding", duration: "1.5 jam", progress: 20 }
                  ].map((module, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{module.title}</h4>
                        <span className="text-sm text-gray-500">{module.duration}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#0A66C2] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Total durasi</span>
                    <span className="font-semibold">11 jam materi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
