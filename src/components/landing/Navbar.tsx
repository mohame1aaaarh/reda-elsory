"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import CartButton from "@/components/CartButton"

interface NavbarProps {
  onCartClick: () => void
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "/menu", label: "المنيو" },
    { href: "/#about", label: "عن المطعم" },
    { href: "/#location", label: "موقعنا" },
    { href: "/#contact", label: "اتصل بنا" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="relative flex items-center gap-2.5">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image src="/logo.png" alt="رضا السوري" fill className="object-contain" />
            </div>
            <span className={`font-bold text-sm md:text-base transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
              رضا السوري
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 ${
                  scrolled ? "text-gray-700 hover:text-primary hover:bg-primary/5" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mr-3">
              <CartButton onClick={onCartClick} />
            </div>
          </nav>

          {/* Mobile hamburger + cart */}
          <div className="flex items-center gap-2 md:hidden">
            <CartButton onClick={onCartClick} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-primary/5 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
