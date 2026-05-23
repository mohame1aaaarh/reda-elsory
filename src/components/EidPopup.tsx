"use client"

import { useState, useEffect } from "react"

export default function EidPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem("eid2026-dismissed")
    if (dismissed) return
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    localStorage.setItem("eid2026-dismissed", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Top decorative bar */}
        <div className="h-2 bg-gradient-to-l from-amber-600 via-yellow-500 to-amber-600" />

        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b45309' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative p-6 md:p-8 text-center">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mosque icon */}
          <div className="text-6xl mb-4 animate-float">🕋</div>

          {/* Greeting text */}
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">
            كل عام وأنتم بخير
          </h2>
          <p className="text-amber-600 font-medium text-sm mb-4">
            بمناسبة عيد الأضحى المبارك
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-l from-amber-400 to-amber-600 mx-auto mb-4 rounded-full" />

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            يسرنا في <span className="font-bold text-primary">مطعم رضا السوري</span> أن نتقدم إليكم بأصدق التهاني والتبريكات بمناسبة عيد الأضحى المبارك
          </p>

          <p className="text-amber-700 text-xs font-medium mb-6">
            تقبل الله منا ومنكم صالح الأعمال
          </p>

          {/* CTA */}
          <button
            onClick={handleDismiss}
            className="inline-flex items-center gap-2 bg-gradient-to-l from-amber-700 to-amber-600 text-white px-8 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-600/20"
          >
            <span>🍽️</span>
            <span>تصفح المنيو</span>
          </button>

          {/* Decorative bottom */}
          <div className="mt-6 flex justify-center gap-3 text-2xl opacity-50">
            <span>🐑</span>
            <span>🌙</span>
            <span>✨</span>
          </div>
        </div>
      </div>
    </div>
  )
}
