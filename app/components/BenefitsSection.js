'use client';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "UserIcon",
      title: "Strategi Personal Branding",
      description: "Pelajari cara membangun personal brand yang kuat dan menarik perhatian recruiter"
    },
    {
      icon: "ChartBarIcon",
      title: "Optimasi Profil LinkedIn",
      description: "Teknik lengkap untuk mengoptimalkan profil LinkedIn agar tampil di pencarian recruiter"
    },
    {
      icon: "UsersIcon",
      title: "Networking Profesional",
      description: "Cara membangun jaringan profesional yang berkualitas dan membuka peluang karir"
    },
    {
      icon: "PresentationChartLineIcon",
      title: "Content Marketing",
      description: "Strategi membuat konten yang engaging dan meningkatkan visibility di LinkedIn"
    }
  ];

  // Icon components
  const UserIcon = () => (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );

  const ChartBarIcon = () => (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      <circle cx="18" cy="8" r="2"/>
      <path d="M18 12c-1.1 0-2.13.19-3.07.5.94.71 1.69 1.58 2.23 2.5H22v-1c0-1.22-2.69-2-4-2z"/>
      <circle cx="6" cy="8" r="2"/>
      <path d="M6 12c-1.31 0-4 .78-4 2v1h4.77c.54-.92 1.29-1.79 2.23-2.5C7.87 12.19 6.9 12 6 12z"/>
    </svg>
  );

  const PresentationChartLineIcon = () => (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6l-2 2v1h6v-1l-2-2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H5V5h14v10z"/>
      <path d="M6.5 10L10 7.5 13.5 11l4-4L19 8.5l-5.5 5.5L10 10.5 6.5 13V10z"/>
    </svg>
  );

  const getIconComponent = (iconName) => {
    switch(iconName) {
      case 'UserIcon': return <UserIcon />;
      case 'ChartBarIcon': return <ChartBarIcon />;
      case 'UsersIcon': return <UsersIcon />;
      case 'PresentationChartLineIcon': return <PresentationChartLineIcon />;
      default: return <UserIcon />;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Course Ini?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan keunggulan kompetitif dengan strategi LinkedIn yang terbukti efektif
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#0A66C2] to-[#004182] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {getIconComponent(benefit.icon)}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
