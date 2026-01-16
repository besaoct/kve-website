"use client"

import { motion } from "framer-motion"
import { 
  Factory, 
  Car, 
  Ship, 
  Truck, 
  Building2, 
  Wind, 
  Wrench, 
  HardHat, 
  Waves,
  School
} from 'lucide-react'

const industries = [
  { name: "Welding Schools", icon: School },
  { name: "Automobile Industries", icon: Car },
  { name: "Heavy Industries", icon: Factory },
  { name: "Ship Building", icon: Ship },
  { name: "Transport Manufacturing", icon: Truck },
  { name: "Steel Construction", icon: Building2 },
  { name: "Energy Sources", icon: Wind },
  { name: "Machine Building", icon: Wrench },
  { name: "Building Construction", icon: HardHat },
  { name: "Tensile Ceiling Structure", icon: Waves },
]

export default function IndustriesWeServe() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From training the next generation of welders to powering mega infrastructure projects — 
            our solutions deliver excellence across diverse and demanding sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="bg-background border-2 border-border rounded-2xl p-6 mb-4 
                            group-hover:bg-primary group-hover:border-primary 
                            transition-all duration-300 shadow-lg group-hover:shadow-2xl 
                            group-hover:scale-110"
              >
                <industry.icon className="h-12 w-12 text-foreground group-hover:text-white transition-colors" />
              </div>
              <span className="font-medium text-foreground text-center leading-tight px-2">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}