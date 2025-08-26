"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Cookies from "js-cookie"

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a consent choice
    const consent = Cookies.get("cookie_consent")
    if (!consent) {
      // Show banner after 2 seconds if no consent is recorded
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 30 }) // Expires in 30 days
    setIsVisible(false)
  }

  const handleDecline = () => {
    Cookies.set("cookie_consent", "declined", { expires: 30 }) // Expires in 30 days
    setIsVisible(false)
  }



  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-neutral-50 border-t border-neutral-200 shadow-lg z-50 p-4 sm:p-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-neutral-700 leading-relaxed">
                We use cookies to enhance your experience on our website, analyze site usage, and provide personalized
                content. By clicking "Accept," you consent to our use of cookies. You can choose to decline or learn more
                in our{" "}
                <a href="/privacy-policy" className="text-red-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleAccept}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
                aria-label="Accept cookies"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="bg-neutral-200 text-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-300 transition-colors text-sm font-medium"
                aria-label="Decline cookies"
              >
                Decline
              </button>
      
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsentBanner