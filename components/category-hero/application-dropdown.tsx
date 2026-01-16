"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
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

interface ApplicationDropdownProps {
  selectedApp: Segment
  onSelect: (app: Segment) => void
}

export default function ApplicationDropdown({ selectedApp, onSelect }: ApplicationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full max-w-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-[#D2A564] hover:bg-[#D2A564] text-white font-semibold rounded-lg flex items-center justify-between gap-2 transition-colors duration-200 shadow-lg"
      >
        <span>Select your application</span>
        <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-50">
          {mappedApplications.map((app) => (
            <button
              key={app.id}
              onClick={() => {
                onSelect(app)
                setIsOpen(false)
              }}
              className={`w-full px-6 py-4 text-left font-medium transition-colors duration-200 ${
                selectedApp.id === app.id ? "bg-[#D2A564] text-white" : "text-slate-900 hover:bg-slate-100"
              }`}
            >
              {app.title}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
