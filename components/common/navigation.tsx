"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle} from "@/components/ui/sheet"
import { navigationData } from "@/data/constants/navigation"
import LogoHorizontal from "./logo/logo-h"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { getNavbarHierarchy } from "@/data/api/nav"
import type { Nav } from "@/data/api/nav/types"
import type { SubCategory } from "@/data/api/category/types"
import CartIcon from "@/components/cart/cart-icon"

export default function Navigation() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<Nav | null>(null)
  const [hoveredSubCategory, setHoveredSubCategory] = useState<SubCategory | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const [mobileSelectedCategory, setMobileSelectedCategory] = useState<string | null>(null)
  const [activeDropdownMain, setActiveDropdownMain] = useState<string | null>(null)
  
  // API State
  const [categories, setCategories] = useState<Nav[]>([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)

  const pathname = usePathname()

  // Fetch categories from API on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoadingCategories(true)
        const data = await getNavbarHierarchy()
        setCategories(data)
      } catch (error) {
        console.error("Error fetching categories:", error)
        setCategories([])
      } finally {
        setIsLoadingCategories(false)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    if (hoveredCategory && hoveredCategory.sub_categories && hoveredCategory.sub_categories.length > 0) {
      setHoveredSubCategory(hoveredCategory.sub_categories[0]);
    } else {
      setHoveredSubCategory(null);
    }
  }, [hoveredCategory]);

  return (
    <>
      <header className="bg-white border-b border-neutral-200 shadow-sm w-full">
        <nav className="container mx-auto px-4">
          <div className="flex items-center gap-4 justify-between h-24 w-full">
            {/* Logo */}
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-serif font-bold text-red-600"
              >
                <Link href={'/'} className="block w-[240px] sm:w-[320px] -ml-4">
                  <LogoHorizontal/>
                </Link>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 py-3 h-full overflow-x-auto  scrollbar-hide pr-4 ">
              {navigationData.mainNav.map((item) => (
                <div key={item.name}
                  className="relative group h-full flex items-center whitespace-nowrap"
                  onMouseEnter={() => item.hasDropdown ? setActiveDropdownMain(item.name) : null}
                  onMouseLeave={() => setActiveDropdownMain(null)}
                >
                  <Link
                    href={item.href || "#"}
                    className={`font-semibold transition-colors ${
                      item.href == pathname
                        ? "text-red-600" : "text-neutral-700 hover:text-red-600"
                    }`}
                  >
                    <span> {item.name} </span> 
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`inline-block ml-1 h-4 w-4 transition-transform ${
                          activeDropdownMain === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {item.hasDropdown && activeDropdownMain === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-neutral-200 shadow-lg z-[999] rounded-lg overflow-hidden">
                      <div className="py-0">
                        {navigationData.companyDropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href || '#'}
                            className="block font-medium px-4 py-2 text-neutral-700 hover:text-red-600 hover:bg-red-50 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="">
                <Link href={"/partner-page"}>
                  Become a Partner
                </Link>
              </Button>
              <Link href="/cart">
                <CartIcon />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full sm:w-80 p-0">
                <SheetHeader className="px-6 py-4 h-16 border-b border-neutral-200">
                  <SheetTitle className="text-left h-12 text-xl font-serif font-bold text-red-600">
                    <Link href={'/'} className="block w-[150px]">
                      <LogoHorizontal/>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col h-full overflow-y-auto">
                  {/* Main Navigation */}
                  <div className="px-6 py-4 border-b border-neutral-100">
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">Main Menu</h3>
                    <div className="space-y-1">
                      {navigationData.mainNav.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                            item.href == pathname
                              ? "text-red-600 bg-red-50"
                              : "text-neutral-700 hover:text-red-600 hover:bg-neutral-50"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Sub Navigation with API data */}
                  <div className="flex-1 px-6 py-4">
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">Categories</h3>
                    <div className="space-y-1">
                      {navigationData.subNav.map((item) => (
                        <div key={item.name}>
                          {item.hasDropdown ? (
                            <button
                              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:text-red-600 hover:bg-neutral-50 transition-colors"
                              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                            >
                              <span>{item.name}</span>
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${isMobileProductsOpen ? "rotate-180" : ""}`}
                              />
                            </button>
                          ) : (
                            <Link
                              href={item.href || "#"}
                              className="block px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:text-red-600 hover:bg-neutral-50 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          )}

                          {item.hasDropdown && isMobileProductsOpen && (
                            <div className="mt-2 ml-4 space-y-1">
                              {categories.map((category) => (
                                <div key={category.id}>
                                  <button
                                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                                      mobileSelectedCategory === category.title
                                        ? "text-red-600 bg-red-50"
                                        : "text-neutral-600 hover:text-red-600 hover:bg-neutral-50"
                                    }`}
                                    onClick={() =>
                                      setMobileSelectedCategory(mobileSelectedCategory === category.title ? null : category.title)
                                    }
                                  >
                                    <span>{category.title}</span>
                                    <ChevronRight
                                      className={`h-3 w-3 transition-transform ${
                                        mobileSelectedCategory === category.title ? "rotate-90" : ""
                                      }`}
                                    />
                                  </button>

                                  {mobileSelectedCategory === category.title && (
                                    <div className="mt-1 ml-4 space-y-1">
                                      {category.sub_categories?.map((subcategory) => (
                                        <Link
                                          key={subcategory.id}
                                          href={subcategory.url || "#"}
                                          className="block px-3 py-2 text-xs text-neutral-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {subcategory.title}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Section */}
                  <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50">
                    <div className="text-center flex flex-col gap-2">
                        <Link href="/cart" className="flex items-center justify-center gap-2 text-sm text-neutral-600 mb-2">
                            <CartIcon />
                            <span>View Cart</span>
                        </Link>
                      <p className="text-sm text-neutral-600 mb-2">Need Help?</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contact Us
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Become a Partner
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* Sticky Sub Navigation */}
      <div className="sticky top-0 z-50 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center justify-start">
            <div className="flex items-center space-x-8 py-4">
              {navigationData.subNav.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center space-x-1 text-neutral-700 hover:text-red-600 transition-colors font-semibold"
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link href={item.href || '/'} className="text-neutral-700 hover:text-red-600 transition-colors font-semibold">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Dropdown with API Data */}
        <AnimatePresence>
          {isProductsOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-xl z-40"
            >
              <div className="container mx-auto px-4 py-8">
                {isLoadingCategories ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-8">
                    {/* Left Column - Categories from API */}
                    <div className="border-r border-neutral-200 pr-6">
                      <h3 className="font-semibold text-neutral-900 mb-2 text-sm uppercase tracking-wide">Categories</h3>
                      <div className="border-b-2 border-primary w-[15%] mb-4"/>
                      <div className="space-y-1">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${
                              hoveredCategory?.id === category.id
                                ? "bg-red-50 text-red-600 border-l-4 border-red-600"
                                : "text-neutral-700 hover:bg-neutral-50 hover:text-red-600"
                            }`}
                            onMouseEnter={() => setHoveredCategory(category)}
                          >
                            <span className="font-medium">{category.title}</span>
                            <ChevronRight
                              className={`h-4 w-4 transition-transform ${hoveredCategory?.id === category.id ? "text-red-600" : "text-neutral-400"}`}
                            />
                          </button>
                        ))}
                        <Button asChild variant={'link'}>
                          <Link href={'/products'}>
                            View all Products
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Middle Column - Subcategories (Equipment) */}
                    <div className="border-r border-neutral-200 px-6">
                      {hoveredCategory && (
                        <>
                          <h3 className="font-semibold text-neutral-900 mb-2 text-sm uppercase tracking-wide">
                            {hoveredCategory.title}
                          </h3>
                          <div className="border-b-2 border-primary w-[15%] mb-4"/>

                          <div className="space-y-1">
                            {hoveredCategory.sub_categories?.map((subcategory) => (
                              <Link
                                key={subcategory.id}
                                href={subcategory.url || '#'}
                                className={`block px-4 py-2 text-neutral-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium ${hoveredSubCategory?.id === subcategory.id ? "bg-red-50 text-red-600" : ""}`}
                                onMouseEnter={() => setHoveredSubCategory(subcategory)}
                              >
                                {subcategory.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Right Column - Products (Segments) */}
                    <div className="pl-6">
                      {hoveredSubCategory && (
                        <>
                          <h3 className="font-semibold text-neutral-900 mb-2 text-sm uppercase tracking-wide">
                            {hoveredSubCategory.title || "Segments"}
                          </h3>
                          <div className="border-b-2 border-primary w-[15%] mb-4"/>

                          <div className="space-y-1">
                            {hoveredSubCategory.segments?.slice(0, 10).map((segment) => (
                              <Link
                                key={segment.id}
                                href={`/products?segment_id=${segment.id}`}
                                className="block px-4 py-2 text-sm text-neutral-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                {segment.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isProductsOpen && <div className="fixed inset-0 z-30 bg-neutral-100/30" onClick={() => setIsProductsOpen(false)} />}
    </>
  )
}
