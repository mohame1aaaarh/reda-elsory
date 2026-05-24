import type { Metadata } from "next"
import { Readex_Pro } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import EidPopup from "@/components/EidPopup"

const readexPro = Readex_Pro({
  subsets: ["arabic"],
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://reda-elsory.vercel.app"),
  title: "رضا السوري | للمأكولات السورية",
  description: "أشهر المأكولات السورية في الهرم - شاورما، فتة، كريب، بروستد، وجبات عائلية. اطلب أونلاين عبر واتساب.",
  keywords: ["رضا السوري", "مأكولات سورية", "شاورما", "الهرم", "فتة", "كريب", "بروستد", "وجبات سورية"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "رضا السوري | للمأكولات السورية",
    description: "أشهر المأكولات السورية في الهرم - شاورما، فتة، كريب، بروستد",
    type: "website",
    locale: "ar_EG",
    siteName: "رضا السوري",
    images: [{ url: "/logo.png", width: 512, height: 512 }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={readexPro.variable}>
      <body className="min-h-screen">
        <CartProvider>
          {children}
          <EidPopup />
        </CartProvider>
      </body>
    </html>
  )
}
