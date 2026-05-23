import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — right-aligned on mobile, centered on desktop */}
      <div
        className="absolute inset-0 bg-cover bg-[right_0%] md:bg-[center_0%]"
        style={{ backgroundImage: "url('/header.jpg')" }}
      />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/70" />

      {/* Subtle blur layer */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-gold/80 via-gold-light to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/80 via-gold-light to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-40 h-40 md:w-48 md:h-48 drop-shadow-2xl">
            <img
              src="/logo.png"
              alt="رضا السوري"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gold/90 font-light mb-2 drop-shadow-lg">
          للمأكولات السورية
        </p>

        <p className="text-gray-300 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-12 drop-shadow-md">
          أشهى المأكولات السورية في الهرم .. شاورما - فتة - كريب - بروستد - وجبات عائلية
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2.5 bg-gradient-to-l from-gold to-gold-light text-primary-dark px-8 py-4 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gold/20"
          >
            <span>تصفح المنيو</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-md border border-white/15 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all hover:bg-white/[0.15] hover:scale-105 active:scale-95"
          >
            تعرف علينا
            <span>↓</span>
          </a>
        </div>

        {/* No branches note */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm border border-white/5 rounded-full px-5 py-2 text-white/60 text-xs md:text-sm">
            <span>⚠️</span>
            <span>لا يوجد لدينا فروع أخرى</span>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="tel:01210001452" className="flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm border border-white/5 rounded-full px-4 py-2 text-white/60 hover:text-white hover:border-white/20 transition-all text-xs">
            <span>📞</span>
            <span dir="ltr">01210001452</span>
          </a>
          <a href="tel:01120750278" className="flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm border border-white/5 rounded-full px-4 py-2 text-white/60 hover:text-white hover:border-white/20 transition-all text-xs">
            <span>📞</span>
            <span dir="ltr">01120750278</span>
          </a>
          <div className="flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm border border-white/5 rounded-full px-4 py-2 text-white/60 text-xs">
            <span>📍</span>
            <span>14 ش عز الدين عمر سباتس - الهرم</span>
          </div>
        </div>
      </div>
    </section>
  )
}
