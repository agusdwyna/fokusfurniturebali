const badges = [
  { icon: 'brush', label: 'Custom Design' },
  { icon: 'forum', label: 'Free Consultation' },
  { icon: 'verified', label: 'Premium Material' },
  { icon: 'bolt', label: 'Fast Response' },
]

export default function TrustBadges() {
  return (
    <section className="bg-white py-12 border-b border-[#c4c7c7]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {badges.map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-2">
            <span className="material-symbols-outlined text-[#928564] text-3xl">{icon}</span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
