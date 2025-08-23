"use client"
import React, { useState } from "react";

const disclaimerWarningUrl = "https://www.P65Warnings.ca.gov";

const specsItems = [
  "POWER MIG® 220 AC/DC Multi-Process Welder",
  "Caliber 17 Flexible-Head TIG Torch 12.5 ft. (4.0 m)",
  "Work Cable and Clamp Assembly 10 ft. (3.0 m)",
  "Stick Electrode Holder and Lead Assembly 10 ft. (3.0 m)",
  "Foot Amptrol",
  "240V to 120V Power Cord Adapter 20 in. (0.5m)",
  "Adjustable Gas Regulators and Hose",
];

const includesItems = [
  "Caliber® 17/18/26 Series TIG Torch Expendables Kit - 0.040\"-3/32\" | KP4760-MD",
  "Magnum® PRO 175L Welding Guns - POWER MIG® 220, 10 ft. (3 m) | K4529-1",
  "Inner Wire Guide - .045 | KP2531-2",
  "Magnum® PRO 100L & 175L Gasless Nozzle | KP3084-1",
  "Caliber® 17 Series TIG Torch Ready Pak - Flexible, 12.5 ft. (3.8 m) | K5339-17F-1",
  "Inner Wire Guide - .025-.035 Steel | KP2531-1",
  "Drive Roll - .025-.030 in (.6-.8 mm) Smooth | KP2529-1",
  "Drive Roll - .035 in (.9 mm) Smooth | KP2529-2",
  "Drive Roll - .030-.045 in (.8-1.2 mm) Knurled | KP2529-3",
  "Model 601-Ar5-30-580 Single-Stage Flowgauge Regulator | 3000369",
  "Foot Amptrol™ - 25 ft (7.6m) (6 pin) | K870",
  "SuperArc® L-56® MIG (GMAW) Wire | ED030631",
  "Copper Plus® Contact Tip - 350A, Tapered, .030 in (0.8 mm) - 10/pack | KP2744-030T",
  "Copper Plus® Contact Tip - 350A, Tapered, .025 in (0.6 mm) - 10/pack | KP2744-025T",
  "Copper Plus® Contact Tip - 350A, Tapered, .035 in (0.9 mm) - 10/pack | KP2744-035T",
];

const docLinks = [
  { text: "POWER MIG 220 AC/DC Spec Sheet", icon: "📄" },
  { text: "Power MIG 220 Brochure", icon: "📄" },
];

const youMayNeedProducts = [
  {
    imageUrl: '/images/products/product1.jpg',
    name: 'Portable Welding Table and Workbench',
    sku: 'K5334-1'
  },
  {
    imageUrl: '/images/products/product2.jpg',
    name: 'Magnum® PRO 150SG Spool Gun',
    sku: 'K5471-1'
  }
];

const specifications = [
  { label: 'Phase 1: Input Voltage #1 (Voltage/Phase/Hertz)', value: '120V' },
  { label: 'Phase 1: Rated Output #1A (Current/Voltage/Duty Cycle)', value: '125A/15/40%' },
  { label: 'Phase 1: Rated Output #1B (Current/Voltage/Duty Cycle)', value: '85A/23.4V/40%' },
  { label: 'Phase 1: Rated Output #1C (Current/Voltage/Duty Cycle)', value: '95A/18.8V/40%' },
  { label: 'Phase 1: Input Current at Max Rated Ouput #1 (Current)', value: '21.4A' },
  { label: 'Phase 1: Input Voltage #2 (Voltage/Phase/Hertz)', value: '230V' },
  { label: 'Phase 1: Rated Output #2A (Current/Voltage/Duty Cycle)', value: '210A/18.4V/20%' },
  { label: 'Phase 1: Rated Output #2B (Current/Voltage/Duty Cycle)', value: '200A/28V/15%' },
  { label: 'Phase 1: Rated Output #2C (Current/Voltage/Duty Cycle)', value: '230A/25.5V/15%' },
  { label: 'Phase 1: Input Current at MAX Rated Output #2 (Current)', value: '32.5A' },
];

const productDimensions = [
  { label: 'Dimensions (H x W x D)', value: '15 in x 11 in x 24 in (381 mm x 280 mm x 610 mm)' },
  { label: 'Net Weight', value: '51 lbs (23 kg)' },
];

