'use client'
import { useState, useEffect } from 'react';
import Navbar from "@/components/navbar";


export default function Page() {

  return (
    <div className="antialiased">
      <section className='relative'> 
         <div className="w-full relative h-screen md:h-[130vh] bg-top bg-no-repeat bg-cover"
         style={{
               backgroundImage: `url('/portfolio/fawwazco-bg.png')`,
               backgroundSize: '100% 100%',
            }}>
            <nav className="relative w-full p-4 z-50">
               <div className="absolute inset-0 bg-white opacity-100 "></div>
               <Navbar />
            </nav>
            <div className="absolute inset-0 bg-black opacity-30 "></div>
            
            <div className="w-full absolute lg:top-2/3 top-2/3 left-0 right-0 bottom-0 max-w-6xl mx-auto font-display px-6 lg:px-0"> 
               <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold mb-3">Fawwazco</h1>
               <p className='text-white text-md md:text-lg lg:text-xl leading-relaxed italic'>Fawwazco is a local brand that prioritizes Fawwazco is a prominent hijab brand that has successfully built a broad customer base on TikTok and a loyal fan community on Instagram. With a diverse range of high-quality products, Fawwazco reaches women from various backgrounds. Supported by a strong network of sellers, Fawwazco continues to deliver elegant and comfortable hijab collections that cater to the lifestyle needs of modern women.
               </p>
            </div>
         </div>
         
         <div className=" grid grid-row-2 mx-auto gap-y-10 py-16 max-w-4xl px-6 md:px-0">
            
            <div className="">
               <h2 className="text-2xl md:text-3xl text-secondary text-center font-display">
               Influencer Collaboration & Content Creation
               </h2>
            </div>
               
            <div className="grid grid-cols-2 gap-6 mx-auto px-6 md:px-6">
               <div className="w-full relative h-auto md:h-[70vh]bg-cover bg-no-repeat bg-center">
                  <img src="/portfolio/detail/fawwazco-1.jpg" className='h-full w-full' alt="" />
               </div>
               <div className="w-full relative h-auto md:h-[70vh]bg-cover bg-no-repeat bg-center">
                  <img src="/portfolio/detail/fawwazco-2.jpg" className='h-full w-full' alt="" />
               </div>
            </div>
            
            <div className="flex flex-col gap-6 text-left font-display">
               <div className="text-md md:text-lg">
                  <p className='mt-5'>Avoust has decided to collaborate with Avoust Peace. Having already established its own operations and customer base Avoust aims to expand its audience by partnering with us. Ala, the owner of Avoust, seeks to
                  create an aesthetic promotional video featuring only our muse showcasing Avoust's products, accompanied by a
                  song personally selected by her to align with the vibe and identity of Avoust Peace
                  </p>
               </div>
            </div>
               
         </div>   
         
      </section>
   
      <section className='relative py-16'> 
         <div className="grid grid-row-2 max-w-4xl mx-auto gap-y-10 py-16 px-6 md:px-0">
               
            <div className="">
               <div className="w-full relative h-auto md:h-[70vh]bg-cover bg-no-repeat bg-center">
                  <img src="/portfolio/detail/yuobi-1.PNG" className='h-full w-full' alt="" />
               </div>
            </div>
            
            <div className="flex flex-col gap-6 text-left font-display">
                  <div className="font">
                     <h1 className="text-xl md:text-3xl text-secondary text-left font-display">
                        Fawwazco Case Study
                     </h1>
                  </div>
                  
                  <div className="text-md md:text-lg">
                     <h4> Challenge</h4>
                     <p className='mt-2'>Challenge
                        Fawwazco partnered with us to expand their reach on
                        Instagram. While they have shared numerous content pieces,
                        few showcase their customers wearing the hijabs. We identified
                        an opportunity to strengthen this connection and highlight the
                        beauty of their products through user experiences.
                     </p>
                  </div>
                  
                  <div className="text-md md:text-lg">
                     <h4> Solution</h4>
                     <p className='mt-2'>
                        We proposed a collaboration with relevant nano influencers, providing them with a sample hijab that suits their style. Our focus will be on emphasizing an elegant yet simple look, with content that highlights the manners and grace of wearing a hijab. This style will convey a luxurious feel without being excessive, while maintaining a strong sense of decorum. With truly affordable pricing, this collaboration not only provides engaging testimonials but also creates a positive impression among customers. This approach aims to generate buzz on social media, reach a broader audience, and strengthen Fawwazco’s brand loyalty.
                     </p>
                  </div>
            </div>
               
         </div>   
         
      </section>
      
      <section className="relative w-full pb-12">
         <div className="relative">
            <img src='/portfolio/fawwazco-bg.png' alt="" className='h-auto lg:h-[700px] w-full' />
            <div className="absolute inset-0 bg-secondary opacity-50 "></div>
         </div>
         
         <div className="absolute top-[20%] md:top-[30%] w-full h-1/3 md:h-1/2 flex flex-col items-center z-10 text-center px-4">
            <div className="text-sm md:text-xl text-primary md:w-2/3 font-display">
               <p className='leading-relaxed'>“Thank you so much! I hope we can continue to collaborate in the future.
               The content has been fantastic, and I absolutely love the agency. I believe we will continue to grow together, and if possible, I would love to explore
               collaboration on TikTok as well.”
               </p>
               <p className='text-left mt-5'> Fawwaz.co</p>
            </div>
         </div>
         
         <div className="text-center">
            <a href="#" className="inline-block mt-8 px-5 lg:px-8 py-1 lg:py-2 text-md md:text-xl font-semibold text-secondary border-2 border-secondary hover:bg-black hover:text-white transition">
               Free Consultation!
            </a>
         </div>
      </section>  
    </div>
  )
}