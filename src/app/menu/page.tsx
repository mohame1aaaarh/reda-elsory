"use client"

import { useState, useEffect } from "react"
import MenuHeader from "@/components/menu/MenuHeader"
import DealsSection from "@/components/DealsSection"
import MenuSection from "@/components/MenuSection"
import Footer from "@/components/Footer"
import CartDrawer from "@/components/CartDrawer"
import CartToast from "@/components/CartToast"
import DiscountNotice from "@/components/DiscountNotice"
import CartBottomBar from "@/components/CartBottomBar"
import ScrollToTop from "@/components/ScrollToTop"

export default function MenuPage() {
  const [cartOpen, setCartOpen] = useState(false)
  const [categories, setCategories] = useState<any[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || !key) {
      setError(true)
      return
    }

    fetch(
      `${url}/rest/v1/categories?select=*,menu_items(*,options:item_options(*))&order=display_order`,
      {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
        cache: "no-store",
      }
    )
      .then((r) => {
        if (!r.ok) throw new Error("Network error")
        return r.json()
      })
      .then(setCategories)
      .catch(() => setError(true))
  }, [])

  return (
    <>
      <MenuHeader onCartClick={() => setCartOpen(true)} />
      <CartToast />
      <DiscountNotice />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <CartBottomBar onCartClick={() => setCartOpen(true)} />

      <main className="flex-1 pb-20">
        {error ? (
          <div className="max-w-5xl mx-auto px-4 py-32 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/5 mb-6">
              <span className="text-4xl">🍽️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">جاري تحميل المنيو...</h2>
            <p className="text-gray-400">يرجى التأكد من اتصال قاعدة البيانات</p>
          </div>
        ) : !categories ? (
          <div className="max-w-5xl mx-auto px-4 py-32 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0s" }} />
              <div className="w-3 h-3 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0.15s" }} />
              <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.3s" }} />
            </div>
            <p className="text-gray-400 mt-4 text-sm">جاري تحميل المنيو...</p>
          </div>
        ) : (
          <>
            <DealsSection />
            <div className="bg-gradient-to-l from-gold/10 to-transparent border-b border-gold/10">
              <div className="max-w-5xl mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">المنيو</h2>
                <p className="text-gray-500 text-sm mt-1">جميع أصنافنا في مكان واحد</p>
              </div>
            </div>
            {categories.map((category: any) => (
              <MenuSection key={category.id} category={category} />
            ))}
          </>
        )}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
