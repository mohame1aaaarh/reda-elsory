"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import CartButton from "./CartButton"

const PHONE_1 = "01210001452"
const PHONE_2 = "01120750278"
const ADDRESS = "14 ش عز الدين عمر - سيتي سنتر - الهرم"

const categoryLinks = [
  { emoji: "🥙", name: "الفتة", slug: "fatteh" },
  { emoji: "🌯", name: "الشاورما", slug: "shawarma-sandwiches" },
  { emoji: "🍗", name: "الفراخ", slug: "grilled-chicken" },
  { emoji: "🥞", name: "الكريب", slug: "crepes" },
  { emoji: "🍟", name: "الفرايز", slug: "fries" },
  { emoji: "🍗", name: "البروستد", slug: "broasted" },
  { emoji: "🍽️", name: "الصواني", slug: "trays" },
]

interface HeaderProps {
  onCartClick: () => void
}

export default function Header({ onCartClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header>
      {/* ===== HERO SECTION ===== */}
      <div className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d0000] via-[#2a0000] to-[#0d0000]">
        {/* Dark overlay with pattern */}
        <div className="absolute inset-0 bg-pattern opacity-[0.08]" />
        <div className="absolute inset-0 bg-arabesque" />

        {/* Decorative borders */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l from-gold via-gold-light via-gold to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-light via-gold to-transparent" />

        {/* Ambient light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        {/* Decorative stars */}
        <div className="absolute top-24 right-12 text-5xl opacity-[0.07] select-none animate-float" style={{ animationDelay: "0s" }}>✦</div>
        <div className="absolute top-1/3 left-16 text-3xl opacity-[0.07] select-none animate-float" style={{ animationDelay: "1.2s" }}>◇</div>
        <div className="absolute bottom-1/4 right-20 text-4xl opacity-[0.07] select-none animate-float" style={{ animationDelay: "2s" }}>✧</div>
        <div className="absolute bottom-32 left-24 text-2xl opacity-[0.07] select-none animate-float" style={{ animationDelay: "0.7s" }}>⬪</div>

        {/* Main content */}
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-44 h-44 md:w-52 md:h-52">
              <Image
                src="/logo.png"
                alt="رضا السوري"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <p className="text-lg md:text-xl text-gold/80 font-light mb-2">
            للمأكولات السورية
          </p>

          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed mb-10">
            أشهى المأكولات السورية في الهرم
          </p>

          {/* Contact pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href={`tel:${PHONE_1}`}
              className="flex items-center gap-2 bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 text-white hover:bg-white/[0.12] hover:border-gold/30 transition-all group"
            >
              <span className="text-gold-light group-hover:scale-110 transition-transform">📞</span>
              <span dir="ltr" className="font-medium text-sm tracking-wider">{PHONE_1}</span>
            </a>
            <a
              href={`tel:${PHONE_2}`}
              className="flex items-center gap-2 bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 text-white hover:bg-white/[0.12] hover:border-gold/30 transition-all group"
            >
              <span className="text-gold-light group-hover:scale-110 transition-transform">📞</span>
              <span dir="ltr" className="font-medium text-sm tracking-wider">{PHONE_2}</span>
            </a>
            <div className="flex items-center gap-2 bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 text-white/80">
              <span>📍</span>
              <span className="text-sm">{ADDRESS}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-gold text-primary-dark px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-gold-light hover:scale-105 active:scale-95 shadow-xl shadow-gold/20"
            >
              تصفح المنيو
              <span>↓</span>
            </a>
            <button
              onClick={onCartClick}
              className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-md border border-white/15 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-white/[0.15] hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              السلة
            </button>
          </div>
        </div>
      </div>

      {/* ===== STICKY CATEGORY NAV ===== */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gold/20"
            : "bg-[#1a0000]/90 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="max-w-5xl mx-auto px-2 flex items-center justify-between">
          <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar py-2 flex-1">
            {categoryLinks.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 rounded-lg text-sm font-medium transition-all shrink-0 ${
                  scrolled
                    ? "text-gray-600 hover:bg-primary/8 hover:text-primary"
                    : "text-white/70 hover:bg-white/8 hover:text-white"
                }`}
              >
                <span className="text-base">{cat.emoji}</span>
                <span>{cat.name}</span>
              </a>
            ))}
          </div>

          {/* Cart button in nav */}
          <div className="shrink-0 pr-2">
            {scrolled && <CartButton onClick={onCartClick} />}
          </div>
        </div>
      </nav>

      {/* Cart button when not scrolled (fixed) */}
      {!scrolled && (
        <div className="fixed top-4 left-4 z-50">
          <CartButton onClick={onCartClick} />
        </div>
      )}
    </header>
  )
}
