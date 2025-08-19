"use client"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-center lg:text-left mx-auto"
        >
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Join Our <span className="text-red-500">Partner Program</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white">
            More knowledge brings more value — discover how our program empowers 
            you to grow, scale, and succeed.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
