"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import {  DocumentTextIcon} from '@heroicons/react/solid';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const BarangayClearance= () => {
    // Navigate to another page
    router.push('/certificates/clearance');
  }
  const BarangayIndigency= () => {
    // Navigate to another page
    router.push('/certificates/indigency');
  }
  const BarangayRecidency= () => {
    // Navigate to another page
    router.push('/certificates/recidency');
  }
  const BusinessPermit= () => {
    // Navigate to another page
    router.push('/certificates/permit');
  }
  const Blotter= () => {
    // Navigate to another page
    router.push('/certificates/blotter');
  }
  const Cedula= () => {
    // Navigate to another page
    router.push('/certificates/cedula');
  }

  return (
  
    <main className="flex flex-col mt-35 pt-10 pb-10 pl-5 pr-5 items-center font-sans font-semibold mr-[1%]">
    <div>
    {session ? (
    <div class="grid grid-cols-3 gap-10 ] ">
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
         
         <button  onClick={BarangayIndigency} className="w-[50%] bg-blue-500 text-white py-2 text-base/8 font-bold font-mono hover:bg-blue-600 mb-10">PROCEED</button>
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
         
         <button  onClick={BarangayRecidency} className="w-[50%] bg-blue-500 text-white py-2 text-base/8 font-bold font-mono hover:bg-blue-600 mb-10">PROCEED</button>
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
          <p class="text-xl font-serif font-semibold text-[#434955]">Business Permit</p>

         </div>
         <div class="  text-gray-400 text-base text-center font-medium px-10">
           View Business Permit <br></br> and have a chance to inquire online
         </div>
         
         <button  onClick={BusinessPermit} className="w-[50%] bg-blue-500 text-white py-2 text-base/8 font-bold font-mono hover:bg-blue-600 mb-10">PROCEED</button>
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
         
         <button  onClick={Blotter} className="w-[50%] bg-blue-500 text-white py-2 text-base/8 font-bold font-mono hover:bg-blue-600 mb-10">PROCEED</button>
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
         
         <button  onClick={Cedula} className="w-[50%] bg-blue-500 text-white py-2 text-base/8 font-bold font-mono hover:bg-blue-600 mb-10">PROCEED</button>
        </div>
        
        

    </div>
     ) : null }
</div>
    </main>

  );
}
