"use client"
import { motion } from "framer-motion"

const rewardTiers = [
  {
    name: "Bronze",
    minSpend: "$0",
    pointsMultiplier: "1x",
    benefits: [
      "1 point per $1 spent",
      "Birthday discount",
      "Member-only sales access",
      "Free shipping on orders $75+"
    ],
    color: "bg-amber-600"
  },
  {
    name: "Silver", 
    minSpend: "$500",
    pointsMultiplier: "1.25x",
    benefits: [
      "1.25 points per $1 spent",
      "Early access to new products",
      "Exclusive member discounts",
      "Free shipping on orders $50+",
      "Priority customer support"
    ],
    color: "bg-gray-400"
  },
  {
    name: "Gold",
    minSpend: "$1,000",
    pointsMultiplier: "1.5x", 
    benefits: [
      "1.5 points per $1 spent",
      "VIP customer service",
      "Exclusive product previews",
      "Free shipping on all orders",
      "Special member pricing",
      "Quarterly bonus points"
    ],
    color: "bg-yellow-500"
  }
]

export default function RewardTiers() {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Membership Tiers
          </h2>
          <p className="text-xl text-gray-600">
            The more you spend, the more you earn and save
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rewardTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden ${
                index === 2 ? 'transform lg:scale-105 border-2 border-red-500' : ''
              }`}
            >
              <div className={`absolute top-0 left-0 right-0 h-2 ${tier.color}`}></div>
              
              {index === 2 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">Spend {tier.minSpend} annually</p>
                <div className="text-4xl font-bold text-red-500 mb-2">{tier.pointsMultiplier}</div>
                <p className="text-sm text-gray-600">Points multiplier</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}