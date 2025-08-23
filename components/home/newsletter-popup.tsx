"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Cookies from "js-cookie"
import Image from "next/image"

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Check if the popup was previously dismissed
    const isDismissed = Cookies.get("newsletter_popup_dismissed")
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000) // Show after 3 seconds
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    // Set cookie to prevent popup from showing again
    Cookies.set("newsletter_popup_dismissed", "true", { expires: 30 }) // Expires in 30 days
    setIsVisible(false)
  }

  const handleClose = () => {
    // Set cookie to prevent popup from showing again
    Cookies.set("newsletter_popup_dismissed", "true", { expires: 30 }) // Expires in 30 days
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-xl w-full"
          >
            <Card className="bg-gradient-to-br h-full from-red-600 to-red-400 text-white">
              <CardContent className="p-0">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white hover:text-gray-200"
                  aria-label="Close popup"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-2 items-center justify-center h-full w-full">
              <div className="hidden md:block h-full max-h-screen rounded-l-xl overflow-hidden">
    <Image
      width={1000}
      height={1000}
      src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b"
      alt="Newsletter background"
      className="w-full h-full object-cover rounded-l-xl"
    />
  </div>
                    <div className="p-6">
                   <div className="text-center md:text-left mb-6">
                    <Mail className="h-12 w-12 mx-auto md:mx-0 mb-4 text-white" />
                    <h3 className="text-xl font-heading font-bold mb-2">Stay Updated with KVE</h3>
                    <p className="text-white/90">
                      Get the latest industrial solutions and product updates delivered to your inbox.
                    </p>
                  </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white text-foreground"
                    />
                  <Button type="submit" className="w-full h-10 bg-neutral-950 hover:bg-neutral-900 text-white">
                    Subscribe Now
                  </Button>
                </form>

                <p className="text-xs text-white/70 text-center mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
                    </div>
                    </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}