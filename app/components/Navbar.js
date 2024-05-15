"use client"
import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();
    
    
    console.log(session);
    return (
        <div className=' bg-white bg-opacity-50 backdrop-filter backdrop-blur-md text-white text-center sticky z-[50]  top-0 w-full '>
            <ul className="flex justify-between  items-center ml-[500px] mr-[500px]">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
                    <Link href="/">
                        <li className="ml-2 text-base text-black">Home</li>
                    </Link>
                </div>
                <div className="flex gap-5 text-base/10">
                {session ? (
                <Link href="/contactus">
                        <li className="ml-2 text-black ">Contact Us</li>
                    </Link>  
                ) : null }
                    {!session ? (
                        <>
                            <Link href="/login">
                                <li className="text-black">Login</li>
                            </Link>

                            <Link href="/register">
                                <li className='text-black'>Signup</li>
                            </Link>
                        </>
                    ) : (
                        <> 
                          
                          <Link className="text-black" href="/userInfo">
                          {session.user?.email}
                          </Link>

                            
                            <li>
                                <button
                                    onClick={() => {
                                        signOut({callbackUrl:"/login"});
                                    }}
                                    className=" px-5 -mt-1 bg-blue-800 rounded-full hover:bg-sky-700 text-base/8 text-black"
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
