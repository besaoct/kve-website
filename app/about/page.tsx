import Footer from '@/components/common/footer'
import Navigation from '@/components/common/navigation'
import Hero from '@/components/about/hero'
import OurSolutions from '@/components/about/our-solutions'
import IndustriesWeServe from '@/components/about/industries-we-serve'
import GetToKnowUs from '@/components/about/get-to-know-us'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <OurSolutions />
        <IndustriesWeServe />
        <GetToKnowUs />
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
