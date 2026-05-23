"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface Deal {
  id: number
  title_ar: string
  description_ar: string | null
  image_url: string | null
  price: number
  old_price: number | null
}

interface Props {
  limit?: number
  showViewAll?: boolean
}

export default function DealsSection({ limit, showViewAll }: Props) {
  const [deals, setDeals] = useState<Deal[]>([])
  const [note, setNote] = useState("")

  useEffect(() => {
    Promise.all([
      fetch("/api/deals").then((r) => r.json()),
      fetch("/api/settings?key=deals_note").then((r) => r.json()),
    ])
      .then(([dealsData, settingsData]) => {
        setDeals(dealsData)
        if (settingsData.value) setNote(settingsData.value)
      })
      .catch(() => {})
  }, [])

  if (deals.length === 0) return null

  const visibleDeals = limit ? deals.slice(0, limit) : deals

  return (
    <section className="max-w-5xl mx-auto px-4 pt-8 pb-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 shadow-sm">
          <span className="text-2xl">🔥</span>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-amber-800">العروض</h2>
          {note && (
            <p className="text-amber-600 text-sm font-medium mt-1">{note}</p>
          )}
          <div className="relative h-[3px] mt-2">
            <div className="absolute inset-0 bg-gradient-to-l from-amber-400/40 via-amber-500/20 to-transparent rounded-full" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-500" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleDeals.map((deal) => (
          <div
            key={deal.id}
            className="relative group bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-2xl border border-amber-200/60 shadow-md hover:shadow-lg transition-all overflow-hidden"
          >
            {deal.image_url && (
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={deal.image_url}
                  alt={deal.title_ar}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {deal.title_ar}
              </h3>

              {deal.description_ar && (
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {deal.description_ar}
                </p>
              )}

              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-amber-700">
                  {deal.price} جنيه
                </span>
                {deal.old_price && deal.old_price > deal.price && (
                  <>
                    <span className="text-sm text-gray-400 line-through">
                      {deal.old_price} جنيه
                    </span>
                    <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                      -{Math.round(((deal.old_price - deal.price) / deal.old_price) * 100)}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Ribbon */}
            <div className="absolute top-3 right-3 bg-gradient-to-l from-red-500 to-rose-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
              عرض خاص
            </div>
          </div>
        ))}
      </div>

      {showViewAll && (
        <div className="flex justify-center mt-8">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-gradient-to-l from-amber-700 to-amber-600 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-600/20"
          >
            <span>شاهد كل العروض لدينا</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  )
}
