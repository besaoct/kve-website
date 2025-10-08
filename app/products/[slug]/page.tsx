"use client";
import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Navigation from "@/components/common/navigation";
import Footer from "@/components/common/footer";
import ProductImages from "@/components/products/single-product/product-images";
import ProductInfo from "@/components/products/single-product/product-info";
import ProductTabs from "@/components/products/single-product/product-tabs";
import ProductDetails from "@/components/products/single-product/product-details";
import ProductAccessories from "@/components/products/single-product/product-accessories";
import ProductSpecifications from "@/components/products/single-product/product-specifications";
import ProductPopular from "@/components/products/single-product/product-popular";
import ProductRelated from "@/components/products/single-product/product-related";
import { getProduct} from "@/data/api/products";
import type { Product } from "@/data/api/products/types";
import { IMAGE_BASE_URL } from "@/data/api/config";



// Dummy data for parts of the page that are not yet supported by the API
const dummyProductData = {
  partnerText: "KVE Business Partner?",
  accessories: [
    { name: "Utility Cart (150 cu ft Bottle Capacity)", code: "K520", image: "https://dummyimage.com/200x200/000/fff&text=K520" },
  ],
  consumables: [
    { name: "Copper Plus® Contact Tip - 350A, Tapered, .025 in (0.6 mm) - 10/pack", code: "KP2744-025T", image: "https://dummyimage.com/200x200/000/fff&text=KP2744-025T" },
  ],
  relatedModels: [
    { name: "POWER MIG 140 MP", description: "POWER MIG® 140 MP® Multi-Process Welder", code: "K4498-1", msrp: "MSRP", price: "₹ 1,139.99", image: "https://dummyimage.com/200x200/000/fff&text=K4498-1" },
  ],
};

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        // const products = await getProducts({ search: slug as string, per_page: 1 });
        // if (products.length === 0) {
        //   notFound();
        // }
        const detailedProduct = await getProduct(slug as string);
        console.log("Detailed product from component:", detailedProduct);
        setProduct(detailedProduct);
      } catch (err) {
        setError("Failed to fetch product data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!product) {
    return notFound();
  }

  const tabs = [
    { key: "details", label: "Details" },
    { key: "specs", label: "Specifications" },
    { key: "need", label: "You May Also Need" },
    { key: "consumables", label: "Popular" },
    { key: "models", label: "Related Models" },
  ];
  
  const getFullImageUrl = (path: string) => path.startsWith('http') ? path : IMAGE_BASE_URL + path;

  const productImages = product.images.map(img => getFullImageUrl(img.image_path));


  const firstImage = productImages.length > 0 ? productImages[0] : 'https://dummyimage.com/600x600/e0e0e0/000&text=No+Image';


  console.log("product details---------:", product);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-6 py-10">
          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Images */}
            <ProductImages
              images={productImages}
              selectedImage={selectedImage || firstImage}
              onImageSelect={setSelectedImage}
            />

            {/* Right: Info */}
            <ProductInfo
              product={product}
              partnerText={dummyProductData.partnerText}
            />
          </div>

          {/* Tabs */}
          <ProductTabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "details" && <ProductDetails details={product.product_details} />}
            {activeTab === "specs" && <ProductSpecifications specifications={product.specifications} />}
            {activeTab === "need" && <ProductAccessories accessories={dummyProductData.accessories} />}
            {activeTab === "consumables" && <ProductPopular items={dummyProductData.consumables} />}
            {activeTab === "models" && <ProductRelated models={dummyProductData.relatedModels} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}