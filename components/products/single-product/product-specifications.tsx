"use client";

interface ProductSpecificationsProps {
  specifications: string;
}

export default function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">SPECIFICATIONS</h2>

      <div className="prose max-w-full *:!font-['Montserrat']" dangerouslySetInnerHTML={{ __html: specifications }} />
    </div>
  );
}