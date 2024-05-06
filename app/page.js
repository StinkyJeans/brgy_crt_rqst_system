"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  return (

    <main className="flex flex-col mt-35 pt-10 pb-10 pl-5 pr-5 items-center font-sans font-semibold ml-[3%]">
      {session ? (

        <div className="bg-white/[.8] rounded-md w-[50%] flex flex-col p-10 pl-20 items-center">
          <p className="items-center mb-5 mr-10 text-black">Certification Offered</p>
          <div>
            <button 
              className="mb-2 rounded-md px-4 py-2 bg-blue-500 text-white w-80" 
              onClick={() => router.push('./barangay_clearance')}
            >
              BARANGAY CLEARANCE
            </button>
            <button 
              className="mb-2 rounded-md px-4 py-2 bg-blue-500 text-white w-80" 
              onClick={() => router.push('/page2')}
            >
              BARANGAY INDEGENCY
            </button>
            <button 
              className="mb-2 rounded-md px-4 py-2 bg-blue-500 text-white w-80" 
              onClick={() => router.push('/page3')}
            >
              BARANGAY RECIDENCY
            </button>
            <button 
              className="mb-2 rounded-md px-4 py-2 bg-blue-500 text-white w-80" 
              onClick={() => router.push('/page4')}
            >
              BUSINESS PERMIT
            </button>
            <button 
              className="mb-2 rounded-md px-4 py-2 bg-blue-500 text-white w-80" 
              onClick={() => router.push('/page5')}
            >
              BLOTTER
            </button>
            <button 
              className="mb-2 rounded-md px-4 py-2 bg-blue-500 text-white w-80" 
              onClick={() => router.push('/page6')}
            >
              CEDULA
            </button>
          </div>
        </div>
      ) : null }
    </main>
    

  );
}
