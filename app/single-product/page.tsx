import Navigation from "@/components/common/navigation"
import Footer from "@/components/common/footer"
import Item from "@/components/single-product/item"
import ProductTabs from "@/components/single-product/item-detail"

export default function SingleProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <Item />
        <ProductTabs />
      </main>
      <Footer />
    </div>
  )
}