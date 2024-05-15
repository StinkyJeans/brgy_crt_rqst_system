"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  console.log("Session:", session);
console.log("Status:", status);

  useEffect(() => {
    console.log("Session:", session);
    console.log("Status:", status);

    if (status === "authenticated" && session?.user?.isAdmin) {
      console.log("User is authenticated and is an admin. Redirecting to /admin");
      router.push("./admin/homepage");
    } else if (status === "authenticated") {
      console.log("User is authenticated but is not an admin. Redirecting to /");
      router.replace("/");
    }
  }, [session, status, router]);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      setLoading(false);
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password
    });

    if (res?.error) {
      setError(res.error);
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2">
      <img src="logo.png" alt="Logo" className="h-50 w-auto mt-15" />
      <div className="flex flex-col ml-10 justify-between">
        <div className="bg-white/[.8] p-8 rounded shadow-md w-96 relative z-10">
          <h1 className="text-3xl text-black text-center font-semibold mb-8">Login</h1>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          <form onSubmit={handleSubmit}>
            <p className="text-base/10 text-black">Email:</p><input type="text"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              required
            />
            <p className="text-base/10 text-black">Password:</p><input type="password"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              required
            />
            <button
              type="submit"
              className={`relative w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 ${loading ? 'cursor-not-allowed' : ''}`}
              disabled={loading}
              style={{ padding: '0.75rem' }}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <span className="mr-2">Signing in</span>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.997c-1.302 0-2.525.314-3.608.854L6 11.291zM12 20v-4a8.003 8.003 0 01-4-6.928L4.728 13.9A9.967 9.967 0 002 12c0 5.523 4.477 10 10 10z"></path>
                  </svg>
                </div>
              ) : (
                "Signin"
              )}
            </button>
          </form>
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <Link className="block text-center text-blue-500 hover:underline mt-2" href="/register">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
