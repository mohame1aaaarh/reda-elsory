import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-16">
      <div className="h-1.5 bg-gradient-to-l from-gold via-gold-light to-gold" />

      <div className="relative bg-gradient-to-br from-[#0d0000] via-[#1a0000] to-[#0d0000] text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-[0.06]" />

        <div className="relative max-w-5xl mx-auto px-4 py-14 md:py-20">
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {/* Brand */}
            <div className="text-center md:text-right">
              <div className="flex justify-center md:justify-start mb-4">
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <Image src="/logo.png" alt="رضا السوري" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gold-light mb-2">
                رضا السوري
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                للمأكولات السورية
              </p>
              <p className="text-gray-600 text-xs mt-2">
                أشهى المأكولات السورية في الهرم
              </p>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold text-gold-light mb-5 flex items-center justify-center md:justify-start gap-2">
                <span>📞</span> اتصل بنا
              </h4>
              <div className="space-y-3">
                <a href="tel:01210001452" className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-gold-light transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <span className="text-gold-light text-sm">📞</span>
                  </span>
                  <span dir="ltr" className="text-sm tracking-wider">01210001452</span>
                </a>
                <a href="tel:01120750278" className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-gold-light transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <span className="text-gold-light text-sm">📞</span>
                  </span>
                  <span dir="ltr" className="text-sm tracking-wider">01120750278</span>
                </a>
                <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <span>📍</span>
                  </span>
                  <span className="text-sm">14 ش عز الدين عمر سباتس - الهرم</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold text-gold-light mb-5 flex items-center justify-center md:justify-start gap-2">
                <span>🍽️</span> القائمة
              </h4>
              <div className="space-y-2.5 text-sm">
                {[
                  { emoji: "🥙", name: "الفتة", slug: "fatteh" },
                  { emoji: "🌯", name: "الشاورما", slug: "shawarma-sandwiches" },
                  { emoji: "🍗", name: "الفراخ", slug: "grilled-chicken" },
                  { emoji: "🥞", name: "الكريب", slug: "crepes" },
                  { emoji: "🍗", name: "البروستد", slug: "broasted" },
                  { emoji: "🍽️", name: "الصواني", slug: "trays" },
                ].map((link) => (
                  <a
                    key={link.slug}
                    href={`#${link.slug}`}
                    className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-gold-light transition-colors"
                  >
                    <span>{link.emoji}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <a
              href={`https://wa.me/201210001452`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-500 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              اطلب عبر واتساب
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} رضا السوري - جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
