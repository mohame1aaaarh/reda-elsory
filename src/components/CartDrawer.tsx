"use client"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"

const FACEBOOK_PAGE_ID = "61579250945799"

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const [copied, setCopied] = useState(false)
  const { items, removeItem, updateQuantity, clearCart, subtotal, taxAmount, discountAmount, total, totalAfterDiscount, itemCount } = useCart()

  const buildMessage = () => {
    let msg = "🛒 *طلب من رضا السوري*\n"
    msg += "━━━━━━━━━━━━━━━━\n\n"

    items.forEach((item) => {
      msg += `• ${item.name}`
      if (item.optionLabel) msg += ` (${item.optionLabel})`
      msg += `\n  العدد: ${item.quantity} × ${item.price} ج = ${item.quantity * item.price} ج\n\n`
    })

    msg += "━━━━━━━━━━━━━━━━\n"
    msg += `💰 *المجموع:* ${subtotal.toFixed(2)} ج\n`
    if (taxAmount > 0) msg += `📊 *الضريبة:* ${taxAmount.toFixed(2)} ج\n`
    msg += `⚽ *خصم 10% كأس العالم:* -${discountAmount.toFixed(2)} ج\n`
    msg += `💵 *الإجمالي بعد الخصم:* ${totalAfterDiscount.toFixed(2)} ج\n\n`
    msg += "━━━━━━━━━━━━━━━━\n"
    msg += "📍 يرجى إرسال العنوان ورقم التليفون للتواصل"
    return msg
  }

  const handleCheckout = async () => {
    const message = buildMessage()
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 6000)
      window.open(`https://m.me/${FACEBOOK_PAGE_ID}`, "_blank")
    } catch {
      const url = `https://m.me/${FACEBOOK_PAGE_ID}`
      window.open(url, "_blank")
    }
  }

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-full max-w-md bg-gradient-to-b from-[#FFFBF5] to-[#FFF5E6] shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-l from-primary to-primary-dark text-white px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛒</span>
              <h2 className="text-lg font-bold">سلة الطلبات</h2>
              {itemCount > 0 && (
                <span className="bg-gold text-primary-dark text-xs font-bold px-2 py-0.5 rounded-full">
                  {itemCount}
                </span>
              )}
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white transition-colors p-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Copy confirmation banner */}
        {copied && (
          <div className="bg-blue-600 text-white px-5 py-3 text-sm animate-fade-down border-b border-blue-500">
            <div className="flex items-start gap-2">
              <span className="text-lg shrink-0">📋</span>
              <div>
                <p className="font-bold text-xs">تم نسخ الطلب!</p>
                <p className="text-blue-200 text-xs mt-0.5 leading-relaxed">
                  تم نسخ الطلب إلى الحافظة. سيتم تحويلك إلى ماسنجر، قم بلصق الطلب (لصق) وإرساله.
                  <br />
                  <span className="opacity-70">⚠️ فيسبوك لا يسمح بإرسال الطلب تلقائياً حالياً، هذه الطريقة مؤقتة.</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4" style={{ maxHeight: "calc(100vh - 220px)" }}>
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4 opacity-30">🛒</div>
              <p className="text-gray-400 font-medium">السلة فارغة</p>
              <p className="text-gray-300 text-sm mt-1">أضف أصناف من المنيو</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gold/10"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                      {item.optionLabel && (
                        <span className="text-xs text-gold-dark font-medium">{item.optionLabel}</span>
                      )}
                      <p className="text-xs text-gray-400 mt-0.5">{item.price} ج للواحدة</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors p-1 shrink-0"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-sm font-bold"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-bold text-gray-800 text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-sm font-bold"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-primary text-sm">
                      {item.price * item.quantity} ج
                    </span>
                  </div>
                </div>
              ))}

              {/* Clear all */}
              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-gray-400 hover:text-red-500 transition-colors py-2"
              >
                تفريغ السلة
              </button>
            </div>
          )}
        </div>

        {/* Footer with totals */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gold/20 px-5 py-4 space-y-3">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>المجموع</span>
                <span>{subtotal.toFixed(2)} ج</span>
              </div>
              {taxAmount > 0 && (
                <div className="flex justify-between text-gray-500">
                  <span>ضريبة</span>
                  <span>{taxAmount.toFixed(2)} ج</span>
                </div>
              )}
              <div className="flex justify-between text-emerald-600 bg-emerald-50 -mx-5 px-5 py-2 rounded-lg">
                <span className="flex items-center gap-1">
                  <span className="inline-block animate-wc-ball text-base">⚽</span>
                  خصم كأس العالم 10%
                </span>
                <span className="font-bold">-{discountAmount.toFixed(2)} ج</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-primary border-t border-gray-100 pt-2">
                <span>الإجمالي بعد الخصم</span>
                <span>{totalAfterDiscount.toFixed(2)} ج</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.732 8.2l3.131 3.259L19.752 8.2l-6.559 6.763z" />
              </svg>
              إرسال الطلب عبر ماسنجر
            </button>

            <p className="text-[10px] text-gray-400 text-center leading-relaxed">
              سيتم نسخ الطلب وتحويلك إلى ماسنجر، قم بلصق الطلب وإرساله.
              <br />
              ⚠️ هذه الطريقة مؤقتة لحين تفعيل الإرسال التلقائي
            </p>
          </div>
        )}
      </div>
    </>
  )
}
