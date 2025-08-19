"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"


const heroSlides = [
  {
    id: 1,
    title: "Advanced Industrial Solutions",
    subtitle: "Powering Your Manufacturing Excellence",
    description:
      "Discover cutting-edge welding equipment, automation systems, and industrial solutions designed for maximum efficiency and reliability.",
    image: "https://images.pexels.com/photos/7019259/pexels-photo-7019259.jpeg",
    cta: "Explore Products",
    ctaSecondary: "Watch Demo",
    contentPosition: "left", // Content on left side
  },
  {
    id: 2,
    title: "Precision Welding Technology",
    subtitle: "Where Innovation Meets Performance",
    description:
      "From stick electrodes to advanced MIG systems, our comprehensive range of filler metals ensures superior weld quality for every application.",
    image: "https://images.pexels.com/photos/3678228/pexels-photo-3678228.jpeg",

    cta: "View Filler Metals",
    ctaSecondary: "Technical Specs",
    contentPosition: "right", // Content on right side
  },
  {
    id: 3,
    title: "Automation & Safety First",
    subtitle: "Building Tomorrow's Industrial Landscape",
    description:
      "Integrate smart automation solutions with comprehensive safety systems to create safer, more productive work environments.",
    image: "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg",

    cta: "Automation Solutions",
    ctaSecondary: "Safety Guide",
    contentPosition: "left", // Content on left side
  },
]

const popularSearches = [
  "MIG Wires",
  "Stick Electrodes",
  "Welding Equipment",
  "Safety PPE",
  "Automation Systems",
  "Flux-Cored Wires",
]




export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search query:", searchQuery)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Hero Carousel */}
      <div className="relative h-[80vh] min-h-[700px]">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
              <div
                className={`absolute inset-0 ${
                  slide.contentPosition === "left"
                    ? "bg-gradient-to-r from-black/80 via-black/40 to-transparent"
                    : "bg-gradient-to-l from-black/80 via-black/40 to-transparent"
                }`}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className={`max-w-3xl text-white ${slide.contentPosition === "right" ? "ml-auto text-right" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <Badge className="mb-6 bg-red-600 text-white px-4 py-2 text-sm font-medium">{slide.subtitle}</Badge>
                  <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">{slide.title}</h1>
                  <p className="text-xl text-neutral-200 mb-8 leading-relaxed max-w-xl">{slide.description}</p>
                  <div
                    className={`flex flex-col sm:flex-row gap-4 ${
                      slide.contentPosition === "right" ? "justify-end" : ""
                    }`}
                  >
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
                    >
                      {slide.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 bg-transparent px-8 py-4 text-lg font-semibold"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      {slide.ctaSecondary}
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all border border-white/20"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all border border-white/20"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      <div className="bg-white py-16 border-b border-neutral-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Find the Right Industrial Solution</h2>
            <p className="text-neutral-600 mb-8 text-lg">Search through thousands of products and solutions</p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-neutral-400" />
                <Input
                  type="text"
                  placeholder="Search for products, solutions, or equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-16 pr-36 py-6 text-lg rounded-2xl border-2 border-neutral-200 focus:border-red-500 shadow-lg bg-white"
                />
                <Button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold"
                >
                  Search
                </Button>
              </div>
            </form>

            {/* Popular Searches */}
            <div className="flex flex-wrap justify-center items-center gap-3">
              <span className="text-sm text-neutral-500 font-medium">Popular searches:</span>
              {popularSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => setSearchQuery(search)}
                  className="text-sm bg-neutral-100 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all px-4 py-2 rounded-full border border-neutral-200 font-medium"
                >
                  {search}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
