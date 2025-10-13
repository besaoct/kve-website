'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Product } from "@/data/api/products/types";
import { toast } from "sonner";
import Image from "next/image";

interface ProductInfoProps {
  product: Product;
  partnerText: string;
}

export default function ProductInfo({ product, partnerText }: ProductInfoProps) {
  const { cartItems, addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} has been added to your cart.`);
  };

  const isProductInCart = cartItems.some(item => item.product.id === product.id);

  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          {product.is_sustainable && (
            <Image
              src="/images/icons/leaf.svg"
              alt="Sustainable"
              width={24}
              height={24}
            />
          )}
        </div>
        {product.sku && <p className="text-gray-500">SKU: {product.sku}</p>}

        <div className="flex flex-wrap gap-2 my-4">
          {product.input_types?.map((type) => (
            <span key={type} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              Input: {type}
            </span>
          ))}
          {product.output_types?.map((type) => (
            <span key={type} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Output: {type}
            </span>
          ))}
        </div>

        <p className="mt-4 text-lg text-gray-700">{product.short_description}</p>

        <div className="mt-6">
          {product.price && (
            <>
              <p className="text-gray-500">MSRP</p>
              <p className="text-2xl font-bold">{product.formatted_price}</p>
            </>
          )}
          
          {/* {product.has_partner && product.partner ? (
            <p className="text-sm text-gray-500 mt-1">
              {product.partner.label}{" "}
              <Link href={product.partner.link} className="underline text-red-600">
                Sign in to view your price
              </Link>
            </p>
          ) : (
            <p className="text-sm text-gray-500 mt-1">
              {partnerText}{" "}
              <Link href="#" className="underline text-red-600">
                Sign in to view your price
              </Link>
            </p>
          )} */}

             <p className="text-sm text-gray-500 mt-1">
      
              <Link href="/preview" className="underline text-red-600">
                   Try In Your Space
              </Link>
            </p>

          <div className="mt-6 w-full flex items-center gap-4 overflow-x-auto scrollbar-hide">
            {/* <Button asChild className=" bg-[#D2A564] hover:bg-[#D2A564] text-white text-lg py-6 rounded-xl">
              <Link href="/preview">TRY IN YOUR SPACE</Link>
            </Button> */}
                   <Button asChild className=" bg-[#D2A564] hover:bg-[#D2A564] text-white text-lg py-6 rounded-xl">
              <Link href="/contact">Request Quote</Link>
            </Button>
            {isProductInCart ? (
              <Button asChild className=" bg-gray-800 hover:bg-gray-900 text-white text-lg py-6 rounded-xl">
                <Link href="/cart">GO TO CART</Link>
              </Button>
            ) : (
              <Button
                className=" bg-red-600 hover:bg-red-700 text-white text-lg py-6 rounded-xl"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
