"use client"
import { motion } from "framer-motion"
import { stagesContent } from "./content"

export default function Stages() {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            How We Support Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial product access to successful delivery, we provide comprehensive support at every stage of your partner journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stagesContent.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-6 text-white hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-red-500 mb-4">
                {stage.title}
              </h3>
              <ul className="space-y-2 text-sm text-white">
                {stage.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}