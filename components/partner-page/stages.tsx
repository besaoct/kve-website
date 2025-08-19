"use client"
import { motion } from "framer-motion"
import { stagesContent } from "./content"

export default function Stages() {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="mx-auto  container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            How We Support Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial product access to successful delivery, we provide comprehensive support at every stage of your partner journey
          </p>
        </div>

        <div className="relative h-fit">
          {/* Progress line */}
          {/* <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-red-200 z-0"></div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative h-fit z-10">
            {stagesContent.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* <div className="h-full  flex flex-col gap-2">
              
                <div className="min-w-16 min-h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
                  {index + 1}
                </div>
                
          
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300
                flex flex-col h-full">
                  <h3 className="text-xl font-bold text-black mb-4">
                    {stage.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 text-left">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
        </div> */}

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}