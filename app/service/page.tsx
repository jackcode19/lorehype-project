'use client'
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Arrow from '@/components/arrow'
import OurProcessCarousel from '@/components/ourProcessCarousel';

import Navbar from "@/components/navbar";

import data from '../../public/data/data.json';

export default function Page() {

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const { galleryTestimonials } = data;

  const service = [
      {
      id: 1,
      title: "Influencer Agency",
      description: "Leverage the power of influencers to elevate your brand’s visibility and credibility through authentic and aesthetically driven collaborations.",
      bg: "/service/influencer-agency/bg.jpg",
      images: [
        { id: '1', image: '/service/influencer-agency/influencer-1.jpg' },
        { id: '2', image: '/service/influencer-agency/influencer-2.jpg' },
      ],
      items: [
        { id: '1', name: 'Testimonial pictures' },
        { id: '2', name: 'Aesthetic pictures' },
        { id: '3', name: 'Instagram stories' },
        { id: '4', name: 'Collaborative feed posts' },
        { id: '5', name: 'Collaborative reels' },
      ],
      },
    {
      id: 2,
      title: "Media Promotion",
      description: "Maximize your brand’s reach through tailored content across multiple platforms. We craft engaging articles and visual stories that connect with your audience",
      bg: "/service/media-promotion/bg.jpg",
      images: [
        { id: '1', image: '/service/media-promotion/media-promotion-1.jpg' },
        { id: '2', image: '/service/media-promotion/media-promotion-2.jpg' },
      ],
      items: [
        { id: '1', name: 'Article post on our website' },
        { id: '2', name: 'Article post on Instagram feed' },
        { id: '3', name: 'Instagram story content' },
        { id: '4', name: 'Feed content' },
        { id: '5', name: 'Reels content' },
        { id: '5', name: 'Collaborative content' },
      ],
    },
    {
      id: 3,
      title: "Creative Content Production",
      description: "Bring your brand to life with innovative and visually captivating",
      bg: "/service/creative-content/bg.jpg",
      images: [
        { id: '1', image: '/service/creative-content/creative-content-1.jpg' },
      ],
      items: [
        { id: '1', name: 'Feeds Content' },
        { id: '2', name: 'Reels/Video Stories' },
        { id: '3', name: 'Collaborative Videos' },
        { id: '4', name: 'Collaborative photos' },
      ],
    },
    {
      id: 4,
      title: "Social Media Management",
      description: "Build a consistent and compelling online presence with our strategic social media management services, designed to fit your business needs",
      bg: "/service/social-media/bg.jpg",
      images: [
        { id: '1', image: '/service/social-media/social-media-1.jpg' },
      ],
      items: [
        { id: '1', name: 'Feeds Content' },
        { id: '2', name: 'Reels/Video Stories' },
        { id: '3', name: 'Collaborative Videos' },
        { id: '4', name: 'Collaborative photos' },
      ],
    },
    {
      id: 4,
      title: "Website Development",
      description: "Create a strong digital presence with sleek, functional websites designed to showcase your brand and drive engagement",
      bg: "/service/web-development/bg.jpg",
      images: [
        { id: '1', image: '/service/web-development/web-development-1.jpg' },
      ],
      items: [
        { id: '1', name: 'Landing page' },
        { id: '2', name: 'Portfolio ' },
      ],
    },
    ];

  return (
    <div className="antialiased">
      <section className='relative w-full bg-no-repeat md:bg-cover bg-cover bg-center md:h-[130vh] h-[100vh]' style={{
            backgroundImage: `url('/service/hero-fixed.jpg')`,
            backgroundAttachment: 'fixed',
        }}>
        <nav className="relative w-full p-4">
            <Navbar />
        </nav> 

        <div className="w-full relative flex flex-col justify-center items-center lg:top-1/4 top-1/3 left-0 right-0 bottom-0"> 
          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-5 px-4">The Services</h1>
          <p className="text-white text-md md:text-xl lg:text-2xl max-w-sm md:max-w-2xl text-center px-2">
              Based in the heart of creativity, Lorehype Agency brings a dynamic blend of innovation, fun, and professionalism to the table.
          </p>  
        </div>
      </section>

      <section className='pb-12' id=''>
        <div className='embla mx-auto'>
          <div className='embla__viewport' ref={emblaRef}>
            <div className='embla__container h-full'>
              
              {service.map((post, index) => (
                <div key={index} className='embla__slide'>
                  {/* <div  className="relative w-screen px-8 py-16 lg:py-32 h-full"
                      style={{
                        backgroundImage: `url(${post.bg})`,
                        backgroundSize: 'cover', // Ensure it covers the entire screen
                        backgroundPosition: 'center', // Center the image
                        backgroundRepeat: 'no-repeat', // Avoid repeating
                        backgroundAttachment: 'fixed', // Makes it scroll with the page
                      }}
                  > */}
                    <div className='relative bg-[url("/cover-img.jpg")] left-0 top-0 w-screen px-8 py-16 lg:py-32 h-full bg-cover bg-center'
                    style={{
                        backgroundImage: `url(${post.bg})`,
                      }}>
                      <div className="absolute inset-0 bg-black opacity-50 "></div>
                      <div className="relative flex flex-col items-center justify-center text-center gap-8 ">
                          <div className="text-white">
                              <h1 className="text-3xl md:text-5xl font-semibold mb-8">{post.title}</h1>
                              <h3 className="max-w-xl text-md md:text-2xl font-light italic text-white text-center mb-5">
                                  {post.description}
                              </h3>
                          </div>
                          
                          <div className="">
                              <div className="flex gap-8 lg:px">
                                  {post.images.map((item) => (
                                    <div key={item.id} className="">
                                      <img  src={item.image} alt="" className='w-full h-72 md:h-96 lg:h-[600px] bg-center object-cover' />
                                    </div>
                                  ))}
                              </div>
                          </div>
                        
                          <div className="">
                            <ul className='text-white text-left text-sm md:text-lg lg:text-xl mt-8 space-y-2 list-disc'>
                              {post.items.map((item,index) => (
                                <li key={index}>{item.name}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="">
                            <Arrow/>
                          </div>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service About Section */}
      <section id='' className="container mx-auto px-4 lg:px-6 pt-8 py-12 lg:py-32">
        <div className="flex flex-col justify-center lg:max-w-5xl mx-auto px-4 mb-6 text-center">
          <h2 className="text-xl md:text-3xl italic font-bold leading-tight text-secondary">
            AT LOREHYPE AGENCY, WE TAKE PRIDE IN CREATING
            TRENDSETTING CONTENT AND STRATEGIES FOR OUR CLIENTS
          </h2>

          <p className="mt-8 text-md md:text-lg lg:text-xl md:leading-relaxed mb-12 text-justify">
            Kami memastikan setiap paket yang kami tawarkan dirancang untuk
            memberikan hasil terbaik sehingga brand Anda menonjol di media sosial.
            Setiap layanan kami dapat disesuaikan dengan kebutuhan spesifik brand Anda.
            Untuk informasi lebih lanjut mengenai layanan kami, silakan hubungi kami
            melalui email.
          </p>

          <div className="">
            <a href="https://wa.me/6285720779924" target="_blank" className="border-2 border-black py-3 px-4 mb-8 hover:bg-black hover:text-primary italic font-bold">Work with us</a>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id='' className=" bg-primary px-4 lg:px-8 pb-20 md:pb-28 pt-12 md:pt-28">
        <h2 className="text-3xl md:text-5xl font-light italic text-secondary text-center mb-4 md:mb-12">
          Our Process
        </h2>
        <div className=''>
          <OurProcessCarousel />
        </div>

      </section>
        
      {/* Testimonial Section */}
      <section id='py-16' >
        <div className="text-center max-full mx-auto">
            <h2 className="text-3xl md:text-5xl font-light mb-6 md:mb-12">Testimonials</h2>
        </div>
        <div className='relative w-full bg-no-repeat md:bg-cover bg-cover bg-center md:h-[130vh] h-[100vh]' style={{
          backgroundImage: `url('/service/hero-fixed-2.jpg')`,
          backgroundAttachment: 'fixed',
          }}>
            <div className="absolute inset-0 bg-black opacity-50 h-auto"></div>
            <div className="w-full relative lg:-top-1/4 lg:translate-y-12 top-0 left-0 right-0 bottom-0 ">
            
              <div className="flex flex-col justify-center items-center h-[900px] lg:h-[1200px] gap-12">
                  
                  <p className="text-white text-md md:text-xl lg:text-2xl max-w-sm md:max-w-2xl text-center px-6">
                      With its refined and elegant approach, I have full
                      confidence in Lorehype's ability to craft highly
                      conceptual and trend-driven content, while
                      maintaining the core essence of my brand.
                  </p>

                  <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold  px-4 ">AVOUST PEACE</h1>
              </div>
            </div>
        </div>
      </section>
        
       {/* Gallery Service Section */}
      <section className='relative bg-[url("/bg-1.png")] left-0 top-0 w-screen h-full bg-contain md:bg-cover bg-center px-8 py-16 lg:py-36'>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative flex items-center justify-center h-full text-center">
          <div className="text-secondary md:max-w-7xl">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              {galleryTestimonials.map((items, index) => (
                  <div key={index}>
                    <img className="h-full w-full" src={items.image} alt='' />
                  </div>
                ))}
            </div>
            <div className="w-full mt-12">
              <a href="https://wa.me/6285720779924" target="_blank" className="border-2 border-primary text-primary py-3 px-10 mb-8 hover:bg-black  italic font-bold">Consult Now </a>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Advertisement Section */}
      <section className="relative w-full">
        <img src='/header.jpg' alt="" className='h-auto lg:h-[700px] w-full' />        
          <div className="absolute top-0 w-full h-[85%] md:h-[80%] flex flex-col justify-end items-center z-10 text-center px-4">
            <a href="#" className="inline-block mt-8 px-4 lg:px-12 py-1 lg:py-2 text-sm md:text-xl font-semibold text-black border border-black hover:bg-black hover:text-white transition">
              Let's Talk
            </a>
          </div>
      </section>
    </div>
  )
}