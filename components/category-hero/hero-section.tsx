"use client";

import { useState, useEffect, useMemo } from "react";
import ApplicationDropdown from "./application-dropdown";
import MobileCategories from "./mobile-categories";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { CategoryHero } from "@/data/dummy/categoryHero";
import { getNavbarHierarchy } from "@/data/api/nav";
import type { Nav } from "@/data/api/nav/types";

// ── Helper: Normalize titles for matching ────────────────────────────────
function normalizeTitle(title: string): string {
  return (title || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9 ]/g, ""); // remove punctuation
}

// ── Mapping structure ────────────────────────────────────────────────────
type TitleToIdMap = {
  categories: Record<string, number>;
  subCategories: Record<string, number>;
};

function buildTitleToIdMap(hierarchy: Nav[]): TitleToIdMap {
  const map: TitleToIdMap = {
    categories: {},
    subCategories: {},
  };

  hierarchy.forEach((cat) => {
    const norm = normalizeTitle(cat.title);
    if (norm) map.categories[norm] = cat.id;

    cat.sub_categories?.forEach((sub) => {
      const subNorm = normalizeTitle(sub.title);
      if (subNorm) map.subCategories[subNorm] = sub.id;
    });
  });

  return map;
}

// ── Segment / Orbit item type ────────────────────────────────────────────
interface SubSegment {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface Segment {
  id: string;
  link: string;
  title: string;
  image: string;
  categories: SubSegment[];
}

type OrbitItem = {
  id: string;
  link: string;
  title: string;
  image: string;
  isMainCategory?: boolean;
};

export default function CategoryHeroSection() {
  const isMobile = useIsMobile();

  // ── State ───────────────────────────────────────────────────────────────
  const [hierarchy, setHierarchy] = useState<Nav[]>([]);
  const [titleToIdMap, setTitleToIdMap] = useState<TitleToIdMap | null>(null);
  const [selectedApp, setSelectedApp] = useState<Segment | null>(null);

  // Load real hierarchy once
  useEffect(() => {
    let mounted = true;

    getNavbarHierarchy()
      .then((data) => {
        if (mounted) {
          setHierarchy(data);
          setTitleToIdMap(buildTitleToIdMap(data));
        }
      })
      .catch((err) => {
        console.error("Failed to load navbar hierarchy:", err);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Transform static CategoryHero into real/dynamic links
  const mappedApplications: Segment[] = useMemo(() => {
    // Fallback while hierarchy is loading
    if (!titleToIdMap) {
      return CategoryHero.map((category, catIndex) => ({
        id: `fallback-cat-${catIndex}`,
        link: `/products?categories=${catIndex}`,
        title: category.name,
        image: category.image,
        categories: category.subcategories.map((sub, subIndex) => ({
          id: `fallback-sub-${catIndex}-${subIndex}`,
          title: sub.name,
          image: sub.image || "/placeholder.svg",
          link: `/products?categories=${catIndex}&sub_categories=${subIndex}`,
        })),
      }));
    }

    return CategoryHero.map((category) => {
      const catNorm = normalizeTitle(category.name);
      const realCatId = titleToIdMap.categories[catNorm];

      // Prefer real ID, fallback to encoded title
      const catPart = realCatId !== undefined
        ? `categories=${realCatId}`
        : `categories=${encodeURIComponent(category.name)}`;

      return {
        id: realCatId ? `cat-${realCatId}` : `cat-title-${catNorm}`,
        link: `/products?${catPart}`,
        title: category.name,
        image: category.image,
        categories: category.subcategories.map((sub) => {
          const subNorm = normalizeTitle(sub.name);
          const realSubId = titleToIdMap.subCategories[subNorm];

          const subPart = realSubId !== undefined
            ? `sub_categories=${realSubId}`
            : `sub_categories=${encodeURIComponent(sub.name)}`;

          // Combine parent + child query
          const fullQuery = `${catPart}&${subPart}`;

          return {
            id: realSubId ? `sub-${realSubId}` : `sub-title-${subNorm}`,
            title: sub.name,
            image: sub.image || "/placeholder.svg",
            link: `/products?${fullQuery}`,
          };
        }),
      };
    });
  }, [titleToIdMap]);

  // ── Orbit content logic ──────────────────────────────────────────────────
  const orbitItems: OrbitItem[] =
    selectedApp === null
      ? mappedApplications.map((app) => ({
          id: app.id,
          link: app.link,
          title: app.title,
          image: app.image,
          isMainCategory: true,
        }))
      : selectedApp.categories.map((cat) => ({
          id: cat.id,
          link: cat.link,
          title: cat.title,
          image: cat.image,
          isMainCategory: false,
        }));

  const centerImage =
    selectedApp?.image ?? "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg";
  const centerTitle = selectedApp?.title ?? "Select Application";

  return (
    <section className="w-full px-4">
      <div className="w-full max-w-7xl mx-auto">
        {isMobile ? (
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

            <MobileCategories
              categories={orbitItems}
              segmentId={selectedApp?.id ?? ""}
            />
          </div>
        ) : (
          <div className="relative w-full flex flex-col items-center">
            <div className="relative w-full max-w-6xl h-[90vh] min-h-150 my-12 flex items-center justify-center">
              {/* Orbiting items */}
              {orbitItems.map((item, index) => {
                const total = orbitItems.length;
                const angle = total <= 1 ? 0 : (index / total) * 360 - 180;
                const radius = total <= 4 ? 250 : 280;

                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

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
                      <Link href={item.link}>
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

              {/* Central core */}
              <div className="absolute w-72 h-72 rounded-full overflow-hidden border-4 border-gray-300 shadow-2xl z-20 pointer-events-none">
                <img
                  src={centerImage}
                  alt={centerTitle}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dropdown in center */}
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