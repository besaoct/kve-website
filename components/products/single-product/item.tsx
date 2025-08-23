"use client"
import React, { useState } from "react";

const IMAGES = [
  "/images/item/item.jpg",
  "/images/item/item2.jpg"
];

const THUMBS = [
  "/images/item/item.jpg",
  "/images/item/item2.jpg"
];

const ICONS = {
  acdc: "https://via.placeholder.com/33x33/000000/FFFFFF?text=AC/DC",
  cccv: "https://via.placeholder.com/33x33/000000/FFFFFF?text=CC/CV",
  phase: "https://via.placeholder.com/33x33/000000/FFFFFF?text=1PH"
};

export default function item() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="bg-white font-sans text-gray-800 min-h-screen w-full">
      {/* Breadcrumbs */}
      <nav className="text-[17px] font-semibold mt-6 mb-10 px-8 text-gray-900 flex flex-wrap gap-x-1">
        <span>Home</span>
        <span>&gt;</span>
        <span>Products</span>
        <span>&gt;</span>
        <span>Equipment</span>
        <span>&gt;</span>
        <span>Welding Equipment</span>
        <span>&gt;</span>
        <span>MIG</span>
        <span>&gt;</span>
        <span>POWER MIG® 220 AC/DC Multi-Process Welder</span>
      </nav>
      
      <div className="flex flex-row items-start px-8 gap-8">
        {/* Thumbnails - Extreme Left */}
        <div className="flex flex-col items-center ml-6">
          <button
            className="bg-white w-[60px] h-[40px] flex items-center justify-center mb-2 text-[28px] font-bold"
            disabled={selected === 0}
            onClick={() => setSelected(selected - 1)}
            aria-label="Up"
            tabIndex={0}
          >
            <span className="text-[#b02024]">{'\u25B2'}</span>
          </button>
          <div className="flex flex-col gap-2 mb-3">
            {THUMBS.map((thumb, i) => (
              <img
                key={i}
                src={thumb}
                alt={`Thumbnail ${i + 1}`}
                className={`w-[55px] h-[55px] rounded-md object-contain border-2 ${selected === i ? 'border-[#b02024] bg-[#fbf6f7]' : 'border-gray-300'} cursor-pointer`}
                onClick={() => setSelected(i)}
                tabIndex={0}
              />
            ))}
          </div>
          <button
            className="bg-white w-[60px] h-[40px] flex items-center justify-center mt-2 text-[28px] font-bold"
            disabled={selected === THUMBS.length - 1}
            onClick={() => setSelected(selected + 1)}
            aria-label="Down"
            tabIndex={0}
          >
            <span className="text-[#b02024]">{'\u25BC'}</span>
          </button>
        </div>

        {/* Main Image - Centered */}
        <div className="flex-1 flex justify-center items-start">
          <img
            src={IMAGES[selected]}
            alt="Main Product"
            className="w-[480px] h-[380px] object-contain"
          />
        </div>

        {/* Product info panel - Extreme Right */}
        <div className="w-[40%] mr-6 flex flex-col mt-2">
          <h1 className="text-[2.5rem] font-bold leading-tight text-[#1b1d1f] mb-2">
            POWER MIG® 220 AC/DC Multi-Process Welder
          </h1>
          <div className="text-[16px] text-gray-700 font-medium mb-6 mt-1">K5379-1</div>
          <div className="text-[17px] mb-6 mt-2">
            POWER MIG® 220 AC/DC multi-process welder is portable for pulsed MIG, Stick, AC/DC TIG, and Flux-Cored welding.
          </div>

          {/* EXACT icon row */}
          <div className="flex flex-row items-center gap-10 mb-7 mt-2">
            <div className="flex items-center space-x-1 text-[15px] font-medium text-gray-900">
              <span className="mr-1">Output</span>
              <img src={ICONS.acdc} alt="ACDC Output" className="h-[33px] w-auto" />
              <img src={ICONS.cccv} alt="CCCV Output" className="h-[33px] w-auto" />
            </div>
            <div className="flex items-center space-x-1 text-[15px] font-medium text-gray-900">
              <span className="mr-1">Input</span>
              <img src={ICONS.phase} alt="1 phase 60hz" className="h-[33px] w-auto" />
            </div>
          </div>

          <div className="bg-gray-100 rounded px-8 py-8 max-w-[420px] mt-4">
            <div className="text-[15px] font-semibold text-gray-700 mb-2">MSRP</div>
            <div className="text-[30px] font-semibold mb-3 text-[#1b1d1f]">
              USD <span className="font-bold text-[32px] text-[#b02024]">$3,749.99</span>
              <span className="text-[16px] align-super ml-2 text-gray-600">/EA</span>
            </div>
            <div className="text-[15px] text-gray-800 mb-4 mt-0 leading-relaxed">
              Lincoln Electric Business Partner?<br />
              <span className="text-[#b02024] underline font-medium cursor-pointer">
                Sign in to view your price
              </span>
            </div>
            <button className="w-[160px] bg-[#b02024] text-white text-[22px] font-semibold rounded mt-3 py-3 hover:bg-[#8a161c] cursor-pointer transition">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-gray-500 text-[13px] text-center mt-8 mb-6 italic">
        The image shown is for representation purposes only and may not reflect the actual product.
      </div>
    </div>
  );
}