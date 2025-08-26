"use client";
import { useState } from "react";
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

// ---------------- PRODUCT DATA ---------------- //
const productData = {
  name: "POWER MIG® 211i MIG Welder",
  sku: "K6080-1",
  description:
    "The POWER MIG® 211i MIG welder is a straightforward and dependable machine that is ideal for MIG and Flux-Cored welding.",
  rebate: "💲 REBATE | Get a Free VIKING 3350 Black Welding Helmet | K3034-4",
  price: "₹ 1,599.99 /EA",
  partnerText: "KVE Business Partner?",
  images: [
    "https://www.technosteer.in/eshop/wp-content/uploads/2024/10/product-jpeg-500x500-1.webp",
    "https://ch-delivery.lincolnelectric.com/api/public/content/e3b1276e2669439eb46c2836a363dfd1?v=5db9e59c&t=600x429",
    "https://ch-delivery.lincolnelectric.com/api/public/content/aaa39dbeb125406ea1ea574940bfa258?v=48e65b65&t=600x429",
    "https://ch-delivery.lincolnelectric.com/api/public/content/3548460bc8844e63b912a3c9ef37c3b3?v=6da33122&t=600x429",
    "https://ch-delivery.lincolnelectric.com/api/public/content/3bfeb815bdd54faca3d5b9489ed61b01?v=dee4a798&t=600x429",
  ],

  details: {
    heading: "SOLID, DEPENDABLE WELDING",
    description: `The POWER MIG® 211i MIG welder is a straightforward and dependable 
machine that’s ideal for MIG and flux-cored welding. This reliable diehard is your 
best friend on the farm, in the small shop, or for maintenance and repair work. 
The seven-segment display with basic knob controls and a simple three-step setup 
process gets you welding quickly – and when it’s time to move, the sleek case with 
multiple lift points make it extremely portable. If you're looking for an incredibly 
simple, reliable MIG welder that won't break the bank, the POWER MIG 211i MIG welder 
is ready to go to work for you.`,
    features: [
      "Simple user interface - Seven segment display with basic knob controls.",
      "Process Capabilities - MIG, Flux-Cored and Spool Gun.",
      "Dual Input Voltage - 120V and 230V inputs so you can plug into any common power supply.",
      "Ergonomic Case - Sleek and robust case design with multiple lift points for ease of mobility around the shop.",
      "Robust and Reliable Wire Drive - Ensures proper and consistent feeding for optimal welding experience.",
      "Lightweight and Portable - Only 41 lbs.",
    ],
    disclaimers: [
      "⚠️ Warning - Cancer and Reproductive Harm - www.P65Warnings.ca.gov",
    ],
    service: [
      { label: "Operator Manual Search", href: "#" },
      { label: "Shop Service Parts", href: "#" },
      { label: "Warranty", href: "#" },
    ],
    included: [
      "230V to 120V Power Cord Adapter",
      "Work Cable and Clamp",
      "Adjustable Gas Regulator and Hose",
      "Gas Nozzle",
      "Gun Cable Liner (pre-installed in gun)",
      "Spindle Adapter",
      "Sample 2 lb. (0.91 kg) Spool of SuperArc® L-56® Mild Steel MIG Wire (EDO30631)",
      "0.030-0.035 in. (0.8 - 0.9 mm) Drive Roll (Installed)",
      "0.030 - 0.045 in. (0.8 - 1.1 mm) Knurled Drive Rolls",
      "0.025 - 0.035 in. (0.6 - 0.9 mm) Wire Guide (Installed)",
      "Magnum® PRO 100L Welding Gun - 4-pin, 10 ft (3m) | K4528-1",
    ],
    documentation: [{ label: "Power MIG 211i Product Info", href: "#" }],
  },

  accessories: [
    { name: "Utility Cart (150 cu ft Bottle Capacity)", code: "K520", image: "https://dummyimage.com/200x200/000/fff&text=K520" },
    { name: "CanVAS™ Cover (Small)", code: "K2377-1", image: "https://dummyimage.com/200x200/000/fff&text=K2377-1" },
    { name: "Magnum® PRO 100SG Spool Gun - 4 Pin, 10 ft", code: "K3269-1", image: "https://dummyimage.com/200x200/000/fff&text=K3269-1" },
    { name: "Magnum® PRO 100L Welding Gun - 4 Pin, 10 ft", code: "K4528-1", image: "https://dummyimage.com/200x200/000/fff&text=K4528-1" },
    { name: "Drive Roll - .025-.030 in (.6-.8 mm) Smooth", code: "KP2529-1", image: "https://dummyimage.com/200x200/000/fff&text=KP2529-1" },
    { name: "Drive Roll - .035 in (.9 mm) Smooth", code: "KP2529-2", image: "https://dummyimage.com/200x200/000/fff&text=KP2529-2" },
    { name: "Drive Roll - .030-.045 in (.8-1.2 mm) Knurled", code: "KP2529-3", image: "https://dummyimage.com/200x200/000/fff&text=KP2529-3" },
  ],
  specifications: {
    inputsOutputs: [
      "Input Voltage: 120/1/60 & 230/1/60",
      "Rated Output (120V): MIG 95A/18.6V/60% | 75A/17.8V/100%",
      "Rated Output (230V): MIG 175A/22.8V/30% | 90A/18.6V/100%",
      "Input Current Max: 20A (120V), 22.5A (230V)",
    ],
    dimensions: "15.5 in x 10.75 in x 22 in (394 mm x 273 mm x 558 mm)",
    weight: "41 lbs (18.6 kg)",
    connections: [
      "IEC Rating: IP21S",
      "Output Range: MIG: 20–211A",
      "Communication Tech: Analog",
      "Work Lead Connector: Dinse",
      "Welding Gun Cable Assembly: Magnum PRO 100L",
    ],
  },
  consumables: [
    { name: "Copper Plus® Contact Tip - 350A, Tapered, .025 in (0.6 mm) - 10/pack", code: "KP2744-025T", image: "https://dummyimage.com/200x200/000/fff&text=KP2744-025T" },
    { name: "Copper Plus® Contact Tip - 350A, Tapered, .030 in (0.8 mm) - 10/pack", code: "KP2744-030T", image: "https://dummyimage.com/200x200/000/fff&text=KP2744-030T" },
    { name: "Copper Plus® Contact Tip - 350A, Tapered, .035 in (0.9 mm) - 10/pack", code: "KP2744-035T", image: "https://dummyimage.com/200x200/000/fff&text=KP2744-035T" },
    { name: "Copper Plus® Contact Tip - 350A, Tapered, .045 in (1.2 mm) - 10/pack", code: "KP2744-045T", image: "https://dummyimage.com/200x200/000/fff&text=KP2744-045T" },
    { name: "Magnum® PRO 100L & 175L Gas Nozzle - Flush, 3/8 in. ID", code: "KP3075-1-38F", image: "https://dummyimage.com/200x200/000/fff&text=KP3075-1-38F" },
    { name: "Magnum® PRO 100L & 175L Gasless Nozzle", code: "KP3084-1", image: "https://dummyimage.com/200x200/000/fff&text=KP3084-1" },
    { name: "Cable Liner .023-.035", code: "KP35-40-15", image: "https://dummyimage.com/200x200/000/fff&text=KP35-40-15" },
    { name: "Cable Liner .035-.045 in (0.9-1.2 mm) 15 ft (4.6 m)", code: "KP45-40-15", image: "https://dummyimage.com/200x200/000/fff&text=KP45-40-15" },
  ],
  relatedModels: [
    { name: "POWER MIG 140 MP", description: "POWER MIG® 140 MP® Multi-Process Welder", code: "K4498-1", msrp: "MSRP", price: "₹ 1,139.99", image: "https://dummyimage.com/200x200/000/fff&text=K4498-1" },
    { name: "POWER MIG 215 MPi", description: "POWER MIG® 215 MPi™ Multi-Process Welder", code: "K4876-1", msrp: "MSRP", price: "₹ 2,249.99", image: "https://dummyimage.com/200x200/000/fff&text=K4876-1" },
    { name: "POWER MIG 215 MPi - Aluminum One-Pak®", description: "POWER MIG® 215 MPi™ Multi-Process Welder Aluminum One-Pak®", code: "K4877-1", msrp: "MSRP", price: "₹ 2,699.99", image: "https://dummyimage.com/200x200/000/fff&text=K4877-1" },
  ],
};

// ---------------- PAGE ---------------- //
export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    { key: "details", label: "Details" },
    { key: "need", label: "You May Also Need" },
    { key: "specs", label: "Specifications" },
    {
      key: "consumables",
      label: "Popular",
    },
    { key: "models", label: "Related Models" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-6 py-10">
          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Images */}
            <ProductImages
              images={productData.images}
              selectedImage={selectedImage}
              onImageSelect={setSelectedImage}
            />

            {/* Right: Info */}
            <ProductInfo
              name={productData.name}
              sku={productData.sku}
              description={productData.description}
              rebate={productData.rebate}
              price={productData.price}
              partnerText={productData.partnerText}
            />
          </div>

          {/* Tabs */}
          <ProductTabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "details" && <ProductDetails details={productData.details} />}
            {activeTab === "need" && <ProductAccessories accessories={productData.accessories} />}
            {activeTab === "specs" && <ProductSpecifications specifications={productData.specifications} />}
            {activeTab === "consumables" && <ProductPopular items={productData.consumables} />}
            {activeTab === "models" && <ProductRelated models={productData.relatedModels} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}