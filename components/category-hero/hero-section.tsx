"use client";

import { useState } from "react";
import ApplicationDropdown from "./application-dropdown";
import MobileCategories from "./mobile-categories";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { CategoryHero } from "@/data/dummy/categoryHero";

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

const mappedApplications: Segment[] = CategoryHero.map((category, index) => ({
  id: `category-${index}`,
  title: category.name,
  image: category.image,
  categories: category.subcategories.map((sub, subIndex) => ({
    id: `subcategory-${index}-${subIndex}`,
    title: sub.name,
    image: sub.image || "/placeholder.svg", // fallback
  })),
}));

// ── New helper type ───────────────────────────────────────────────
type OrbitItem = {
  id: string;
  title: string;
  image: string;
  isMainCategory?: boolean; // to know what link to generate
};

export default function CategoryHeroSection() {
  const isMobile = useIsMobile();

  // null = show main categories in orbit
  const [selectedApp, setSelectedApp] = useState<Segment | null>(null);

  // What to show in orbit right now
  const orbitItems: OrbitItem[] =
    selectedApp === null
      ? // Show main segments when nothing selected
        mappedApplications.map((app) => ({
          id: app.id,
          title: app.title,
          image: app.image,
          isMainCategory: true,
        }))
      : // Show subcategories of selected segment
        selectedApp.categories.map((cat) => ({
          id: cat.id,
          title: cat.title,
          image: cat.image,
          isMainCategory: false,
        }));

  const centerImage = selectedApp?.image ?? "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg";
  const centerTitle = selectedApp?.title ?? "Select Application";

  return (
    <section className="w-full px-4">
      <div className="w-full max-w-7xl mx-auto">
        {isMobile ? (
          // ── Mobile layout (almost unchanged) ───────────────────────────────
          <div className="flex flex-col items-center gap-12">
            {/* Central image */}
            <div className="w-full max-w-xs pt-6">
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                <img
                  src={centerImage}
                  alt={centerTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 text-center text-balance">
              {centerTitle}
            </h1>

            <ApplicationDropdown
              selectedApp={selectedApp}
              onSelect={setSelectedApp}
              applications={mappedApplications}
            />

            {/* Mobile scrollable list */}
            <MobileCategories
              categories={orbitItems}
              segmentId={selectedApp?.id ?? ""}
              // isMainCategoryMode={selectedApp === null}
            />
          </div>
        ) : (
          // ── Desktop Galaxy orbit layout ────────────────────────────────────
          <div className="relative w-full flex flex-col items-center">
            <div className="relative w-full max-w-6xl h-[90vh] min-h-175 my-12 flex items-center justify-center">
              {/* Orbiting items – main categories OR subcategories */}
              {orbitItems.map((item, index) => {
                const total = orbitItems.length;
                // nicer distribution when few items
                const angle = total <= 1 ? 0 : (index / total) * 360 - 180;
                const radius = total <= 4 ? 250 : 280;

                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                const href = item.isMainCategory
                  ? `/products?segment_id=${item.id}`
                  : `/products?segment_id=${selectedApp?.id}&sub_segment_id=${item.id}`;

                return (
                  <div
                    key={item.id}
                    className="absolute flex flex-col items-center gap-3 pointer-events-auto"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      left: "50%",
                      top: "50%",
                    }}
                  >
                    <div className="w-28 h-28 rounded-full bg-[#D2A564] flex items-center justify-center shadow-lg border-4 border-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
                      <Link href={href}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-cover w-full h-full"
                        />
                      </Link>
                    </div>
                    <p className="text-center font-semibold text-gray-900 text-sm w-32 line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                );
              })}

              {/* Central galaxy core image */}
              <div className="absolute w-72 h-72 rounded-full overflow-hidden border-4 border-gray-300 shadow-2xl z-20 pointer-events-none">
                <img
                  src={centerImage}
                  alt={centerTitle}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dropdown in center – always visible */}
              <div className="absolute z-30 flex items-center justify-center">
                <ApplicationDropdown
                  selectedApp={selectedApp}
                  onSelect={setSelectedApp}
                  applications={mappedApplications}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}