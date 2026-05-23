"use client"

import { useState, useEffect, useCallback } from "react"

interface Toast {
  id: string
  message: string
}

let toastListeners: ((msg: string) => void)[] = []

export function showCartToast(message: string) {
  toastListeners.forEach((fn) => fn(message))
}

export default function CartToast() {
  const [toast, setToast] = useState<Toast | null>(null)

  const addToast = useCallback((message: string) => {
    const id = Math.random().toString(36).substring(2, 8)
    setToast({ id, message })
  }, [])

  useEffect(() => {
    toastListeners.push(addToast)
    return () => {
      toastListeners = toastListeners.filter((fn) => fn !== addToast)
    }
  }, [addToast])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 2500)
    return () => clearTimeout(timer)
  }, [toast])

  if (!toast) return null

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] animate-fade-down">
      <div className="bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-medium border border-white/10 backdrop-blur-md">
        <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">✓</span>
        <span>{toast.message}</span>
      </div>
    </div>
  )
}
