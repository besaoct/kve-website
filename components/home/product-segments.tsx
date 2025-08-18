"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Shield, Cog, Wrench, Factory, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


const productSegments = [
  {
    id: 1,
    title: "Welding Equipment",
    description: "Advanced welding machines and systems for precision industrial applications",
    icon: Zap,
    image: "/placeholder.svg?height=400&width=600",
    features: ["MIG/TIG Systems", "Stick Welders", "Multi-Process Units"],
    color: "from-primary to-primary/80",
  },
  {
    id: 2,
    title: "Filler Metals",
    description: "Comprehensive range of electrodes, wires, and rods for superior weld quality",
    icon: Factory,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Stick Electrodes", "MIG/TIG Wires", "Flux-Cored Wires"],
    color: "from-secondary to-secondary/80",
  },
  {
    id: 3,
    title: "Automation Solutions",
    description: "Smart robotic systems and automated welding solutions for enhanced productivity",
    icon: Cog,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Robotic Welding", "Control Systems", "Integration Services"],
    color: "from-primary to-secondary",
  },
  {
    id: 4,
    title: "Safety & PPE",
    description: "Complete personal protective equipment and safety solutions for industrial environments",
    icon: Shield,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Protective Gear", "Safety Training", "Compliance Solutions"],
    color: "from-gray-600 to-gray-800",
  },
  {
    id: 5,
    title: "Cutting Equipment",
    description: "Precision cutting tools and plasma systems for metal fabrication",
    icon: Wrench,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Plasma Cutters", "Oxy-Fuel Systems", "Cutting Accessories"],
    color: "from-secondary to-primary",
  },
  {
    id: 6,
    title: "Accessories & Tools",
    description: "Essential tools, software, and accessories to support your welding operations",
    icon: Truck,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Welding Tools", "Software Solutions", "Maintenance Kits"],
    color: "from-gray-700 to-primary/80",
  },
]

export default function ProductSegments() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Our Product Segments</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of industrial solutions designed to meet the demanding requirements of
            modern manufacturing and fabrication.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productSegments.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <div className="relative overflow-hidden">
                  {/* Background Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={segment.image || "/placeholder.svg"}
                      alt={segment.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-80`} />
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <segment.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Explore Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{segment.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{segment.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {segment.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center group/btn">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Need Help Choosing the Right Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our technical experts are ready to help you find the perfect industrial solution for your specific
              requirements and applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Download Catalog
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-2xl -z-10" />
    </section>
  )
}
