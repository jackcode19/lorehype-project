'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Link from 'next/link';

import { FreeMode, Pagination, Autoplay  } from "swiper/modules";
import data  from "../public/data/data.json";

export default function BlogCarousel() {

  const { blogPosts } = data;

  return (
    <div className="flex items-center justify-center flex-col h-auto px-8">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          990: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        autoplay={{ delay: 3000 }}
        speed={2000}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay ,]}
        className="max-w-[100%] lg:max-w-7xl"
      >
        {blogPosts.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={`/blog/${item.id}`}>
              <div className="flex flex-col gap-6 group relative shadow-lg text-secondary h-[50%] w-[100%] lg:w-full lg:h-[80vh] overflow-hidden cursor-pointer transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <img src={item.image} alt={item.title} className="mb-6 h-80 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">{item.title.length > 80 ?
                    `${item.title.substring(0, 60)}...` : item.title
                  }</h3>
                    <p className="text-lg mb-6">{item.description}</p>
                      <button className="hover:underline cursor-pointer">Read More</button>
                  </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
