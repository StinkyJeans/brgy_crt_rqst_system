"use client"

import { useSession } from 'next-auth/react';
import React from 'react'
import {  DocumentTextIcon} from '@heroicons/react/solid';
import { useRouter } from 'next/navigation';

export default function Homepage() {
    const { data: session } = useSession();
        const router = useRouter();

        const BarangayClearance= () => {
          // Navigate to another page
          router.push('/certificates/clearance');
        }
  return (
    
    <div>
    {session ? (
    <div class="grid grid-cols-3 gap-7 ml-[3%] mt-20">
        <div
          class=" profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
        >
          <div
            class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"
          >
           <div
             class="img_container w-full flex items-center justify-center relative z-40 "
           >
              <DocumentTextIcon className="h-10 w-10 text-gray-500" />

           </div>
         </div>
         <div class="headings *:text-center *:leading-4 mb-5">
          <p class="text-xl font-serif font-semibold text-[#434955]">Barangay Clearance</p>

         </div>
         <div class="  text-gray-400 text-base text-center font-medium px-10">
           View Barangay Clearance <br></br> and have a chance to inquire online
         </div>

        <button  onClick={BarangayClearance} className="w-[50%] bg-blue-500 text-white py-2 text-base/8 font-bold font-mono hover:bg-blue-600 mb-10">PROCEED</button>

        </div>
        <div
          class=" profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
        >
          <div
            class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"
          >
           <div
             class="img_container w-full flex items-center justify-center relative z-40 "
           >
              <DocumentTextIcon className="h-10 w-10 text-gray-500" />

           </div>
         </div>
         <div class="headings *:text-center *:leading-4 mb-5">
          <p class="text-xl font-serif font-semibold text-[#434955]">Barangay Indigency</p>

         </div>
         <div class="  text-gray-400 text-base text-center font-medium px-10">
           View Barangay Indigency<br></br> and have a chance to inquire online
         </div>
         
         <button className="w-[50%] bg-blue-500 text-white py-2 text-base/8 font-bold font-mono hover:bg-blue-600 mb-10">PROCEED</button>
        </div>
        <div
          class=" profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
        >
          <div
            class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"
          >
           <div
             class="img_container w-full flex items-center justify-center relative z-40 "
           >
              <DocumentTextIcon className="h-10 w-10 text-gray-500" />

           </div>
         </div>
         <div class="headings *:text-center *:leading-4 mb-5">
          <p class="text-xl font-serif font-semibold text-[#434955]">Barangay Recidency</p>

         </div>
         <div class="  text-gray-400 text-base text-center font-medium px-10">
           View Barangay Recidency <br></br> and have a chance to inquire online
         </div>
         
         <button className="w-[50%] bg-blue-500 text-white py-2 text-base/8 font-bold font-mono hover:bg-blue-600 mb-10">PROCEED</button>
        </div>
        <div
          class=" profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
        >
          <div
            class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"
          >
           <div
             class="img_container w-full flex items-center justify-center relative z-40 "
           >
              <DocumentTextIcon className="h-10 w-10 text-gray-500" />

           </div>
         </div>
         <div class="headings *:text-center *:leading-4 mb-5">
          <p class="text-xl font-serif font-semibold text-[#434955]">Busniess Permit</p>

         </div>
         <div class="  text-gray-400 text-base text-center font-medium px-10">
           View Business Permit <br></br> and have a chance to inquire online
         </div>
         
         <button className="w-[50%] bg-blue-500 text-white py-2 text-base/8 font-bold font-mono hover:bg-blue-600 mb-10">PROCEED</button>
        </div>
        <div
          class=" profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
        >
          <div
            class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"
          >
           <div
             class="img_container w-full flex items-center justify-center relative z-40 "
           >
              <DocumentTextIcon className="h-10 w-10 text-gray-500" />

           </div>
         </div>
         <div class="headings *:text-center *:leading-4 mb-5">
          <p class="text-xl font-serif font-semibold text-[#434955]">Blotter</p>

         </div>
         <div class="  text-gray-400 text-base text-center font-medium px-10">
           View Blotter <br></br> and have a chance to inquire online
         </div>
         
         <button className="w-[50%] bg-blue-500 text-white py-2 text-base/8 font-bold font-mono hover:bg-blue-600 mb-10">PROCEED</button>
        </div>
        <div
          class=" profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
        >
          <div
            class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"
          >
           <div
             class="img_container w-full flex items-center justify-center relative z-40 "
           >
              <DocumentTextIcon className="h-10 w-10 text-gray-500" />

           </div>
         </div>
         <div class="headings *:text-center *:leading-4 mb-5">
          <p class="text-xl font-serif font-semibold text-[#434955]">Cedula</p>

         </div>
         <div class="  text-gray-400 text-base text-center font-medium px-10">
           View Cedula <br></br> and have a chance to inquire online
         </div>
         
         <button className="w-[50%] bg-blue-500 text-white py-2 text-base/8 font-bold font-mono hover:bg-blue-600 mb-10">PROCEED</button>
        </div>
        
        

    </div>
     ) : null }
</div>
  )
}

