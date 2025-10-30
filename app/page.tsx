'use client'

import Navigation from "@/components/common/navigation"
import NewsletterPopup from "@/components/home/newsletter-popup"
import HeroSection from "@/components/home/hero-section"
import StatisticsSection from "@/components/home/statistics-section"
import ProductSegments from "@/components/home/product-segments"
import FeaturedProducts from "@/components/home/featured-products"
import TestimonialsSection from "@/components/home/testimonials-section"
import WhatsNewSection from "@/components/home/whats-new-section"
import GlobalSuccessSection from "@/components/home/global-success-section"
import NewsletterSection from "@/components/home/newsletter-section"
import Footer from "@/components/common/footer"
// import { useState } from "react"
import { PartnerLogos } from "@/components/home/partner-logos"
import { WhatsAppButton } from "@/components/common/wa-btn"
import { LiveChat } from "@/components/common/live-chat"
// import CategoryHeroSection from "@/components/category-hero/hero-section"

export default function HomePage() {
  
  // const [isPopupVisible, setIsPopupVisible] = useState(false)

  return (
    <div className="min-h-screen bg-background">
     <Navigation/>
     <HeroSection />
      <NewsletterPopup  /> 
      <StatisticsSection />
      <ProductSegments />
      <FeaturedProducts />
      <TestimonialsSection />
      <WhatsNewSection />
      <GlobalSuccessSection />
      <PartnerLogos/>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton/>
      <LiveChat/>
    </div>
  )
}
