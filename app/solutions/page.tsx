"use client"

import Footer from "@/components/common/footer"
import Navigation from "@/components/common/navigation"
import { motion } from "framer-motion"
import { 
  Zap, Palette, Package, Lightbulb, Wrench, 
  Flame, Wind, Droplets, Truck, Warehouse,
  Shield, Factory, Waves, HardHat,
  ArrowRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Welding & Cutting Solutions",
      icon: Zap,
      heroImage: "/category-hero/popup.png",
      color: "from-yellow-600 to-orange-700",
      offerings: [
        { name: "Kemppi High-End Welding Machines", desc: "Multi-Process MIG/MAG Pulse, FastMIG, DC TIG, Robotic & Orbital Welding Systems" },
        { name: "SST India Gas Handling Systems", desc: "Gas Cylinder Manifolds, Medical Gas Systems, Changeover Systems" },
        { name: "Plymovent Fume Extraction", desc: "Mobile Units, Stationary Filters, Push-Pull, Diluter, Downdraft Tables, Extraction Hoods" },
        { name: "Oil Mist & Vehicle Fume Extraction", desc: "Complete health & safety solutions for workshops and fire stations" },
        { name: "SHIELD Fire Safety System", desc: "Prevention • Detection • Suppression tailored solutions" },
        { name: "Turnkey Automation Projects", desc: "Robotic cells, cutting-positioning systems, full factory integration" }
      ]
    },
    {
      title: "Floorings & Coatings",
      icon: Palette,
      heroImage: "https://paversealerstore.com/wp-content/uploads/2022/09/Epoxy-Floor-Coatings-The-Best-Choice-For-High-Traffic-Areas.png",
      color: "from-blue-600 to-indigo-700",
      offerings: [
        { name: "Industrial Epoxy Flooring", desc: "Heavy-duty, chemical-resistant, anti-skid systems" },
        { name: "Cool Roof & Wall Coatings", desc: "Heat reflective coatings for energy savings" },
        { name: "Basement Waterproofing", desc: "100% leak-proof systems with warranty" },
        { name: "Concrete Refurbishment", desc: "Floor hardening, joint filling, crack repair" },
        { name: "Decorative Flooring", desc: "Stamped Concrete, Designer Epoxy, Stained & Spray Textured Floors" }
      ]
    },
    {
      title: "Materials Handling & Storage Solutions",
      icon: Package,
      heroImage: "https://mecaluxcom.cdnwm.com/documents/20128/474714/M2P10-Blogp-material-handling-systems-mistakes+-+ImageHeader.jpg/6f1181a4-5c09-f634-246f-89f5c6174876?t=1644957945000&e=jpg",
      color: "from-green-600 to-emerald-700",
      offerings: [
        { name: "Industrial Racking Systems", desc: "Slotted Angle, Mezzanine, Cantilever, Heavy Duty Pallet Racking" },
        { name: "Conveyor Systems", desc: "Belt, Roller, Hook, Heavy Duty Conveyors" },
        { name: "Floor Cleaning Equipment", desc: "Industrial Vacuum, Scrubber Drier, Sweepers, Steam Cleaners, Road Sweepers" },
        { name: "Material Handling Equipment", desc: "Full range for warehouse and factory movement" }
      ]
    },
    {
      title: "Energy Efficiency Solutions",
      icon: Lightbulb,
      heroImage: "https://planradar-website.s3.amazonaws.com/production/uploads/2023/03/energia-fotovoltaica_826x552.jpg",
      color: "from-cyan-500 to-teal-600",
      offerings: [
        { name: "HVLS Fans", desc: "Industrial & Commercial high-volume low-speed fans" },
        { name: "Daylighting Systems", desc: "Light Pipes, Venti-Lights, Polycarbonate Facade, Skyshelves" },
        { name: "Noori Kool Shade System", desc: "Natural cooling & ventilation solutions" },
        { name: "Docking Solutions", desc: "Dock Shelters, Hydraulic & Air Bag Dock Levellers" }
      ]
    },
    {
      title: "Engineering & Project Consultancy",
      icon: Wrench,
      heroImage: "https://condura.co.in/wp-content/uploads/2020/08/Engineering-Construction-01.jpg",
      color: "from-purple-600 to-pink-700",
      offerings: [
        { name: "Fuel Storage & Distribution", desc: "Diesel, Petrol, CNG, LNG tanks & piping systems" },
        { name: "Natural Gas & Furnace Pipelines", desc: "Complete design, installation & commissioning" },
        { name: "Fire Fighting Systems", desc: "Red steel piping, hydrants, sprinklers, high-rise compliance" },
        { name: "Compressed Air Systems", desc: "Loss-free piping networks" },
        { name: "RO / Soft Water Distribution", desc: "Turnkey water management for institutions & industry" },
        { name: "Boiler & Utility Installation", desc: "End-to-end project execution" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-black py-32 overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover opacity-20" /> */}
        <div className="container mx-auto px-4 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-heading font-black text-white mb-8 leading-tight"
          >
            One Partner.<br />
            <span className="text-primary text-6xl md:text-9xl">Every Solution.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-300 max-w-5xl mx-auto"
          >
            From advanced welding automation to energy-efficient factories — K.V. Enterprises delivers complete turnkey industrial solutions trusted by India’s top manufacturers for over 20 years.
          </motion.p>
        </div>
      </section>

      {/* Full Solution Sections */}
      {solutions.map((solution, index) => (
        <section key={index} className="py-24 lg:py-32">
          <div className="container mx-auto px-4">
            {/* Hero Image + Title */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-3xl mb-16"
            >
              <Image
                src={solution.heroImage}
                alt={solution.title}
                width={1920}
                height={800}
                className="w-full h-96 md:h-[600px] object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${solution.color} opacity-90`} />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white">
                <div className="flex items-center gap-6 mb-4">
                  <solution.icon className="h-16 w-16 md:h-24 md:w-24" />
                  <h2 className="text-4xl md:text-7xl font-heading font-black">
                    {solution.title}
                  </h2>
                </div>
                <p className="text-xl md:text-2xl max-w-4xl opacity-95">
                  Premium systems engineered for performance, safety, and long-term reliability.
                </p>
              </div>
            </motion.div>

            {/* Offerings Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solution.offerings.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-start gap-5">
                    <div className="bg-primary/10 rounded-xl p-4 group-hover:bg-primary group-hover:text-white transition-all">
                      {index === 0 && <Flame className="h-10 w-10" />}
                      {index === 1 && <Shield className="h-10 w-10" />}
                      {index === 2 && <Warehouse className="h-10 w-10" />}
                      {index === 3 && <Wind className="h-10 w-10" />}
                      {index === 4 && <HardHat className="h-10 w-10" />}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 group-hover:text-primary transition">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link
                href={`/products`}
                className="inline-flex items-center gap-4  text-primary  px-10 py-6  text-xl font-bold hover:underline hover:scale-105 transition-all"
              >
                Explore Full {solution.title} Range
                <ArrowRight className="h-7 w-7" />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Final Trust Section */}
{/* Premium Trust & Credibility Section */}
<section className="py-24 lg:py-32 bg-gradient-to-b from-primary via-primary/95 to-primary/90 text-white overflow-hidden relative">
  {/* Optional subtle background pattern */}
  {/* <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat bg-center" />
  </div> */}

  <div className="container mx-auto px-6 relative">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight mb-6">
        Trusted by India’s
        <span className="block text-white/90 text-4xl md:text-6xl lg:text-7xl mt-4">
          Leading Industries Since 2003
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto font-light">
        Over two decades of engineering excellence, innovation, and unwavering commitment to quality.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 max-w-7xl mx-auto">
      {[
        { number: "20", suffix: "+", label: "Years of Excellence", icon: Factory },
        { number: "500", suffix: "+", label: "Projects Delivered", icon: HardHat },
        { number: "4", suffix: "", label: "ISO Certifications", icon: Shield },
        { number: "28", suffix: "+", label: "States Served", icon: Truck },
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.15 }}
          className="group text-center"
        >
          <div className="relative mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500 shadow-2xl">
              <stat.icon className="h-16 w-16 lg:h-20 lg:w-20 mx-auto mb-4 text-white/90" />
              <div className="text-6xl lg:text-7xl font-black tracking-tighter">
                {stat.number}
                <span className="text-4xl lg:text-5xl text-white/80">{stat.suffix}</span>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-white/20 blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700 -z-10" />
          </div>
          <p className="text-lg lg:text-xl font-semibold text-white/90 tracking-wide">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Optional brand logos row (you can add later) */}
    {/* <div className="mt-20 text-center">
      <p className="text-white/70 text-lg mb-8">Proud partners with global leaders</p>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 w-32 h-20 flex items-center justify-center">
            <Image src="/placeholder.svg" alt="Partner" width={120} height={60} className="object-contain" />
          </div>
        ))}
      </div>
    </div> */}
  </div>
</section>

      <Footer />
    </div>
  )
}