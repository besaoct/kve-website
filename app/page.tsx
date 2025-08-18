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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <NewsletterPopup />
      <HeroSection />
      <StatisticsSection />
      <ProductSegments />
      <FeaturedProducts />
      <TestimonialsSection />
      <WhatsNewSection />
      <GlobalSuccessSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
