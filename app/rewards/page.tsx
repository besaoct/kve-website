import Navigation from "@/components/common/navigation"
import RewardsHero from "@/components/rewards/hero"
import HowItWorks from "@/components/rewards/howItWorks"
import EarnPointsSection from "@/components/rewards/earnPointsSection"
import RedeemPointsSection from "@/components/rewards/redeemPointsSection"
import Disclaimer from "@/components/rewards/disclaimer"
import Footer from "@/components/common/footer"

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <RewardsHero />
        <HowItWorks />
        <EarnPointsSection />
        <RedeemPointsSection />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  )
}