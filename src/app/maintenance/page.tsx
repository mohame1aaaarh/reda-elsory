import Image from "next/image"

export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#fff8f0] to-[#f5e6d0] px-5 py-12 text-center text-[#1a1a2e]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(200,164,92,0.14),transparent_40%),radial-gradient(ellipse_at_85%_80%,rgba(139,0,0,0.08),transparent_42%)]" />

      <section className="relative w-full max-w-xl rounded-[2rem] border border-[#c8a45c]/30 bg-white/75 px-7 py-12 shadow-[0_24px_80px_rgba(93,0,0,0.12)] backdrop-blur-sm sm:px-14 sm:py-16">
        <Image
          src="/logo.png"
          alt="شعار مطعم رضا السوري"
          width={88}
          height={88}
          priority
          className="mx-auto mb-6 rounded-full"
        />

        <p className="mb-3 text-sm font-semibold tracking-wide text-[#8b0000]">مطعم رضا السوري</p>
        <div aria-hidden="true" className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#8b0000]/10 text-3xl">
          🛠️
        </div>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-[#5d0000] sm:text-4xl">
          الموقع متوقف للصيانة
        </h1>
        <p className="mx-auto max-w-md text-base leading-8 text-[#51483f] sm:text-lg">
          نعمل حاليًا على تحسين خدمتنا لتكون تجربتكم أفضل. نعتذر عن عدم استقبال الطلبات مؤقتًا، وسنعود إليكم قريبًا.
        </p>

        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#c8a45c]" />
        <p className="mt-5 text-sm text-[#766b60]">شكرًا لصبركم وثقتكم بنا</p>
      </section>
    </main>
  )
}
