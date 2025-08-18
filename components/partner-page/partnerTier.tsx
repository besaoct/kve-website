"use client"
import { motion } from "framer-motion"
import { partnerTiers } from "./content"

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partnerTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                index === 2 
                  ? 'bg-red-500 text-white border-2 border-red-600 transform lg:scale-105' 
                  : 'bg-white text-black border border-gray-200'
              }`}
            >
              {index === 2 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                    RECOMMENDED
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-3 ${
                  index === 2 ? 'text-white' : 'text-red-500'
                }`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${
                  index === 2 ? 'text-red-100' : 'text-gray-600'
                } italic`}>
                  {tier.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className={`font-semibold text-lg mb-4 ${
                  index === 2 ? 'text-white' : 'text-black'
                }`}>
                  Key Benefits:
                </h4>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <svg className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        index === 2 ? 'text-white' : 'text-red-500'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm leading-relaxed ${
                        index === 2 ? 'text-white' : 'text-gray-700'
                      }`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                  index === 2 
                    ? 'bg-white text-red-500 hover:bg-gray-100' 
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}>
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to take your business to the next level?
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  )
}