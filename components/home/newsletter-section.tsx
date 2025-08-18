"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, CheckCircle, Users, TrendingUp, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const newsletterBenefits = [
  {
    icon: TrendingUp,
    title: "Industry Insights",
    description: "Latest trends and innovations in industrial welding and manufacturing",
  },
  {
    icon: Bell,
    title: "Product Updates",
    description: "Be first to know about new products, features, and technical improvements",
  },
  {
    icon: Users,
    title: "Expert Tips",
    description: "Professional techniques and best practices from industry experts",
  },
]

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [preferences, setPreferences] = useState({
    productUpdates: true,
    industryNews: true,
    technicalTips: false,
    promotions: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubscribed(true)
    setIsLoading(false)
    console.log("Newsletter subscription:", { email, firstName, preferences })
  }

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center text-white"
          >
            <CheckCircle className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl font-heading font-bold mb-4">Welcome to the KVE Community!</h2>
            <p className="text-xl text-white/90 mb-6">
              Thank you for subscribing. You'll receive our latest updates and exclusive industrial insights directly in
              your inbox.
            </p>
            <Button
              onClick={() => setIsSubscribed(false)}
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Subscribe Another Email
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute top-1/3 right-20 w-24 h-24 border border-white rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="flex items-center mb-6">
              <Mail className="h-8 w-8 mr-3" />
              <h2 className="text-4xl font-heading font-bold">Stay Connected with KVE</h2>
            </div>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join over 25,000+ industry professionals who trust KVE for the latest insights, product innovations, and
              expert guidance in industrial solutions.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {newsletterBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-white/20 rounded-full p-3 mr-4 flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-2">{benefit.title}</h3>
                    <p className="text-white/80">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Get Industry Updates</h3>
                  <p className="text-muted-foreground">Subscribe to receive exclusive content and offers</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Preferences */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Email Preferences</label>
                    <div className="space-y-3">
                      {Object.entries(preferences).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-2">
                          <Checkbox
                            id={key}
                            checked={value}
                            onCheckedChange={(checked) =>
                              setPreferences((prev) => ({ ...prev, [key]: checked as boolean }))
                            }
                          />
                          <label htmlFor={key} className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Subscribing...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 h-5 w-5" />
                        Subscribe Now
                      </div>
                    )}
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-muted-foreground text-center">
                    By subscribing, you agree to our Privacy Policy and Terms of Service. You can unsubscribe at any
                    time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-white">
              <div className="text-3xl font-heading font-bold mb-2">25,000+</div>
              <div className="text-white/80">Subscribers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-heading font-bold mb-2">98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-heading font-bold mb-2">Weekly</div>
              <div className="text-white/80">Updates</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
