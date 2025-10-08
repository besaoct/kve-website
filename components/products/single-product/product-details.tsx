"use client";

import { Product } from "@/data/api/products/types";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {

  
  return (
       <div>
      <h2 className="text-2xl font-bold">DETAILS</h2>
    <div className="prose max-w-full *:!font-['Montserrat']" dangerouslySetInnerHTML={{ __html: product.product_details }} />

 {/* Service Information */}
      {/* <h3 className="mt-6 font-semibold">Service Information</h3>
      <div className="flex flex-wrap gap-4 mt-2">
        {product.service.map((s, i) => (
          <a
            key={i}
            href={s.href}
            className="text-red-600 underline hover:text-red-800"
          >
            {s.label}
          </a>
        ))}
      </div> */}

      {/* What's Included */}
      {/* <h3 className="mt-6 font-semibold">What's Included</h3>
      <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
        {product.included.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul> */}

      {/* Documentation */}
      <h3 className="mt-6 font-semibold">Documentation</h3>
      {/* <div className="flex flex-col mt-2 space-y-2">
        {product.documentation.map((doc, i) => (
          <a
            key={i}
            href={doc.href}
            className="text-red-600 underline hover:text-red-800"
          >
            {doc.label}
          </a>
        ))}
      </div> */}

    </div>
  );
}