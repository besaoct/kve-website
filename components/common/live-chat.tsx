"use client"

import { useState } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconBrandHipchat, IconChartBubbleFilled } from "@tabler/icons-react"

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would integrate with your chat service
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-4 z-50 bg-red-600  hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Open live chat"
      >
        <IconChartBubbleFilled className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-20 z-50 w-80 h-96 bg-white border border-red-300 rounded shadow-xl rounded-t-lg">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 bg-red-500 text-white rounded-t-lg ">
            <h3 className="font-semibold">Live Chat Support</h3>
            <button onClick={() => setIsOpen(false)} className="hover:bg-red-600 p-1 rounded">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 h-64 overflow-y-auto">
            <div className="bg-neutral-100 p-3 rounded-lg mb-2">
              <p className="text-sm text-neutral-900 break-words">
                Hello! How can we help you with your welding needs today?
              </p>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-neutral-200">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm" className="bg-red-500 hover:bg-red-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}