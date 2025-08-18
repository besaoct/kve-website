import Navigation from "@/components/common/navigation"
import Hero from "@/components/partner-page/hero"
import Stages from "@/components/partner-page/stages"
import PartnerTier from "@/components/partner-page/partnerTier" 
import Footer from "@/components/common/footer"


export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-background">
      
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Stages />
        <PartnerTier />
      </main>
      <Footer />
    </div>
  )
}
