"use client"

import { useState } from "react"
import Navbar from "@/components/landing/Navbar"
import HeroSection from "@/components/landing/HeroSection"
import DealsSection from "@/components/DealsSection"
import AboutSection from "@/components/landing/AboutSection"
import StatsSection from "@/components/landing/StatsSection"
import VideoSection from "@/components/landing/VideoSection"
import LocationSection from "@/components/landing/LocationSection"
import Footer from "@/components/Footer"
import CartDrawer from "@/components/CartDrawer"
import CartToast from "@/components/CartToast"
import CartBottomBar from "@/components/CartBottomBar"
import ScrollToTop from "@/components/ScrollToTop"

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <CartToast />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <CartBottomBar onCartClick={() => setCartOpen(true)} />

      <main className="pb-20">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <DealsSection limit={1} showViewAll />
        <VideoSection />
        <LocationSection />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
