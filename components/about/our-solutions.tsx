"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Cog, Shield, Cpu, Settings, Wind } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "../ui/button"

const solutions = [
  {
    title: "Welding & Arc Solutions",
    image: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg",
    icon: Zap,
  },
  {
    title: "Industrial Automation & Robotics",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    icon: Cog,
  },
  {
    title: "Valve & Flow Control Systems",
    image: "https://images.pexels.com/photos/5907591/pexels-photo-5907591.jpeg",
    icon: Settings,
  },
  {
    title: "Safety & PPE Solutions",
    image: "https://images.pexels.com/photos/4491448/pexels-photo-4491448.jpeg",
    icon: Shield,
  },
  {
    title: "Digital & Software Services",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    icon: Cpu,
  },
  {
    title: "Custom Engineering Solutions",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    icon: Wind,
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
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Our Solutions Ecosystem</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete ecosystem of products, services, and expertise designed to solve your toughest industrial challenges.
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
              <Card className="h-full overflow-hidden  transition-all duration-300 border bg-muted/30 hover:border-primary/20 gap-0">
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
                  <Button className=" group/btn">
                    Read More
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
