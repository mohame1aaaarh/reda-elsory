import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="رضا السوري"
                width={600}
                height={450}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark rounded-full px-4 py-1.5 text-xs font-medium mb-4">
              <span>🇸🇾</span>
              <span>عن رضا السوري</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              أشهى المأكولات السورية
              <br />
              <span className="text-primary">في قلب الهرم</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                مرحباً بكم في <strong className="text-primary">رضا السوري</strong>، وجهتكم الأولى
                لأشهى المأكولات السورية في منطقة الهرم. نقدم لكم تجربة طعام فريدة تجمع بين
                النكهات الأصيلة والمذاق الرائع.
              </p>
              <p>
                تتميز مطاعم رضا السوري باستخدام أجود أنواع المكونات الطازجة وأفضل الوصفات
                التقليدية السورية التي توارثناها عبر الأجيال. من الشاورما اللذيذة إلى الفتة
                الشهية، ومن الكريب المحشي إلى البروستد المقرمش، كل طبق يحكي قصة من التقاليد
                العريقة.
              </p>
              <p>
                نحرص على تقديم أفضل خدمة لعملائنا الكرام مع ضمان الجودة والنظافة في كل
                مراحل التحضير. نفتخر بثقة عملائنا التي تمتد لأكثر من عشر سنوات.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              <div>
                <div className="text-2xl font-bold text-primary">+50</div>
                <div className="text-xs text-gray-500">صنف في المنيو</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">+10</div>
                <div className="text-xs text-gray-500">سنوات خبرة</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">+1000</div>
                <div className="text-xs text-gray-500">عميل يومياً</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
