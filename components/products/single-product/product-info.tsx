"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductInfoProps {
  name: string;
  sku: string;
  description: string;
  rebate: string;
  price: string;
  partnerText: string;
}

export default function ProductInfo({
  name,
  sku,
  description,
  rebate,
  price,
  partnerText,
}: ProductInfoProps) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-gray-500">{sku}</p>

        <p className="mt-4 text-lg text-gray-700">{description}</p>

        <p className="mt-4 text-green-600 font-medium">{rebate}</p>

        <div className="mt-6">
          <p className="text-gray-500">MSRP</p>
          <p className="text-2xl font-bold">{price}</p>
          <p className="text-sm text-gray-500 mt-1">
            {partnerText}{" "}
            <Link href="#" className="underline text-red-600">
              Sign in to view your price
            </Link>
          </p>

          <div className="mt-6 w-full flex items-center gap-4 overflow-x-auto scrollbar-hide">
            <Button asChild className=" bg-[#D2A564] hover:bg-[#D2A564] text-white text-lg py-6 rounded-xl">
              <Link href="/preview">TRY IN YOUR SPACE</Link>
            </Button>
             <Button className=" bg-red-600 hover:bg-red-700 text-white text-lg py-6 rounded-xl">
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
