export interface Category {
  id: number
  name_ar: string
  slug: string
  display_order: number
  note_ar: string | null
  emoji: string
}

export interface MenuItem {
  id: number
  category_id: number
  name_ar: string
  description_ar: string | null
  image_url: string | null
  display_order: number
  created_at: string
  options: ItemOption[]
}

export interface ItemOption {
  id: number
  menu_item_id: number
  label_ar: string | null
  price: number
  is_size: boolean
  display_order: number
}

export interface Deal {
  id: number
  title_ar: string
  description_ar: string | null
  image_url: string | null
  price: number
  old_price: number | null
  is_active: boolean
  display_order: number
  created_at: string
}

export interface MenuWithItems extends Category {
  items: MenuItem[]
}
