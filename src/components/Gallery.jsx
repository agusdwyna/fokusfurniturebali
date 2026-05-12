const projects = [
  {
    img: '1.jpeg',
    label: 'Our Authentic Craftsmanship'
  },
  {
    img: '2.jpeg',
    label: 'Our Authentic Craftsmanship'
  },
 {
    img: '3.jpeg',
    label: 'Our Authentic Craftsmanship'
  },
  {
    img: '4.jpeg',
    label: 'Our Authentic Craftsmanship'
  },
  {
    img: '5.jpeg',
    label: 'Our Authentic Craftsmanship'
  },
  {
    img: '6.jpeg',
    label: 'Our Authentic Craftsmanship'
  },
]

export default function Gallery() {
  return (
    <section id="galeri" className="py-16 md:py-[120px] bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-4">Galeri Proyek Kami</h2>
          <p className="text-base text-[#615e57]">Inspirasi interior dari proyek villa dan hunian yang telah kami selesaikan.</p>
        </div>
        <div className="masonry-grid">
          {projects.map(({ img, label }) => (
            <div key={label} className="masonry-item relative group cursor-pointer rounded-xl overflow-hidden">
              <img
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={img}
                alt={label}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-sm font-semibold uppercase tracking-widest">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
