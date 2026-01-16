"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Testimonial } from "@/data/api/testomonials/types";
import { getTestimonials } from "@/data/api/testomonials";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const fetchedTestimonials = await getTestimonials();
      setTestimonials(fetchedTestimonials);
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hear from industry leaders who trust KVE for their critical
            operations
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoHeight={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="max-w-4xl mx-auto min-h-[320px] lg:min-h-[280px]"
        >
          {testimonials.map((testimonial: Testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12 relative w-full min-h-[320px] lg:min-h-[280px]">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-red-600/20" />
                <div className="flex flex-col lg:flex-row items-center gap-8">

               {    testimonial.image ? 
                    <div className="flex-shrink-0">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      style={{ objectFit: "cover", aspectRatio: "1/1" }}
                    />
                  </div> : <></>}

                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg lg:text-xl text-neutral-700 mb-6 leading-relaxed min-h-[120px]">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-neutral-900 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-red-600 font-medium">
                        {testimonial.designation}
                      </div>
                      <div className="text-neutral-600">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}