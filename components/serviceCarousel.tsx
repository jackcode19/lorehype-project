'use client'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay  } from "swiper/modules";

import data from "../public/data/data.json";

export default function ServiceCarousel() {

  const { service } = data;

  return (
    <div className="flex items-center justify-center flex-col h-auto">
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
          1440: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        autoplay={{ delay: 1000 }}
        speed={500}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay ,]}
        className="max-w-[100%] lg:max-w-full"
      >
        {service.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 group relative shadow-lg text-white border-2 border-secondary h-[50vh] sm:h-[350px] w-[100%] lg:h-[70vh] lg:w-full overflow-hidden cursor-pointer">
              {/* <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              /> */}
                <img src={item.image} alt="Service 3" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end justify-center pb-10">
                    <h4 className="text-white text-xl md:text-2xl font-medium italic tracking-wide">{item.title}</h4>
                </div>
               </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
