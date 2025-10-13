"use client";

import { Product } from "@/data/api/products/types";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">DETAILS</h2>
      <div className="prose max-w-full *:!font-['Montserrat']" dangerouslySetInnerHTML={{ __html: product.product_details }} />

      {/* Features */}
      {product.features && product.features.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold">Features</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* What's Included */}
      {product.has_included && product.included && product.included.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold">What's Included</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
            {product.included.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Service Information */}
      {product.has_service_info && product.service_info && product.service_info.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold">Service Information</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            {product.service_info.map((service, index) => (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 underline hover:text-red-800"
              >
                {service.link_text}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Documentation */}
      {product.has_documentation && product.documentation && product.documentation.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold">Documentation</h3>
          <div className="flex flex-col mt-2 space-y-2">
            {product.documentation.map((doc, index) => (
              <a
                key={index}
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 underline hover:text-red-800"
              >
                {doc.link_text}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      {product.disclaimer && (
        <div className="mt-6">
          <h3 className="font-semibold">Disclaimer</h3>
          <div className="prose max-w-full text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: product.disclaimer }} />
        </div>
      )}

    </div>
  );
}