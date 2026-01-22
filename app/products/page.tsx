"use client";

import Hero from "@/components/products/hero";
import Navigation from "@/components/common/navigation";
import Footer from "@/components/common/footer";

import { useState, useEffect, useMemo, useCallback } from "react";
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

const ITEMS_PER_PAGE = 12;

function PageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Filter & UI state
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("created_at-desc");
  const [selectedCategories, setSelectedCategories] = useState<(number | string)[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<(number | string)[]>([]);
  const [selectedSegments, setSelectedSegments] = useState<(number | string)[]>([]);
  const [selectedSubSegments, setSelectedSubSegments] = useState<(number | string)[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
// Add this new state near your other states
const [isHydrated, setIsHydrated] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Data state
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Nav[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { cartItems, addToCart } = useCart();

  // Scroll to top when filters or page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, sortOption, selectedCategories, selectedSubCategories, selectedSegments, selectedSubSegments]);

  // Load hierarchy + all products once
  useEffect(() => {
    let isCancelled = false;

    const fetchAllData = async () => {
      try {
        setIsLoading(true);

        const categoriesData = await getNavbarHierarchy();
        if (!isCancelled) setCategories(categoriesData);

        const productsData = await getProducts({ per_page: 9000000000 });
        console.log("Fetched products length:", productsData.length);
        if (!isCancelled) {
          setAllProducts(productsData);
          setFilteredProducts(productsData);
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    };

    fetchAllData();

    return () => {
      isCancelled = true;
    };
  }, []);


// ── Sync filters from URL ── only when hierarchy is loaded ──────────────────
useEffect(() => {
  // Prevent running before we have real category data
  if (categories.length === 0) return;

  const params = new URLSearchParams(searchParams.toString());

  const parseParam = (key: string): (number | string)[] => {
    const val = params.get(key);
    if (!val) return [];
    return val.split(",").map(item => {
      const trimmed = item.trim();
      return /^\d+$/.test(trimmed) ? Number(trimmed) : trimmed;
    });
  };

  const catParams    = parseParam("categories");
  const subCatParams = parseParam("sub_categories");
  const segParams    = parseParam("segments");
  const subSegParams = parseParam("sub_segments");

// Apply values from URL (this is the important initial hydration)
  setSearchTerm(params.get("search") || "");
  setSortOption(params.get("sort") || "created_at-desc");
  setCurrentPage(Number(params.get("page")) || 1);

  setSelectedCategories(catParams);
  setSelectedSubCategories(subCatParams);
  setSelectedSegments(segParams);
  setSelectedSubSegments(subSegParams);

  // Now we're done hydrating → allow URL updates
  setIsHydrated(true);

}, [categories]);   // ← categories is important dependency


  // Client-side filtering + sorting
  const updateFilteredProducts = useCallback(() => {
    if (allProducts.length === 0) return;

    let result = [...allProducts];

    // Helper: normalize strings for comparison
    const normalize = (str: string | undefined) =>
      (str || "").toLowerCase().trim().replace(/\s+/g, " ");

    // Category filter (ID or name)
// Category filter — supports both ID and title matching
if (selectedCategories.length > 0) {
  result = result.filter((p) => {
    const catId    = p.category?.id;
    const catTitle = normalize(p.category?.title);

    return selectedCategories.some((sel) => {
      if (typeof sel === "number") {
        return catId === sel;
      }
      // string → fuzzy-ish title match
      const selNorm = normalize(sel.toString());
      return catTitle === selNorm ||      // exact match (most common case)
             catTitle.includes(selNorm) || // contains
             selNorm.includes(catTitle);   // user typed partial
    });
  });
}

    // Sub-category filter (ID or name)
    if (selectedSubCategories.length > 0) {
      result = result.filter((p) => {
        const subId = p.sub_category?.id;
        const subTitle = normalize(p.sub_category?.title);

        return selectedSubCategories.some((sel) => {
          if (typeof sel === "number") {
            return subId === sel;
          }
          const selNorm = normalize(sel.toString());
          return subTitle.includes(selNorm) || selNorm.includes(subTitle);
        });
      });
    }

    // Segment filter (ID or name)
    if (selectedSegments.length > 0) {
      result = result.filter((p) => {
        const segId = p.segment?.id;
        const segTitle = normalize(p.segment?.title);

        return selectedSegments.some((sel) => {
          if (typeof sel === "number") {
            return segId === sel;
          }
          const selNorm = normalize(sel.toString());
          return segTitle.includes(selNorm) || selNorm.includes(segTitle);
        });
      });
    }

    // Sub-segment filter (ID or name)
    if (selectedSubSegments.length > 0) {
      result = result.filter((p) => {
        const subSegId = p.sub_segment?.id;
        const subSegTitle = normalize(p.sub_segment?.title);

        return selectedSubSegments.some((sel) => {
          if (typeof sel === "number") {
            return subSegId === sel;
          }
          const selNorm = normalize(sel.toString());
          return subSegTitle.includes(selNorm) || subSegTitle.includes(selNorm);
        });
      });
    }

    // Search (title, short description + hierarchy titles)
    if (searchTerm.trim()) {
      const term = normalize(searchTerm);
      result = result.filter((p) => {
        const searchable = [
          p.title,
          p.short_description,
          p.category?.title,
          p.sub_category?.title,
          p.segment?.title,
          p.sub_segment?.title,
        ]
          .filter(Boolean)
          .map(normalize)
          .join(" ");
        return searchable.includes(term);
      });
    }

    // Sorting
    const [sortBy, sortDir] = sortOption.split("-") as [string, "asc" | "desc"];

    result.sort((a, b) => {
      let valA: any, valB: any;

      switch (sortBy) {
        case "title":
          valA = normalize(a.title);
          valB = normalize(b.title);
          break;
        case "price":
          valA = Number(a.price ?? 0);
          valB = Number(b.price ?? 0);
          break;
        case "created_at":
        default:
          valA = new Date(a.created_at ?? "1970-01-01").getTime();
          valB = new Date(b.created_at ?? "1970-01-01").getTime();
          break;
      }

      if (valA < valB) return sortDir === "asc" ? -1 : 1;
      if (valA > valB) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredProducts(result);
    // Reset to first page when filters change (but don't trigger URL update here)
  }, [
    allProducts,
    searchTerm,
    sortOption,
    selectedCategories,
    selectedSubCategories,
    selectedSegments,
    selectedSubSegments,
  ]);

  // Run filtering when dependencies change
  useEffect(() => {
    updateFilteredProducts();
  }, [updateFilteredProducts]);

  // Update URL (save only IDs for cleaner URLs)
  const updateURL = useCallback(() => {
    const params = new URLSearchParams();

    if (searchTerm) params.set("search", searchTerm);
    if (sortOption !== "created_at-desc") params.set("sort", sortOption);
    if (currentPage > 1) params.set("page", currentPage.toString());

    // Save only numeric IDs to URL
    if (selectedCategories.length > 0) {
      const ids = selectedCategories.filter((v) => typeof v === "number");
      if (ids.length > 0) params.set("categories", ids.join(","));
    }
    if (selectedSubCategories.length > 0) {
      const ids = selectedSubCategories.filter((v) => typeof v === "number");
      if (ids.length > 0) params.set("sub_categories", ids.join(","));
    }
    if (selectedSegments.length > 0) {
      const ids = selectedSegments.filter((v) => typeof v === "number");
      if (ids.length > 0) params.set("segments", ids.join(","));
    }
    if (selectedSubSegments.length > 0) {
      const ids = selectedSubSegments.filter((v) => typeof v === "number");
      if (ids.length > 0) params.set("sub_segments", ids.join(","));
    }

    const query = params.toString();
    router.replace(query ? `?${query}` : window.location.pathname, { scroll: false });
  }, [
    searchTerm,
    sortOption,
    currentPage,
    selectedCategories,
    selectedSubCategories,
    selectedSegments,
    selectedSubSegments,
    router,
  ]);

  // Update URL when any filter or pagination changes
useEffect(() => {
  if (!isHydrated) return;   // ← this line prevents clearing on first render

  updateURL();
}, [updateURL, isHydrated]);   // or keep your previous deps + isHydrated

  // Reset page when filters change (but not when pagination changes)
  useEffect(() => {
    if (searchTerm || sortOption !== "created_at-desc" || 
        selectedCategories.length > 0 || selectedSubCategories.length > 0 ||
        selectedSegments.length > 0 || selectedSubSegments.length > 0) {
      setCurrentPage(1);
    }
  }, [searchTerm, sortOption, selectedCategories, selectedSubCategories, selectedSegments, selectedSubSegments]);

  // Available dependent options
  const availableSubCategories = useMemo(() => {
    if (selectedCategories.length === 0) return [];
    return categories
      .filter((cat) => {
        if (typeof selectedCategories[0] === "number") {
          return selectedCategories.includes(cat.id);
        }
        const normTitle = cat.title.toLowerCase().trim();
        return selectedCategories.some((sel) =>
          normTitle.includes(sel.toString().toLowerCase().trim())
        );
      })
      .flatMap((cat) => cat.sub_categories || []);
  }, [selectedCategories, categories]);

  const availableSegments = useMemo(() => {
    if (selectedSubCategories.length === 0) return [];
    return availableSubCategories
      .filter((sub) => {
        if (typeof selectedSubCategories[0] === "number") {
          return selectedSubCategories.includes(sub.id);
        }
        const normTitle = sub.title.toLowerCase().trim();
        return selectedSubCategories.some((sel) =>
          normTitle.includes(sel.toString().toLowerCase().trim())
        );
      })
      .flatMap((sub) => sub.segments || []);
  }, [selectedSubCategories, availableSubCategories]);

  const availableSubSegments = useMemo(() => {
    if (selectedSegments.length === 0) return [];
    return availableSegments
      .filter((seg) => {
        if (typeof selectedSegments[0] === "number") {
          return selectedSegments.includes(seg.id);
        }
        const normTitle = seg.title.toLowerCase().trim();
        return selectedSegments.some((sel) =>
          normTitle.includes(sel.toString().toLowerCase().trim())
        );
      })
      .flatMap((seg) => seg.sub_segments || []);
  }, [selectedSegments, availableSegments]);

  // Handlers
  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategories((prev) => {
      const newSelection = prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev.filter((c) => typeof c === "number"), categoryId];
      setSelectedSubCategories([]);
      setSelectedSegments([]);
      setSelectedSubSegments([]);
      return newSelection;
    });
  };

  const handleSubCategoryChange = (subCategoryId: number) => {
    setSelectedSubCategories((prev) => {
      const newSelection = prev.includes(subCategoryId)
        ? prev.filter((s) => s !== subCategoryId)
        : [...prev.filter((s) => typeof s === "number"), subCategoryId];
      setSelectedSegments([]);
      setSelectedSubSegments([]);
      return newSelection;
    });
  };

  const handleSegmentChange = (segmentId: number) => {
    setSelectedSegments((prev) => {
      const newSelection = prev.includes(segmentId)
        ? prev.filter((s) => s !== segmentId)
        : [...prev.filter((s) => typeof s === "number"), segmentId];
      setSelectedSubSegments([]);
      return newSelection;
    });
  };

  const handleSubSegmentChange = (subSegmentId: number) => {
    setSelectedSubSegments((prev) =>
      prev.includes(subSegmentId)
        ? prev.filter((s) => s !== subSegmentId)
        : [...prev.filter((s) => typeof s === "number"), subSegmentId]
    );
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSubCategories([]);
    setSelectedSegments([]);
    setSelectedSubSegments([]);
    setSearchTerm("");
    setCurrentPage(1);
  };

  // ── Pagination logic ────────────────────────────────────────────────
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Ensure current page is valid
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // Sidebar component
  const Sidebar = () => (
    <div className="flex flex-col gap-6 lg:sticky lg:top-24">
      {(selectedCategories.length > 0 ||
        selectedSubCategories.length > 0 ||
        selectedSegments.length > 0 ||
        selectedSubSegments.length > 0) && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear All Filters
        </Button>
      )}

      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {categories.map((category) => (
            <div key={category.id}>
              <label className="flex items-start space-x-2 cursor-pointer">
                <input
                  className="accent-red-600"
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                />
                <span className="text-sm -mt-1 w-full gap-2 flex justify-start">
                  <span className="max-w-75 line-clamp-1">{category.title}</span>
                  <span>({category.products_count})</span>
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

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
                  <span className="text-sm -mt-1">{sub.title}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

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
        <div className="flex gap-8 lg:min-h-[calc(100vh-12rem)]">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-1/4 lg:sticky lg:top-19 h-fit">
            <div className="bg-white border lg:rounded-md lg:p-4 lg:max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin">
              <Sidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {/* Search + Sort + Mobile Filter */}
            <div className="flex justify-between flex-wrap items-center gap-4 mb-8">
              <div className="relative min-w-1/2 grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="lg:hidden">
                  <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline">
                        <Filter className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="top" className="h-screen flex flex-col gap-0">
                      <SheetHeader className="gap-0 border-b p-4">
                        <SheetTitle>Filter Products</SheetTitle>
                      </SheetHeader>
                      <div className="py-4 px-4 overflow-y-auto grow">
                        <Sidebar />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                <Select onValueChange={handleSortChange} value={sortOption}>
                  <SelectTrigger className="w-45 border-border shadow-none">
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

            {/* Results count + range */}
            <div className="mb-6 text-lg font-medium text-neutral-700">
              {isLoading ? (
                "Loading products..."
              ) : filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-2xl text-neutral-600 mb-6">
                    No products found matching your filters.
                  </p>
                  <Button onClick={clearFilters} size="lg">
                    Clear All Filters
                  </Button>
                </div>
              ) : (
                `Showing ${startIndex + 1}–${endIndex} of ${filteredProducts.length} product${
                  filteredProducts.length !== 1 ? "s" : ""
                }`
              )}
            </div>

            {/* Product list */}
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-red-600" />
              </div>
            ) : paginatedProducts.length === 0 ? null : (
              <div className="flex flex-col gap-8">
                {paginatedProducts.map((product, index) => {
                  const handleAddToCart = () => {
                    addToCart(product);
                    toast.success(`${product.title} has been added to your cart.`);
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
                              src="/placeholder.svg"
                              alt={product.title}
                              width={500}
                              height={300}
                              className="w-full h-auto rounded-lg object-cover"
                            />
                          )}
                        </Link>
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                            {product.category?.title || "PRODUCT"}
                          </div>

                          <Link href={`/products/${product.slug}`}>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-3 hover:text-red-600 transition-colors">
                              {product.title}
                            </h3>
                          </Link>

                          <p className="text-neutral-600 mb-4 line-clamp-2">
                            {product.short_description ||
                              "High-quality industrial equipment for professional use."}
                          </p>

                          {product.features && product.features.length > 0 && (
                            <div className="mb-4">
                              <h4 className="font-semibold text-sm mb-2">Features:</h4>
                              <ul className="pl-0 space-y-1 text-sm text-neutral-600">
                                {product.features.slice(0, 3).map((feature, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <svg
                                      className="shrink-0 text-neutral-500 mt-1"
                                      width="4"
                                      height="4"
                                      viewBox="0 0 4 4"
                                      fill="currentColor"
                                    >
                                      <circle cx="4" cy="4" r="4" />
                                    </svg>
                                    <span className="line-clamp-1">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

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
                            <div />
                          )}
                          <div className="flex gap-3">
                            <Button asChild>
                              <Link href={`/products/${product.slug}`}>
                                View Details
                              </Link>
                            </Button>
                            {isProductInCart ? (
                              <Button asChild>
                                <Link href="/cart">GO TO CART</Link>
                              </Button>
                            ) : (
                              <Button variant="outline" onClick={handleAddToCart}>
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

            {/* Pagination controls */}
            {!isLoading && filteredProducts.length > 0 && totalPages > 1 && (
              <div className="flex justify-center sm:justify-start items-center gap-4 mt-12">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                >
                  Previous
                </Button>

                <span className="text-sm text-neutral-600 px-4">
                  Page {currentPage} of {totalPages}
                </span>

                <Button
                  variant="outline"
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
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
  return <PageContent />;
}