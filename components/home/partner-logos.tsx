"use client";

import { useState, useEffect } from "react";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "../ui/marquee";
import { Button } from "@/components/ui/button";
import { IMAGE_BASE_URL } from "@/data/api/config";
import { getCustomers } from "@/data/api/customers";
import { Customer } from "@/data/api/customers/types";

export function PartnerLogos() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [activeCustomer, setActiveCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      const fetchedCustomers = await getCustomers();
      setCustomers(fetchedCustomers);
      if (fetchedCustomers.length > 0) {
        setActiveCustomer(fetchedCustomers[0]);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <section className="py-20 bg-neutral-100 text-black w-full">
      <div className="container max-w-8xl mx-auto px-4 w-full">
        <div className="text-center mb-16 w-full">
          <h2 className="text-4xl font-bold mb-4">Our Customers</h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            We partner with the world's leading welding equipment manufacturers
            to bring you the best products.
          </p>
        </div>

        <div className="flex flex-wrap justify-start gap-2 mb-8 break-all overflow-x-auto scrollbar-hide">
          {customers.map((customer) => (
            <Button
              key={customer.id}
              className=""
              variant={activeCustomer?.id === customer.id ? "default" : "outline"}
              onClick={() => setActiveCustomer(customer)}
            >
              {customer.customer_name}
            </Button>
          ))}
        </div>

        <div className="flex w-full max-w-xs sm:max-w-sm md:max-w-4xl lg:max-w-full mx-auto items-center justify-center ">
          {activeCustomer && (
            <Marquee className="w-full">
              <MarqueeFade side="left" className="from-neutral-100" />
              <MarqueeFade side="right" className="from-neutral-100" />
              <MarqueeContent className="">
                {activeCustomer.logos.map((logo, index) => (
                  <MarqueeItem className="h-32 w-32 flex items-center gap-4" key={index}>
                    <img
                      alt={`Placeholder ${index}`}
                      className=" w-28 h-auto"
                      src={`${IMAGE_BASE_URL}${logo}`}
                    />
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          )}
        </div>
      </div>
    </section>
  );
}
