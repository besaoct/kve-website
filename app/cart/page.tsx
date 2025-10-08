"use client";

import React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/common/navigation";
import Footer from "@/components/common/footer";
import { IMAGE_BASE_URL } from "@/data/api/config";

export default function CartPage() {
  const router = useRouter();
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto lg:p-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">My Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-start text-gray-600 text-lg">Your cart is empty. Add some items!</p>
          ) : (
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left side: Cart Items */}
              <div className="lg:w-3/4">
                <ul className="space-y-6">
                  {cartItems.map(({ product, quantity }) => (
                    <li
                      key={product.id}
                      className="flex flex-wrap gap-6 items-center bg-white border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={product.images.length > 0 ? `${IMAGE_BASE_URL}${product.images[0].image_path}` : 'https://dummyimage.com/150x150/e0e0e0/000&text=No+Image'}
                          alt={product.title}
                          width={150}
                          height={150}
                          className="w-full sm:w-36 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                          onClick={() => router.push(`/products/${product.slug}`)}
                        />
                      </div>
                      <div className="sm:flex-1 w-full">
                        <div className="flex justify-between items-start w-full">
                          <h3
                            onClick={() => router.push(`/products/${product.slug}`)}
                            className="text-lg font-semibold text-gray-900 hover:text-red-600 cursor-pointer"
                          >
                            {product.title}
                          </h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(product.id)}
                            className="text-red-600 hover:text-red-100"
                            aria-label={`Remove ${product.title} from cart`}
                          >
                            <Trash2 size={20} />
                          </Button>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-2 mt-1">{product.short_description}</p>
                        <div className="flex items-center gap-4 mt-4">
                          <span className="text-xl font-bold text-red-600">{product.formatted_price}</span>
                          <div className="flex items-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(product.id, quantity - 1)}
                            >
                              -
                            </Button>
                            <Input
                              type="number"
                              value={quantity}
                              onChange={(e) => {
                                const value = parseInt(e.target.value) || 1;
                                handleQuantityChange(product.id, value < 1 ? 1 : value);
                              }}
                              className="w-16 h-8 text-center mx-2"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(product.id, quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right side: Cart Totals */}
              <div className="lg:w-1/4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Cart Totals</h2>
                  <ul className="space-y-3">
                    <li className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>₹{totalPrice.toFixed(2)}</span>
                    </li>
                    <li className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span>Free</span>
                    </li>
                    <li className="flex justify-between text-gray-900 font-bold text-lg border-t pt-4 mt-2">
                      <span>Total</span>
                      <span>₹{totalPrice.toFixed(2)}</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button
                      onClick={() => router.push("/checkout")}
                      disabled={cartItems.length === 0}
                      className="w-full bg-red-600 hover:bg-red-700"
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
