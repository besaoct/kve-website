"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Zap, Target as TargetIcon, Sparkles, Users } from "lucide-react"
import Image from "next/image"

// Replace these with your real company photos
const missionImage = "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const visionImage = "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const valuesImage = "/images/about/core-values.png" // Team/collaboration photo

const coreValues = [
  { icon: Heart, title: "Customer Service & Care", color: "text-red-500" },
  { icon: Zap, title: "Energy and Spirit", color: "text-yellow-500" },
  { icon: TargetIcon, title: "Continuous Improvement", color: "text-blue-500" },
  { icon: Sparkles, title: "Innovation", color: "text-purple-500" },
  { icon: Users, title: "Respect for Each Individual", color: "text-green-500" },
]

export default function MissionVisionValues() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 space-y-24 lg:space-y-32">

        {/* ===== Our Mission ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8 flex items-center gap-4">
              <Target className="h-12 w-12 text-primary" />
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              "We will be driven by customer satisfaction and become known as the supplier of choice in our industries. We will strive to exceed customer expectations. We will be a solutions company, not simply a supplier of products."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-first lg:order-last"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={missionImage}
                alt="Our Mission"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* ===== Our Vision ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={visionImage}
                alt="Our Vision"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8 flex items-center gap-4">
              <Eye className="h-12 w-12 text-primary" />
              Our Vision
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              "We aim to be a leading company in all spheres of our activities by providing our customers superior quality products, solutions and services that meet and exceed their expectations."
            </p>
          </motion.div>
        </div>

        {/* ===== Core Values – Image Left + Values Right ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-muted/30 rounded-3xl p-8 lg:p-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={valuesImage}
                alt="Our Core Values - Team & Culture"
                width={800}
                height={700}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-3xl font-bold font-heading">Our Core Values</h4>
                <p className="text-lg opacity-90">The foundation of everything we do</p>
              </div>
            </div>
          </motion.div>

          {/* Values List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-10">
              Core Values
            </h3>

            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-5 group"
              >
                <div className="bg-background rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform">
                  <value.icon className={`h-10 w-10 ${value.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-1">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {index === 2
                      ? "Continuous improvement to achieve benchmarking standards"
                      : value.title === "Customer Service & Care"
                      ? "Placing customers at the heart of every decision"
                      : value.title === "Energy and Spirit"
                      ? "Passionate, proactive and always ready to go the extra mile"
                      : value.title === "Innovation"
                      ? "Pushing boundaries to deliver better solutions"
                      : "Treating every individual with dignity and respect"}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}