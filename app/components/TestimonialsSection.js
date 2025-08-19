'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager at Tech Corp",
      text: "Kelas ini benar-benar mengubah cara saya menggunakan LinkedIn. Dalam 3 bulan, network saya bertambah 300% dan mendapat 5 job interview!"
    },
    {
      name: "Ahmad Pratama",
      role: "Software Engineer",
      text: "Materi yang diajarkan sangat praktis dan mudah diterapkan. Sekarang profile LinkedIn saya selalu muncul di pencarian recruiter."
    },
    {
      name: "Maya Sari",
      role: "Business Development",
      text: "Thanks to this course, saya berhasil mendapat promosi dan sekarang menjadi thought leader di industri saya!"
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Kata Alumni</h2>
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center shadow-2xl">
            <div className="text-6xl mb-4">💬</div>
            <p className="text-xl mb-6 italic">"{testimonials[activeTestimonial].text}"</p>
            <div className="border-t border-blue-400 pt-4">
              <h4 className="font-bold text-lg">{testimonials[activeTestimonial].name}</h4>
              <p className="text-blue-200">{testimonials[activeTestimonial].role}</p>
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors focus-ring ${
                  index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
