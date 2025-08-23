"use client"

import { motion } from "framer-motion"

const countries = [
  { name: "Africa", image: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Sri Lanka", image: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Bhutan", image: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Bangladesh", image: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Middle East", image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Australia", image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Indonesia", image: "https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Vietnam", image: "https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Laos", image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
]

export default function CountriesWeServe() {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">Countries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We are proud to have a strong presence in numerous countries, providing top-quality products and services to our valued clients across the globe.
          </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {countries.map((country, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
              <img src={country.image} alt={country.name} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">{country.name}</h3>
              </div>
              </div>
            ))}
            </div>
        </motion.div>
      </div>
    </section>
  )
}
