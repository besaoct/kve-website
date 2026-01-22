"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Zap,
  Factory,
  Wind,
  HardHat,
  Cpu,
  IndianRupee,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const productSegments = [
  {
    id: 1,
    title: "Welding, Cutting & Air Cleaning Equipment",
    description:
      "Advanced welding machines and systems for precision industrial applications",
    icon: Zap,
    image: "https://images.pexels.com/photos/5845902/pexels-photo-5845902.jpeg",
    features: [
      "Welding Equipment",
      "Extraction systems",
      "Cutting & Gouging systems",
      "Gas Manifold & Distribution Systems",
    ],
    color: "from-primary to-primary/80",
  },
  {
    id: 7,
    title: "Construction Chemicals",
    description:
      "Comprehensive range of chemicals for building and construction applications",
    icon: Factory,
    image:
      "https://condura.co.in/wp-content/uploads/2020/08/Engineering-Construction-01.jpg",
    features: [
      "Floor coatings Systems",
      "Decoratice Floor Coating",
      "Liquid Membranes/ HDPE/ PU/ Hybrid PU / APP/ Bitumen Waterproofing Solutions",
      "Refurbishment & Structural Restoration",
    ],
    color: "from-secondary to-secondary/80",
  },
  {
    id: 8,
    title: "Green Environment Solutions",
    description: "Eco-friendly solutions for a sustainable future.",
    icon: Wind,
    image: "https://www.annahar.com/Assets/ContentPhotos/Photos/241001Image1.jpg?width=1416&height=805&mode=crop&scale=both",
    features: [
      "Daylight Systems",
      "Street Cleaning Equipment",
      "Energy Efficiency in Ventilation/HVAC Projects",
      "Industrial Air Purifiers",
    ],
    color: "from-green-500 to-green-400",
  },
  {
    id: 9,
    title: "Material Handling & Storage Solutions",
    description:
      "Efficiently move, store, and manage materials with our solutions.",
    icon: HardHat,
    image: "https://mecaluxcom.cdnwm.com/documents/20128/474714/M2P10-Blogp-material-handling-systems-mistakes+-+ImageHeader.jpg/6f1181a4-5c09-f634-246f-89f5c6174876?t=1644957945000&e=jpg",
    features: [
      "Dock Equipment",
      "Loading Dock & Automation Solutions",
      "IT, software and connected solutions (Material Handling & Storage Solutions)",
      "Consultancy services (Material Handling & Storage Solutions)",
    ],
    color: "from-blue-500 to-blue-400",
  },
  {
    id: 10,
    title: "Financial solutions",
    description:
      "Flexible financing options to acquire the equipment you need.",
    icon: IndianRupee,
    image: "https://www.accord-consulting.com/ugc-1/1/10/0/what_are_tailored_financial_solution.jpg",
    features: [],
    color: "from-yellow-500 to-yellow-400",
  },
  {
    id: 11,
    title: "IT software AI",
    description:
      "Leverage the power of IT, software and AI for your business.",
    icon: Cpu,
    image: "https://i0.wp.com/swisscognitive.ch/wp-content/uploads/2024/06/Top-20-AI-Software-Of-2024-Best-Picks-For-Business-Users.jpeg",
    features: [],
    color: "from-purple-500 to-purple-400",
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
           <Link href={`/products?categories=${segment.id}`}>
                      <Card className="h-full overflow-hidden hover:shadow-sm transition-all duration-300 border hover:border-primary/20 py-0 shadow-none bg-muted">
                <div className="relative overflow-hidden">
                  {/* Background Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={segment.image || "/placeholder.svg"}
                      alt={segment.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-linear-to-br ${segment.color} opacity-10`} />
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <segment.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-1">{segment.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">{segment.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {segment.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground ">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 " />
                        <span className="line-clamp-1">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA (commented as in your original) */}
                  {/* <div className="mt-6 pt-4 border-t border-border">
                    <button className="text-[#D2A564] hover:text-[#D2A564]/80 font-medium text-sm flex items-center group/btn">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div> */}
                </CardContent>
              </Card>
           </Link>
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
          <div className="bg-muted rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Need Help Choosing the Right Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our technical experts are ready to help you find the perfect industrial solution for your specific
              requirements and applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="">
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