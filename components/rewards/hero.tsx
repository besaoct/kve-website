"use client"
import { motion } from "framer-motion"

export default function RewardsHero() {
  return (
    <section className="bg-black text-white py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            KVE <span className="text-red-500">Rewards Program</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Earn points on every purchase and unlock exclusive benefits, discounts, and special offers
          </p>
          <button className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300 text-lg">
            Join Now - It's Free!
          </button>
        </motion.div>
      </div>
    </section>
  )
}