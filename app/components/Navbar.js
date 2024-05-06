"use client"
import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();
    
    
    console.log(session);
    return (
        <div>
            <ul className="flex justify-between m-10 items-center">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                    <Link href="/">
                        <li className="ml-2">Home</li>
                    </Link>
                </div>
                <div className="flex gap-10">

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
                            {session.user?.email}
                            <li>
                                <button
                                    onClick={() => {
                                        signOut();
                                    }}
                                    href="/login"
                                    className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
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
