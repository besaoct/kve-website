import Footer from '@/components/common/footer'
import Navigation from '@/components/common/navigation'
import Item from '@/components/products/single-product/item'
import ProductTabs from '@/components/products/single-product/item-details'
import React from 'react'

const page = () => {
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

export default page