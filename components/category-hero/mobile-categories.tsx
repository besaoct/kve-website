"use client"

import Link from "next/link"
import { OrbitItem } from "./hero-section";


interface MobileCategoriesProps {
  categories: OrbitItem[]
  segmentId: string
}

export default function MobileCategories({ categories, segmentId }: MobileCategoriesProps) {
  return (
    <div className="w-full mb-8">
      <h2 className="text-sm font-semibold text-gray-600 mb-4 px-4 sr-only">Related Categories</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
        {categories.map((category) => (
          <div key={category.id} className="shrink-0 snap-center">
            <Link href={`/products?categories=${segmentId}&sub_categories=${category.id}`}>
              <div className="flex flex-row items-center gap-3 p-4 bg-neutral-100 rounded-xl border duration-300">
                <div className="min-w-16 max-w-16 min-h-16 max-h-16 rounded-full bg-yellow-400 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden">
                  <img
                    src={ category.image ||  "/placeholder.svg"}
                    alt={category.title}
                    className="w-20 h-20 object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 text-center w-full line-clamp-2">{category.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
