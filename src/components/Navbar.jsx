import { useState } from 'react'

export default function Navbar({ waNumber, waMessage }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur-2xl border-b border-black/5">
        <nav className="flex justify-between items-center px-5 md:px-16 py-3 md:py-4 max-w-[1280px] mx-auto w-full">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 min-w-0 h-12">

            {/* Logo */}
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-black/10 shadow-md">
              <img
                src="/logo.png"
                alt="Fokus Furniture Bali"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="leading-tight min-w-0">
              <h1 className="text-[14px] md:text-lg font-bold tracking-tight text-[#040505] truncate">
                Fokus Furniture Bali
              </h1>

              <p className="text-[10px] md:text-xs text-[#6b6f70] font-medium tracking-wide truncate">
                Custom Interior & Furniture
              </p>
            </div>
          </a>

          {/* Desktop CTA */}
         <a
  href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`}
  className="hidden md:flex items-center gap-2 bg-[#040505] text-white px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-[0.12em] hover:opacity-90 transition-all active:scale-95 shadow-lg"
>
            <span className="material-symbols-outlined text-[18px]">
              chat
            </span>

            WhatsApp
          </a>

          {/* Mobile CTA */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden bg-[#040505] text-white px-2.5 py-2 rounded-lg flex items-center gap-1 shadow-md active:scale-95 transition-all shrink-0"
          >
            <span className="material-symbols-outlined text-[16px]">
              chat
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.1em]">
              WhatsApp
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile CTA Drawer */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute bottom-0 left-0 w-full bg-white rounded-t-[2rem] shadow-2xl p-7"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Handle */}
            <div className="w-14 h-1.5 rounded-full bg-black/10 mx-auto mb-7" />

            <div className="flex flex-col items-center text-center">

              {/* Icon */}
              <div className="w-14 h-14 rounded-full overflow-hidden border border-black/10 shadow-lg mb-4">
                <img
                  src="/logo.png"
                  alt="Fokus Furniture Bali"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-[#040505] tracking-tight">
                Fokus Furniture Bali
              </h2>

              {/* Description */}
              <p className="text-sm text-[#6b6f70] leading-relaxed mt-3 max-w-xs">
                Konsultasi gratis custom furniture untuk villa, cafe,
                restaurant, dan hunian modern Anda.
              </p>

              {/* CTA */}
             <a
  href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`}
  className="mt-7 w-full bg-[#040505] text-white py-3 rounded-2xl text-sm font-semibold uppercase tracking-[0.12em] flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-all"
>
                <span className="material-symbols-outlined text-[18px]">
                  chat
                </span>

                Chat WhatsApp
              </a>

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="mt-4 text-sm text-[#7b7f80]"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}