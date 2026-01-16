"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Palette, Package, Lightbulb, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "../ui/button"

const solutions = [
  {
    title: "Welding & Cutting Solutions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0ClJkeFL0nJ2xvRusPW3720rGJHppcQODo5u9fkWQdHEqNmeMdlomoZeOc-yU4E-8PI&usqp=CAU",
    icon: Zap,
  },
  {
    title: "Floorings & Coatings",
    image: "https://www.baumerk.com/storage/app/media/blog/flooring.jpg",
    icon: Palette,
  },
  {
    title: "Materials Handling & Storage Solutions",
    image: "https://mecaluxcom.cdnwm.com/documents/20128/474714/M2P10-Blogp-material-handling-systems-mistakes+-+ImageHeader.jpg/6f1181a4-5c09-f634-246f-89f5c6174876?t=1644957945000&e=jpg",
    icon: Package,
  },
  {
    title: "Energy Efficiency Solutions for Establishments",
    image: "https://c3newsmag.com/wp-content/uploads/2020/11/Untitled-1_0005_nuclear-860x575.jpg",
    icon: Lightbulb,
  },
  {
    title: "Engineering & Project Consultancy",
    image: "https://www.rites.com/images/Consultancy%20Reference%20Pic.jpg",
    icon: Wrench,
  },
]

export default function OurSolutions() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Our Core Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized solutions built on decades of expertise, engineered to deliver measurable improvements in performance and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-all duration-300 border bg-muted/30 hover:border-primary/20 gap-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 inline-block mb-2">
                      <solution.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white">{solution.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Button className="group/btn">
                    Explore Solution
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}