'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { data } from "../public/data/data.json";

export default function ActiveCaraousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const { service } = data;

  return (
    <div className='embla mx-auto mt-12'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container h-full'>
          
          {/* {service.map((data, index) => ( */}
             
             <div  className="embla__slide flex ">
              {service.map((data, index) => (
               
                <div key={index} className="w-1/3 flex items-center justify-center border-2 border-black relative group ">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <img src={data.image} alt={`Image ${data.id}`} className="w-full h-full object-cover " />
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                  <div className="absolute inset-0 flex items-end justify-center pb-10">
                     <h4 className="text-white text-xl md:text-2xl font-medium italic tracking-wide">{data.title}</h4>
                  </div>
                </div>
                
              ))}
            </div>
          {/* ))} */}
        </div>
      </div>

    </div>
  )
}
