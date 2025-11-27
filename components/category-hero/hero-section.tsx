"use client"

import { useState} from "react"
import ApplicationDropdown from "./application-dropdown"
import MobileCategories from "./mobile-categories"
import { useIsMobile } from "@/hooks/use-mobile"
import Link from "next/link"
import { dummyCategoryHero } from "@/data/dummy/categoryHero"

interface SubSegment {
  id: string;
  title: string;
  image: string;
}

interface Segment {
  id: string;
  title: string;
  image: string;
  categories: SubSegment[];
}

const mappedApplications: Segment[] = dummyCategoryHero.map((category, index) => ({
  id: `category-${index}`,
  title: category.name,
  image: category.image,
  categories: category.subcategories.map((sub, subIndex) => ({
    id: `subcategory-${index}-${subIndex}`,
    title: sub.name,
    image: sub.image,
  })),
}));

export default function CategoryHeroSection() {
  const [selectedApp, setSelectedApp] = useState<Segment>(mappedApplications[0])
  const isMobile = useIsMobile()

  return (
    <section className="w-full px-4">
      <div className="w-full max-w-7xl mx-auto">
        {isMobile ? (
          // Mobile Layout - Vertical stacked
          <div className="flex flex-col items-center gap-12">
            {/* Central image - no overlap */}
            <div className="w-full max-w-xs pt-6 lg:pt-0">
              <div className="relative w-full aspect-square  rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                <img
                  src={selectedApp.image}
                  alt={selectedApp.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 text-center text-balance">{selectedApp.title}</h1>

            <ApplicationDropdown  selectedApp={selectedApp} onSelect={setSelectedApp} />

            {/* Mobile horizontal scrolling categories */}
            <MobileCategories categories={selectedApp.categories} segmentId={selectedApp.id} />
          </div>
        ) : (
          // Desktop Layout - Galaxy orbit effect with dropdown centered over image
          <div className="relative w-full flex flex-col items-center">
            {/* Title at top */}
            {/* <h1 className="text-4xl font-bold text-gray-900 text-center text-balance mb-12">{selectedApp.title}</h1> */}

            <div className="relative w-full max-w-6xl h-screen my-12 flex items-center justify-center">
              {/* Categories positioned in orbit around center */}
              {selectedApp.categories.map((category: SubSegment, index:number) => {
                const angle = (index / selectedApp.categories.length) * 360
                const radius = 320 // Distance from center for orbit effect
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                return (
                  <div
                    key={category.id}
                    className="absolute flex flex-col items-center gap-3"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      left: "50%",
                      top: "50%",
                    }}
                  >
                    <div className="w-28 h-28 rounded-full bg-[#D2A564] flex items-center justify-center shadow-lg border-4 border-white hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
                      <Link
                        href={`/products?segment_id=${selectedApp.id}&sub_segment_id=${category.id}`}
                      >
                        <img
                          src={category.image}
                          alt={category.title}
                          className="object-cover w-28 h-28"
                        />
                      </Link>
                    </div>
                    <p className="text-center font-semibold text-gray-900 text-sm w-32 line-clamp-3">{category.title}</p>
                  </div>
                )
              })}

              {/* Central image - galaxy core */}
              <div className="absolute w-96 h-96 rounded-full overflow-hidden border-4 border-gray-300 shadow-2xl z-20">
                <img
                  src={selectedApp.image}
                  alt={selectedApp.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute z-30 flex items-center justify-center">
                <ApplicationDropdown selectedApp={selectedApp} onSelect={setSelectedApp} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
