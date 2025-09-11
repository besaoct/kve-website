"use client"

import { motion } from "framer-motion"
import { Star, ArrowRight, Eye, ShoppingCart, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "KVE-7018 Stick Electrodes",
    category: "Filler Metals",
    description:
      "Premium low-hydrogen electrodes for structural steel welding with superior arc stability and weld quality.",
    image: "https://images.pexels.com/photos/9754818/pexels-photo-9754818.jpeg",
    price: "₹89.99",
    originalPrice: "₹109.99",
    rating: 4.8,
    reviews: 124,
    features: ["Low Hydrogen", "All Position", "AC/DC Compatible"],
    badge: "Best Seller",
    badgeColor: "bg-primary",
  },
  {
    id: 2,
    name: "KVE-MIG Pro 250",
    category: "Welding Equipment",
    description:
      "Advanced MIG welding system with digital controls and superior arc performance for professional applications.",
    image: "https://images.pexels.com/photos/3158651/pexels-photo-3158651.jpeg",
    price: "₹2,499.99",
    originalPrice: null,
    rating: 4.9,
    reviews: 87,
    features: ["Digital Display", "Pulse MIG", "Aluminum Ready"],
    badge: "New",
    badgeColor: "bg-teal-600",
  },
  {
    id: 3,
    name: "KVE-Flux Core 71T-1",
    category: "Filler Metals",
    description:
      "Self-shielded flux-cored wire for outdoor welding applications with excellent penetration and bead appearance.",
    image: "https://images.pexels.com/photos/9754818/pexels-photo-9754818.jpeg",
    price: "₹156.99",
    originalPrice: "₹179.99",
    rating: 4.7,
    reviews: 203,
    features: ["Self-Shielded", "Outdoor Use", "Fast Travel Speed"],
    badge: "Popular",
    badgeColor: "bg-green-600",
  },
  {
    id: 4,
    name: "KVE-Safety Pro Helmet",
    category: "Safety/PPE",
    description:
      "Auto-darkening welding helmet with crystal clear optics and advanced protection for professional welders.",
    image: "https://images.pexels.com/photos/3158651/pexels-photo-3158651.jpeg",
    price: "₹299.99",
    originalPrice: "₹349.99",
    rating: 4.6,
    reviews: 156,
    features: ["Auto-Darkening", "4 Arc Sensors", "Grind Mode"],
    badge: "Featured",
    badgeColor: "bg-purple-600",
  },
]

export default function FeaturedProducts() {
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
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground ">Featured Products</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our most popular and innovative industrial solutions, trusted by professionals worldwide for their
            quality and performance.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
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
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Badge */}
                    <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>{product.badge}</Badge>

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
                  <p className="text-xs text-primary font-medium mb-2 uppercase tracking-wide">{product.category}</p>

                  {/* Product Name */}
                 <Link href={`/single-product`}  className="text-lg font-heading font-bold text-foreground mb-2 line-clamp-2">{product.name}</Link>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{product.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <Badge variant="outline" className="text-xs">
                        Save{" "}
                        {Math.round(
                          ((Number.parseFloat(product.originalPrice.replace(/[₹,]/g, "")) -
                            Number.parseFloat(product.price.replace(/[₹,]/g, ""))) /
                            Number.parseFloat(product.originalPrice.replace(/[₹,]/g, ""))) *
                            100,
                        )}
                        %
                      </Badge>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex-1 " size="sm">
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
          ))}
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
              <Button size="lg" className="">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
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
