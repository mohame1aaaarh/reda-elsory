"use client"

import { useCart } from "@/lib/cart-context"

const PHONE = "201210001452"

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, clearCart, subtotal, taxAmount, discountAmount, total, totalAfterDiscount, itemCount } = useCart()

  const handleCheckout = () => {
    let message = "🛒 *طلب من رضا السوري*\n"
    message += "━━━━━━━━━━━━━━━━\n\n"

    items.forEach((item) => {
      message += `• ${item.name}`
      if (item.optionLabel) message += ` (${item.optionLabel})`
      message += `\n  العدد: ${item.quantity} × ${item.price} ج = ${item.quantity * item.price} ج\n\n`
    })

    message += "━━━━━━━━━━━━━━━━\n"
    message += `💰 *المجموع:* ${subtotal.toFixed(2)} ج\n`
    if (taxAmount > 0) message += `📊 *الضريبة:* ${taxAmount.toFixed(2)} ج\n`
    message += `🎉 *خصم 10%:* -${discountAmount.toFixed(2)} ج\n`
    message += `💵 *الإجمالي بعد الخصم:* ${totalAfterDiscount.toFixed(2)} ج\n\n`
    message += "━━━━━━━━━━━━━━━━\n"
    message += "📍 يرجى إرسال العنوان ورقم التليفون للتواصل"

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
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
              <div className="flex justify-between text-green-600">
                <span>🎉 خصم 10%</span>
                <span>-{discountAmount.toFixed(2)} ج</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-primary border-t border-gray-100 pt-2">
                <span>الإجمالي بعد الخصم</span>
                <span>{totalAfterDiscount.toFixed(2)} ج</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-500 text-white py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              إرسال الطلب عبر واتساب
            </button>
          </div>
        )}
      </div>
    </>
  )
}
