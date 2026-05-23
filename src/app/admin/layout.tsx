import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "لوحة التحكم - رضا السوري",
  description: "إدارة المنيو والصور",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {children}
    </div>
  )
}
