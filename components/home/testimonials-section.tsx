"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Manufacturing Director",
    company: "Steel Dynamics Inc.",
    content:
      "KVE has been our trusted partner for over 5 years. Their welding equipment consistently delivers exceptional quality and reliability in our high-volume production environment.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Michael Chen",
    position: "Operations Manager",
    company: "Pacific Shipbuilding",
    content:
      "The technical support and product quality from KVE is unmatched. Their solutions have significantly improved our operational efficiency and reduced downtime.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Elena Rodriguez",
    position: "Chief Engineer",
    company: "Automotive Solutions Ltd.",
    content:
      "KVE's innovative automation solutions have transformed our production line. The ROI was evident within the first quarter of implementation.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "David Thompson",
    position: "Plant Manager",
    company: "Industrial Fabrication Co.",
    content:
      "Outstanding customer service and world-class products. KVE understands our industry needs and consistently exceeds our expectations.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">What Our Partners Say</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hear from industry leaders who trust KVE for their critical operations
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-50 rounded-3xl p-8 lg:p-12 relative"
            >
              <Quote className="absolute top-6 left-6 h-8 w-8 text-red-600/20" />

              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg lg:text-xl text-neutral-700 mb-6 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div>
                    <div className="font-semibold text-neutral-900 text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-red-600 font-medium">{testimonials[currentIndex].position}</div>
                    <div className="text-neutral-600">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-neutral-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-neutral-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-red-600" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
