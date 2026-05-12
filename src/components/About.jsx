export default function About() {
  return (
    <section className="py-16 md:py-[120px] bg-[#f9f9f9] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        <div className="flex-1 w-full">
          <img
            className="rounded-xl w-full aspect-[4/3] object-cover shadow-lg"
            src="about.jpeg"
            alt="Custom furniture Fokus Furniture Bali"
          />
        </div>

        <div className="flex-1 text-left">

          <span className="text-sm font-semibold text-[#928564] uppercase tracking-[0.2em] mb-4 block">
            Premium Material
          </span>

          <h2 className="text-3xl md:text-[40px] font-semibold leading-tight md:leading-[48px] tracking-[-0.01em] mb-6">
            Custom Furniture Modern dengan Material Berkualitas
          </h2>

          <p className="text-base text-[#615e57] mb-6 leading-relaxed">
            Fokus Furniture Bali menggunakan material plywood berkualitas
            dengan finishing HPL full luar dan dalam untuk menghasilkan
            furniture yang rapi, kuat, dan tahan lama.
          </p>

          <p className="text-base text-[#615e57] mb-8 leading-relaxed">
            Kami menggunakan HPL premium seperti Taco dan Carta dengan
            berbagai pilihan motif modern minimalis yang cocok untuk
            villa, cafe, restaurant, maupun hunian modern di Bali.
          </p>

          <div className="border-l-4 border-[#928564] pl-6 italic text-lg text-[#040505]">
            "Detail pengerjaan yang rapi dan material premium adalah prioritas kami."
          </div>

        </div>
      </div>
    </section>
  )
}