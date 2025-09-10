"use client"

import { IconBrandWhatsapp} from "@tabler/icons-react"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890" // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in your welding products. Can you help me?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <IconBrandWhatsapp className="h-6 w-6" />
    </button>
  )
}