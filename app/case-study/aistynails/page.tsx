'use client'
import { useState, useEffect } from 'react';
import Navbar from "@/components/navbar";


export default function Page() {

  return (
    <div className="antialiased">
      <section className='relative'> 
            <div className="w-full relative h-screen md:h-[130vh] bg-top bg-no-repeat bg-cover"
            style={{
                  backgroundImage: `url('/portfolio/detail/aistynails-bg.jpg')`,
                  backgroundSize: '100% 100%',
               }}>
               <nav className="relative w-full p-4">
                  <div className="absolute inset-0 bg-white opacity-100 "></div>
                  <Navbar />
               </nav>
               
               <div className="w-full absolute lg:top-2/3 top-2/3 left-0 right-0 bottom-0 max-w-6xl mx-auto font-display px-6 lg:px-0"> 
                  <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold mb-3">Aistynails</h1>
                  <p className='text-white text-md md:text-lg lg:text-xl leading-relaxed'>Aisty Nails, also known as Aisty Henna, is a company specializing in nails, nail art, and henna designs. Established in 2020, the brand has been dedicated to offering high-quality services that cater to the beauty and elegance of its clients, delivering creative and sophisticated nail art and henna with a focus on precision and artistry.
                  </p>
               </div>
            </div>

            <div className="grid grid-row-3 mx-auto max-w-4xl gap-y-10 py-16 px-6 md:px-0">

               <div className="mb-16">
                  <h2 className="text-3xl md:text-4xl text-secondary text-center font-display">
                     Social Media Management
                  </h2>
               </div>
                  
               <div className="max-w-4xl grid grid-rows-2 gap-y-16 mx-auto px-6 md:px-6 mb-16">
                  <div className="">
                     <div className="text-center mb-5">
                        <h1 className='text-2xl md:text-4xl font-light text-secondary'>Before</h1>
                     </div>
                     <div className="w-full relative h-auto md:h-[70vh]bg-cover bg-no-repeat bg-center">
                        <img src="/portfolio/detail/aistynails-before.jpg" className='h-full w-full' alt="" />
                     </div>
                  </div>
                  
                  <div className="">
                     <div className="text-center mb-5">
                        <h1 className='text-2xl md:text-4xl font-light text-secondary'>After</h1>
                     </div>
                     <div className="w-full relative h-auto md:h-[70vh]bg-cover bg-no-repeat bg-center">
                        <img src="/portfolio/detail/aistynails-after.jpg" className='h-full w-full' alt="" />
                     </div> 
                  </div>
               </div>
               
               <div className="flex flex-col gap-6">
                 <div className="text-center mb-16">
                     <a href="https://wa.me/6285720779924" target="_blank" className="border-2 border-black py-4 px-5 mb-8 mt-5 text-lg md:text-xl hover:bg-black hover:text-primary italic font-semibold font-display">Free Consultation Now!
                     </a>
                  </div>
                  <div className="space-y-5 font-display text-md md:text-lg">
                     <p>Creating a content strategy for social media management requires thorough planning and consistent execution over time. That’s why we recommend opting for a comprehensive social media management service that includes both content creation and engagement. This approach ensures not only high-quality, relevant content but also active interaction with your audience, which is essential for building brand loyalty and increasing reach.
                     </p>
                  </div>
                     
               </div>
                
            </div>   
            
         </section>
         
         <section className='relative'> 
            <div className="grid grid-row-2 max-w-4xl mx-auto gap-y-10 py-16 px-6 md:px-0">
                  
               <div className="">
                  <div className="w-full relative h-auto md:h-[70vh]bg-cover bg-no-repeat bg-center">
                     <img src="/portfolio/detail/aistynails-footer.jpg" className='h-full w-full' alt="" />
                  </div>
               </div>
               
               <div className="flex flex-col gap-6 text-left font-display">
                     <div className="font">
                        <h1 className="text-xl md:text-3xl text-secondary text-left font-display">
                           Aisty Nails Case Study
                        </h1>
                     </div>
                     
                     <div className="text-md md:text-lg">
                        <h4> Challenge</h4>
                        <p className='mt-2'>Aisty Nails partnered with us to improve their visual branding. They were having difficulty deciding on the right look for their brand. Their Instagram posts mostly focused on customer testimonials, but they wanted a fresh and unique look for Aisty Nails, which would also be shared on Aisty Henna’s account.</p>
                     </div>
                     
                     <div className="text-md md:text-lg">
                        <h4> Solution</h4>
                        <p className='mt-2'>
                           We recommended a style that matched Aisty Nails’ vision of being elegant, chic, and timeless, without looking too flashy. We suggested a rebranding that uses brown as the main color with bold accents to attract sophisticated women. In addition to the visual branding, we also proposed creating a brand story to emotionally connect with their audience. This approach helps Aisty Nails stand out, both in how they look and how they engage with their customers on a personal level.
                        </p>
                     </div>
               </div>
                  
            </div>   
         </section>
         
         <section className="relative w-full">
         <div className="relative">
            <img src='/portfolio/banner.png' alt="" className='h-auto lg:h-[700px] w-full' />
            <div className="absolute inset-0 bg-black opacity-20 "></div>
         </div>
         <div className="absolute top-[20%] md:top-[50%] w-full h-2/3 md:h-1/2 flex flex-col items-center z-10 text-center px-4">
            <div className="text-xl md:text-2xl text-primary">
               <p>“We really have a good taste right?</p>
               <p> Ready to elevate your brand now?</p>
            </div>
            <a href="#" className="inline-block mt-8 px-5 lg:px-8 py-1 lg:py-2 text-md md:text-xl font-semibold text-primary border border-primary hover:bg-black hover:text-white transition">
               Free Consultation!
            </a>
         </div>
      </section>  
    </div>
  )
}