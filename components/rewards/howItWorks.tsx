"use client"
import { motion } from "framer-motion"

const steps = [
  {
    step: "1",
    title: "Sign Up",
    description: "Create your free KVE Rewards account in seconds",
    icon: "👤"
  },
  {
    step: "2", 
    title: "Shop & Earn",
    description: "Earn 1 point for every $1 spent on qualifying purchases",
    icon: "🛒"
  },
  {
    step: "3",
    title: "Redeem Rewards",
    description: "Use your points for discounts, exclusive products, and special offers",
    icon: "🎁"
  }
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Start earning rewards in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.step}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}