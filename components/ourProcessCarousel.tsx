'use client'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import data from "../public/data/data.json";

export default function OurProcessCarousel() {

  const { ourprocess } = data;

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
        {ourprocess.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-6 group relative shadow-lg text-white h-[50%] w-[100%] lg:h-[80vh] lg:w-full overflow-hidden cursor-pointer">
              <img src={item.image} alt="Service 3" className="w-full h-full md:h-full object-cover shadow-lg transform scale-95 group-hover:scale-110 transition-transform duration-300" />
              
               <div className="w-full h-1/3 absolute translate-y-96 inset-0 bg-black bg-opacity-70 opacity-0 scale-95  group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center ">
                  <h4 className="text-white text-xl font-semibold font-display">Connect with us on WhatsApp</h4>
               </div>
               
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
