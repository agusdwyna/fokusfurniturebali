export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] border-t border-black/5">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-14">

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Content */}
          <div className="flex flex-col items-start">

            {/* Logo */}
            <div className="w-16 h-16 rounded-full overflow-hidden border border-black/10 shadow-lg mb-5">
              <img
                src="/logo.png"
                alt="Fokus Furniture Bali"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Brand */}
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#040505]">
              Fokus Furniture Bali
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm md:text-base text-[#615e57] leading-relaxed max-w-xl">
              Premium custom furniture untuk villa, cafe, restaurant,
              dan hunian modern dengan desain elegan khas Bali.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3 text-sm text-[#615e57]">

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[18px] text-[#040505]">
                  call
                </span>

                <p>
                  +62 878-3116-5773
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[18px] text-[#040505]">
                  location_on
                </span>

                <p className="leading-relaxed">
                  Jl. Pulau Belitung Gg. B. Sari III, Pedungan, Denpasar Selatan, Kota Denpasar, Bali 80222
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/6287831165773"
              className="mt-7 bg-[#040505] text-white px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-[0.12em] hover:opacity-90 transition-all shadow-lg"
            >
              Chat WhatsApp
            </a>
          </div>

          {/* Right Map */}
          <div className="w-full">
            <div className="overflow-hidden rounded-[2rem] shadow-xl border border-black/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.9593492803992!2d115.20743890000001!3d-8.6954104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2410f09c9228f%3A0x165c76e065632e7a!2sFOKUS%20FURNITURE%20BALI!5e0!3m2!1sid!2sid!4v1778581305243!5m2!1sid!2sid"
                className="w-full h-[320px] md:h-[380px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-black/5">
          <p className="text-xs md:text-sm text-[#7b7f80] text-center">
            © 2026 Fokus Furniture Bali — Crafted in Bali.
          </p>
        </div>
      </div>
    </footer>
  )
}