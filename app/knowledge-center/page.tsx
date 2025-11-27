"use client"

import Footer from "@/components/common/footer"
import Navigation from "@/components/common/navigation"
import { motion } from "framer-motion"
import { GraduationCap, Users, Award, Calendar, CheckCircle, Target, TrendingUp, Wrench } from "lucide-react"
import Image from "next/image"

export default function KnowledgeCenterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative bg-black py-32 overflow-hidden">
          {/* <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover opacity-20" /> */}
          <div className="container mx-auto px-4 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                Knowledge <span className="text-primary">Center</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200 max-w-5xl mx-auto leading-relaxed">
                For over <strong>20 years</strong>, K.V. Enterprises has been India’s trusted authority in welding training — 
                empowering thousands of welders, engineers, and distributors with world-class skills, confidence, and competence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Customer Training – Flagship Program */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col flex-wrap md:flex-row md:items-center gap-4 mb-6">
                  <div className="md:p-4 md:bg-red-50 rounded md:border border-red-100">
                    <GraduationCap className="size-8 md:size-14 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold">Customer Training Programs</h2>
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Custom-Designed. Hands-On. Results-Driven.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Finding skilled welders who can consistently deliver high-quality welds across complex processes and environments is a growing challenge. 
                  That’s where we step in.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over two decades of experience running one of India’s most respected welding schools, 
                  <strong> K.V. Enterprises</strong> designs fully customized training programs built around <em>your</em> production needs, 
                  equipment, materials, and quality standards.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://aavishkargroup.com/wp-content/uploads/2022/05/Automation-simulation-based-training.png"
                  alt="Hands-on welding training at KVE"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-3xl font-bold">Real Machines. Real Welds. Real Results.</p>
                </div>
              </motion.div>
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 bg-primary/5 rounded-3xl p-10 md:p-16"
            >
              <h3 className="text-3xl font-heading font-bold text-center mb-12">Key Benefits of Our Training</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  "Tailor-made courses matching your exact production requirements",
                  "Practice on real joints and materials used in your facility",
                  "Dramatically improved weld quality and consistency",
                  "Higher welder confidence and independence",
                  "Reduced rework, defects, and overall welding costs",
                  "Faster ROI through skilled, efficient workforce"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Seminars */}
        <section className="py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <Image
                  src="https://meetingtomorrow.com/wp-content/uploads/2019/08/8BFC1944-C291-890F-3786F206F292F439.jpg"
                  alt="Technical Seminar in progress"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Award className="h-12 w-12 text-primary" />
                  <h2 className="text-4xl font-heading font-bold">Technical Seminars</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Elevate your team’s expertise with in-depth seminars led by industry veterans on advanced welding techniques, 
                  cost optimization, quality control, and emerging technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From MIG/MAG pulse strategies to robotic integration and fume extraction best practices — 
                  our seminars transform good welders into <strong>great ones</strong> and position your company as a leader in welding excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Distributor Training */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Distributor & Partner Training</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
                Become the go-to expert your customers trust. Our intensive hands-on distributor programs cover welding fundamentals, 
                filler metal selection, advanced equipment technology, application economics, and solution-selling strategies.
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {["Welding Processes & Parameters", "Advanced Equipment Training", "Application-Specific Solutions", "Welding Economics & ROI", "Fume Extraction Technology", "Custom Private Sessions"].map((topic) => (
                  <div key={topic} className="bg-card border rounded-xl p-8 shadow-md hover:shadow-xl transition">
                    <Wrench className="h-10 w-10 text-primary mx-auto mb-4" />
                    <p className="font-semibold text-foreground">{topic}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Employee Enhancement & Recent Program */}
        <section className="py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Calendar className="h-14 w-14 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-heading font-bold mb-6">Ongoing Employee Enhancement</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                We don’t just train your team — we help you <strong>build a culture of continuous improvement</strong>.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary/10 rounded-3xl p-10 md:p-16 text-center"
            >
              <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-heading font-bold mb-6">
                Recent Success: Fundamentals of Welding & Fume Extraction Technology
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed italic">
                "In September 2019, we successfully conducted a specialized training program attended by 
                <strong> Mr. Somnath Roy (Country Head – Plymovent India)</strong> and 
                <strong> Mr. Alok Ranjan (Business Head – Jasic India)</strong>. 
                The program focused on advanced welding techniques and modern fume extraction systems — 
                equipping leaders with knowledge to drive safety and productivity across Indian industries."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certifications – Final Trust Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16">
              Backed by Global Certifications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
              {[
                { name: "ISO 9001:2015", desc: "Quality Management" },
                { name: "ISO 13485:2016", desc: "Medical Devices QMS" },
                { name: "GMP Compliant", desc: "Good Manufacturing Practice" },
                { name: "CE Certified", desc: "European Standards Compliance" },
              ].map((cert) => (
                <motion.div
                  key={cert.name}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white border-2 border-primary/20 rounded-2xl p-8 shadow-xl"
                >
                  <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="font-bold text-lg">{cert.name}</p>
                  <p className="text-sm text-muted-foreground mt-2">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}