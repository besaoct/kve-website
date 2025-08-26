"use client";

interface ProductDetailsProps {
  details: {
    heading: string;
    description: string;
    features: string[];
    disclaimers: string[];
    service: { label: string; href: string }[];
    included: string[];
    documentation: { label: string; href: string }[];
  };
}

export default function ProductDetails({ details }: ProductDetailsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold">DETAILS</h2>
      <h3 className="text-xl font-semibold mt-2">{details.heading}</h3>
      <p className="text-gray-600 mt-4 whitespace-pre-line">
        {details.description}
      </p>

      {/* Key Features */}
      <h3 className="mt-6 font-semibold">KEY FEATURES</h3>
      <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
        {details.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      {/* Disclaimers */}
      <h3 className="mt-6 font-semibold">Disclaimers</h3>
      <ul className="list-disc ml-6 mt-2 text-yellow-700">
        {details.disclaimers.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      {/* Service Information */}
      <h3 className="mt-6 font-semibold">Service Information</h3>
      <div className="flex flex-wrap gap-4 mt-2">
        {details.service.map((s, i) => (
          <a
            key={i}
            href={s.href}
            className="text-red-600 underline hover:text-red-800"
          >
            {s.label}
          </a>
        ))}
      </div>

      {/* What's Included */}
      <h3 className="mt-6 font-semibold">What's Included</h3>
      <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
        {details.included.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>

      {/* Documentation */}
      <h3 className="mt-6 font-semibold">Documentation</h3>
      <div className="flex flex-col mt-2 space-y-2">
        {details.documentation.map((doc, i) => (
          <a
            key={i}
            href={doc.href}
            className="text-red-600 underline hover:text-red-800"
          >
            {doc.label}
          </a>
        ))}
      </div>
    </div>
  );
}
