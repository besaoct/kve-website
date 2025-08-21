"use client"

import { motion } from "framer-motion"
import { ArrowRight, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-background to-muted/40 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/22863134/pexels-photo-22863134.jpeg')] bg-repeat"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-white text-primary text-sm font-semibold py-1 px-3 rounded-full mb-4">
            About KVE
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 ">
            Innovating, Engineering and delivering {" "} <span className="text-primary inline">customer delight</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-100 max-w-3xl mx-auto mb-8">
            For over two decades, KVE has been at the forefront of industrial innovation, delivering high-performance solutions that drive progress and efficiency across global industries.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Video className="mr-2 h-5 w-5" />
               Watch Company Video
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}