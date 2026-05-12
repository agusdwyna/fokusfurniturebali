const services = [
  {
    img: 'kitchen.jpeg',
    alt: 'Kitchen set modern',
    title: 'Kitchen Set',
    desc: 'Desain dapur fungsional yang menggabungkan estetika dan utilitas.',
    message:
      'Halo Fokus Furniture Bali, saya tertarik konsultasi untuk Kitchen Set.',
  },
  {
    img: 'villa.jpeg',
    alt: 'Paket furnitur villa',
    title: 'Villa Furniture',
    desc: 'Paket furnitur lengkap untuk meningkatkan value properti villa Anda.',
    message:
      'Halo Fokus Furniture Bali, saya tertarik konsultasi untuk Villa Furniture.',
  },
  {
    img: 'bedroom.jpeg',
    alt: 'Bedroom set minimalis',
    title: 'Bedroom Set',
    desc: 'Set tempat tidur yang dirancang khusus untuk kenyamanan maksimal.',
    message:
      'Halo Fokus Furniture Bali, saya tertarik konsultasi untuk Bedroom Set.',
  },
]

export default function Services({ waNumber }) {
  return (
    <section id="layanan" className="py-16 md:py-[120px] bg-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4">
            Layanan Custom Kami
          </h2>

          <p className="text-base text-[#615e57] max-w-xl mx-auto">
            Solusi furnitur menyeluruh untuk berbagai kebutuhan interior Anda,
            dari ruang makan hingga villa komersial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map(({ img, alt, title, desc, message }) => (
            <div
              key={title}
              className="group bg-[#f3f3f4] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={img}
                  alt={alt}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-[28px] font-medium leading-[36px] mb-2">
                  {title}
                </h3>

                <p className="text-sm md:text-base text-[#615e57] mb-6">
                  {desc}
                </p>

                <a
                  href={`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`}
                  className="flex items-center gap-2 text-sm font-semibold text-[#928564] uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
                >
                  KONSULTASI SEKARANG

                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}