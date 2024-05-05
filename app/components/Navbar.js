import React from 'react'
import Link from "next/link";


const Navbar = () => {
  return (
    <div>
        <ul className="flex justify-between m-10 item-center">
        <div>
            <Link href="/"> 
            <li>home</li>
            </Link>
        </div>
        <div className="flex gap-10">
            <Link href="/dashboard"> 
            <li>Dashboard</li>
            </Link>
        </div>
        <div>
            <Link href="/login"> 
            <li>login</li>
            </Link>
        </div>
        <div>
            <Link href="/register"> 
            <li>Signup</li>
            </Link>
        </div>
       </ul>
    </div>
  )
}

export default Navbar
