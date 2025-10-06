"use client";

interface ProductDetailsProps {
  details: string;
}

export default function ProductDetails({ details }: ProductDetailsProps) {

  
  return (
    <div className="prose max-w-full *:!font-['Montserrat']" dangerouslySetInnerHTML={{ __html: details }} />
  );
}