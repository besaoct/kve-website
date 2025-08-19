"use client"
import { motion } from "framer-motion"
import { partnerTiers } from "./content"
import { Award, Star, Crown } from "lucide-react"

export default function PartnerTier() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Partner Levels & Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Choose the partnership level that fits your business goals. The higher the level of commitment, 
            the more exclusive benefits and support you'll receive to accelerate your growth.
          </p>
        </div>

        <div className="space-y-16 min-h-full">
          {partnerTiers.map((tier, index) => {
            const icons = [Award, Star, Crown];
            const Icon = icons[index];
            
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-8 py-8"
              >
                <div className="flex-shrink-0">
                  <Icon className="w-12 h-12 text-red-500" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-red-500 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 italic">
                    {tier.description}
                  </p>
                  
                  <ul className="space-y-3 text-black">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">•</span>
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  )
}