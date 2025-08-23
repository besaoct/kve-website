"use client"

import { useState } from "react"
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "../ui/marquee"
import { Button } from "@/components/ui/button"

const tabs = [
  "Automobile & Heavy Engineering Industries",
  "Construction, Commercial Buildings",
  "Hotels, Malls & Hospitals",
  "FMCG & Pharma",
  "Defence / Railways / Aerospace / Ship Building",
  "Warehouse / Retail Chain",
  "Educational Institutions",
  "Automobile OEMs",
  "Power",
  "Tyres",
  "Bearing",
  "Steel",
  "HVAC",
  "Food & Pharma",
  "Ecom",
]

const brands = [
  { name: "Lincoln Electric", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Miller", logo: "/placeholder.svg?height=80&width=120" },
  { name: "ESAB", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Fronius", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Kemppi", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Hypertherm", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Air Liquide", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Linde", logo: "/placeholder.svg?height=80&width=120" },
]

export function PartnerLogos() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <section className="py-20 bg-neutral-100 text-black w-full">
      <div className="container max-w-8xl mx-auto px-4 w-full">
        <div className="text-center mb-16 w-full">
          <h2 className="text-4xl font-bold mb-4">Our Customers</h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            We partner with the world's leading welding equipment manufacturers to bring you the best products.
          </p>
        </div>

        <div className="flex flex-wrap justify-start gap-2 mb-8 break-all overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <Button
              key={tab}
              className=""
              variant={activeTab === tab ? "default" : "outline"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        <div className="flex w-full max-w-xs sm:max-w-sm md:max-w-4xl lg:max-w-full mx-auto items-center justify-center ">
          <Marquee className="w-full">
            <MarqueeFade side="left" className="from-neutral-100" />
            <MarqueeFade side="right" className="from-neutral-100" />
            <MarqueeContent className="">
              {brands.map((brand, index) => (
                <MarqueeItem className="h-32 w-32" key={index}>
                  <img
                    alt={`Placeholder ${index}`}
                    className="overflow-hidden rounded-full"
                    src={`https://api.dicebear.com/9.x/rings/svg?seed=${brand.name}`}
                  />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>
      </div>
    </section>
  )
}
