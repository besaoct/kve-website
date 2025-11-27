"use client"

import Footer from "@/components/common/footer"
import Navigation from "@/components/common/navigation"
import { motion } from "framer-motion"
import { Bot, Cpu, Settings, Zap } from "lucide-react"
import Image from "next/image"

export default function AutomationPage() {
  return (
    <>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="flex-1">
      {/* Hero */}
      <section className="relative bg-black py-32">
        {/* <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-30 bg-cover" /> */}
        <div className="container mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              Welding <span className="text-primary">Automation</span> & Robotics
            </h1>
            <p className="text-xl text-neutral-200 max-w-4xl mx-auto">
              Advanced robotic welding cells, orbital welding systems, automated cutting, positioning, and turnkey automation projects powered by Kemppi & global leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Robotic Welding Cells", icon: Bot, img: "https://www.keyplant.com/wp-content/uploads/2023/09/key-plant-automation-robotic-welding-cell-compact4_1.jpg" },
              { title: "Orbital & Mechanized Welding", icon: Cpu, img: "https://esab.com/themes/EsabDefault/images/categories/robotics/mechanized-welding.png" },
              { title: "Automated Cutting & Positioning", icon: Settings, img: "https://www.eastmancuts.com/wp-content/uploads/2021/04/automated-lp-featured.jpg" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-2xl overflow-hidden group"
              >
                <div className="h-64 relative">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition" />
                </div>
                <div className="p-8">
                  <item.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-heading font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fume & Safety Automation */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-12">
            Intelligent Fume Extraction & Safety Systems
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {["Push-Pull Systems", "Diluter Systems", "SHIELD Fire Safety", "Vehicle Fume Extraction"].map((sys, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-background border rounded-xl p-8 shadow-lg"
              >
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="font-semibold">{sys}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            </main>
            <Footer />
          </div>
    </>
  )
}