"use client"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Earn Points",
    description: "Get 1 point for every $1 spent on all qualifying purchases",
    icon: "💰"
  },
  {
    title: "Exclusive Discounts",
    description: "Access member-only sales and special pricing on premium products",
    icon: "🏷️"
  },
  {
    title: "Birthday Rewards",
    description: "Celebrate with special birthday discounts and bonus points",
    icon: "🎂"
  },
  {
    title: "Early Access",
    description: "Be the first to shop new arrivals and limited edition items",
    icon: "⚡"
  },
  {
    title: "Free Shipping",
    description: "Enjoy free shipping benefits based on your membership tier",
    icon: "🚚"
  },
  {
    title: "VIP Support",
    description: "Get priority customer service and dedicated support",
    icon: "👑"
  }
]

export default function Benefits() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Member Benefits
          </h2>
          <p className="text-xl text-gray-600">
            Unlock amazing perks and exclusive rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}