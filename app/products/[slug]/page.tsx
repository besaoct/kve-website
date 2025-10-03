"use client";

import { useParams, notFound } from "next/navigation";
import { dummyProducts } from "@/data/dummy/products";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const params = useParams();
  const product = dummyProducts.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="bg-neutral-100 text-black py-12">
        <div className="container mx-auto max-w-8xl px-4">
          <div className="text-center lg:text-left w-full ">
            <div className="flex gap-2 items-center flex-wrap w-full mb-2">
              <Link href={`/`}>
                <Badge className="rounded  bg-red-100 border hover:bg-red-200/50 border-red-200 text-red-600">
                  Home
                </Badge>
              </Link>
              <ChevronRight className="size-4" />
              <Link href={`/${product.catalog.url}`}>
                <Badge className="rounded  bg-red-100 border hover:bg-red-200/50 border-red-200 text-red-600">
                  {product.catalog.title}
                </Badge>
              </Link>
              <ChevronRight className="size-4" />
              <Link
                href={`/${product.catalog.url}/${product.catalog.subCategory.url}`}
              >
                <Badge className="rounded  bg-red-100 border hover:bg-red-200/50 border-red-200 text-red-600">
                  {product.catalog.subCategory.title}
                </Badge>
              </Link>
              <ChevronRight className="size-4" />
              <h1 className="text-sm text-neutral-600 my-2 line-clamp-1">
                {product.name}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto max-w-8xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="rounded-lg shadow-lg  object-cover aspect-square"
            />
          </div>
          <div className="items-start justify-center flex flex-col">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-neutral-700 mb-6">
              {product.description}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-start gap-2 flex-wrap items-center mt-4">
              <Button asChild size="sm" className="text-white ">
                <Link href={`${product.pdf}`} target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  View PDF
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className=" justify-end w-fit items-center"
              >
                <Link href={`/contact`}>
                  Enquire now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
