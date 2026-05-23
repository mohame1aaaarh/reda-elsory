"use client"

import { useEffect, useRef, useState } from "react"
import MenuItemCard from "./MenuItemCard"

interface Option {
  id: number
  label_ar: string | null
  price: number
  is_size: boolean
  display_order: number
}

interface MenuItem {
  id: number
  name_ar: string
  description_ar: string | null
  image_url: string | null
  display_order: number
  options: Option[]
}

interface Category {
  id: number
  name_ar: string
  slug: string
  note_ar: string | null
  emoji: string
  menu_items: MenuItem[]
}

export default function MenuSection({ category }: { category: Category }) {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const items = category.menu_items || []

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (items.length === 0) return null

  const hasSizes = items.some((item) =>
    item.options?.some((opt) => opt.is_size)
  )

  return (
    <section
      ref={sectionRef}
      id={category.slug}
      className="max-w-5xl mx-auto px-4 py-12 md:py-16 scroll-mt-16"
    >
      {/* Category header with decorative star */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/[0.08] to-gold/[0.08] border border-gold/15 shadow-sm">
          <span className="text-2xl">{category.emoji}</span>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {category.name_ar}
          </h2>
          <div className="relative h-[3px] mt-2">
            <div className="absolute inset-0 bg-gradient-to-l from-gold/40 via-primary/20 to-transparent rounded-full" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold" />
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gold/5 border border-gold/10">
          <svg className="w-5 h-5 text-gold/30" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M20 2L25 15L38 15L27 23L31 37L20 28L9 37L13 23L2 15L15 15Z" />
          </svg>
        </div>
      </div>

      {/* Note */}
      {category.note_ar && (
        <div className="mb-8 bg-gradient-to-l from-primary/[0.04] via-gold/[0.04] to-transparent border-r-2 border-gold/40 rounded-l-xl px-5 py-3">
          <p className="text-sm text-gray-500 leading-relaxed">
            <span className="text-gold-dark font-medium">📋 </span>
            {category.note_ar}
          </p>
        </div>
      )}

      {/* Items grid */}
      <div
        className={`grid gap-4 md:grid-cols-2 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="animate-fade-up"
            style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
          >
            <MenuItemCard item={item} hasSizes={hasSizes} />
          </div>
        ))}
      </div>
    </section>
  )
}
