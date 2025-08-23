import Footer from '@/components/common/footer'
import Navigation from '@/components/common/navigation'
import Hero from '@/components/capturing-global-market/hero'
import MapSection from '@/components/capturing-global-market/map-section'
import CountriesWeServe from '@/components/capturing-global-market/countries-we-serve'

const CapturingGlobalMarketPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <MapSection />
        <CountriesWeServe />
      </main>
      <Footer />
    </div>
  )
}

export default CapturingGlobalMarketPage