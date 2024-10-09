'use client'
import Link from 'next/link';
import Navbar from "@/components/navbar";

import { caseStudy } from '../../public/data/data.json';

export default function Page() {
   
   // const { caseStudy } = data;

  return (
    <div className="antialiased">
      <section className='relative w-full bg-no-repeat md:bg-cover bg-cover bg-center md:h-[130vh] h-96' style={{
         backgroundImage: `url('/portfolio/hero.jpg')`,
         backgroundAttachment: 'fixed',
        }}>
            <nav className="relative w-full p-4">
               <div className="absolute inset-0 bg-white opacity-70 "></div>
               <Navbar />
            </nav> 
            
            
      </section>
      
      <section className='py-16'>
         <div className="grid grid-row-2 max-w-7xl mx-auto gap-y-10">
            <div className="flex flex-col gap-8 px-6">
               <div className="">
                  <h2 className="text-3xl md:text-5xl font-light italic text-secondary text-center">
                  Creative Content Creation
                  </h2>
               </div>
               <div className="w-full relative h-auto md:h-[600px]  bg-cover bg-no-repeat bg-center">
                     <img src="/portfolio/creative-content-bg.jpg" className='h-full w-full' alt="" />
                     <div className="w-full absolute flex flex-col justify-end items-center lg:top-1/4 top-1/3 left-0 right-0 bottom-0"> 
                           <h3 className="text-white text-3xl md:text-4xl lg:text-6xl font-light mb-3 px-4">ÀVOUST PEACE</h3>
                     </div>
               </div>
               <div className="text-center">
                     <p>Avoust has decided to collaborate with Avoust Peace. Having already established its own operations and customer base Avoust aims to expand its audience by partnering with us. Ala, the owner of Avoust, seeks to
                     create an aesthetic promotional video featuring only our muse showcasing Avoust's products, accompanied by a
                     song personally selected by her to align with the vibe and identity of Avoust Peace
                     </p>
               </div>
            </div>
            
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mt-8 place-items-center ">
               <div className="flex flex-col gap-6">
                  <div className="w-full relative h-auto md:h-[90vh] border-2 border-secondary  bg-cover bg-no-repeat bg-center">
                     <img src="/portfolio/the-chalange.jpg" className='h-full w-full' alt="" />
                     <div className="w-1/2 absolute -bottom-11 md:-bottom-12 text-center left-1/4"> 
                           <h1 className="text-black text-3xl md:text-4xl lg:text-6xl font-light mb-3 px-4">The Challenge</h1>
                     </div>
                  </div>
                  <div className="text-justify mt-6">
                     <p>Avoust Peace adalah brand yang berkolaborasi dengan agency kami, Lorehype. Dengan
                     gaya yang elegan, timeless, dan chic, Avoust menonjolkan karakter yang eksklusif dan mencerminkan estetika old money. Setiap produk diproduksi terbatas dan secara mandiri, memperkuat citra luxury yang otentik dan bernilai tinggi.
                     </p>
                  </div>
               </div>
               
               <div className="flex flex-col gap-6">
                  <div className="w-full relative h-auto md:h-[90vh] border-2 border-secondary  bg-cover bg-no-repeat bg-center">
                     <img src="/portfolio/the-solution.jpg" className='h-full w-full' alt="" />
                     <div className="w-1/2 absolute -bottom-11 md:-bottom-12 text-center left-1/4"> 
                           <h1 className="text-black text-3xl md:text-4xl lg:text-6xl font-light mb-3 px-4">The Solutions</h1>
                     </div>
                  </div>
                  <div className="text-justify mt-6">
                     <p>Avoust Peace adalah brand yang berkolaborasi dengan agency kami, Lorehype. Dengan
                     gaya yang elegan, timeless, dan chic, Avoust menonjolkan karakter yang eksklusif dan mencerminkan estetika old money. Setiap produk diproduksi terbatas dan secara mandiri, memperkuat citra luxury yang otentik dan bernilai tinggi.
                     </p>
                  </div>
               </div>
         </div> 
         </div>
      </section>
      
      <section className='py-16'>
         <div className="grid grid-row-2 gap-y-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 px-6">
               <div className="">
                  <h2 className="text-3xl md:text-5xl font-light italic text-secondary text-center">
                  Lore Influencers Collaboration
                  </h2>
               </div>
               <div className="w-full relative h-auto md:h-[600px]  bg-cover bg-no-repeat bg-center">
                  <img src="/portfolio/influencers-bg.jpg" className='h-full w-full' alt="" />
                  <div className="w-full absolute flex flex-col justify-end items-center lg:top-1/4 top-1/3 left-0 right-0 bottom-0"> 
                        <h3 className="text-white text-2xl md:text-4xl lg:text-6xl font-light mb-3 px-4">ÀVOUST as ÀVOGUEST</h3>
                  </div>
               </div>
               <div className="text-center">
                     <p>Avoust Peace wants the Lore influencer to be featured in their new magazine, Avoguest,
                     which was recently created after their first collection, The Edge Basic Jacket, sold out and
                     attracted more customers. For the magazine, Avoguest plans to capture photos and
                     videos of the Lore influencer without makeup, highlighting her natural beauty and pure
                     aura.
                     </p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
               <div className="flex flex-col gap-6  ">
                  <div className="w-full h-auto md:h-[90vh]   bg-cover bg-no-repeat bg-center">
                     <img src="/portfolio/influencers-1.jpg" className='h-full w-full' alt="" />
                  </div>
                  <div className="text-justify px-6">
                     <p>To tackle this challenge, Lorehype first identified a model from our Lore Influencer roster who fits Avoust Peace’s vision. We focused on selecting someone with striking features that radiate pure elegance, yet carry a strong and confident presence. This model needed to embody the refined beauty that Avoust Peace desires for their magazine.</p>
                  </div>
               </div>
               
               <div className="flex flex-col gap-6 ">
                  <div className="w-full h-auto md:h-[90vh] bg-cover bg-no-repeat bg-center">
                     <img src="/portfolio/influencers-2.jpg" className='h-full w-full' alt="" />
                  </div>
                  <div className="text-justify px-6">
                     <p>In line with the client’s request, we paid close attention to the styling. We carefully curated the look, incorporating a simple black sandal to enhance the model’s bold and assertive charm. This choice complements the clean and natural aesthetic, while maintaining a touch of sophistication.</p>
                  </div>
               </div>
               
               <div className="flex flex-col gap-6">
                  <div className="w-full h-auto md:h-[90vh] bg-cover bg-no-repeat bg-center">
                     <img src="/portfolio/influencers-3.jpg" className='h-full w-full' alt="" />
                  </div>
                  <div className="text-justify px-6">
                     <p>To complete the look, we directed the model to adopt a neutral facial expression, which adds a sense of depth and calm. This subtle approach allows the overall image to exude a timeless and effortless beauty, perfectly aligning with the magazine’s desired visual impact.</p>
                  </div>
               </div>
            </div> 
         </div>
      </section>
      
      <section className='py-16'>
         <div className="grid grid-row-2 max-w-7xl mx-auto gap-y-12">
            <div className="flex flex-col gap-8 px-6">
               <div className="">
                  <h2 className="text-3xl md:text-5xl font-light italic text-secondary text-center">
                     Social Media Management
                  </h2>
               </div>
               <div className="w-full relative h-auto md:h-[600px]  bg-cover bg-no-repeat bg-center">
                  <img src="/portfolio/social-media-bg.png" className='h-full w-full' alt="" />
                  <div className="w-full absolute flex flex-col justify-end items-center lg:top-1/4 top-1/3 left-0 right-0 bottom-0"> 
                        <h3 className="text-white text-3xl md:text-4xl lg:text-6xl font-extralight mb-3 px-4">AISTY NAILS</h3>
                  </div>
               </div>
               <div className="text-center">
                     <p>We have decided to offer one of our services to Aisty Nails: social media management. With their approval, we will create a feed consisting of 15 posts, including several video reels. Our role goes beyond just content creation; we will also promote Aisty Nails across our Instagram and website to maximize their reach and engagement.</p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 place-items-center md:py-10 ">
               <div className="flex flex-col gap-6">
                  <div className="text-center">
                        <h3 className='text-3xl md:text-5xl font-light italic text-secondary'>Before</h3>
                  </div>
                  <div className="w-full h-auto md:h-[90vh] border-2 border-secondary  bg-cover bg-no-repeat bg-center">
                     <img src="/portfolio/social-media-1.jpg" className='h-full w-full' alt="" />
                  </div>
               </div>
                  
               <div className="flex flex-col gap-6">
                  <div className="text-center">
                     <h3 className='text-3xl md:text-5xl font-light italic text-secondary'>After</h3>
                  </div>
                  <div className="w-full h-auto md:h-[90vh] border-2 border-secondary  bg-cover bg-no-repeat bg-center">
                     <img src="/portfolio/social-media-2.jpg" className='h-full w-full' alt="" />
                  </div>
               </div>
            </div>
         
            <div className="max-w-6xl mx-auto">
               <div className="mb-8 md:py-10">
                  <h2 className="text-3xl md:text-5xl font-light italic text-secondary text-center">
                     Explore More
                  </h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-row-3 gap-8">
                  
                  {caseStudy.map(item => (
                  <Link href={`/case-study/${item.id}`}>
                     <div className="w-full relative h-auto md:h-[600px]  bg-cover bg-no-repeat bg-center transform hover:scale-105 transition-transform duration-300">
                        <img src={item.bgImage} className='h-full w-full' alt="" />
                        <div className="w-full absolute flex flex-col justify-end items-center lg:top-1/4 top-1/3 left-0 right-0 bottom-0 "> 
                           <h3 className="text-white text-3xl md:text-4xl lg:text-6xl font-extralight mb-3 px-4">{item.title}</h3>
                        </div>
                     </div>
                  </Link>
                  ))}
                
                    
                  {/* <div className="w-full relative h-auto md:h-[600px]  bg-cover bg-no-repeat bg-center">
                     <Link href='#'>
                     <img src="/portfolio/creative-content.jpg" className='h-full w-full' alt="" />
                     <div className="w-full absolute flex flex-col justify-end items-center lg:top-1/4 top-1/3 left-0 right-0 bottom-0"> 
                        <h3 className="text-white text-3xl md:text-4xl lg:text-6xl font-extralight mb-3 px-4">AISTY NAILS</h3>
                          </div>
                     </Link>
                  </div>
                  
                  <div className="w-full relative h-auto md:h-[600px]  bg-cover bg-no-repeat bg-center">
                     <Link href='#'>
                        <img src="/portfolio/creative-content.jpg" className='h-full w-full' alt="" />
                        <div className="w-full absolute flex flex-col justify-end items-center lg:top-1/4 top-1/3 left-0 right-0 bottom-0"> 
                           <h3 className="text-white text-3xl md:text-4xl lg:text-6xl font-extralight mb-3 px-4">FAWWAZCO</h3>
                        </div>
                     </Link>
                  </div>
                  
                  <div className="w-full relative h-auto md:h-[600px] ] bg-cover bg-no-repeat bg-center">
                     <Link href='case-study/yuobi'>
                        <img src="/portfolio/creative-content.jpg" className='h-full w-full' alt="" />
                        <div className="w-full absolute flex flex-col justify-end items-center lg:top-1/4 top-1/3 left-0 right-0 bottom-0"> 
                           <h3 className="text-white text-3xl md:text-4xl lg:text-6xl font-extralight mb-3 px-4">YUOBI PROJECT</h3>
                        </div>
                     </Link>
                  </div> */}
               </div>
            </div>  
         </div>
      </section>
      
      <section className="relative w-full pb-32">
         <div className="relative">
            <img src='/portfolio/banner.png' alt="" className='h-auto lg:h-[700px] w-full' />
            <div className="absolute inset-0 bg-white opacity-20 "></div>
         </div>
         <div className="absolute top-0 w-full h-1/2 md:h-1/2 flex flex-col justify-end items-center z-10 text-center px-4">
            <div className="text-xl md:text-3xl text-primary">
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