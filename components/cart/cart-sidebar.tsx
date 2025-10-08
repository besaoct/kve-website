'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import CartIcon from './cart-icon';
import { useCart } from '@/context/cart-context';
import CartItem from './cart-item';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CartSidebar() {
  const { cartItems, cartCount, totalPrice } = useCart();

  return (
    <Sheet>
      <SheetTrigger>
        <CartIcon />
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({cartCount})</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col overflow-y-scroll">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            {cartItems.length > 0 ? (
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartItems.map(item => (
                  <li key={item.product.id} className="flex py-6">
                    <CartItem item={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>₹{totalPrice.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <SheetFooter className="mt-6">
                <Button asChild className="w-full">
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </SheetFooter>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or <Link href="/products" className="font-medium text-red-600 hover:text-red-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
