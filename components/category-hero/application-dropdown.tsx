"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Segment {
  id: string;
  title: string;
  image: string;
  categories: any[];
}

interface ApplicationDropdownProps {
  selectedApp: Segment | null;
  onSelect: (app: Segment | null) => void;
  applications: Segment[];
}

export default function ApplicationDropdown({
  selectedApp,
  onSelect,
  applications,
}: ApplicationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-sm text-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 bg-[#D2A564] hover:bg-[#c59950] text-white font-semibold rounded-xl flex items-center justify-between gap-3 transition-colors shadow-lg max-w-62.5"
      >
        <span className="line-clamp-1">{selectedApp ? selectedApp.title : "Select your application"}</span>
        <ChevronDown
          size={22}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute w-full min-w-67.5 top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 max-h-105 overflow-y-auto">
          {/* Option to deselect → show main categories */}
          <button
            onClick={() => {
              onSelect(null);
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left font-medium transition-colors ${
              selectedApp === null
                ? "bg-[#D2A564] text-white"
                : "text-slate-800 hover:bg-slate-50"
            }`}
          >
            All Categories
          </button>

          {applications.map((app) => (
            <button
              key={app.id}
              onClick={() => {
                onSelect(app);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left font-medium transition-colors ${
                selectedApp?.id === app.id
                  ? "bg-[#D2A564] text-white"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              {app.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}