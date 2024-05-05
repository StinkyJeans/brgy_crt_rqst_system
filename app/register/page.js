"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FilePicker from '../components/FilePicker';



const Register = () => {
const [error, setError] = useState("");
const router = useRouter();
const [firstName, setFirstName] = useState("")
const [middleName, setMiddleName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [birthDate, setBirthDate] = useState("")
const [gender, setGender] = useState("")

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
    
  };

  const onChange = (e) => {
    const target = e.currentTarget;

    console.log(target.name);

    if(target.name == "firstName")
    {
      setFirstName(target.value);
    }
    if(target.name == "middleName")
    {
      setMiddleName(target.value);
    }
    if(target.name == "lastName")
    {
      setLastName(target.value);
    }
    if(target.name == "email")
    {
      setEmail(target.value);
    }
    if(target.name == "password")
    {
      setPassword(target.value);
    }
    if(target.name == "birthDate")
    {
      setBirthDate(target.value);
    }
    if(target.name == "gender")
    {
      setGender(target.value);
    }
  }
  

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('middleName', middleName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('birthDate', birthDate);
      formData.append('gender', gender);


  
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName, 
          middleName, 
          lastName, 
          email, 
          password, 
          birthDate, 
          gender
        }),
      });

  
      if (res.status === 400) {
        setError("This email is already registered");
      } else if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.error("Error:", error);
    }
  };
  const handleFileChange = (file) => {
    setFile(file);
  };
  
  return (
    
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#212121] p-8 rounded shadow-md w-96">
          <h1 className="text-4xl text-center font-semibold mb-8">Register</h1>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          <form onSubmit={handleSubmit}>
            First Name:<input type="text" 
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            name="firstName"
            value={firstName}
            onChange={onChange}
            required
            />
            Middle Name:<input type="text" 
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            name="middleName"
            value={middleName}
            onChange={onChange}
            required
            />
            Last Name:<input type="text" 
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            name="lastName"
            value={lastName}
            onChange={onChange}
            required
            />
            Email:<input type="text" 
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            name="email"
            value={email}
            onChange={onChange}
            required
            />
            Password:<input type="password" 
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            name="password"
            value={password}
            onChange={onChange}
            required
            />
            Birth Date:<input type="date" 
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            name="birthDate"
            value={birthDate}
            onChange={onChange}
            required
            />
          <label htmlFor="gender">Gender:</label>
          <select
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            name="gender"
            value={gender}
            onChange={onChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
           {/* File picker */}
             {/* <FilePicker onChange={handleFileChange} /> */}
  
            {/* Button and link */}
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Register
            </button>
          </form>
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <Link className="block text-center text-blue-500 hover:underline mt-2" href="/login">
          Login with an existing account
          </Link>
        </div>
    </div>
  )
}

export default Register;