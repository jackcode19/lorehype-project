'use client'
import { useState, useEffect } from 'react';
import Navbar from "@/components/navbar";


export default function Page() {

  return (
    <div className="antialiased">
         <section className='relative'> 
            <div className="w-full relative h-screen md:h-[130vh] bg-top bg-no-repeat bg-cover"
            style={{
                  backgroundImage: `url('/portfolio/detail/hero.JPG')`,
                  backgroundSize: '100% 100%',
               }}>
               <nav className="relative w-full p-4 z-50">
                  <div className="absolute inset-0 bg-white opacity-100 "></div>
                  <Navbar />
               </nav>
               <div className="absolute inset-0 bg-black opacity-30 "></div>
               
               <div className="w-full absolute lg:top-2/3 top-2/3 left-0 right-0 bottom-0 max-w-6xl mx-auto font-display px-6 lg:px-0"> 
                  <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold mb-3">Yuobi Project</h1>
                  <p className='text-white text-md md:text-lg lg:text-xl leading-relaxed italic'>Yuobi Project is a local brand that prioritizes comfort with a natural and effortless
                  aesthetic. Inspired by simplicity and street style, Yuobi delivers products that
                  blend minimalism with a confident, casual vibe.
                  </p>
               </div>
            </div>
            
               
            <div className=" grid grid-row-2 mx-auto gap-y-10 py-16">
               
               <div className="">
                  <h2 className="text-2xl md:text-3xl text-secondary text-center font-display">
                  Creative Content Creation
                  </h2>
               </div>
                  
               <div className="max-w-4xl mx-auto px-6 md:px-6">
                  <div className="w-full relative h-auto md:h-[70vh]bg-cover bg-no-repeat bg-center">
                     <img src="/portfolio/detail/yuobi-1.PNG" className='h-full w-full' alt="" />
                  </div>
               </div>
                
            </div>   
            
         </section>
         
         <section className='relative py-16'> 
            <div className="w-full relative h-screen md:h-[130vh] bg-top bg-no-repeat bg-cover"
            style={{
                  backgroundImage: `url('/portfolio/detail/hero.JPG')`,
                  backgroundSize: '100% 100%',
               }}>
               
               <div className="w-full absolute flex flex-col justify-center items-center lg:top-1/4 top-1/3 left-0 right-0 bottom-0"> 
                     <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-light mb-3 px-4">ÀVOUST PEACE</h1>
               </div>
            </div>

            <div className="grid grid-row-2 max-w-4xl mx-auto gap-y-10 py-16 px-6 md:px-0">

              <div className="flex flex-col gap-6 text-left font-display">
                     <div className="font">
                        <h1 className="text-xl md:text-3xl text-secondary text-left font-display">
                           Case Study: Youbi Project Rebranding
                        </h1>
                     </div>
                     
                     <div className="text-md md:text-lg">
                        <h4>The Challenge:</h4>
                        <p className='mt-5'>Avoust has decided to collaborate with Avoust Peace. Having already established its own operations and customer base Avoust aims to expand its audience by partnering with us. Ala, the owner of Avoust, seeks to
                        create an aesthetic promotional video featuring only our muse showcasing Avoust's products, accompanied by a
                        song personally selected by her to align with the vibe and identity of Avoust Peace
                        </p>
                     </div>

                     <div className="text-md md:text-lg">
                        <h4>The Challenge:</h4>
                        <p className='mt-5'>Avoust has decided to collaborate with Avoust Peace. Having already established its own operations and customer base Avoust aims to expand its audience by partnering with us. Ala, the owner of Avoust, seeks to
                        create an aesthetic promotional video featuring only our muse showcasing Avoust's products, accompanied by a
                        song personally selected by her to align with the vibe and identity of Avoust Peace
                        </p>
                     </div>
               </div>
                  
               <div className="">
                  <div className="w-full relative h-auto md:h-[70vh]bg-cover bg-no-repeat bg-center">
                     <img src="/portfolio/detail/yuobi-1.PNG" className='h-full w-full' alt="" />
                  </div>
               </div>
               
               <div className="flex flex-col gap-6">
                  <div className="space-y-5 font-display">
                     <h1 className='text-xl md:text-3xl text-secondary text-left '>Testimonial from Youbi Project</h1>
                        <p>Working with Lorehype has been an absolute game-changer for us. They
                        understood our vision from the start and transformed it into a fresh, stylish
                        brand identity that still feels authentically Youbi. The team’s attention to
                        detail, from content creation to the overall aesthetic of our Instagram, was
                        beyond our expectations. Lorehype didn’t just build an account for us—
                        they built a brand presence we’re proud of. We couldn’t be happier with
                        the results!” – Youbi Project Team
                        </p>
                     </div>
                     <div className="text-center mt-6">
                     <a href="https://wa.me/6285720779924" target="_blank" className="border-2 border-black py-4 px-5 mb-8 mt-5 text-lg md:text-xl hover:bg-black hover:text-primary italic font-semibold font-display">Free Consultation Now!
                     </a>
                     </div>
               </div>
                
            </div>   
            
         </section>
    </div>
  )
}