const generalSpecifications = [
  { label: 'Machines Processes', value: 'Stick (SMAW)\nFlux-Cored (FCAW)\nTIG (GTAW)\nMIG (GMAW)' },
  { label: 'Number of Operators per Machine', value: '1' },
  { label: 'Input Voltage', value: '120V/230V' },
  { label: 'Input Current', value: '14.3' },
  { label: 'Input Hertz', value: '60' },
  { label: 'Input Phase', value: '1' },
  { label: 'Output Range', value: '20A-230A' },
];

const machineTechnologies = [
  { label: 'Machines Communication Technology', value: 'digital' },
  { label: 'Work Lead Connector Type', value: 'Dinse' },
  { label: 'Spool Gun Compatible (Duty)', value: 'Light' },
];

const connections = machineTechnologies;

const wireFeedingSpecs = [
  { label: 'Number of driven rolls', value: '1 roll' },
  { label: 'Configuration', value: 'Single' },
  { label: 'UI type', value: 'TFT - Graphic' },
  { label: 'Feedhead Configuration', value: 'Single' },
  { label: 'Wire Configuration', value: 'Single' },
  { label: 'CoredWireSizeRange', value: '.035 - .045 in (0.9 - 1.2 mm)' },
  { label: 'SolidWireSize', value: '.035 - .045 in (0.9 - 1.2 mm)' },
  { label: 'Wire Feed Speed Range (IPM)', value: '50-700' },
];

const applications = [
  { label: 'Typical Application', value: 'Automotive\nBrewery\nDistillery\nGeneral Fabrication\nMaintenance & Repair\nRepair Welding' },
];

const warranty = [
  { label: 'Warranty', value: '3 Years' },
];

