'use client'
import Link from 'next/link';
import Navbar from "@/components/navbar";


export default function Page() {
  

  return (
    <div className="antialiased">
      <nav className="relative w-full p-4">
         <div className="absolute inset-0 bg-white opacity-70 "></div>
         <Navbar />
      </nav> 

      <section id='' className="max-w-screen flex flex-col gap-8 md:flex-row p-8 md:p-16 justify-center items-center ">
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center">
          <h2 className="text-gray-500 italic mb-2 text-2xl">Magazine</h2>
          <div className="flex flex-col items-center">
            <div className="lg:w-full mx-auto px-4 mb-6 text-center">
              <h2 className="text-2xl md:text-5xl italic font-medium leading-tight text-secondary">
                Àvoguest: Majalah Virtual Brand Àvoust Peace Menyambut Pelanggannya Menjadi Wajah dari Àvoust Peace 
              </h2>
            </div>
            <h2 className="text-xl">Date: 07 October 2024</h2>
          </div>
        </div>
        <div className="md:w-1/3 h-auto w-full bg-cover bg-center relative">
            <div className='w-full'>
               <img src="/blog/detail/avoust-bg.png" className='w-full object-cover h-auto' alt="" />
            </div>
        </div>
      </section>

      <section className='relative py-16'> 
          {/* <div className="w-full relative h-screen md:h-[130vh] bg-top bg-no-repeat bg-cover"
          style={{
                backgroundImage: `url('/portfolio/detail/hero.JPG')`,
                backgroundSize: '100% 100%',
              }}>
              
              <div className="w-full absolute flex flex-col justify-center items-center lg:top-1/4 top-1/3 left-0 right-0 bottom-0"> 
                    <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-light mb-3 px-4">ÀVOUST PEACE</h1>
              </div>
          </div> */}

          <div className="grid grid-row-2 max-w-6xl mx-auto gap-y-10 py-16 px-6 md:px-0">
            <div className="text-lg md:text-xl max-w-5xl mx-auto">
              
              <p className="mb-3 first-letter:text-7xl first-letter:font-bold  first-letter:me-3 first-letter:float-start">Àvoust Peace, atau lebih dikenal sebagai Àvoust, adalah brand yang berdiri pada tahun 2022 dengan kreasi gaun privat untuk acara-acara khusus seperti graduation. Kini, Àvoust Peace telah berkembang merilis koleksinya sendiri yang penuh dengan sentuhan personal. Koleksi pertama mereka, È Noir Collection dengan produk pertama mereka Dé Edge Basic Jacket yang menjadi sangat populer hingga saat ini banyak pelanggan yang masih menanyakan restock-nya.
              </p>
              
              <p className="mb-3">Membawa visi yang kuat dalam dunia fashion, Àvoust memadukan gaya chic, elegan, timeless, dan sentuhan old money aesthetic, menciptakan karya yang tak bisa dimakan oleh waktu. Brand ini fokus pada desain yang tidak hanya mengikuti tren, tetapi juga bertahan dan terus relevan dari generasi ke generasi.</p>
              
              <p className='mb-3'>Baru-baru ini, Àvoust Peace meluncurkan majalah virtual yang dikenal sebagai Àvoguest, atau disingkat VVM (Virtual Voust Magazine). Majalah ini bukan sekadar media mode, melainkan sebuah platform kreatif yang menyambut setiap pelanggannya untuk menjadi wajah utama atau bintang dari brand Àvoust Peace. Dalam setiap edisinya, Àvoust menampilkan pelanggan terpilih, menyoroti gaya hidup, cerita, dan karya kreatif mereka yang seolah-olah menjadi bagian dari keluarga besar Àvoust Peace.</p>
              
              <p className='mb-3'>Salah satu keunikan dari Àvoguest adalah peluang bagi pelanggan untuk saling berkenalan dan berkolaborasi. Àvoust akan mengundang mereka yang ingin menjadi bagian dari kolaborasi kreatif ini, menjadikan pengalaman fashion lebih personal dan eksklusif.</p>
              
              <p className='mb-3'>Dengan semangat kolaborasi dan seni yang kuat, Àvoguest membuka ruang bagi pelanggan untuk berbagi ide dan estetika hidup mereka. Ini adalah kesempatan di mana seni, mode, dan kreativitas bersatu, menjadikan pelanggan sebagai wajah utama dari Àvoust Peace. Lebih dari sekadar brand, Àvoust adalah perwujudan dari keinginan seni yang terus hidup—di mana kreativitas dan eksklusivitas menyatu dalam harmoni elegan antara pelanggan dan brand.</p>
              
              <p className='mb-3'>Jadilah bagian dari cerita Àvoust dan tampilkan gayamu di majalah Àvoguest yang mencerminkan keunikan, eksklusivitas, dan keindahan timeless dari Àvoust Peace. Buatlah karya yang tidak lekang oleh waktu dan kolaborasikan postingan Instagram-mu dengan Àvoust Peace. Siapa tahu, kamu bisa terpilih menjadi salah satu wajah dari brand ini.</p>
            </div>
                
            <div className="">
              <div className="w-full relative h-auto bg-cover bg-no-repeat bg-center">
                  {/* <img src="/portfolio/detail/yuobi-1.PNG" className='h-full w-full' alt="" /> */}
              </div>
            </div>
              
          </div>   
          
        </section>

    </div>
  )
}