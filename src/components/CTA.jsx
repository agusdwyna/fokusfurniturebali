export default function CTA({ waNumber, waMessage }) {
  return (
    <section className="py-16 md:py-[120px] bg-[#040505] text-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 text-center">

        <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-6">
          Siap Wujudkan Furniture Impian Anda?
        </h2>

        <p className="text-lg md:text-[18px] leading-[28px] mb-10 opacity-80 max-w-2xl mx-auto">
          Mulai perjalanan interior Anda hari ini dengan konsultasi gratis bersama tim ahli kami.
        </p>

        <a
          href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-white text-[#040505] px-6 md:px-10 py-4 md:py-6 rounded-lg text-xl md:text-2xl font-medium hover:scale-105 transition-transform duration-300"
        >
          <span className="material-symbols-outlined">
            chat
          </span>

          Chat WhatsApp Sekarang
        </a>
      </div>
    </section>
  )
}