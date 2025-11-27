"use client";

import Hero from "@/components/products/hero";
import Navigation from "@/components/common/navigation";
import Footer from "@/components/common/footer";

import { useState, useEffect, useMemo, Suspense } from "react";
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
import { useSearchParams, useRouter } from "next/navigation";
import { getProducts } from "@/data/api/products";
import { getNavbarHierarchy } from "@/data/api/nav";
import type { Nav } from "@/data/api/nav/types";
import type { Product } from "@/data/api/products/types";
import { useCart } from "@/context/cart-context";
import { toast } from "sonner";

const PRODUCTS_PER_PAGE = 12;

function PageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for filters and search
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("created_at-desc");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<number[]>(
    []
  );
  const [selectedSegments, setSelectedSegments] = useState<number[]>([]);
  const [selectedSubSegments, setSelectedSubSegments] = useState<number[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // State for API data
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Nav[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);

  const { cartItems, addToCart } = useCart();

  // Fetch all data on mount
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const categoriesData = await getNavbarHierarchy();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAllData();
  }, []);

  // Update state from URL search params
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    setSearchTerm(params.get("search") || "");
    setSortOption(params.get("sort") || "created_at-desc");
    setSelectedCategories(
      params.get("categories")?.split(",").map(Number).filter(Boolean) || []
    );
    setSelectedSubCategories(
      params.get("sub_categories")?.split(",").map(Number).filter(Boolean) || []
    );
    setSelectedSegments(
      params.get("segments")?.split(",").map(Number).filter(Boolean) || []
    );
    setSelectedSubSegments(
      params.get("sub_segments")?.split(",").map(Number).filter(Boolean) || []
    );
    setCurrentPage(Number(params.get("page")) || 1);
  }, [searchParams]);

  // Fetch products with filters
  // FETCH PRODUCTS — This version works perfectly on hard refresh
  useEffect(() => {
    let isCancelled = false;

    const fetchProducts = async () => {
      if (!categories.length) return; // wait for categories to be loaded

      try {
        setIsLoading(true);

        const [sortBy, sortOrder] = sortOption.split("-") as [string, "asc" | "desc"];

        const params: Record<string, string> = {
          per_page: PRODUCTS_PER_PAGE.toString(),
          page: currentPage.toString(),
          sort_by: sortBy,
          sort_order: sortOrder,
        };

        if (searchTerm) params.search = searchTerm;
        if (selectedCategories.length > 0)
          params.category_id = selectedCategories.join(",");
        if (selectedSubCategories.length > 0)
          params.sub_category_id = selectedSubCategories.join(",");
        if (selectedSegments.length > 0)
          params.segment_id = selectedSegments.join(",");
        if (selectedSubSegments.length > 0)
          params.sub_segment_id = selectedSubSegments.join(",");

        const response = await getProducts(params);

        // Important: your API must return { data: Product[], total: number }
        // If it doesn't → adjust accordingly
        if (!isCancelled) {
          setProducts(response);        // fallback for old format
          setTotalProducts( response.length);
        }
      } catch (error) {
        if (!isCancelled) {
          console.error("Error fetching products:", error);
          setProducts([]);
          setTotalProducts(0);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isCancelled = true;
    };
  }, [
    searchTerm,
    sortOption,
    selectedCategories,
    selectedSubCategories,
    selectedSegments,
    selectedSubSegments,
    currentPage,
    categories.length, // ← ensures we don’t fetch before hierarchy is ready
  ]);


  // Update URL search params when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchTerm) params.set("search", searchTerm);
    if (sortOption !== "created_at-desc") params.set("sort", sortOption);
    if (selectedCategories.length > 0)
      params.set("categories", selectedCategories.join(","));
    if (selectedSubCategories.length > 0)
      params.set("sub_categories", selectedSubCategories.join(","));
    if (selectedSegments.length > 0)
      params.set("segments", selectedSegments.join(","));
    if (selectedSubSegments.length > 0)
      params.set("sub_segments", selectedSubSegments.join(","));
    if (currentPage > 1) params.set("page", currentPage.toString());

    router.push(`?${params.toString()}`, { scroll: false });
  }, [
    searchTerm,
    sortOption,
    selectedCategories,
    selectedSubCategories,
    selectedSegments,
    selectedSubSegments,
    currentPage,
    router,
  ]);

  const availableSubCategories = useMemo(() => {
    if (selectedCategories.length === 0) return [];
    return categories
      .filter((cat) => selectedCategories.includes(cat.id))
      .flatMap((cat) => cat.sub_categories || []);
  }, [selectedCategories, categories]);

  const availableSegments = useMemo(() => {
    if (selectedSubCategories.length === 0) return [];
    return availableSubCategories
      .filter((sub) => selectedSubCategories.includes(sub.id))
      .flatMap((sub) => sub.segments || []);
  }, [selectedSubCategories, availableSubCategories]);

  const availableSubSegments = useMemo(() => {
    if (selectedSegments.length === 0) return [];
    return availableSegments
      .filter((seg) => selectedSegments.includes(seg.id))
      .flatMap((seg) => seg.sub_segments || []);
  }, [selectedSegments, availableSegments]);

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategories((prev) => {
      const newSelection = prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId];

      // Reset sub-selections
      setSelectedSubCategories([]);
      setSelectedSegments([]);
      setSelectedSubSegments([]);

      return newSelection;
    });
    setCurrentPage(1);
  };

  const handleSubCategoryChange = (subCategoryId: number) => {
    setSelectedSubCategories((prev) => {
      const newSelection = prev.includes(subCategoryId)
        ? prev.filter((s) => s !== subCategoryId)
        : [...prev, subCategoryId];

      // Reset sub-selections
      setSelectedSegments([]);
      setSelectedSubSegments([]);

      return newSelection;
    });
    setCurrentPage(1);
  };

  const handleSegmentChange = (segmentId: number) => {
    setSelectedSegments((prev) => {
      const newSelection = prev.includes(segmentId)
        ? prev.filter((s) => s !== segmentId)
        : [...prev, segmentId];

      // Reset sub-selections
      setSelectedSubSegments([]);

      return newSelection;
    });
    setCurrentPage(1);
  };

  const handleSubSegmentChange = (subSegmentId: number) => {
    setSelectedSubSegments((prev) =>
      prev.includes(subSegmentId)
        ? prev.filter((s) => s !== subSegmentId)
        : [...prev, subSegmentId]
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
    setSelectedSubSegments([]);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const Sidebar = () => (
    <div className="flex flex-col gap-6 lg:sticky lg:top-24">
      {/* Clear Filters */}
      {(selectedCategories.length > 0 ||
        selectedSubCategories.length > 0 ||
        selectedSegments.length > 0 ||
        selectedSubSegments.length > 0) && (
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
              <label className="flex items-start space-x-2 cursor-pointer">
                <input
                  className="accent-red-600 "
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                />
                <span className="text-sm -mt-1 w-full gap-2 flex justify-start">
                  <span className="max-w-[300px] line-clamp-1">
                    {" "}
                    {category.title}{" "}
                  </span>
                  <span className="">({category.products_count})</span>
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
                <label className="flex items-start space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-red-600"
                    checked={selectedSubCategories.includes(sub.id)}
                    onChange={() => handleSubCategoryChange(sub.id)}
                  />
                  <span className="text-sm -mt-1 ">{sub.title}</span>
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

      {/* Sub-Segments */}
      {availableSubSegments.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Sub-Segments</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {availableSubSegments.map((subSegment) => (
              <div key={subSegment.id}>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-red-600"
                    checked={selectedSubSegments.includes(subSegment.id)}
                    onChange={() => handleSubSegmentChange(subSegment.id)}
                  />
                  <span className="text-sm">
                    {subSegment.title} ({subSegment.products_count})
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
                    <SheetContent
                      side="top"
                      className="h-screen flex flex-col gap-0"
                    >
                      <SheetHeader className="gap-0 border-b p-4">
                        <SheetTitle>Filter Products</SheetTitle>
                      </SheetHeader>
                      <div className="py-4 px-4 overflow-y-auto flex-grow">
                        <Sidebar />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                {/* Sort Dropdown */}
                <Select
                  onValueChange={handleSortChange}
                  defaultValue={sortOption}
                >
                  <SelectTrigger className="w-[180px] border-border shadow-none">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="title-desc">Name (Z-A)</SelectItem>
                    <SelectItem value="price-asc">
                      Price (Low to High)
                    </SelectItem>
                    <SelectItem value="price-desc">
                      Price (High to Low)
                    </SelectItem>
                    <SelectItem value="created_at-desc">
                      Newest First
                    </SelectItem>
                    <SelectItem value="created_at-asc">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>


{/* Results Count */}
<div className="mb-6 text-lg font-medium text-neutral-700">
  {isLoading ? (
    "Loading products..."
  ) : totalProducts === 0 ? (
    <div className="text-center py-20">
      <p className="text-2xl text-neutral-600 mb-6">No products found matching your filters.</p>
      <Button onClick={clearFilters} size="lg">
        Clear All Filters
      </Button>
    </div>
  ) : (
    `Showing ${products.length} of ${totalProducts} product${totalProducts !== 1 ? "s" : ""}`
  )}
</div>

            {/* Products List */}
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-red-600" />
              </div>
            ) : products.length === 0 ? (
              <></>
              // <div className="text-center py-20">
              //   <p className="text-xl text-neutral-600 mb-4">
              //     No products found
              //   </p>
              //   <Button onClick={clearFilters} variant="outline">
              //     Clear Filters
              //   </Button>
              // </div>
            ) : (
              <div className="flex flex-col gap-8">
                {products.map((product, index) => {
                  const handleAddToCart = () => {
                    addToCart(product);
                    toast.success(
                      `${product.title} has been added to your cart.`
                    );
                  };

                  const isProductInCart = cartItems.some(
                    (item) => item.product.id === product.id
                  );

                  return (
                    <motion.div
                      key={product.id}
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="border-0 rounded-lg p-0 flex items-center flex-col sm:flex-row gap-8 relative"
                    >
                      {product.is_sustainable && (
                        <div className="absolute top-2 right-2">
                          <Image
                            src="/images/icons/leaf.svg"
                            alt="Sustainable"
                            width={24}
                            height={24}
                          />
                        </div>
                      )}

                      {/* Product Image */}
                      <div className="w-full sm:w-1/3">
                        <Link href={`/products/${product.slug}`}>
                          {product.primary_image_url ? (
                            <Image
                              src={product.primary_image_url}
                              alt={product.title}
                              width={500}
                              height={300}
                              className="w-full h-auto rounded-lg object-cover"
                            />
                          ) : (
                            <Image
                              src={"/placeholder.svg"}
                              alt={product.title}
                              width={500}
                              height={300}
                              className="w-full h-auto rounded-lg object-cover"
                            />
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
                          <Link href={`/products/${product.slug}`}>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-3 hover:text-red-600 transition-colors">
                              {product.title}
                            </h3>
                          </Link>

                          {/* Hierarchy Breadcrumb */}
                          {/* {product.hierarchy && (
                          <p className="text-sm text-neutral-500 mb-3">
                            {product.hierarchy.category} / {product.hierarchy.sub_category}
                            {product.hierarchy.segment && ` / ${product.hierarchy.segment}`}
                          </p>
                        )} */}

                          {/* Description */}
                          <p className="text-neutral-600 mb-4 line-clamp-2">
                            {product.short_description ||
                              "High-quality industrial equipment for professional use."}
                          </p>

                          {/* Features */}
                          {product.features && product.features.length > 0 && (
                            <div className="mb-4">
                              <h4 className="font-semibold text-sm mb-2">
                                Features:
                              </h4>
                              <ul className="pl-0 space-y-1 text-sm text-neutral-600">
                                {product.features
                                  .slice(0, 3)
                                  .map((feature, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start gap-2"
                                    >
                                      <svg
                                        className="flex-shrink-0 text-neutral-500 mt-1"
                                        width="4"
                                        height="4"
                                        viewBox="0 0 4 4"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle cx="4" cy="4" r="4" />
                                      </svg>
                                      <span className="line-clamp-1">
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          )}

                          {/* segments and subsegment */}
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

                        <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t">
                          {product.price ? (
                            <div>
                              <span className="text-3xl font-bold text-neutral-900">
                                {product.formatted_price}
                              </span>
                            </div>
                          ) : (
                            <div></div>
                          )}
                          <div className="flex gap-3">
                            <Button asChild>
                              <Link href={`/products/${product.slug}`}>
                                View Details
                              </Link>
                            </Button>
                            {isProductInCart ? (
                              <Button asChild className="">
                                <Link href="/cart">GO TO CART</Link>
                              </Button>
                            ) : (
                              <Button
                                variant="outline"
                                onClick={handleAddToCart}
                              >
                                Add to Cart
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {!isLoading && products.length > 0 && (
              <div className="flex justify-start items-center gap-2 mt-12">
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

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
