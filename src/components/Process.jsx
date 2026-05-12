const steps = [
  { num: 1, title: 'Konsultasi', desc: 'Diskusikan ide, budget, dan kebutuhan ruangan Anda.' },
  { num: 2, title: 'Desain', desc: 'Kami buatkan visualisasi 3D dan detail teknis produk.' },
  { num: 3, title: 'Produksi', desc: 'Pengerjaan di workshop oleh pengrajin berpengalaman.' },
  { num: 4, title: 'Instalasi', desc: 'Pengiriman dan pemasangan presisi di lokasi Anda.' },
]

export default function Process() {
  return (
    <section id="proses" className="py-16 md:py-[120px] bg-[#f9f9f9]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4">Proses Pengerjaan</h2>
          <p className="text-base text-[#615e57]">Alur kerja kami yang transparan untuk hasil yang sempurna.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[#c4c7c7] -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="bg-white p-6 md:p-8 rounded-xl border border-[#c4c7c7] text-center shadow-sm">
                <div className="w-12 h-12 bg-[#040505] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {num}
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.05em] mb-2">{title}</h4>
                <p className="text-sm text-[#615e57]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
