"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface SubSegment {
  id: string;
  title: string;
}

interface Segment {
  id: string;
  title: string;
  categories: SubSegment[];
}

interface ApplicationDropdownProps {
  applications: Segment[]
  selectedApp: Segment
  onSelect: (app: Segment) => void
}

export default function ApplicationDropdown({ applications, selectedApp, onSelect }: ApplicationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full max-w-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold rounded-lg flex items-center justify-between gap-2 transition-colors duration-200 shadow-lg"
      >
        <span>Select your application</span>
        <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-50">
          {applications.map((app) => (
            <button
              key={app.id}
              onClick={() => {
                onSelect(app)
                setIsOpen(false)
              }}
              className={`w-full px-6 py-4 text-left font-medium transition-colors duration-200 ${
                selectedApp.id === app.id ? "bg-yellow-400 text-slate-900" : "text-slate-900 hover:bg-slate-100"
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
