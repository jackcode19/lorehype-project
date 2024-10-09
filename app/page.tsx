import Image from "next/image";
import Link from "next/link";
import Mycarousel from "@/components/mycarousel";
import ServiceCarousel from "@/components/serviceCarousel";
import StudiCasesCarousel from "@/components/studiCasesCarousel";
import GalleryCard from "@/components/galleryCard";
import BlogCarousel from "@/components/blogCarousel";

import  data from "../public/data/data.json";

import Navbar from "@/components/navbar";

export default function Home() {

  const { client } = data;
  
  return (
    <div className="antialiased">
      <section id="welcome" className="bg-primary">
        <nav className="relative w-full mb-5 p-4">
            <div className="absolute inset-0 bg-white opacity-50 "></div>
            <Navbar />
        </nav>
        
        <div className="max-w-[90rem] mx-auto px-6">
          <h1 className="text-5xl lg:text-8xl font-medium leading-tight text-secondary mb-3">
              Aesthetic Solusions  for Brand Elevation
          </h1>
            
          <div className="lg:flex">
            <div className="lg:w-2/3 mb-5">
              <p className="mt-4 text-lg md:text-2xl text-secondary">
                We build immersive brand experiences that are timeless, sophisticated, and always one step ahead of the market. 
              </p>
            </div>
            <div className="lg:w-1/2 lg:flex justify-end items-end">
              <a href="#" className="inline-flex items-center px-8 py-3 md:px-8 lg:py-4 italic font-bold border-2 border-secondary text-xl lg:text-2xl text-secondary hover:bg-black hover:text-primary transition">
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        <div className="w-full py-10 md:py-20 flex justify-center items-center bg-primary relative mt-10 h-[300px] md:h-[500px] lg:h-[650px] mb-10 overflow-hidden" >
    
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline
              controls={false} 
              preload="auto"
              className="absolute top-0 left-0 min-w-full min-h-full object-cover w-full h-full lg:w-[38.125rem] lg:h-[31.875rem]"
            >
              <source src='/hero.webm' type="video/webm" />
            </video>

            <div className="absolute inset-0 bg-black bg-opacity-10 opacity-80 flex flex-col items-center justify-center">
            </div>
        </div>
      </section>

      <section id='' className="max-w-screen flex flex-col md:flex-row pb-10 md:pb-20">
        <div className="md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 text-center">
          <h2 className="text-gray-500 italic mb-2 text-2xl">The Sense of the Aesthetics</h2>
          <div className="flex flex-col items-center">
            <div className="lg:w-full mx-auto px-4 mb-6 text-center">
              <h2 className="text-xl md:text-3xl italic font-medium leading-tight text-secondary">
                We’re not only a social media agency <br /> 
              </h2>

            </div>
            <img
              src='/galleri-home-1.png'
              alt="Description"
              className="mb-4 w-56 h-72 md:h-96 md:w-80 border-2 border-secondary"
            />
            <Link href="/service">
              <button className="border-2  border-black py-2 px-4 mb-8 mt-5 hover:bg-black hover:text-primary italic font-bold">Explore More</button>
            </Link>
            
          </div>
        </div>
        <div className="md:w-1/2 h-[500px] md:h-[800px] w-full bg-cover bg-center relative">
            <div className='w-full'>
              <Mycarousel/>
            </div>
        </div>
      </section>

      <section id='about' className="container mx-auto px-4 lg:px-6 pt-6 pb-20">
        <div className="lg:w-1/2 mx-auto px-4 mb-6 text-center">
          <h2 className="text-xl md:text-3xl italic font-bold leading-tight text-secondary">
            Does your content reflect the beauty of your brand?
          </h2>

          <p className="mt-8 text-lg lg:text-xl md:leading-relaxed mb-6">
            Our refined visual strategies bring out the elegance in every post, aligning with  your brand’s essence.
        </p>

        <a href="https://wa.me/6285720779924" target="_blank" className="border-2  border-black py-2 px-4 mb-8 mt-5 hover:bg-black hover:text-primary italic font-bold">Consult Now </a>
        </div>
      </section>

      <section id='service' className="bg-primary px-8 md:py-16">
        <div className=" text-center max-full mx-auto">
          <h2 className="text-3xl md:text-5xl font-light mb-8">The Service</h2>
          <div className="box-service">
              <ServiceCarousel />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id='client' className="bg-primary py-16 pb-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-light  text-secondary text-center mb-16">
            Our Client
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-11 items-center">
            {client.map((data, index) => (
                <div key={index} className="flex justify-center">
                  <img src={data.imageUrl} alt={data.name} className="h-12 md:h-16 object-contain grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-pointer fill-blue-500" />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id='casestudy' className=" bg-gray-100 px-4 lg:px-8 pb-28 pt-32">
        <h2 className="text-3xl md:text-5xl font-light italic text-secondary text-center mb-12">
          Case Studies
        </h2>
        <div className='mb-10'>
          <StudiCasesCarousel/>
        </div>

      </section>

      {/* Gallery Section */}
      <section id='gallery' className="relative h-auto bg-cover bg-center px-8 py-16 lg:py-36"
      style={{ backgroundImage: `url('galleri-home-1.png')` }}>
        <div className="absolute inset-0 bg-primary opacity-80"></div>
        <div className="relative flex items-center justify-center h-full text-center">
          <div className="text-secondary md:max-w-7xl">
            <h3 className="text-xl md:text-3xl font-light italic text-secondary text-center mb-5">
              Part of Our Creative Team
              The Lore Influencer
            </h3>
            <h1 className="text-3xl md:text-5xl font-semibold mb-12">The Lore Influencer</h1>
            <GalleryCard />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="pt-32 pb-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-secondary text-center mb-12">
            Read The Articles
          </h2>

          <BlogCarousel />
          
          {/* <div className="text-center mt-8">
            <button className="border border-secondary py-3 px-6 md:px-8 hover:bg-secondary hover:text-primary font-bold italic text-xl lg:text-2xl">View All</button>
          </div> */}
          
        </div>
      </section>

    </div>
    
  );
}
