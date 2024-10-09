'use client'
import React, { use, useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
   const [menuOpen, setMenuOpen] = React.useState(false)

   const NavbarItem = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/service" },
    { name: "Case Study", link: "/case-study" },
   ]

   const pathname = usePathname();
   const isServicePage = pathname === '/service';
   
   return (
      <nav>
      {/* <nav className="shadow-md relative z-[999] p-4"> */}
      <div className="relative max-w-[90rem] flex justify-between mx-auto items-center"> 
         {/* Logo / Title */} 
         <div className=" text-black font-bold text-2xl md:text-4xl font-display">
            <Link href="/">
            <img src='/logo.png' alt="" className='w-52' />
            </Link>
         </div>

         {/* Links */}
         <ul className="hidden lg:flex space-x-4 items-center">
            {NavbarItem?.map((menu, index) => (
            <li
               key={index}
                  className={`text-secondary px-4 text-xl hover:text-accent ${
                     isServicePage ? "text-white" : "text-secondary"
                  }`}>
               
               <a href={menu?.link}>{menu?.name}</a>
            </li>
            ))}
         </ul>

         <div className="hidden md:inline-block text-black">
            <a href="https://wa.me/6285720779924" target="_blank" className="inline-flex items-center px-6 py-2  bg-black text-white transition">
               Kontak
            </a>
         </div>

         {/* Mobile Menu Button */}
         <div className="md:hidden">
            {menuOpen ? (
            <AiOutlineClose 
               fontSize={28}
               // className="text-black cursor-pointer"
               className={`text-secondary cursor-pointer ${
                     isServicePage ? "text-white" : "text-secondary"
                  }`}
               onClick={() => setMenuOpen(false)}
            />
            ) : (
            <AiOutlineMenu
               fontSize={28}
               onClick={() => setMenuOpen(true)}
               // className="text-black cursor-pointer"
               className={`text-secondary cursor-pointer ${
                     isServicePage ? "text-white" : "text-secondary"
                  }`}
            />
            )}
         </div>
      </div>

            {/* Mobile Menu */}
            {menuOpen && (
               <div className="w-full md:hidden bg-primary flex justify-center space-y-2 h-screen right-0 top-0 px-4 absolute">
                  <AiOutlineClose 
                  fontSize={28}
                 className="text-black cursor-pointer absolute right-4 top-4"
                 
                  onClick={() => setMenuOpen(false)}
                  />
                  <ul className="flex items-center flex-col pt-10 space-y-4">

                  {NavbarItem?.map((menu, index) => (
                  <li
                     key={index}
                     className=" text-secondary px-4 text-lg"
                  >
                     <a href={menu?.link}>{menu?.name}</a>
                  </li>
                  ))}
                  </ul>
               </div>
            )}
      {/* </nav> */}
    </nav>
   )
}