"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const statistics = [
  { number: 10, suffix: "+", label: "Years of Excellence", description: "Delivering quality solutions" },
  { number: 500, suffix: "+", label: "Global Partners", description: "Trusted worldwide network" },
  { number: 30000, suffix: "+", label: "Products Delivered", description: "Industrial solutions provided" },
  { number: 50, suffix: "+", label: "Countries Served", description: "International presence" },
]

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target, inView])

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "k"
    }
    return num.toString()
  }

  return (
    <span className="text-4xl lg:text-5xl font-bold text-red-600">
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export default function StatisticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our commitment to excellence has earned us the trust of thousands of partners globally
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-300 group-hover:border-red-200">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} inView={isInView} />
                <h3 className="text-lg font-semibold text-neutral-900 mt-3 mb-2">{stat.label}</h3>
                <p className="text-sm text-neutral-600">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
