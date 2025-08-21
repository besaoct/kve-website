"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Target, ShieldCheck, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const insights = [
  {
    title: "Globally Local",
    tagline: "Local presence, worldwide impact.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
    icon: Globe,
  },
  {
    title: "Performance by Design",
    tagline: "Solutions engineered for reliability and efficiency.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    icon: Target,
  },
  {
    title: "Sustainability & Safety",
    tagline: "Committed to sustainable and safe industrial progress.",
    image: "https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg",
    icon: ShieldCheck,
  },
  {
    title: "Our Journey",
    tagline: "Decades of innovation in industrial solutions.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    icon: TrendingUp,
  },
]

export default function GetToKnowUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Get to Know Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the core principles that guide our innovation and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden  transition-all duration-300 border bg-muted/30">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <CardContent className="p-6 flex flex-col">
                  <div className="flex-grow">
                    <div className="mb-3">
                      <insight.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{insight.title}</h3>
                    <p className="text-muted-foreground mb-4">{insight.tagline}</p>
                  </div>
                  <button className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center group/btn mt-4">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
