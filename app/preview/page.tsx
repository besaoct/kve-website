'use client';

import Footer from '@/components/common/footer';
import Navigation from '@/components/common/navigation';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const PreviewEditor = dynamic(() => import('@/components/ar-func/upload/preview-editor'), { ssr: false });

export default function TryOn() {
  return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="flex-1">
             <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2 text-center">Product Preview</h1>
      <p className="text-lg mb-8 text-center">Upload a image to preview the product in your space.</p>
      <Suspense fallback={<div className="text-xl">Loading Editor...</div>}>
        <PreviewEditor />
      </Suspense>
      </div>
    </main>
    <Footer />
    </div>
  );
}