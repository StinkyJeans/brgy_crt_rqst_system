"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import {signIn, useSession} from "next-auth/react";
import { useRouter } from 'next/navigation';


const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const session = useSession();

  useEffect(() => {
    if(session?.status === "authenticated"){
      router.replace("/dashboard");
    }
  }, [session, router])
  
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
    
  };
  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)){
      setError("Email is invalid")
    }



    const res = await signIn("credentials",{
      redirect:false,
      email,
      password
    })

    if(res?.error){
      setError("Invalid email or password");
      if(res?.url) router.replace("/dashboard");
    } else {
      setError("");
    }

   
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#212121] p-8 rounded shadow-md w-96">
          <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          <form onSubmit={handleSubmit}>
            Email:<input type="text" 
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            required
            />
            Password:<input type="password" 
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            required
            />
           
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Signin
            </button>
          </form>
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <Link className="block text-center text-blue-500 hover:underline mt-2" href="/register">
          Register here
          </Link>
        </div>
    </div>
  )
}

export default Login;