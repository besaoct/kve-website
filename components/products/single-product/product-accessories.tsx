"use client";

import { Product } from "@/data/api/products/types";
import Image from "next/image";


interface ProductAccessoriesProps {
  accessories?: Product[];
}

export default function ProductAccessories({ accessories }: ProductAccessoriesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* {accessories?.map((a, i) => (
        <div
          key={i}
          className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition"
        >
          <Image src={a.primary_image_url || '/placeholder.svg'} alt={a.title} width={500} height={500} className="mx-auto object-cover" />
          <p className="font-medium mt-4">{a.title}</p>

        </div>
      ))} */}
    </div>
  );
}
