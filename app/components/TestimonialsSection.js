'use client';
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Deteksi ketika section masuk viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Auto play testimonials
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Fungsi navigasi manual
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const testimonials = [
    {
      name: "Gustavito Putra",
      role: "Web Developer at Belajar LinkedIn",
      image: "/api/placeholder/80/80",
      content: "Course ini benar-benar mengubah cara saya menggunakan LinkedIn. Dalam 3 bulan, saya mendapat 5 job offer dari perusahaan top!",
      rating: 5
    },
    {
      name: "Izzati Deva",
      role: "Software Engineer at Gojek",
      image: "/api/placeholder/80/80",
      content: "Materi yang diajarkan sangat praktis dan aplikatif. Sekarang profil LinkedIn saya selalu muncul di pencarian recruiter.",
      rating: 5
    },
    {
      name: "Fajrul",
      role: "Front End Developer at Solution Labs",
      image: "/api/placeholder/80/80",
      content: "Investasi terbaik untuk karir saya! Networking yang saya bangun dari course ini membuka banyak peluang baru.",
      rating: 5
    }
  ];

  return (
    <section id='testimonials' className="py-20 bg-gradient-to-r from-[#0A66C2] to-[#004182] relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Apa Kata Alumni Kami?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Dengarkan kisah sukses mereka yang telah mengikuti course LinkedIn mastery
          </p>
        </div>

        <div className="relative">
          <div className={`bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Play/Pause Control */}
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 w-10 h-10 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:bg-[#004182] transition-colors duration-300"
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-r from-[#0A66C2] to-[#004182] rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  &ldquo;{testimonials[currentTestimonial].content}&rdquo;
                </blockquote>
                
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-[#0A66C2] font-medium">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tombol Navigasi Carousel */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigasi Dot */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
