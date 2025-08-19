"use client"

import { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface Testimonial {
  name: string
  position: string
  company: string
  content: string
  rating: number
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "Manufacturing Director",
    company: "Steel Dynamics Inc.",
    content:
      "KVE has been our trusted partner for over 5 years. Their welding equipment consistently delivers exceptional quality and reliability in our high-volume production environment.",
    rating: 5,
    image: "https://images.pexels.com/photos/2968948/pexels-photo-2968948.jpeg",
  },
  {
    name: "Michael Chen",
    position: "Operations Manager",
    company: "Pacific Shipbuilding",
    content:
      "The technical support and product quality from KVE is unmatched. Their solutions have significantly improved our operational efficiency and reduced downtime.",
    rating: 5,
    image: "https://images.pexels.com/photos/2968948/pexels-photo-2968948.jpeg",
  },
  {
    name: "Elena Rodriguez",
    position: "Chief Engineer",
    company: "Automotive Solutions Ltd.",
    content:
      "KVE's innovative automation solutions have transformed our production line. The ROI was evident within the first quarter of implementation.",
    rating: 5,
    image: "https://images.pexels.com/photos/2968948/pexels-photo-2968948.jpeg",
  },
  {
    name: "David Thompson",
    position: "Plant Manager",
    company: "Industrial Fabrication Co.",
    content:
      "Outstanding customer service and world-class products. KVE understands our industry needs and consistently exceeds our expectations.",
    rating: 5,
    image: "https://images.pexels.com/photos/2968948/pexels-photo-2968948.jpeg",
  },
]

export default function TestimonialsSection() {
  useEffect(() => {
    // Preload images to avoid layout shifts
    testimonials.forEach((testimonial) => {
      const img = new Image()
      img.src = testimonial.image
    })
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">What Our Partners Say</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hear from industry leaders who trust KVE for their critical operations
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12 relative w-full min-h-[320px] lg:min-h-[280px]">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-red-600/20" />
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      style={{ objectFit: "cover", aspectRatio: "1/1" }}
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg lg:text-xl text-neutral-700 mb-6 leading-relaxed min-h-[120px]">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-neutral-900 text-lg">{testimonial.name}</div>
                      <div className="text-red-600 font-medium">{testimonial.position}</div>
                      <div className="text-neutral-600">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
 
    
        </Swiper>
      </div>
    </section>
  )
}