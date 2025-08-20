"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle} from "@/components/ui/sheet"
import { navigationData } from "@/data/navigation"
import LogoHorizontal from "./logo/logo-h"
import Link from "next/link"



export default function Navigation() {

  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const [mobileSelectedCategory, setMobileSelectedCategory] = useState<string | null>(null)

  return (
    <>
      <header className="bg-white border-b border-neutral-200 shadow-sm w-full">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 w-full">
            {/* Logo */}
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-serif font-bold text-red-600"
              >
                <Link href={'/'} className="h-16 flex justify-start items-start w-fit -ml-4">
                  <LogoHorizontal/>
                </Link>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
             
              {navigationData.mainNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-semibold transition-colors ${
                    item.active ? "text-red-600" : "text-neutral-700 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
               <Button asChild>
                  <Link href={"/partner-page"}>
                        Become a Partner
                  </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet  open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen }>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" >
                  <Menu className="h-6 w-6" />
                </Button>

              </SheetTrigger>
       

              <SheetContent side="right" className="w-full sm:w-80 p-0" >
                <SheetHeader className="px-6 py-4 h-16 border-b border-neutral-200" >
                  <SheetTitle className="text-left text-xl font-serif font-bold text-red-600">
                  <Link href={'/'} className="h-10 flex justify-start items-start mr-auto w-fit">
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
                            item.active
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

                  {/* Sub Navigation */}
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
                            <a
                              href={item.href}
                              className="block px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:text-red-600 hover:bg-neutral-50 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.name}
                            </a>
                          )}

                          {item.hasDropdown && isMobileProductsOpen && (
                            <div className="mt-2 ml-4 space-y-1">
                              {Object.keys(navigationData.productCategories).map((category) => (
                                <div key={category}>
                                  <button
                                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                                      mobileSelectedCategory === category
                                        ? "text-red-600 bg-red-50"
                                        : "text-neutral-600 hover:text-red-600 hover:bg-neutral-50"
                                    }`}
                                    onClick={() =>
                                      setMobileSelectedCategory(mobileSelectedCategory === category ? null : category)
                                    }
                                  >
                                    <span>{category}</span>
                                    <ChevronRight
                                      className={`h-3 w-3 transition-transform ${
                                        mobileSelectedCategory === category ? "rotate-90" : ""
                                      }`}
                                    />
                                  </button>

                                  {mobileSelectedCategory === category && (
                                    <div className="mt-1 ml-4 space-y-1">
                                      {Object.keys(
                                        navigationData.productCategories[
                                          category as keyof typeof navigationData.productCategories
                                        ].subcategories,
                                      ).map((subcategory) => (
                                        <a
                                          key={subcategory}
                                          href="#"
                                          className="block px-3 py-2 text-xs text-neutral-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {subcategory}
                                        </a>
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

                  {/* Footer Section with Contact Info */}
                  <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50">
                    <div className="text-center flex flex-col gap-2">
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

        <AnimatePresence>
          {isProductsOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-xl z-40"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-3 gap-8">
                  {/* Left Column - Main Categories */}
                  <div className="border-r border-neutral-200 pr-6">
                    <h3 className="font-semibold text-neutral-900 mb-2 text-sm uppercase tracking-wide">Categories</h3>
                    <div className="border-b-2 border-primary w-[15%] mb-4"/>
                    <div className="space-y-1">
                      {Object.keys(navigationData.productCategories).map((category) => (
                        <button
                          key={category}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${
                            hoveredCategory === category
                              ? "bg-red-50 text-red-600 border-l-4 border-red-600"
                              : "text-neutral-700 hover:bg-neutral-50 hover:text-red-600"
                          }`}
                          onMouseEnter={() => setHoveredCategory(category)}
                        >
                          <span className="font-medium">{category}</span>
                          <ChevronRight
                            className={`h-4 w-4 transition-transform ${hoveredCategory === category ? "text-red-600" : "text-neutral-400"}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Middle Column - Subcategories */}
                  <div className="border-r border-neutral-200 px-6">
                    {hoveredCategory && (
                      <>
                        <h3 className="font-semibold text-neutral-900 mb-2 text-sm uppercase tracking-wide">
                          {hoveredCategory}
                        </h3>
                    <div className="border-b-2 border-primary w-[15%] mb-4"/>

                        <div className="space-y-1">
                          {Object.keys(
                            navigationData.productCategories[
                              hoveredCategory as keyof typeof navigationData.productCategories
                            ].subcategories,
                          ).map((subcategory) => (
                            <a
                              key={subcategory}
                              href="#"
                              className="block px-4 py-2 text-neutral-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
                            >
                              {subcategory}
                            </a>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right Column - Products */}
                  <div className="pl-6">
                    {hoveredCategory && (
                      <>
                        <h3 className="font-semibold text-neutral-900 mb-2 text-sm uppercase tracking-wide">
                          Products
                        </h3>
                    <div className="border-b-2 border-primary w-[15%] mb-4"/>

                        <div className="space-y-1">
                          {Object.values(
                            navigationData.productCategories[
                              hoveredCategory as keyof typeof navigationData.productCategories
                            ].subcategories,
                          )[0]?.map((product) => (
                            <a
                              key={product}
                              href="#"
                              className="block px-4 py-2 text-sm text-neutral-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              {product}
                            </a>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isProductsOpen && <div className="fixed inset-0 z-30 bg-neutral-100/30" onClick={() => setIsProductsOpen(false)} />}
    </>
  )
}
