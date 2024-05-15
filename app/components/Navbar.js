"use client"
import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();
    
    
    console.log(session);
    return (
        <div className=' relative sticky top-0 z-50'>
            <ul className="flex justify-between m-10 items-center">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
                    <Link href="/">
                        <li className="ml-2 text-base">Home</li>
                    </Link>
                </div>
                <div className="flex gap-5 text-base/10">
                {session ? (
                <Link href="/contactus">
                        <li className="ml-2 ">Contact Us</li>
                    </Link>  
                ) : null }
                    {!session ? (
                        <>
                            <Link href="/login">
                                <li>Login</li>
                            </Link>

                            <Link href="/register">
                                <li>Signup</li>
                            </Link>
                        </>
                    ) : (
                        <> 
                          
                          <Link href="/userInfo">
                          {session.user?.email}
                          </Link>

                            
                            <li>
                                <button
                                    onClick={() => {
                                        signOut({callbackUrl:"/login"});
                                    }}
                                    className=" px-5 -mt-1 bg-blue-800 rounded-full hover:bg-sky-700 text-base/8"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
