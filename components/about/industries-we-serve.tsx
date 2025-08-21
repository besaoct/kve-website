"use client"

import { motion } from "framer-motion"
import { Factory, Ship, Truck, Building, Wind, Atom, HeartPulse, Package, Anchor, Construction, Waves } from 'lucide-react'

const industries = [
  { name: "Metal Fabrication", icon: Factory },
  { name: "Transportation", icon: Truck },
  { name: "Construction", icon: Building },
  { name: "Chemical & Process", icon: Atom },
  { name: "Shipbuilding", icon: Ship },
  { name: "Oil & Gas & Offshore", icon: Anchor },
  { name: "Renewable Energy", icon: Wind },
  { name: "Offshore Industry", icon: Waves },
]

export default function IndustriesWeServe() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our solutions are trusted by leading companies across a wide range of demanding industrial sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="bg-background border border-border rounded-full p-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <industry.icon className="h-10 w-10" />
              </div>
              <span className="font-semibold text-foreground">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
