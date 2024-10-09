'use client'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import data from "../public/data/data.json";

export default function StudiCasesCarousel() {

  const { caseStudy } = data;

  return (
    <div className="flex items-center justify-center flex-col h-auto">
      <Swiper
        breakpoints={{
          340: {
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
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[100%] lg:max-w-full"
      >
        {caseStudy.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 group relative shadow-lg text-white border-2 border-secondary h-[50%] w-[100%] lg:h-[80vh] lg:w-full overflow-hidden cursor-pointer">
              <img src={item.image} alt="Service 3" className="w-full h-full md:h-full object-cover transform hover:scale-110 transition-transform duration-300" />
                {/* <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
