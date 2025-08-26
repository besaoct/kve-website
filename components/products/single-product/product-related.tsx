"use client";

import Image from "next/image";

interface RelatedModel {
  name: string;
  description: string;
  code: string;
  msrp: string;
  price: string;
  image: string;
}

interface ProductRelatedProps {
  models: RelatedModel[];
}

export default function ProductRelated({ models }: ProductRelatedProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {models.map((model, i) => (
        <div
          key={i}
          className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition"
        >
          <Image src={model.image} alt={model.name} width={500} height={500} className="mx-auto object-cover" />
          <p className="font-medium mt-4">{model.name}</p>
          <p className="text-gray-500">{model.description}</p>
          <p className="text-gray-500">{model.code}</p>
          <div className="mt-4">
            <p className="text-gray-500">{model.msrp}</p>
            <p className="text-xl font-bold">{model.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
