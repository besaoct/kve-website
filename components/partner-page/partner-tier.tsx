"use client"
import { motion } from "framer-motion"
import { partnerTiers } from "./content"
import Image from "next/image"
import Link from "next/link"

export default function PartnerTier() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-start mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Partner Levels & Benefits
          </h2>
          <p className="text-xl text-gray-600 mx-auto">
            Choose the partnership level that fits your business goals. The higher the level of commitment, 
            the more exclusive benefits and support you'll receive to accelerate your growth.
          </p>
        </div>

        <div className="flex flex-col gap-16 items-center  mx-auto w-full">
          {partnerTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative max-w-3xl w-full  transition-all duration-300 ${
                index === 2 
                  ? 'bg-red-500 rounded text-white p-8 transform ' 
                  : 'bg-white text-black '
              }`}
            >
              {index === 2 && (
                <div className="absolute -top-3 -right-4 transform ">
                  <span className="bg-black text-white px-4 py-2 rounded text-sm font-semibold">
                    RECOMMENDED
                  </span>
                </div>
              )}
              
              <div className="text-start mb-8">
          <div className="flex flex-row flex-wrap w-full items-center gap-4">
            <Image 
              src={tier.image||""}
              alt={""}
              width={100}
              height={100}
              
            />
             <div>
                <h3 className={`text-2xl font-bold ${
                  index === 2 ? 'text-white' : 'text-red-500'
                }`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${
                  index === 2 ? 'text-red-100' : 'text-neutral-800'
                } `}>
                  {tier.description}
                </p>
             </div>
          </div>
              </div>
              
              <div className="space-y-4">
                <h4 className={`font-semibold text-lg mb-4 ${
                  index === 2 ? 'text-white' : 'text-black'
                }`}>
                  Key Benefits:
                </h4>
                <ul className="space-y-3 font-medium">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <svg className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        index === 2 ? 'text-white' : 'text-red-500'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-base leading-relaxed ${
                        index === 2 ? 'text-white' : 'text-gray-700'
                      }`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
    
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-20 mx-auto w-full flex flex-col items-center p-6 bg-black rounded">
          <p className="text-gray-100 my-6">
            Ready to take your business to the next level?
          </p>
          <Link href={'/contact'} className="bg-red-600  block text-white px-8 py-2.5 rounded font-semibold hover:bg-red-500 transition-colors duration-300 w-fit">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}