"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight, Tag } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Revolutionary MIG Welding Technology Launched",
    excerpt:
      "Introducing our latest MIG welding systems with advanced arc control and improved efficiency for industrial applications.",
    date: "2024-08-15",
    category: "Product Launch",
    image: "https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "KVE Expands Global Manufacturing Network",
    excerpt:
      "New state-of-the-art facility in Southeast Asia strengthens our commitment to serving customers worldwide with faster delivery.",
    date: "2024-08-10",
    category: "Company News",
    image: "https://images.pexels.com/photos/320621/pexels-photo-320621.jpeg",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Sustainable Welding Solutions for Green Manufacturing",
    excerpt:
      "Our new eco-friendly welding consumables reduce environmental impact while maintaining superior performance standards.",
    date: "2024-08-05",
    category: "Innovation",
    image: "https://images.pexels.com/photos/3997249/pexels-photo-3997249.jpeg",
    readTime: "5 min read",
  },

]

export default function WhatsNewSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl w-full justify-center items-center flex flex-col  mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">What's New at KVE</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Stay updated with our latest innovations, company news, and industry insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl max-w-md overflow-hidden shadow-none border border-neutral-200 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white">
                    <Tag className="h-3 w-3 mr-1" />
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-neutral-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(item.date)}
                  <span className="mx-2">•</span>
                  {item.readTime}
                </div>

                <h3 className="text-lg font-semibold text-neutral-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>

                <button className="inline-flex items-center text-red-600 font-medium text-sm hover:text-red-700 transition-colors group/btn">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 w-full flex flex-col items-center lg:items-end"
        >
<div className="group transition-all duration-300 ease-in-out px-4">
            <button className="inline-flex items-center bg-transparent text-black duration-300 ease-in-out group-hover:text-red-600 font-medium transition-colors">
            View All News
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
          <div className="border-b-2 border-primary w-[30%] mb-4 group-hover:w-[90%] duration-300 ease-in-out"/>
</div>
          
        </motion.div>
        
      </div>
    </section>
  )
}
