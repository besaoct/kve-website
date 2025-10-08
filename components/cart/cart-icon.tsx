'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/cart-context';

export default function CartIcon() {
  const { cartCount } = useCart();

  return (
    <div className="relative">
      <ShoppingCart className="h-6 w-6" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
          {cartCount}
        </span>
      )}
    </div>
  );
}
