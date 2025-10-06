"use client";

interface ProductSpecificationsProps {
  specifications: string;
}

export default function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
  return (
    <div className="prose max-w-full *:!font-['Montserrat']" dangerouslySetInnerHTML={{ __html: specifications }} />
  );
}