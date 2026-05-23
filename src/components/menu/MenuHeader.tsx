"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import CartButton from "@/components/CartButton"

interface MenuHeaderProps {
  onCartClick: () => void
}

const categoryLinks = [
  { emoji: "🥙", name: "الفتة", slug: "fatteh" },
  { emoji: "🌯", name: "الشاورما", slug: "shawarma-sandwiches" },
  { emoji: "🍗", name: "الفراخ", slug: "grilled-chicken" },
  { emoji: "🥞", name: "الكريب", slug: "crepes" },
  { emoji: "🍟", name: "الفرايز", slug: "fries" },
  { emoji: "🍗", name: "البروستد", slug: "broasted" },
  { emoji: "🍽️", name: "الصواني", slug: "trays" },
]

export default function MenuHeader({ onCartClick }: MenuHeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header>
      {/* Top bar with background image */}
      <div className="relative text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/kings.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-black/60" />
        <div className="absolute inset-0 backdrop-blur-[3px]" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-l from-gold/80 via-gold-light to-transparent" />

        <div className="relative max-w-5xl mx-auto px-4 py-10 md:py-14">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 drop-shadow-lg">
                <Image src="/logo.png" alt="رضا السوري" fill className="object-contain" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold drop-shadow-lg">رضا السوري</h1>
                <p className="text-[11px] md:text-sm text-gold-light/80 drop-shadow">للمأكولات السورية</p>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                الرئيسية
              </Link>
              <CartButton onClick={onCartClick} />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky category nav */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gold/20"
            : "bg-primary-dark/90 backdrop-blur-md border-b border-gold/15"
        }`}
      >
        <div className="max-w-5xl mx-auto px-2 flex items-center">
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
        </div>
      </nav>
    </header>
  )
}
