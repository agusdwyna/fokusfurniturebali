export default function Hero({ waNumber, waMessage}) {
  return (
    <section className="relative pt-20 pb-20 min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="hero.jpeg"
          alt="Villa living room with custom teak furniture"
        />
        <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-16 w-full text-white">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 mb-4">Bali Handcrafted</p>
          <h1 className="text-4xl md:text-[64px] font-semibold leading-tight md:leading-[72px] tracking-[-0.02em] mb-6">
            Custom Furniture Bali untuk Villa, Cafe, & Hunian Modern
          </h1>
          <p className="text-lg md:text-[18px] leading-[28px] mb-10 text-white/90">
            Desain elegan, material berkualitas, dan pengerjaan profesional yang mewujudkan estetika hunian impian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`} 
              className="bg-[#040505] text-white px-8 py-4 rounded-lg text-sm font-semibold text-center uppercase tracking-widest hover:opacity-90 transition-all active:scale-95"
            >
              Chat WhatsApp
            </a>
            <a
              href="#galeri"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg text-sm font-semibold text-center uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              Lihat Katalog
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
