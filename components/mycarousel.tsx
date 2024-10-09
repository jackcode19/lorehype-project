'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import data  from "../public/data/data.json";

export default function Mycarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const { galleri } = data;

  return (
    <div className='embla mx-auto mt-12'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container h-full'>
          
          {galleri.map((gallery, index) => (
            <div key={index} className='embla__slide flex items-center justify-center'>
              <img src={gallery.imageUrl} className=" w-full h-full object-cover bg-center" />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
