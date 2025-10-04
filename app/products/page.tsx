"use client";

import Hero from "@/components/products/hero";
import Navigation from "@/components/common/navigation";
import Footer from "@/components/common/footer";

import { useState, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter, Search, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getProducts, getFeaturedProducts } from "@/data/api/products";
import { getCategories } from "@/data/api/category";
import type { Product } from "@/data/api/products/types";
import type { Category } from "@/data/api/category/types";

const PRODUCTS_PER_PAGE = 12;

export default function Page() {
  // State for filters and search
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("created_at-desc");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<number[]>([]);
  const [selectedSegments, setSelectedSegments] = useState<number[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  // State for API data
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories(100); // Get all categories
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products with filters
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        
        // Parse sort option
        const [sortBy, sortOrder] = sortOption.split("-") as [string, "asc" | "desc"];
        
        const params: any = {
          per_page: PRODUCTS_PER_PAGE,
          page: currentPage,
          sort_by: sortBy,
          sort_order: sortOrder,
        };

        // Add filters
        if (searchTerm) params.search = searchTerm;
        if (selectedCategories.length === 1) params.category_id = selectedCategories[0];
        if (selectedSubCategories.length === 1) params.sub_category_id = selectedSubCategories[0];
        if (selectedSegments.length === 1) params.segment_id = selectedSegments[0];

        const data = await getProducts(params);
        setProducts(data);
        setTotalProducts(data.length);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm, sortOption, selectedCategories, selectedSubCategories, selectedSegments, currentPage]);

  // Get available subcategories based on selected categories
  const availableSubCategories = useMemo(() => {
    if (selectedCategories.length === 0) return [];
    
    return categories
      .filter((cat) => selectedCategories.includes(cat.id))
      .flatMap((cat) => cat.sub_categories || []);
  }, [selectedCategories, categories]);

  // Get available segments based on selected subcategories
  const availableSegments = useMemo(() => {
    if (selectedSubCategories.length === 0) return [];
    
    return availableSubCategories
      .filter((sub) => selectedSubCategories.includes(sub.id))
      .flatMap((sub) => sub.segments || []);
  }, [selectedSubCategories, availableSubCategories]);

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategories((prev) => {
      const newSelection = prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId];
      
      // Reset subcategories and segments when categories change
      if (!newSelection.includes(categoryId)) {
        setSelectedSubCategories([]);
        setSelectedSegments([]);
      }
      
      return newSelection;
    });
    setCurrentPage(1);
  };

  const handleSubCategoryChange = (subCategoryId: number) => {
    setSelectedSubCategories((prev) => {
      const newSelection = prev.includes(subCategoryId)
        ? prev.filter((s) => s !== subCategoryId)
        : [...prev, subCategoryId];
      
      // Reset segments when subcategories change
      if (!newSelection.includes(subCategoryId)) {
        setSelectedSegments([]);
      }
      
      return newSelection;
    });
    setCurrentPage(1);
  };

  const handleSegmentChange = (segmentId: number) => {
    setSelectedSegments((prev) =>
      prev.includes(segmentId)
        ? prev.filter((s) => s !== segmentId)
        : [...prev, segmentId]
    );
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSubCategories([]);
    setSelectedSegments([]);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const Sidebar = () => (
    <div className="flex flex-col gap-6 lg:sticky lg:top-24">
      {/* Clear Filters */}
      {(selectedCategories.length > 0 || selectedSubCategories.length > 0 || selectedSegments.length > 0) && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear All Filters
        </Button>
      )}

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {categories.map((category) => (
            <div key={category.id}>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  className="accent-red-600"
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                />
                <span className="text-sm">
                  {category.title} ({category.products_count})
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-Categories */}
      {availableSubCategories.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Sub-Categories</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {availableSubCategories.map((sub) => (
              <div key={sub.id}>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-red-600"
                    checked={selectedSubCategories.includes(sub.id)}
                    onChange={() => handleSubCategoryChange(sub.id)}
                  />
                  <span className="text-sm">{sub.title}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Segments */}
      {availableSegments.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Segments</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {availableSegments.map((segment) => (
              <div key={segment.id}>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-red-600"
                    checked={selectedSegments.includes(segment.id)}
                    onChange={() => handleSegmentChange(segment.id)}
                  />
                  <span className="text-sm">
                    {segment.title} ({segment.products_count})
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      <Hero />
      <div className="container mx-auto max-w-8xl px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-1/4">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {/* Search and Sort Bar */}
            <div className="flex justify-between flex-wrap items-center gap-4 mb-8">
              <div className="relative min-w-1/2 flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <div className="lg:hidden">
                  <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline">
                        <Filter className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80 overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle>Filter Products</SheetTitle>
                      </SheetHeader>
                      <div className="py-4">
                        <Sidebar />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                {/* Sort Dropdown */}
                <Select onValueChange={handleSortChange} defaultValue={sortOption}>
                  <SelectTrigger className="w-[180px] border-border shadow-none">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="title-desc">Name (Z-A)</SelectItem>
                    <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                    <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                    <SelectItem value="created_at-desc">Newest First</SelectItem>
                    <SelectItem value="created_at-asc">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-4 text-sm text-neutral-600">
              {isLoading ? (
                "Loading..."
              ) : (
                `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`
              )}
            </div>

            {/* Products List */}
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-red-600" />
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-neutral-600 mb-4">No products found</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white border rounded-lg p-6 flex items-start flex-col sm:flex-row gap-6 hover:shadow-lg transition-shadow"
                  >
                    {/* Product Image */}
                    <div className="w-full sm:w-1/3 flex-shrink-0">
                      <Link href={`/products/${product.id}`}>
                        {product.primary_image_url ? (
                          <Image
                            src={product.primary_image_url}
                            alt={product.title}
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-full h-48 bg-neutral-200 rounded-lg flex items-center justify-center">
                            <span className="text-6xl">📦</span>
                          </div>
                        )}
                      </Link>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Category Badge */}
                        <div className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                          {product.category?.title || "PRODUCT"}
                        </div>

                        {/* Product Title */}
                        <Link href={`/products/${product.id}`}>
                          <h3 className="text-2xl font-bold text-neutral-900 mb-3 hover:text-red-600 transition-colors">
                            {product.title}
                          </h3>
                        </Link>

                        {/* Hierarchy Breadcrumb */}
                        {product.hierarchy && (
                          <p className="text-sm text-neutral-500 mb-3">
                            {product.hierarchy.category} / {product.hierarchy.sub_category}
                            {product.hierarchy.segment && ` / ${product.hierarchy.segment}`}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-neutral-600 mb-4 line-clamp-3">
                          {product.short_description || "High-quality industrial equipment for professional use."}
                        </p>

                        {/* Features/Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.segment?.title && (
                            <span className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full">
                              {product.segment.title}
                            </span>
                          )}
                          {product.sub_segment?.title && (
                            <span className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full">
                              {product.sub_segment.title}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t">
                        <div>
                          <span className="text-3xl font-bold text-neutral-900">
                            {product.formatted_price || `₹${product.price}`}
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <Button asChild variant="outline">
                            <Link href={`/products/${product.id}`}>
                              View Details
                            </Link>
                          </Button>
                          <Button>Add to Cart</Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {!isLoading && products.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <span className="px-4 py-2 text-sm text-neutral-600">
                  Page {currentPage}
                </span>
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((p) => p + 1)}
                  disabled={products.length < PRODUCTS_PER_PAGE}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}