"use client";

import Hero from "@/components/products/hero";
import Navigation from "@/components/common/navigation";
import Footer from "@/components/common/footer";

import { useState, useMemo } from "react";
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
import { dummyProducts } from "@/data/dummy/products";
import { productCatalogs } from "@/data/dummy/catalogs";
import { Filter, Search } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS_PER_PAGE = 5;

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    []
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSortedProducts = useMemo(() => {
    let products = dummyProducts.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategories.length > 0) {
      products = products.filter((p) =>
        selectedCategories.includes(p.catalog.title)
      );
    }

    if (selectedSubCategories.length > 0) {
      products = products.filter((p) =>
        selectedSubCategories.includes(p.catalog.subCategory.title)
      );
    }

    if (sortOption === "name-asc") {
      products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      products.sort((a, b) => b.name.localeCompare(a.name));
    }

    return products;
  }, [searchTerm, sortOption, selectedCategories, selectedSubCategories]);

  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / PRODUCTS_PER_PAGE
  );
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const availableSubCategories = useMemo(() => {
    if (selectedCategories.length === 0) {
      return [];
    }
    return productCatalogs
      .filter((catalog) => selectedCategories.includes(catalog.title))
      .flatMap((catalog) => catalog.subcategories);
  }, [selectedCategories]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSubCategoryChange = (subCategory: string) => {
    setSelectedSubCategories((prev) =>
      prev.includes(subCategory)
        ? prev.filter((s) => s !== subCategory)
        : [...prev, subCategory]
    );
  };

  const Sidebar = () => (
    <div className="flex flex-col gap-6 lg:sticky lg:top-24">
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {productCatalogs.map((catalog) => (
            <div key={catalog.title}>
              <label className="flex items-center space-x-2">
                <input
                  className="accent-red-600"
                  type="checkbox"
                  checked={selectedCategories.includes(catalog.title)}
                  onChange={() => handleCategoryChange(catalog.title)}
                />
                <span>{catalog.title}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      {availableSubCategories.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Sub-Categories</h3>
          <div className="space-y-2">
            {availableSubCategories.map((sub) => (
              <div key={sub.title}>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="accent-red-600"
                    checked={selectedSubCategories.includes(sub.title)}
                    onChange={() => handleSubCategoryChange(sub.title)}
                  />
                  <span>{sub.title}</span>
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
          <div className="hidden lg:block w-1/4">
            <Sidebar />
          </div>
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between flex-wrap items-center gap-4 mb-8">
              <div className="relative min-w-1/2 flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                <Select onValueChange={setSortOption} defaultValue={sortOption}>
                  <SelectTrigger className="w-[180px] border-border shadow-none">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {paginatedProducts?.length > 0 ? (
                paginatedProducts.map((product, index) => (
                  <motion.div
                    key={product.slug + index}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-0 rounded-lg p-0 flex items-center flex-col sm:flex-row gap-8 relative"
                  >
                    {product.sustainable && (
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
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="object-cover rounded-lg aspect-square"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm text-neutral-500">
                        {product.catalog.title}
                      </p>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-neutral-600 mt-2">
                        {product.lineCamp2Desc}
                      </p>
                      <div className="mt-4">
                        <h4 className="font-semibold">Features:</h4>
                        <ul className="list-disc marker:text-red-400 list-inside text-neutral-600">
                          {product.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-4">
                        <Link href={`/products/${product.slug}`} passHref>
                          <Button>View Product</Button>
                        </Link>
                        <Button variant="outline" className="w-fit">
                          Request a Quote
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-neutral-400/80">No Products Found</p>
              )}
            </div>

            <div className="flex justify-start items-center mt-8 space-x-4">
              <Button
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
