"use client";

import Image from "next/image";

interface Accessory {
  name: string;
  code: string;
  image: string;
}

interface ProductAccessoriesProps {
  accessories: Accessory[];
}

export default function ProductAccessories({ accessories }: ProductAccessoriesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {accessories.map((a, i) => (
        <div
          key={i}
          className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition"
        >
          <Image src={a.image} alt={a.name} width={500} height={500} className="mx-auto object-cover" />
          <p className="font-medium mt-4">{a.name}</p>
          <p className="text-gray-500">{a.code}</p>
        </div>
      ))}
    </div>
  );
}
