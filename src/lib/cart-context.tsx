"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"

export interface CartItem {
  id: string
  menuItemId: number
  name: string
  optionLabel: string | null
  price: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "id" | "quantity">) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, delta: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
  taxAmount: number
  total: number
}

const TAX_RATE = 0.14

const CartContext = createContext<CartContextType | undefined>(undefined)

function generateId(): string {
  return Math.random().toString(36).substring(2, 10)
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem("reda-cart")
      if (saved) setItems(JSON.parse(saved))
    } catch {}
  }, [])

  useEffect(() => {
    localStorage.setItem("reda-cart", JSON.stringify(items))
  }, [items])

  const addItem = useCallback(
    (newItem: Omit<CartItem, "id" | "quantity">) => {
      setItems((prev) => {
        const key = `${newItem.menuItemId}-${newItem.optionLabel || ""}`
        const existing = prev.find(
          (i) => `${i.menuItemId}-${i.optionLabel || ""}` === key
        )
        if (existing) {
          return prev.map((i) =>
            `${i.menuItemId}-${i.optionLabel || ""}` === key
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        }
        return [...prev, { ...newItem, id: generateId(), quantity: 1 }]
      })
    },
    []
  )

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i))
        .filter((i) => i.quantity > 0)
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const taxAmount = subtotal * TAX_RATE
  const total = subtotal + taxAmount

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal, taxAmount, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
