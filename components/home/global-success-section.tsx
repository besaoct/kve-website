"use client"

import { motion } from "framer-motion"
import { Globe, Users, Award, Zap } from "lucide-react"
import Image from "next/image"

const locations = [
  { name: "North America", x: "20%", y: "30%", delay: 0 },
  { name: "Europe", x: "50%", y: "25%", delay: 0.5 },
  { name: "Asia Pacific", x: "75%", y: "40%", delay: 1 },
  { name: "South America", x: "30%", y: "65%", delay: 1.5 },
  { name: "Middle East", x: "55%", y: "45%", delay: 2 },
  { name: "Africa", x: "52%", y: "55%", delay: 2.5 },
]

const features = [
  {
    icon: Users,
    title: "Global Network",
    description: "Extensive customer-focused marketing and servicing teams worldwide",
  },
  {
    icon: Award,
    title: "Trusted Partnership",
    description: "Proven track record of reliability and excellence in industrial solutions",
  },
  {
    icon: Zap,
    title: "Consultative Approach",
    description: "Expert guidance and tailored solutions for every client requirement",
  },
]

export default function GlobalSuccessSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">Crafting Success Globally</h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            KVE provides a trusted partnership to a vast global clientele with consultative sales and services. Our
            partners receive assured, dependable support from our extensive, customer-focused network of marketing and
            servicing teams.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-100 transition-colors">
                  <feature.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* World Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl">
              {/* Simplified World Map SVG */}
            
               <Image 
                src={'/images/home/map.jpg'}
                height={1000}
                width={1000}
                alt="map"
               />

              {/* Pulsing Location Dots */}
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{ left: location.x, top: location.y }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: location.delay }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-4 h-4 bg-red-600 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: location.delay,
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 w-4 h-4 bg-red-600 rounded-full opacity-30"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: location.delay,
                      }}
                    />
                  </div>
                </motion.div>
              ))}

        
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}