const ProductCard = ({ imageUrl, name, sku }: { imageUrl: string; name: string; sku: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-48 h-48 object-contain mb-4"
        onError={(e) => { 
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = "https://placehold.co/200x200/E0E0E0/A0A0A0?text=No+Image"; 
        }}
      />
      <p className="font-semibold text-sm mb-1">{name}</p>
      <p className="text-gray-600 text-xs">{sku}</p>
    </div>
  );
};

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("details");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveTab(sectionId);
  };

  return (
    <div className="min-h-screen bg-white py-12 text-gray-900 font-sans text-base leading-relaxed">
      {/* Tabs navigation */}
      <nav className="flex justify-center gap-14 border-b border-gray-300 px-24 mb-10">
        {[
          { id: "details", label: "DETAILS" },
          { id: "youmay", label: "YOU MAY ALSO NEED" },
          { id: "specs", label: "SPECIFICATIONS" },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            aria-selected={activeTab === id}
            className={`uppercase font-bold text-xs tracking-wide pb-3 transition-colors ${
              activeTab === id
                ? "border-b-[3.5px] border-[#b02024] text-[#b02024]"
                : "border-b-[3.5px] border-transparent text-gray-900 hover:text-[#b02024] hover:border-[#b02024]"
            }`}
            role="tab"
            type="button"
          >
            {label}
          </button>
        ))}
      </nav>

      {/* All content sections */}
      <div className="max-w-[1010px] mx-auto px-24">
        {/* Details section */}
        <div id="details" className="mb-16">
          <div className="flex gap-16 mb-16">
              {/* Left content */}
              <div className="flex-1">
                <h3 className="text-xs font-bold uppercase mb-6 tracking-wider">DETAILS</h3>
                <p className="mb-6 text-sm max-w-[600px]">
                  The POWER MIG 220 AC/DC multi-process welder is a reliable, easy-to-use machine for the general fabricator, small contractor, or repair personnel. The sleek, rugged, and solid ergonomic design with multiple lift points maximizes mobility around the shop, and user-friendly technology makes the setup process & selection of weld settings incredibly simple. Take on any job with MIG, AC/DC TIG, Stick, or Flux-Cored with the versatile POWER MIG 220 AC/DC welder.
                </p>

                <h4 className="text-sm font-semibold mb-3">Features</h4>
                <ul className="list-disc list-inside mb-6 max-w-[600px] space-y-2 text-sm">
                  <li><strong>Multi-Process Capable</strong> - Welds MIG, Flux-Cored, Stick, and AC/DC TIG.</li>
                  <li><strong>Dual Input Voltage</strong> - 120V and 230V inputs so you can plug into any common power supply.</li>
                  <li><strong>Ergonomic Case</strong> - Sleek and robust case design with multiple lift points for ease of mobility around the shop.</li>
                  <li><strong>Built-in TIG Solenoid and Foot Pedal Adapter</strong> - The POWER MIG 220 AC/DC welder is designed to accept a TIG torch, so no installation is required.</li>
                  <li><strong>Robust and Reliable Wire Drive</strong> - Ensures proper and consistent feeding for optimal welding experience.</li>
                  <li><strong>Ready.Set.Weld® Technology</strong> - Simplifies setup by recommending optimal welding parameters for each welding procedure.</li>
                  <li><strong>ArcFX® Technology</strong> - Provides instant visual feedback on how settings affect the weld outcome.</li>
                  <li><strong>Memory Capability</strong> - Easily recall saved settings to get welding faster.</li>
                  <li><strong>Lightweight and Portable</strong> - Only 51 lbs.</li>
                </ul>

                <h4 className="text-xs font-bold uppercase mb-4">Disclaimers</h4>
                <p className="text-xs max-w-[600px]">
                  <span className="inline-block mr-1 text-yellow-600" aria-label="Warning">⚠️</span>
                  Warning - Cancer and Reproductive Harm -{" "}
                  <a
                    href={disclaimerWarningUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-red-600"
                  >
                    www.P65Warnings.ca.gov
                  </a>
                </p>
              </div>

              {/* Right content */}
              <div className="w-80">
                <div className="bg-gray-100 p-6 space-y-6 text-xs text-gray-700">
                  {/* Service Information */}
                  <div>
                    <h4 className="font-semibold mb-3 uppercase">Service Information</h4>
                    <ul>
                      <li className="mb-1 text-red-600 cursor-pointer">Operator Manual Search</li>
                      <li className="mb-1 text-red-600 cursor-pointer">Shop Service Parts</li>
                      <li className="mb-1 text-red-600 cursor-pointer">Warranty</li>
                    </ul>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h4 className="font-semibold mb-3 uppercase">What's Included</h4>
                    {/* First section - Black text with red bullets */}
                    <ul className="list-disc list-inside space-y-2 text-black marker:text-red-600 marker:text-sm mb-4">
                      {specsItems.map((item, index) => (
                        <li key={index} className="text-black">
                          {item}
                        </li>
                      ))}
                    </ul>
                    {/* Second section - Red text with black bullets */}
                    <ul className="list-disc list-inside space-y-2 text-red-600 marker:text-black marker:text-sm">
                      {includesItems.map((item, index) => {
                        const parts = item.split("|");
                        return (
                          <li key={index} className="text-red-600">
                            <span>{parts[0].trim()} </span>
                            {parts[1] && (
                              <span className="text-red-600 font-mono">{`| ${parts[1].trim()}`}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Documentation */}
                  <div>
                    <h4 className="font-semibold mb-3 uppercase">Documentation</h4>
                    <ul className="space-y-2 text-red-700">
                      {docLinks.map((doc, i) => (
                        <li key={`doc-${i}`} className="flex items-center gap-2 cursor-pointer">
                          <span>{doc.icon}</span>
                          <span>{doc.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
        
        {/* You May Also Need section */}
        <div id="youmay" className="mb-16">
          <h3 className="text-xl font-bold mb-6">You may also need</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youMayNeedProducts.map((product, index) => (
              <ProductCard
                key={index}
                imageUrl={product.imageUrl}
                name={product.name}
                sku={product.sku}
              />
            ))}
          </div>
        </div>
        
        {/* Specifications section */}
        <div id="specs" className="mb-16">
          <h3 className="text-xl font-bold mb-6 font-noto-sans-bold">Specifications</h3>
              <div className="bg-white">
                <h4 className="text-base font-bold mb-6 font-noto-sans-bold">Machine inputs & outputs</h4>
                <div className="space-y-2">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 
                        ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                    >
                      <span className="text-gray-700 text-xs sm:text-sm w-full sm:w-1/2 text-left font-noto-sans">
                        {spec.label}
                      </span>
                      <span className="text-gray-800 text-xs sm:text-sm w-full sm:w-1/2 text-left sm:text-right mt-1 sm:mt-0 font-noto-sans">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="my-8 border-t-2 border-gray-400" />
            </div>
            
            {/* Product Weights & Dimensions section */}
            <div className="mb-16">
              <h3 className="text-base font-bold mb-6 font-noto-sans-bold">Product Weights & Dimensions</h3>
              <div className="space-y-2">
                {productDimensions.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 
                      ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <span className="text-gray-700 text-xs sm:text-sm w-full sm:w-1/2 font-noto-sans">
                      {spec.label}
                    </span>
                    <span className="text-gray-800 text-xs sm:text-sm w-full sm:w-1/2 text-left sm:text-right mt-1 sm:mt-0 whitespace-pre-line font-noto-sans">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <hr className="my-8 border-t-2 border-gray-400" />
            </div>
            
            {/* General Specification section */}
            <div className="mb-16">
              <h3 className="text-base font-bold mb-6 font-noto-sans-bold">General Specification</h3>
              <div className="space-y-2">
                {generalSpecifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 
                      ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <span className="text-gray-700 text-xs sm:text-sm w-full sm:w-1/2 font-noto-sans">
                      {spec.label}
                    </span>
                    <span className="text-gray-800 text-xs sm:text-sm w-full sm:w-1/2 text-left sm:text-right mt-1 sm:mt-0 whitespace-pre-line font-noto-sans">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <hr className="my-8 border-t-2 border-gray-400" />
            </div>
            
            {/* Machine Technologies & Connections section */}
            <div className="mb-16">
              <h3 className="text-base font-bold mb-6 font-noto-sans-bold">Machine Technologies & Connections</h3>
              <div className="space-y-2">
                {machineTechnologies.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 
                      ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <span className="text-gray-700 text-xs sm:text-sm w-full sm:w-1/2 font-noto-sans">
                      {spec.label}
                    </span>
                    <span className="text-gray-800 text-xs sm:text-sm w-full sm:w-1/2 text-left sm:text-right mt-1 sm:mt-0 font-noto-sans">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <hr className="my-8 border-t-2 border-gray-400" />
            </div>
            

            
            {/* Wire Feeding Specifications section */}
            <div className="mb-16">
              <h3 className="text-xs font-bold mb-6 font-noto-sans-bold">Wire Feeding Specifications</h3>
              <div className="space-y-2">
                {wireFeedingSpecs.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 
                      ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <span className="text-gray-700 text-xs sm:text-sm w-full sm:w-1/2 font-noto-sans">
                      {spec.label}
                    </span>
                    <span className="text-gray-800 text-xs sm:text-sm w-full sm:w-1/2 text-left sm:text-right mt-1 sm:mt-0 font-noto-sans">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <hr className="my-8 border-t-2 border-gray-400" />
            </div>
            
            {/* Application section */}
            <div className="mb-16">
              <h3 className="text-base font-bold mb-6 font-noto-sans-bold">Application</h3>
              <div className="space-y-2">
                {applications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 
                      ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <span className="text-gray-700 text-xs sm:text-sm w-full sm:w-1/2 font-noto-sans">
                      {spec.label}
                    </span>
                    <span className="text-gray-800 text-xs sm:text-sm w-full sm:w-1/2 text-left sm:text-right mt-1 sm:mt-0 whitespace-pre-line font-noto-sans">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <hr className="my-8 border-t-2 border-gray-400" />
            </div>
            
            {/* Warranty section */}
            <div>
              <h3 className="text-base font-bold mb-6 font-noto-sans-bold">Warranty</h3>
              <div className="space-y-2">
                {warranty.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 
                      ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <span className="text-gray-700 text-xs sm:text-sm w-full sm:w-1/2 font-noto-sans">
                      {spec.label}
                    </span>
                    <span className="text-gray-800 text-xs sm:text-sm w-full sm:w-1/2 text-left sm:text-right mt-1 sm:mt-0 font-noto-sans">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
        </div>
      </div>
    </div>
  );
}