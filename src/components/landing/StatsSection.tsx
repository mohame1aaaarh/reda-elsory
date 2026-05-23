export default function StatsSection() {
  const stats = [
    { icon: "🍽️", value: "+50", label: "صنف في المنيو" },
    { icon: "👨‍🍳", value: "+10", label: "سنوات خبرة" },
    { icon: "😊", value: "+1000", label: "عميل يومياً" },
    { icon: "⭐", value: "4.9", label: "تقييم العملاء" },
    { icon: "📦", value: "+100K", label: "طلب تم تنفيذه" },
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-l from-primary/5 via-gold/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-md border border-gold/10 mb-3">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
