"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, ArrowRight, Eye, ShoppingCart, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { getFeaturedProducts } from "@/data/api/products"
import type { Product } from "@/data/api/products/types"

// Badge configuration based on index
const getBadgeConfig = (index: number) => {
  const configs = [
    { label: "Best Seller", color: "bg-primary" },
    { label: "New", color: "bg-teal-600" },
    { label: "Popular", color: "bg-green-600" },
    { label: "Featured", color: "bg-purple-600" },
  ]
  return configs[index] || configs[3]
}

// Generate mock rating (replace with real data when available)
const getMockRating = (productId: number) => {
  const baseRating = 4.5
  const variation = (productId % 10) * 0.05
  return Math.min(5, baseRating + variation)
}

const getMockReviewCount = (productId: number) => {
  return 50 + (productId % 150)
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const data = await getFeaturedProducts(4)
        setProducts(data)
      } catch (err) {
        console.error("Error fetching featured products:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (isLoading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-8 w-8 bg-neutral-200 animate-pulse rounded mx-auto mb-4"></div>
            <div className="h-10 w-64 bg-neutral-200 animate-pulse rounded mx-auto mb-4"></div>
            <div className="h-6 w-96 bg-neutral-200 animate-pulse rounded mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-muted rounded-lg overflow-hidden">
                <div className="h-48 bg-neutral-200 animate-pulse"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-neutral-200 animate-pulse rounded"></div>
                  <div className="h-6 bg-neutral-200 animate-pulse rounded"></div>
                  <div className="h-4 bg-neutral-200 animate-pulse rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (products.length === 0) return null

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center flex-col flex-wrap sm:flex-row gap-4 sm:items-start justify-center mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">Featured Products</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our most popular and innovative industrial solutions, trusted by professionals worldwide for their
            quality and performance.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => {
            const badgeConfig = getBadgeConfig(index)
            const rating = getMockRating(product.id)
            const reviewCount = getMockReviewCount(product.id)
            
            // Extract features from hierarchy
            const features = []
            if (product.segment?.title) features.push(product.segment.title)
            if (product.sub_segment?.title) features.push(product.sub_segment.title)
            if (product.sub_category?.title) features.push(product.sub_category.title)

            // Calculate discount
            const price = parseFloat(product.price)
            const originalPrice = price * 1.2 // Mock original price (20% higher)
            const discount = Math.round(((originalPrice - price) / originalPrice) * 100)

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-none transition-all duration-300 border hover:border-amber-300/20 py-0 shadow-none bg-muted">
                  <div className="relative overflow-hidden">
                    {/* Product Image */}
                    <div className="relative h-48 bg-gray-100">
                      {product.primary_image_url ? (
                        <img
                          src={product.primary_image_url}
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-neutral-200">
                          <span className="text-6xl">📦</span>
                        </div>
                      )}

                      {/* Badge */}
                      <Badge className={`absolute top-3 left-3 ${badgeConfig.color} text-white`}>
                        {badgeConfig.label}
                      </Badge>

                      {/* Quick Actions */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full">
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                    </div>
                  </div>

                  <CardContent className="p-4">
                    {/* Category */}
                    <p className="text-xs text-primary font-medium mb-2 uppercase tracking-wide">
                      {product.category?.title || "Product"}
                    </p>

                    {/* Product Name */}
                    <Link href={`/single-product`} className="text-lg font-heading font-bold text-foreground mb-2 line-clamp-2 block">
                      {product.title}
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">
                        {rating.toFixed(1)} ({reviewCount})
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {product.short_description || "High-quality industrial equipment for professional use."}
                    </p>

                    {/* Features */}
                    {features.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-foreground">
                          {product.formatted_price || `₹${product.price}`}
                        </span>
                        {discount > 0 && (
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      {discount > 0 && (
                        <Badge variant="outline" className="text-xs">
                          Save {discount}%
                        </Badge>
                      )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button asChild variant="outline" size="sm" className="px-3 bg-transparent">
                        <Link href={`/single-product`} className="flex items-center">
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-muted rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-secondary mr-3" />
              <h3 className="text-2xl font-heading font-bold text-foreground">Explore Our Complete Catalog</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Browse through our extensive collection of over 1,000+ industrial products and solutions designed for
              professional applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Request Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
    </section>
  )
}