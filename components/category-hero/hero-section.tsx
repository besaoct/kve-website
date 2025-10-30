"use client"

import { useState, useEffect } from "react"
import ApplicationDropdown from "./application-dropdown"
import MobileCategories from "./mobile-categories"
import { useIsMobile } from "@/hooks/use-mobile"
import { getAllSegments, getSubSegments } from "@/data/api/segments"
import Link from "next/link"

interface SubSegment {
  id: string;
  title: string;
}

// interface Segment {
//   id: string;
//   title: string;
//   categories: SubSegment[];
// }

export default function CategoryHeroSection() {
  const [segments, setSegments] = useState<any>([])
  const [selectedApp, setSelectedApp] = useState<any>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const fetchData = async () => {
      const topSegments = await getAllSegments(5);
      const segmentsWithSub = await Promise.all(
        topSegments.map(async (segment) => {
          const subSegments = await getSubSegments({ segment_id: segment.id, per_page: 6 });
          return { ...segment, categories: subSegments };
        })
      );
      setSegments(segmentsWithSub);
      setSelectedApp(segmentsWithSub[0]);
    };

    fetchData();
  }, []);

  if (!selectedApp) {
    return <div>Loading...</div>
  }

  return (
    <section className="w-full  px-4">
      <div className="w-full max-w-7xl mx-auto">
        {isMobile ? (
          // Mobile Layout - Vertical stacked
          <div className="flex flex-col items-center gap-12">
            {/* Central image - no overlap */}
            <div className="w-full max-w-xs">
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                <img
                  src={"/placeholder.svg"}
                  alt={selectedApp.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 text-center text-balance">{selectedApp.title}</h1>

            <ApplicationDropdown applications={segments} selectedApp={selectedApp} onSelect={setSelectedApp} />

            {/* Mobile horizontal scrolling categories */}
            <MobileCategories categories={selectedApp.categories} segmentId={selectedApp.id} />
          </div>
        ) : (
          // Desktop Layout - Galaxy orbit effect with dropdown centered over image
          <div className="relative w-full flex flex-col items-center">
            {/* Title at top */}
            {/* <h1 className="text-4xl font-bold text-gray-900 text-center text-balance mb-12">{selectedApp.title}</h1> */}

            <div className="relative w-full max-w-6xl aspect-square flex items-center justify-center">
              {/* Categories positioned in orbit around center */}
              {selectedApp.categories.map((category: SubSegment, index:number) => {
                const angle = (index / selectedApp.categories.length) * 360
                const radius = 380 // Distance from center for orbit effect
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
                    <div className="w-28 h-28 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg border-4 border-white hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
                      <Link
                        href={`/products?segment_id=${selectedApp.id}&sub_segment_id=${category.id}`}
                      >
                        <img
                          src={"/placeholder.svg"}
                          alt={category.title}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>
                    <p className="text-center font-semibold text-gray-900 text-sm w-32">{category.title}</p>
                  </div>
                )
              })}

              {/* Central image - galaxy core */}
              <div className="absolute w-96 h-96 rounded-full overflow-hidden border-4 border-gray-300 shadow-2xl z-20">
                <img
                  src={"/placeholder.svg"}
                  alt={selectedApp.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute z-30 flex items-center justify-center">
                <ApplicationDropdown applications={segments} selectedApp={selectedApp} onSelect={setSelectedApp} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
