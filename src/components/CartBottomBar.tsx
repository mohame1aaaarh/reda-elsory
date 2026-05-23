"use client"

import { useCart } from "@/lib/cart-context"

interface CartBottomBarProps {
  onCartClick: () => void
}

export default function CartBottomBar({ onCartClick }: CartBottomBarProps) {
  const { itemCount, subtotal, items } = useCart()

  if (itemCount === 0) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-slide-up">
      <div className="bg-white/95 backdrop-blur-lg border-t border-gold/20 shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Info */}
            <button
              onClick={onCartClick}
              className="flex items-center gap-3 flex-1 min-w-0 text-right"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full shadow-lg">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              </div>
              <div className="min-w-0">
                <div className="text-xs text-gray-500 truncate">
                  {items.length} صنف • {itemCount} قطعة
                </div>
                <div className="font-bold text-primary text-sm">المجموع: {subtotal.toFixed(2)} ج</div>
              </div>
            </button>

            {/* Checkout */}
            <button
              onClick={onCartClick}
              className="shrink-0 bg-gradient-to-l from-primary to-primary-light text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95 flex items-center gap-2"
            >
              <span>عرض السلة</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
