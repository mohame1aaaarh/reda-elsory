"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

interface Category {
  id: number
  name_ar: string
  slug: string
  display_order: number
  note_ar: string | null
  emoji: string
}

interface ItemOption {
  id: number
  menu_item_id: number
  label_ar: string | null
  price: number
  is_size: boolean
  display_order: number
}

interface MenuItem {
  id: number
  category_id: number
  name_ar: string
  description_ar: string | null
  image_url: string | null
  display_order: number
  options: ItemOption[]
}

export default function AdminMenu() {
  const [categories, setCategories] = useState<Category[]>([])
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState<any>(null)
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null)
  const [newItem, setNewItem] = useState({ name_ar: "", category_id: 0 })
  const [uploading, setUploading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/admin")
        return
      }
      setSession(session)
      loadData()
    })
  }, [])

  const loadData = async () => {
    const [catRes, itemsRes] = await Promise.all([
      supabase.from("categories").select("*").order("display_order"),
      supabase.from("menu_items").select("*, options:item_options(*)").order("display_order"),
    ])

    if (catRes.data) setCategories(catRes.data)
    if (itemsRes.data) setMenuItems(itemsRes.data)
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin")
  }

  const handleImageUpload = async (itemId: number, file: File) => {
    setUploading(true)
    const fileExt = file.name.split(".").pop()
    const fileName = `${itemId}-${Date.now()}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from("menu-images")
      .upload(fileName, file)

    if (uploadError) {
      alert(
        "فشل رفع الصورة: " + uploadError.message +
        "\n\nتأكد من:\n1. إنشاء bucket 'menu-images' في Supabase Storage\n2. تفعيل RLS policy (شغل supabase-schema.sql)\n3. تسجيل الدخول مرة أخرى"
      )
      setUploading(false)
      return
    }

    const { data: urlData } = supabase.storage
      .from("menu-images")
      .getPublicUrl(fileName)

    const { error: updateError } = await supabase
      .from("menu_items")
      .update({ image_url: urlData.publicUrl })
      .eq("id", itemId)

    if (updateError) {
      alert("فشل تحديث الصورة: " + updateError.message)
    }

    setUploading(false)
    loadData()
  }

  const handleDeleteImage = async (itemId: number) => {
    const { error } = await supabase
      .from("menu_items")
      .update({ image_url: null })
      .eq("id", itemId)

    if (!error) loadData()
  }

  const handlePriceUpdate = async (optionId: number, newPrice: number) => {
    const { error } = await supabase
      .from("item_options")
      .update({ price: newPrice })
      .eq("id", optionId)

    if (!error) loadData()
  }

  const handleDeleteItem = async (itemId: number) => {
    if (!confirm("هل أنت متأكد من حذف هذا العنصر؟")) return

    const { error } = await supabase
      .from("menu_items")
      .delete()
      .eq("id", itemId)

    if (!error) loadData()
  }

  const handleAddItem = async () => {
    if (!newItem.name_ar || !newItem.category_id) {
      alert("يرجى إدخال اسم الصنف واختيار التصنيف")
      return
    }

    const { error } = await supabase.from("menu_items").insert({
      name_ar: newItem.name_ar,
      category_id: newItem.category_id,
    })

    if (!error) {
      setNewItem({ name_ar: "", category_id: 0 })
      loadData()
    }
  }

  const handleAddOption = async (itemId: number, label_ar: string, price: number, is_size: boolean) => {
    const { error } = await supabase.from("item_options").insert({
      menu_item_id: itemId,
      label_ar,
      price,
      is_size,
    })

    if (!error) loadData()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-500">جاري التحميل...</div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            🇸🇾 لوحة التحكم - رضا السوري
          </h1>
          <p className="text-gray-500 text-sm mt-1">إدارة المنيو والصور والأسعار</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          تسجيل خروج
        </button>
      </div>

      {/* Add new item */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-lg font-bold mb-4">إضافة صنف جديد</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={newItem.category_id}
            onChange={(e) => setNewItem({ ...newItem, category_id: Number(e.target.value) })}
            className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-primary"
          >
            <option value={0}>اختر التصنيف</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.emoji} {cat.name_ar}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={newItem.name_ar}
            onChange={(e) => setNewItem({ ...newItem, name_ar: e.target.value })}
            placeholder="اسم الصنف"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-primary"
          />
          <button
            onClick={handleAddItem}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
          >
            إضافة
          </button>
        </div>
      </div>

      {/* Menu items per category */}
      <div className="space-y-6">
        {categories.map((category) => {
          const items = menuItems.filter((item) => item.category_id === category.id)

          if (items.length === 0) return null

          return (
            <div key={category.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-l from-primary/5 to-transparent px-6 py-4 border-b">
                <h2 className="text-xl font-bold text-primary">
                  {category.emoji} {category.name_ar}
                </h2>
              </div>

              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.id} className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Image */}
                      <div className="flex flex-col items-center gap-2">
                        {item.image_url ? (
                          <div className="relative">
                            <img
                              src={item.image_url}
                              alt={item.name_ar}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                            <button
                              onClick={() => handleDeleteImage(item.id)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full text-xs hover:bg-red-600"
                            >
                              ✕
                            </button>
                          </div>
                        ) : (
                          <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                            لا توجد صورة
                          </div>
                        )}
                        <label className="text-xs bg-gray-100 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                          {uploading ? "جاري الرفع..." : "رفع صورة"}
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) handleImageUpload(item.id, file)
                            }}
                          />
                        </label>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-bold text-gray-800">{item.name_ar}</h3>
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="text-red-500 text-sm hover:text-red-700"
                          >
                            حذف
                          </button>
                        </div>

                        {/* Price options */}
                        <div className="mt-3 space-y-2">
                          {(item.options || []).map((opt) => (
                            <div key={opt.id} className="flex items-center gap-2">
                              <span className="text-sm text-gray-600 min-w-[60px]">
                                {opt.label_ar || "السعر"}
                              </span>
                              <input
                                type="number"
                                defaultValue={opt.price}
                                onBlur={(e) => {
                                  const val = parseFloat(e.target.value)
                                  if (val !== opt.price) handlePriceUpdate(opt.id, val)
                                }}
                                className="w-20 px-2 py-1 border border-gray-300 rounded text-center text-sm outline-none focus:border-primary"
                                step="0.5"
                              />
                              <span className="text-sm text-gray-500">جنيه</span>
                            </div>
                          ))}

                          {/* Add option form */}
                          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100">
                            <input
                              type="text"
                              placeholder="مقاس (S, M, L)"
                              id={`label-${item.id}`}
                              className="w-24 px-2 py-1 border border-gray-300 rounded text-sm outline-none focus:border-primary"
                            />
                            <input
                              type="number"
                              placeholder="السعر"
                              id={`price-${item.id}`}
                              className="w-20 px-2 py-1 border border-gray-300 rounded text-sm outline-none focus:border-primary"
                            />
                            <select
                              id={`is-size-${item.id}`}
                              className="px-2 py-1 border border-gray-300 rounded text-sm outline-none focus:border-primary"
                            >
                              <option value="size">حجم</option>
                              <option value="addon">إضافة</option>
                            </select>
                            <button
                              onClick={() => {
                                const label = (document.getElementById(`label-${item.id}`) as HTMLInputElement).value
                                const price = parseFloat((document.getElementById(`price-${item.id}`) as HTMLInputElement).value)
                                const isSize = (document.getElementById(`is-size-${item.id}`) as HTMLSelectElement).value === "size"
                                if (label && price) {
                                  handleAddOption(item.id, label, price, isSize)
                                  ;(document.getElementById(`label-${item.id}`) as HTMLInputElement).value = ""
                                  ;(document.getElementById(`price-${item.id}`) as HTMLInputElement).value = ""
                                }
                              }}
                              className="px-3 py-1 bg-primary/10 text-primary rounded text-sm hover:bg-primary hover:text-white transition-colors"
                            >
                              + إضافة سعر
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
