"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';



export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const BarangayClearance= () => {
    router.push('/certificates/clearance');
  }
  const BarangayIndigency= () => {
    router.push('/certificates/indigency');
  }
  const BarangayRecidency= () => {
    router.push('/certificates/recidency');
  }
  const BusinessPermit= () => {
    router.push('/certificates/permit');
  }
  const Blotter= () => {
    router.push('/certificates/blotter');
  }
  const Cedula= () => {
    router.push('/certificates/cedula');
  }

  return (
  
    <main className="flex flex-col mt-35 pt-10 mr-[5%] items-center font-sans font-semibold  sticky ">
    <div>
    {session ? (
    <div class="grid grid-cols-3 gap-20 mb-10 ] ">
        <div
          class=" profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
        >
          <div
            class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"
          >
           <div
             class="img_container w-full flex items-center justify-center relative z-40 "
           >
      <Image
        className='mb-5'
        src="/half indigency.jpg" 
        alt="My Image"
        width={500} 
        height={300} 
      />

           </div>
         </div>
         <div class="headings *:text-center *:leading-4 mb-5">
          <p class="text-xl font-serif font-semibold text-[#434955]">Barangay Clearance</p>

         </div>
         <div class="  text-gray-400 text-base text-center font-medium px-10">
         Official certification confirming residency and clearing outstanding obligations, crucial for various transactions in the Philippines.

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
                  <Image
        className='mb-5'
        src="/half indigency.jpg" 
        alt="My Image"
        width={500} 
        height={300} 
      />

           </div>
         </div>
         <div class="headings text-center leading-4 mb-5">
          <p class="text-xl  text-black font-serif font-semibold text-[#434955]">Barangay Indigency</p>

         </div>
         <div class="  text-gray-500 text-base text-center font-medium px-10 mb-10">
         Certificate for individuals in financial need, providing access to government assistance.
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
        <Image
        className='mb-1'
        src="/half residency.jpg" 
        alt="My Image"
        width={500} 
        height={300} 
      />

           </div>
         </div>
         <div class="headings *:text-center *:leading-4 mb-5">
          <p class="text-xl font-serif font-semibold text-[#434955]">Barangay Residency</p>

         </div>
         <div class="  text-gray-400 text-base text-center font-medium px-10 mb-10">
         Legal status as a resident of a specific barangay, verified through documents like utility bills or affidavits.
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
                   <Image
          
        src="/half Permit.jpg" 
        alt="My Image"
        width={500} 
        height={300} 
      />

           </div>
         </div>
         <div class="headings *:text-center *:leading-4 mb-5">
          <p class="text-xl font-serif font-semibold text-[#434955]">Business Permit</p>

         </div>
         <div class="  text-gray-400 text-base text-center font-medium px-10 mb-10">
         Authorization allowing businesses to operate within local government jurisdictions, obtained by fulfilling specific requirements and paying fees.
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
                             <Image
        className='mb-1'
        src="/half blotter.jpg"
        alt="My Image"
        width={500}
        height={300}
      />

           </div>
         </div>
         <div class="headings *:text-center *:leading-4 mb-5">
          <p class="text-xl font-serif font-semibold text-[#434955]">Blotter</p>

         </div>
         <div class="  text-gray-400 text-base text-center font-medium px-10 mb-10">
         Chronological record of incidents or complaints maintained by barangay or police officials for law enforcement purposes.
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
                                          <Image
        className='mb-7 '
        src="/half cedula.jpg" 
        alt="My Image"
        width={500} 
        height={300}
      />

           </div>
         </div>
         <div class="headings *:text-center *:leading-4 mb-5">
          <p class="text-xl font-serif font-semibold text-[#434955]">Cedula</p>

         </div>
         <div class="  text-gray-400 text-base text-center font-medium px-5 mb-5">
         Mandatory community tax certificate validating payment and required for various activities such as employment or property ownership in the Philippines.
         </div>
         
         <button  onClick={Cedula} className="w-[50%] bg-blue-500 text-white py-2 text-base/8 font-bold font-mono hover:bg-blue-600 mb-10">PROCEED</button>
        </div>
        
        

    </div>
     ) : null }
</div>
    </main>

  );
}
