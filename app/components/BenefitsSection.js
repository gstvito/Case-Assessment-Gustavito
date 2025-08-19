export default function BenefitsSection() {
  const benefits = [
    {
      icon: "💼",
      title: "Profile Optimization",
      description: "Optimasi profile LinkedIn Anda untuk muncul di pencarian recruiter dan menarik perhatian yang tepat"
    },
    {
      icon: "🌐",
      title: "Network Expansion",
      description: "Strategi networking yang efektif untuk memperluas koneksi profesional dan membangun relasi berkualitas"
    },
    {
      icon: "📝",
      title: "Content Strategy",
      description: "Panduan lengkap membuat konten yang engaging dan memposisikan Anda sebagai thought leader"
    },
    {
      icon: "🎯",
      title: "Job Opportunities",
      description: "Teknik untuk menarik peluang kerja, mendapat interview, dan negosiasi salary yang lebih baik"
    }
  ];

  return (
    <section id="benefits" className="py-16 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Manfaat Utama</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
