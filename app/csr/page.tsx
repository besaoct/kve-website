import Footer from '@/components/common/footer'
import Navigation from '@/components/common/navigation'
import Hero from '@/components/csr/hero'
import CsrReports from '@/components/csr/csr-reports'

const CsrPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <CsrReports />
      </main>
      <Footer />
    </div>
  )
}

export default CsrPage
