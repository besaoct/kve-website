'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import type { CartItem } from '@/context/cart-context';

interface CartItemProps {
  item: CartItem;
}

const IMAGE_BASE_URL = "https://kve1.gitcsdemoserver.online/public/";
const getFullImageUrl = (path: string) => path.startsWith('http') ? path : IMAGE_BASE_URL + path;

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const imageUrl = item.product.primary_image_url 
    ? getFullImageUrl(item.product.primary_image_url) 
    : (item.product.images.length > 0 ? getFullImageUrl(item.product.images[0].image_path) : 'https://dummyimage.com/80x80/e0e0e0/000&text=No+Image');

  return (
    <div className="flex items-center gap-4 py-4">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={imageUrl}
          alt={item.product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={`/products/${item.product.slug}`}>{item.product.title}</a>
            </h3>
            <p className="ml-4">{item.product.formatted_price}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center gap-2">
            <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-2 border rounded">-</button>
            <p className="text-gray-500">Qty {item.quantity}</p>
            <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2 border rounded">+</button>
          </div>

          <div className="flex">
            <button
              type="button"
              onClick={() => removeFromCart(item.product.id)}
              className="font-medium text-red-600 hover:text-red-500"
            >
              <X className="h-4 w-4"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
