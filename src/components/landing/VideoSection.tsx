const videos = [
  {
    title: "🔥 البروستد المقرمش",
    subtitle: "وصفة سرية وقرمشة لا تُقاوم",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1497906585467438%2F&show_text=false&width=267&t=0",
  },
  {
    title: "🌯 شاورما رضا السوري",
    subtitle: "السر في التتبيلة.. طعم ولا أروع",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F26331851946444526%2F&show_text=false&width=267&t=0",
  },
  {
    title: "💥 أجمل شاورما في الهرم",
    subtitle: "لأصحاب الذوق الرفيع.. شاورما فاخرة",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1209141293964496%2F&show_text=false&width=267&t=0",
  },
]

export default function VideoSection() {
  return (
    <section id="videos" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark rounded-full px-4 py-1.5 text-xs font-medium mb-4">
            <span>🎬</span>
            <span>فيديوهات</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            شاهد <span className="text-primary">مطعمنا</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            تعرف على مطعم رضا السوري عن قرب من خلال فيديوهاتنا الحصرية
          </p>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
          {videos.map((video) => (
            <div key={video.title} className="group">
              {/* Video container — exact 9:16 for Reels */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gray-900" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src={video.src}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>

              {/* Caption */}
              <div className="mt-3 px-1">
                <h3 className="font-bold text-gray-800 text-sm leading-relaxed">
                  {video.title}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  {video.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
