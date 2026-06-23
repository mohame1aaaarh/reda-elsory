"use client"

import { useState, useEffect } from "react"

export default function DiscountNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const shown = localStorage.getItem("wc-notice-shown")
    if (shown) return

    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    localStorage.setItem("wc-notice-shown", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleDismiss} />

      <div className="relative w-full max-w-sm bg-gradient-to-br from-emerald-900 via-emerald-800 to-yellow-900 rounded-3xl shadow-2xl overflow-hidden animate-scale-in border-2 border-gold/30">
        {/* Top glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl" />

        {/* Trophy icon */}
        <div className="absolute -top-6 -right-6 text-7xl opacity-20 select-none">🏆</div>

        <div className="relative p-6 text-center">
          <button
            onClick={handleDismiss}
            className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all text-xs"
          >
            ✕
          </button>

          {/* Animated soccer ball */}
          <div className="mb-3">
            <span className="inline-block text-6xl animate-wc-ball">⚽</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-yellow-400 mb-1">🎉 كأس العالم 2026</h2>
          <div className="w-16 h-0.5 bg-gradient-to-l from-yellow-400 to-emerald-400 mx-auto mb-3 rounded-full" />

          {/* Discount */}
          <p className="text-white text-lg font-bold mb-1">خصم 10%</p>
          <p className="text-emerald-300 text-sm mb-4">على جميع الطلبات بمناسبة كأس العالم 🏆</p>

          {/* Decorations */}
          <div className="flex justify-center gap-3 text-2xl mb-3">
            <span className="animate-float" style={{ animationDelay: "0s" }}>🇪🇬</span>
            <span className="animate-float" style={{ animationDelay: "0.3s" }}>⚽</span>
            <span className="animate-float" style={{ animationDelay: "0.6s" }}>🏆</span>
            <span className="animate-float" style={{ animationDelay: "0.9s" }}>✨</span>
          </div>

          <button
            onClick={handleDismiss}
            className="bg-gradient-to-l from-yellow-500 to-yellow-600 text-emerald-900 px-6 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            تسوق الآن 🛒
          </button>
        </div>
      </div>
    </div>
  )
}
