"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1556576/pexels-photo-1556576.jpeg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-white text-primary text-sm font-semibold py-1 px-3 rounded-full mb-4">
            Corporate Social Responsibility
          </div>
          <h1 className="text-4xl max-w-5xl mx-auto md:text-6xl font-heading font-bold text-white mb-6">
            Committed to a {" "} <span className="text-primary inline">Sustainable & Equitable Future</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-100 max-w-3xl mx-auto mb-8">
            We believe in leveraging our resources and expertise to create a positive impact on society and the environment, fostering growth and well-being for the communities we serve.
          </p>
        </motion.div>
      </div>
    </section>
  )
}