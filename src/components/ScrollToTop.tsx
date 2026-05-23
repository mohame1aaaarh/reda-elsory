"use client"

import { useState, useEffect } from "react"
import { useCart } from "@/lib/cart-context"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { itemCount } = useCart()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-40 bg-primary hover:bg-primary-light text-white w-12 h-12 rounded-xl shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${
        itemCount > 0 ? "bottom-24" : "bottom-6"
      } right-6`}
      aria-label="العودة للأعلى"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  )
}
