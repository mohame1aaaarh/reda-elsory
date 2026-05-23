"use client"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { showCartToast } from "./CartToast"

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

export default function MenuItemCard({
  item,
  hasSizes,
}: {
  item: MenuItem
  hasSizes: boolean
}) {
  const [imgError, setImgError] = useState(false)
  const [addedId, setAddedId] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const { addItem, items, updateQuantity } = useCart()
  const options = item.options || []

  const sizeOptions = options
    .filter((o) => o.is_size)
    .sort((a, b) => a.display_order - b.display_order)
  const singlePrice = options.length === 1 ? options[0].price : null

  const handleAdd = (opt: { label_ar: string | null; price: number }) => {
    const key = `${item.id}-${opt.label_ar || ""}`
    addItem({
      menuItemId: item.id,
      name: item.name_ar,
      optionLabel: opt.label_ar,
      price: opt.price,
    })
    setAddedId(key)
    showCartToast(`${item.name_ar} تمت الإضافة 🎉`)
    setTimeout(() => setAddedId(null), 800)
  }

  const getCartQty = (optLabel?: string | null): number => {
    const key = `${item.id}-${optLabel || ""}`
    const found = items.find((i) => `${i.menuItemId}-${i.optionLabel || ""}` === key)
    return found ? found.quantity : 0
  }

  const getCartId = (optLabel?: string | null): string | undefined => {
    const key = `${item.id}-${optLabel || ""}`
    const found = items.find((i) => `${i.menuItemId}-${i.optionLabel || ""}` === key)
    return found?.id
  }

  const priceButton = (opt: { label_ar: string | null; price: number }) => {
    const key = `${item.id}-${opt.label_ar || ""}`
    const justAdded = addedId === key
    const cartId = getCartId(opt.label_ar)
    const qty = getCartQty(opt.label_ar)

    return (
      <div key={key} className="inline-flex items-center">
        {qty > 0 ? (
          <div className="inline-flex items-center gap-0 rounded-xl overflow-hidden border border-primary/20 bg-white shadow-sm">
            <button
              onClick={() => cartId && updateQuantity(cartId, -1)}
              className="w-8 h-8 flex items-center justify-center text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors"
            >
              −
            </button>
            <span className="w-8 h-8 flex items-center justify-center bg-primary/5 text-primary font-bold text-xs">
              {qty}
            </span>
            <button
              onClick={() => {
                addItem({
                  menuItemId: item.id,
                  name: item.name_ar,
                  optionLabel: opt.label_ar,
                  price: opt.price,
                })
                showCartToast(`${item.name_ar} +1`)
              }}
              className="w-8 h-8 flex items-center justify-center text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => handleAdd(opt)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all border active:scale-95 ${
              justAdded
                ? "bg-green-600 text-white border-green-600 scale-105"
                : "bg-white border-gold/20 text-gray-700 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/20"
            }`}
          >
            {justAdded ? (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                تم
              </span>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                {opt.label_ar && <span className="text-xs opacity-75">{opt.label_ar}</span>}
                <span className="flex items-center gap-0.5 font-bold">
                  <span>{opt.price}</span>
                  <span className="text-[10px] opacity-70">ج</span>
                </span>
              </>
            )}
          </button>
        )}
      </div>
    )
  }

  return (
    <>
    <div className="group relative rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFFBF5] via-[#FFFBF5] to-[#FFF5E6] border border-gold/12 shadow-md" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-0 -left-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:left-[200%] transition-all duration-700" />
        </div>
      </div>

      <div className="relative p-4 md:p-5">
        <div className="flex items-center gap-4">
          {item.image_url && !imgError && (
            <div className="relative shrink-0">
              <button
                onClick={() => setLightbox(item.image_url!)}
                className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-xl overflow-hidden border-2 border-gold/15 shadow-md ring-1 ring-gold/10 cursor-pointer transition-all hover:ring-gold/40 hover:shadow-lg"
              >
                <img
                  src={item.image_url}
                  alt={item.name_ar}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={() => setImgError(true)}
                />
              </button>
              <button
                onClick={() => setLightbox(item.image_url!)}
                className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors rounded-xl"
              >
                <svg className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m-3-3h6" />
                </svg>
              </button>
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base md:text-lg font-bold text-gray-800 group-hover:text-primary transition-colors leading-relaxed">
                {item.name_ar}
              </h3>

              {singlePrice !== null && !hasSizes && (
                <span className="shrink-0 bg-gradient-to-l from-gold/20 to-gold/5 text-gold-dark font-bold px-3 py-1.5 rounded-lg text-sm border border-gold/15">
                  {singlePrice}
                  <span className="text-[10px]"> ج</span>
                </span>
              )}
            </div>

            {item.description_ar && (
              <p className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed line-clamp-2">
                {item.description_ar}
              </p>
            )}

            <div className="mt-3 flex flex-wrap gap-1.5">
              {hasSizes && sizeOptions.map((opt) => priceButton(opt))}

              {!hasSizes && options.length > 1 && options.map((opt) => priceButton(opt))}

              {!hasSizes && singlePrice !== null && (
                <div className="inline-flex items-center">
                  {(() => {
                    const qty = getCartQty(null)
                    const cartId = getCartId(null)
                    if (qty > 0) {
                      return (
                        <div className="inline-flex items-center gap-0 rounded-xl overflow-hidden border border-primary/20 bg-white shadow-sm">
                          <button
                            onClick={() => cartId && updateQuantity(cartId, -1)}
                            className="w-8 h-8 flex items-center justify-center text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors"
                          >−</button>
                          <span className="w-8 h-8 flex items-center justify-center bg-primary/5 text-primary font-bold text-xs">{qty}</span>
                          <button
                            onClick={() => {
                              addItem({ menuItemId: item.id, name: item.name_ar, optionLabel: null, price: singlePrice })
                              showCartToast(`${item.name_ar} +1`)
                            }}
                            className="w-8 h-8 flex items-center justify-center text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors"
                          >+</button>
                        </div>
                      )
                    }
                    return (
                      <button
                        onClick={() => {
                          addItem({ menuItemId: item.id, name: item.name_ar, optionLabel: null, price: singlePrice })
                          showCartToast(`${item.name_ar} تمت الإضافة 🎉`)
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold transition-all hover:bg-primary-light active:scale-95 shadow-md shadow-primary/20"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        أضف للسلة
                      </button>
                    )
                  })()}
                </div>
              )}

              {!hasSizes && singlePrice === null && options.length === 0 && (
                <button
                  onClick={() => {
                    addItem({ menuItemId: item.id, name: item.name_ar, optionLabel: null, price: 0 })
                    showCartToast(`${item.name_ar} تمت الإضافة 🎉`)
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium transition-all hover:bg-primary hover:text-white active:scale-95"
                >
                  أضف للسلة
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Image Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
