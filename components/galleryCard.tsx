'use client'
import React from 'react'

import  data  from "../public/data/data.json";

export default function GalleryCard() {

  const { influencers } = data;

return (
   <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
      {influencers.map((influencer, index) => (
         <div key={index}>
            <img className="h-full w-full cursor-pointer hover:scale-105 transform transition duration-300" src={influencer.image} alt={influencer.title} />
         </div>
         ))}
   </div>
  )
}
