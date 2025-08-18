import Navigation from "@/components/common/navigation"
import RewardsHero from "@/components/rewards/hero"
import HowItWorks from "@/components/rewards/howItWorks"
import Benefits from "@/components/rewards/benefits"
import RewardTiers from "@/components/rewards/tiers"
import Footer from "@/components/common/footer"

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <RewardsHero />
        <HowItWorks />
        <Benefits />
        <RewardTiers />
      </main>
      <Footer />
    </div>
  )
}