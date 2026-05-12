export default function About() {
  return (
    <section className="py-16 md:py-[120px] bg-[#f9f9f9] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        <div className="flex-1 w-full">
          <img
            className="rounded-xl w-full aspect-[4/3] object-cover shadow-lg"
            src="about.jpeg"
            alt="Pengrajin Bali mengerjakan kayu jati"
          />
        </div>
        <div className="flex-1 text-left">
          <span className="text-sm font-semibold text-[#928564] uppercase tracking-[0.2em] mb-4 block">Artisanship</span>
          <h2 className="text-3xl md:text-[40px] font-semibold leading-tight md:leading-[48px] tracking-[-0.01em] mb-6">
            Sentuhan Kurasi Bali untuk Dunia
          </h2>
          <p className="text-base text-[#615e57] mb-6 leading-relaxed">
            Di Fokus Furniture Bali, kami memadukan kekayaan material alam seperti kayu jati pilihan dan batu alam lokal dengan keahlian pengrajin lokal yang telah diwariskan turun-temurun.
          </p>
          <p className="text-base text-[#615e57] mb-8 leading-relaxed">
            Setiap produk adalah perwujudan dari dedikasi kami terhadap kualitas dan estetika modern, memastikan setiap furnitur bukan sekadar benda, melainkan karya seni yang fungsional untuk hunian Anda.
          </p>
          <div className="border-l-4 border-[#928564] pl-6 italic text-lg text-[#040505]">
            "Kualitas bukan sekadar standar, melainkan janji pengerjaan yang teliti."
          </div>
        </div>
      </div>
    </section>
  )
}
