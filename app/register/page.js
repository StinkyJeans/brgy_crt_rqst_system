"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FilePicker from '../components/FilePicker';
import { useEdgeStore } from '../lib/edgestore';



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

    
    if (!isValidEmail(email)){
      setError("Email is invalid")
    }
  
    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('middleName', middleName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('birthDate', birthDate);
      formData.append('gender', gender);


      const edge = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => {
          // you can use this to show a progress bar
          console.log(progress);
        },
      });
  
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
          gender,
          image: edge.url
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
  const [file, setFile] = React.useState();
  const { edgestore } = useEdgeStore();

  
  return (
    <div className="absolute inset-0 bg-cover bg-center z-[-1]" style={{ backgroundImage: "url('./login-bg.png')" }}>

    <div className="flex  ml-[50%] justify-between mt-[10%] pr-[10%] "> 
    <div className="bg-white/[.8] p-6 rounded shadow-md w-[100%] mr-[25%]"> 
      <h1 className="text-2xl text-center font-semibold mb-6 text-black">Register</h1> 
      <p className="text-red-600 text-[14px] mb-2">{error && error}</p> 
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
        <div>
        <p className="text-base/8 text-black">First Name:</p>
          <input 
            type="text"
            className="w-full border border-gray-300 text-black rounded focus:outline-none focus:border-blue-400 focus:text-black"
            name="firstName"
            value={firstName}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <p className="text-base/8 text-black">Middle Name:</p>
          <input 
            type="text"
            className="w-full border border-gray-300 text-black rounded focus:outline-none focus:border-blue-400 focus:text-black"
            name="middleName"
            value={middleName}
            onChange={onChange}
            required
          />
        </div>
        <div>
        <p className="text-base/8 text-black">Last Name:</p>
          <input 
            type="text"
            className="w-full border border-gray-300 text-black rounded focus:outline-none focus:border-blue-400 focus:text-black"
            name="lastName"
            value={lastName}
            onChange={onChange}
            required
          />
        </div>
        <div>
        <p className="text-base/8 text-black">Email:</p>
          <input 
            type="text"
            className="w-full border border-gray-300 text-black rounded focus:outline-none focus:border-blue-400 focus:text-black"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
        <p className="text-base/8 text-black">Password:</p>
          <input 
            type="password"
            className="w-full border border-gray-300 text-black rounded focus:outline-none focus:border-blue-400 focus:text-black"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div>
        <p className="text-base/8 text-black">Birth Date:</p>
          <input 
            type="date"
            className="w-full border border-gray-300 text-black rounded focus:outline-none focus:border-blue-400 focus:text-black"
            name="birthDate"
            value={birthDate}
            onChange={onChange}
            required
          />
        </div>
        <div className="col-span-3 text-black">
          <label className='text-base/8' htmlFor="gender">Gender:</label>
          <select
            className="w-50 border border-gray-300 text-black rounded  mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            name="gender"
            value={gender}
            onChange={onChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="col-span-3 text-black ">
        <p className="text-base/10 text-black">Please Upload ID:</p>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files?.[0]);
            }}
          />
        </div>
        <button type="submit" className="col-span-3 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"> 
          Register
        </button>
      </form>
      <div className="text-center text-gray-500 mt-2">- OR -</div>
      <Link className="block text-center text-blue-500 hover:underline mt-1" href="/login"> 
        Login with an existing account
      </Link>
    </div>
  </div>
  </div>

  
  )
}

export default Register;