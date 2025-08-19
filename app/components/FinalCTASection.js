export default function FinalCTASection() {
  return (
    <section id="cta" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Transformasi Karir Anda?</h2>
        <p className="text-xl mb-8 text-blue-100">
          Bergabunglah dengan ribuan profesional yang telah merasakan dampak positif dari kelas ini
        </p>
        
        {/* Statistics */}
        <div className="bg-white/10 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-200">Alumni Sukses</div>
            </div>
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">30 Hari</div>
              <div className="text-blue-200">Money Back Guarantee</div>
            </div>
          </div>
        </div>

        {/* Main CTA Button */}
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg focus-ring">
          Daftar Sekarang - Limited Seats! 🔥
        </button>
        <p className="mt-4 text-blue-200 text-sm">*Promo early bird berakhir dalam 7 hari</p>
      </div>
    </section>
  );
}
