"use client"

import { motion } from "framer-motion"
import {  Video } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-black to-neutral-950 pt-12 pb-20 md:pt-40 md:pb-28 px-4 lg:px-12">

      <div className="absolute inset-0 bg-[url('/images/home/map.jpg')] bg-repeat opacity-30 bg-black"></div>
      
      <div className="container mx-auto px-4 relative  rounded-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="inline-block bg-white text-primary text-sm font-semibold py-1 px-3 rounded-full mb-4">
        Capturing Global Market
        </div>
        <h1 className="text-xl sm:text-3xl md:text-6xl font-heading font-bold text-white mb-6 ">
        Connecting Industries Worldwide, Delivering Excellence
        </h1>
        <p className="text-lg md:text-xl text-neutral-100 max-w-3xl mx-auto mb-8">
        KVE is dedicated to expanding its reach and ensuring our quality products are accessible to every corner of the globe. 
        </p>
        <div className="flex justify-center gap-4">
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <Video className="mr-2 h-5 w-5" />
           Watch Video
        </Button>
        </div>
      </motion.div>
      </div>
    </section>
  )
}