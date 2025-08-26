"use client";

import Image from "next/image";

interface PopularItem {
  name: string;
  code: string;
  image: string;
}

interface ProductPopularProps {
  items: PopularItem[];
}

export default function ProductPopular({ items }: ProductPopularProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div
          key={i}
          className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition"
        >
          <Image src={item.image} alt={item.name} width={500} height={500} className="mx-auto object-cover" />
          <p className="font-medium mt-4">{item.name}</p>
          <p className="text-gray-500">{item.code}</p>
        </div>
      ))}
    </div>
  );
}
