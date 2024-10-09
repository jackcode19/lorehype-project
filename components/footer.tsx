import React from 'react'

export default function Footer() {
   
   return (
      <footer className="bg-secondary text-primary p-6 md:p-8">
         <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-36 gap-y-16">

               {/* Company Section */}
               <div className='col-span-2 lg:col-span-1'>
                  <h3 className="font-semibold mb-4">Contact</h3>
                  <div className="space-y-2">
                     <h4><a href="#" className="text-sm"> <b>Direct Message</b> : @lorehypeagency</a></h4>
                     <a href="#" className="text-sm"><i>Hours :</i>  Monday to Friday 02:00 PM – 09 PM</a>
                  </div>

                  <div className="mt-6 space-y-2">
                     <h4 className='text-sm font-bold'>Business Inquiries</h4>
                     <a href="#" className="text-sm"><i>Email : lorehypagency@gmail.com</i></a>
                  </div>

                  <div className="mt-6 space-y-2">
                     <h4 className='text-sm font-bold'>Mailing Address</h4>
                     {/* Replace <td> with <div> */}
                     <div>
                        <a href="#" className="text-sm"><i>LOREHYPE Jl Bina Kencana Samolo Blok IV NO 23, Ciherang, Kec Karangtengah Kab Cianjur, Jawa Barat</i></a>
                     </div>
                  </div>
               </div>

               {/* Useful Link Section */}
               <div>
                  <h5 className="font-semibold mb-4">Menu</h5>
                  <ul className="space-y-2">
                     <li><a href="#about" className="text-sm hover:underline">About</a></li>
                     <li><a href="#service" className="text-sm hover:underline">Services</a></li>
                     <li><a href="#studiCases" className="text-sm hover:underline">Studi Cases</a></li>
                     <li><a href="#team" className="text-sm hover:underline">Team</a></li>
                     <li><a href="#gallery" className="text-sm hover:underline">Gallery</a></li>
                     <li><a href="#blog" className="text-sm hover:underline">Blog</a></li>
                  </ul>
               </div>

               {/* Social Media Section */}
               <div>
                  <h5 className="font-semibold mb-4">Social Media</h5>
                  <ul className="space-y-2">
                     <li><a href="#" className="text-sm hover:underline">Instagram</a></li>
                     <li><a href="#" className="text-sm hover:underline">Tiktok</a></li>
                  </ul>
               </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-10 text-center md:text-left">
               <h1 className="text-5xl md:text-8xl font-bold text-primary">Lorehype</h1>
               <p className="mt-4 text-sm text-gray-300">© 2024 Lorehype. All rights reserved.</p>
            </div>
         </div>
      </footer>

      // <footer className="bg-secondary text-primary">
      //    <div className="container mx-auto px-4 md:px-8">
      //       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-36 gap-y-16">

      //          {/* Company Section */}
      //          <div className='col-span-2 lg:col-span-1'>
      //             <h3 className="font-semibold mb-4">Contact</h3>
      //             <div className="space-y-2">
      //                <h4><a href="#" className="text-sm"> <b>Dirrect Massage</b> : @lorehypeagency</a></h4>
      //                <a href="#" className="text-sm"><i>Hours :</i>  Monday to Friday 02:00 PM – 09 PM</a>
      //             </div>

      //             <div className="mt-6 space-y-2">
      //                <h4 className='text-sm font-bold'>Business Inquiries</h4>
      //                <a href="#" className="text-sm"><i>Email : lorehypagency@gmail.com</i></a>
      //             </div>

      //             <div className="mt-6 space-y-2">
      //                <h4 className='text-sm font-bold'>Mailing Address</h4>
      //                <td>
      //                <a href="#" className="text-sm"><i>LOREHYPE Jl Bina Kencana Samolo Blok IV NO 23, Ciherang, Kec Karangtengah Kab Cianjur, Jawa Barat</i> </a>
      //                </td>
      //             </div>
      //          </div>
               
      //          {/* Useful Link Section */}
      //          <div>
      //             <h5 className="font-semibold mb-4">Menu</h5>
      //             <ul className="space-y-2">
      //                <li><a href="#about" className="text-sm hover:underline">About</a></li>
      //                <li><a href="#service" className="text-sm hover:underline">Services</a></li>
      //                <li><a href="#studiCases" className="text-sm hover:underline">Studi Cases</a></li>
      //                <li><a href="#team" className="text-sm hover:underline">Team</a></li>
      //                <li><a href="#gallery" className="text-sm hover:underline">Gallery</a></li>
      //                <li><a href="#blog" className="text-sm hover:underline">Blog</a></li>
      //             </ul>
      //          </div>
               
      //          {/* Social Media Section */}
      //          <div>
      //             <h5 className="font-semibold mb-4">Social Media</h5>
      //             <ul className="space-y-2">
      //                <li><a href="#" className="text-sm hover:underline">Instagram</a></li>
      //                <li><a href="#" className="text-sm hover:underline">Tiktok</a></li>
                     
      //             </ul>
      //          </div>
      //       </div>

      //       {/* Footer Bottom Section */}
      //       <div className="mt-10 text-center md:text-left">
      //          <h1 className="text-5xl md:text-8xl font-bold text-primary">Lorehype</h1>
      //          <p className="mt-4 text-sm text-gray-300">© 2024 Lorehype. All rights reserved.</p>
      //       </div>
      //    </div>
      // </footer>
   )
}