'use client';

import { useState } from 'react';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/common/navigation';
import Footer from '@/components/common/footer';
import Image from 'next/image';
import { IMAGE_BASE_URL } from '@/data/api/config';

export default function CheckoutPage() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead Generation Form Submitted:", { ...formData, items: cartItems });
    // Here you would typically send the data to your backend or a CRM
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navigation />
        <div className="bg-gray-50">
          <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Thank You!</h1>
            <p className="mt-2 text-lg text-gray-600">Your request has been submitted. We will get back to you shortly.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto lg:p-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Checkout</h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty. Add some products to proceed.</p>
          ) : (
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Left Side: Lead Generation Form */}
              <Card className="shadow-sm py-6">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required onChange={handleInputChange} value={formData.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required onChange={handleInputChange} value={formData.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="KVE Solutions Inc." onChange={handleInputChange} value={formData.company} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 234 567 890" onChange={handleInputChange} value={formData.phone} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="123 Main St, Anytown, USA" onChange={handleInputChange} value={formData.address} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea id="message" placeholder="Any specific requirements or questions?" onChange={handleInputChange} value={formData.message} />
                    </div>
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-lg py-6">
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Right Side: Order Summary */}
              <div className="lg:w-full">
                <Card className="bg-white p-6 rounded-lg shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {cartItems.map(({ product, quantity }) => (
                        <div key={product.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Image
                              src={product.images.length > 0 ? `${IMAGE_BASE_URL}${product.images[0].image_path}` : 'https://dummyimage.com/64x64/e0e0e0/000&text=No+Image'}
                              alt={product.title}
                              width={64}
                              height={64}
                              className="rounded-md object-cover"
                            />
                            <div>
                              <p className="font-medium">{product.title}</p>
                              <p className="text-sm text-gray-500">Quantity: {quantity}</p>
                            </div>
                          </div>
                          <p className="font-medium">{product.formatted_price}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 border-t pt-6">
                      <div className="flex justify-between font-bold text-lg">
                        <p>Total</p>
                        <p>₹{totalPrice.toFixed(2)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
