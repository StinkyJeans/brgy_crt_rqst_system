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
  <div className="grid grid-cols-2  ">
  <img src="logo.png" alt="Logo" class="h-50 w-auto "></img>
    <div className="flex justify-between  "> 
    <div>
    <div className="bg-white/[.8] p-6 rounded shadow-md min-w-[600px] min-h-[500px]"> 
      
        <h1 className="text-3xl text-center font-semibold font-md mb-8 text-black">Register</h1>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-2">
            <div>
            <label className="text-black">First Name:</label><input type="text"  
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            name="firstName"
            value={firstName}
            onChange={onChange}
            required
            />
          </div>  
          <div>
            <label className="text-black">Middle Name:</label><input type="text" 
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            name="middleName"
            value={middleName}
            onChange={onChange}
           
            />
            </div>
            <div>
            <label className="text-black">Last Name:</label><input type="text"  
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            name="lastName"
            value={lastName}
            onChange={onChange}
            required
            />
            </div>
            <div>
            <label className="text-black">Email:</label><input type="text"   
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            name="email"
            value={email}
            onChange={onChange}
            required
            />
            </div>
            <div>
            <label className="text-black">Password:</label><input type="password"  
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            name="password"
            value={password}
            onChange={onChange}
            required
            />
            </div>
            <div>
            <label className="text-black">Birth Date:</label><input type="date"   
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black" 
            name="birthDate"
            value={birthDate}
            onChange={onChange}
            required
            />
            </div>
            <div>
          <label className='text-black' htmlFor="gender">Gender:</label>
          <select
            className="w-full border border-gray-300 text-black rounded px-3  focus:outline-none focus:border-blue-400 focus:text-black"
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
       
             <FilePicker onChange={handleFileChange} />
  
            {/* Button and link */}

            </div >
            <div className="">
            <button type="submit" className="min-w-[100px] min-h-[70px] bg-blue-500 px-10 text-white rounded hover:bg-blue-600 mt-[7%] ml-[34%]">
              Register
            </button>
            </div>
          </form>
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <Link className="block text-center text-blue-500 hover:underline mt-2" href="/login">
          Login with an existing account
          </Link>
        </div>
      </div>
  </div>
  </div>
  

  
  )
}

export default Register;