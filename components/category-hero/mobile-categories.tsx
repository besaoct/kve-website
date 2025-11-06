"use client"

import Link from "next/link"

interface SubSegment {
  id: string
  title: string
}

interface MobileCategoriesProps {
  categories: SubSegment[]
  segmentId: string
}

export default function MobileCategories({ categories, segmentId }: MobileCategoriesProps) {
  return (
    <div className="w-full">
      <h2 className="text-sm font-semibold text-gray-600 mb-4 px-4">Related Categories</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
        {categories.map((category) => (
          <div key={category.id} className="flex-shrink-0 snap-center">
            <Link href={`/products?segment_id=${segmentId}&sub_segment_id=${category.id}`}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-yellow-400 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden">
                  <img
                    src={"/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 text-center whitespace-nowrap">{category.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
