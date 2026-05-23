"use client"

import { useCart } from "@/lib/cart-context"

interface CartButtonProps {
  onClick: () => void
}

export default function CartButton({ onClick }: CartButtonProps) {
  const { itemCount, items } = useCart()

  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 bg-gold text-primary-dark px-3 py-1.5 rounded-xl font-bold text-xs transition-all hover:bg-gold-light hover:scale-105 active:scale-95 shadow-md"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
      <span className="hidden sm:inline">الطلبات</span>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full shadow-lg animate-bounce">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  )
}
