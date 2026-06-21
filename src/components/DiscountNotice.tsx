"use client"

import { useEffect } from "react"
import { showCartToast } from "./CartToast"

export default function DiscountNotice() {
  useEffect(() => {
    const shown = localStorage.getItem("discount-notice-shown")
    if (shown) return

    const timer = setTimeout(() => {
      showCartToast("🎉 خصم 10% على جميع الطلبات! اكتشف أشهى المأكولات السورية")
      localStorage.setItem("discount-notice-shown", "true")
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
