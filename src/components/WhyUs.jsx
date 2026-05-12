const reasons = [
  { icon: 'inventory_2', title: 'Material Pilihan', desc: 'Hanya menggunakan kayu jati, mahoni, dan material berkualitas ekspor.' },
  { icon: 'architecture', title: 'Desain Eksklusif', desc: 'Setiap pesanan disesuaikan dengan kebutuhan dan selera estetika unik Anda.' },
  { icon: 'groups', title: 'Tim Profesional', desc: 'Dikerjakan oleh tim ahli dengan pengalaman lebih dari 10 tahun di industri furnitur.' },
  { icon: 'local_shipping', title: 'Pengiriman Aman', desc: 'Packing standar ekspor dan pengiriman yang terjadwal ke seluruh wilayah.' },
  { icon: 'payments', title: 'Harga Kompetitif', desc: 'Kualitas premium dengan penawaran harga terbaik langsung dari workshop.' },
  { icon: 'support_agent', title: 'Konsultasi Gratis', desc: 'Diskusikan rencana furnitur Anda secara gratis dengan desainer interior kami.' },
]

export default function WhyUs() {
  return (
    <section className="py-16 md:py-[120px] bg-[#e7e2d9]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4">Mengapa Memilih Fokus?</h2>
          <div className="w-20 h-1 bg-[#928564] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-12 gap-x-8">
          {reasons.map(({ icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#928564] shadow-sm">
                <span className="material-symbols-outlined">{icon}</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.05em] mb-2">{title}</h4>
                <p className="text-sm md:text-base text-[#67645d]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
