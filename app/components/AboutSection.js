'use client';
import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    "Strategi profil yang terbukti meningkatkan visibilitas",
    "Teknik networking yang efektif dengan C-level executives", 
    "Content strategy yang membangun personal brand",
    "Panduan mendapatkan job offer melalui LinkedIn"
  ];

  return (
    <section id="about" className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-10 xl:gap-16 items-center">
          {/* Konten Bagian Kiri */}
          <div className={`space-y-6 lg:space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <span className="inline-block px-3 md:px-4 py-2 bg-blue-100 text-[#0A66C2] rounded-full text-sm font-semibold mb-4">
                TENTANG KURSUS
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-tight">
                Mengapa Kursus Ini 
                <span className="block bg-gradient-to-r from-[#0A66C2] to-[#004182] bg-clip-text text-transparent">
                  Berbeda?
                </span>
              </h2>
            </div>
            
            <p className="text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed px-4 lg:px-0">
              Kursus &ldquo;Mastering LinkedIn for Career Growth&rdquo; dirancang khusus untuk profesional Indonesia yang ingin memaksimalkan potensi LinkedIn untuk mengembangkan karir mereka.
            </p>

            {/* Fitur Utama */}
            <div className="space-y-3 md:space-y-4 max-w-md mx-auto lg:max-w-none">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 text-left transition-all duration-500 cursor-pointer group hover:scale-105 hover:bg-blue-50 hover:p-3  ${
                    activeFeature === index ? ' p-3 scale-105' : 'p-3'
                  }`}
                  onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                  style={{ transitionDelay: `${index * 10}ms` }}
                >
                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    activeFeature === index ? 'bg-[#0A66C2] scale-125' : 'bg-[#0A66C2] group-hover:scale-110'
                  }`}>
                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={`text-sm md:text-base font-medium transition-all duration-300 ${
                    activeFeature === index ? 'text-[#0A66C2] font-semibold' : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Konten Bagian Kanan */}
          <div className={`relative mt-8 lg:mt-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-6 lg:p-6 xl:p-8 border border-gray-100 max-w-lg mx-auto lg:max-w-md xl:max-w-none hover:shadow-3xl transition-shadow duration-500">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl lg:text-lg xl:text-2xl font-bold text-gray-900">Materi Kursus</h3>
                  <span className="px-2 md:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-semibold">
                    12 Modul
                  </span>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  {[
                    { title: "LinkedIn Profile Optimization", duration: "2 jam", progress: 100 },
                    { title: "Advanced Networking Strategies", duration: "3 jam", progress: 85 },
                    { title: "Content Creation & Strategy", duration: "2.5 jam", progress: 70 },
                    { title: "Job Search Mastery", duration: "2 jam", progress: 45 },
                    { title: "Personal Branding", duration: "1.5 jam", progress: 20 }
                  ].map((module, index) => (
                    <div key={index} className="p-3 md:p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm md:text-base font-semibold text-gray-900">{module.title}</h4>
                        <span className="text-xs md:text-sm text-gray-500">{module.duration}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                        <div 
                          className="bg-[#0A66C2] h-1.5 md:h-2 rounded-full transition-all duration-300"
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 md:pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-600">
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
