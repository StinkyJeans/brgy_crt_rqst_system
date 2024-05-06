"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="absolute inset-0 bg-cover bg-center z-[-1]" style={{ backgroundImage: "url('./logo_nobg.png')" }}>
    <main className="flex flex-col mt-35 pt-10 pb-10 pl-5 pr-5 items-center font-sans font-semibold ml-[3%]">
      {session ? (

        <div className="bg-white/[.8] rounded-md w-[25%] mt-40 flex flex-col p-10 pl-14 items-center ">
          <p className="items-center mb-5 mr-10 text-black">Certification Offered</p>
          <div>
            <button 
              className="mb-2 rounded-md px-4 py-2 bg-blue-500 text-white w-80 hover:bg-sky-700" 
              onClick={() => router.push('/certificates/clearance')}
            >
              BARANGAY CLEARANCE
            </button>
            <button 
              className="mb-2 rounded-md px-4 py-2 bg-blue-500 text-white w-80 hover:bg-sky-700" 
              onClick={() => router.push('/certificates/indigency')}
            >
              BARANGAY INDEGENCY
            </button>
            <button 
              className="mb-2 rounded-md px-4 py-2 bg-blue-500 text-white w-80 hover:bg-sky-700" 
              onClick={() => router.push('/certificates/recidency')}
            >
              BARANGAY RECIDENCY
            </button>
            <button 
              className="mb-2 rounded-md px-4 py-2 bg-blue-500 text-white w-80 hover:bg-sky-700" 
              onClick={() => router.push('/certificates/permit')}
            >
              BUSINESS PERMIT
            </button>
            <button 
              className="mb-2 rounded-md px-4 py-2 bg-blue-500 text-white w-80 hover:bg-sky-700" 
              onClick={() => router.push('/certificates/blotter')}
            >
              BLOTTER
            </button>
            <button 
              className="mb-2 rounded-md px-4 py-2 bg-blue-500 text-white w-80 hover:bg-sky-700" 
              onClick={() => router.push('/certificates/cedula')}
            >
              CEDULA
            </button>
          </div>
        </div>
      ) : null }
    </main>
    </div>
  );
}
