"use client"

import { motion } from "framer-motion"
import { Globe, Package, Smile } from "lucide-react"

const stats = [
  { value: "46+", label: "Materials Exported", icon: Package },
  { value: "9+", label: "Countries We Serve", icon: Globe },
  { value: "13+", label: "Happy Foreign Clients", icon: Smile },
]

export default function MapSection() {
  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-800 mb-4">
            CAPTURING GLOBAL MARKET
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-7xl mx-auto">
            KVE carries out its global activities in the regions like Africa,
            Sri Lanka, Nepal, Zambia, Butan, Bangladesh, Middle East, Austrilia,
            Indonesia, Vietnam, Laos, etc. Jemkon ensures that their products
            reaches each and every corner of the world possible.
          </p>
        </div>

        {/* Map container with background image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-7xl mx-auto max-h-fit md:h-[500px] rounded-lg overflow-hidden"
          style={{
            backgroundImage: "url('/images/global/a-map.png')",
            backgroundSize: "cover",
            // height: "500px",
            // maxHeight: "fit-content",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full flex items-center px-4 md:px-16 justify-center py-4 md:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center  mx-auto w-full md:w-fit">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className="p-4 sm:p-6 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md flex flex-col items-center max-w-xs mx-auto w-full"
                >
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2" />
                  <p className="text-sm sm:text-base text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
