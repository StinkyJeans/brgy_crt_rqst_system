"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FilePicker from '../components/FilePicker';
import { useEdgeStore } from '../lib/edgestore';

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFile] = useState();
  const { edgestore } = useEdgeStore();
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "middleName") {
      setMiddleName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else if (name === "birthDate") {
      setBirthDate(value);
    } else if (name === "gender") {
      setGender(value);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
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
      formData.append('image', file);

      const edge = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => {
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
          image: edge.url,
          verified: false
        }),
      });

      if (res.status === 400) {
        setError("This email is already registered");
      } else if (res.status === 200) {
       
        setError("User is being verified. Please wait for 2-3 working days.");

        setTimeout(() => {
          router.push("/login");
        }, 3000); 
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
    <div className="grid grid-cols-2 mb-20 mt-10">
      <img src="logo.png" alt="Logo" className="h-50 w-auto" />
      <div className="flex justify-between">
        <div>
          <div className="bg-white/[.8] p-6 rounded shadow-md min-w-[600px] min-h-[500px]">
            <h1 className="text-3xl text-center font-semibold font-md mb-8 text-black">Register</h1>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-black text-base/8">First Name:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-black text-base/8">Middle Name:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                    name="middleName"
                    value={middleName}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label className="text-black text-base/8">Last Name:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-black text-base/8">Email:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-black text-base/8">Password:</label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-black text-base/8">Confirm Password:</label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-black text-base/8">Birth Date:</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 text-black text-sm rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                    name="birthDate"
                    value={birthDate}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-black text-base/8" htmlFor="gender">Gender:</label>
                  <select
                    className="w-full border border-gray-300 text-black rounded   focus:outline-none focus:border-blue-400 focus:text-black"
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

              </div>
              <div>
                <label className="text-black text-base">Please Upload your ID picture with your address:</label>
                <FilePicker onChange={handleFileChange} />
              </div>
              <div className="">
              <button
              type="submit"
              className={`mt-2 relative w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 ${loading ? 'cursor-not-allowed' : ''}`}
              disabled={loading}
              style={{ padding: '0.75rem' }}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <span className="mr-2">Creating Account...</span>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.997c-1.302 0-2.525.314-3.608.854L6 11.291zM12 20v-4a8.003 8.003 0 01-4-6.928L4.728 13.9A9.967 9.967 0 002 12c0 5.523 4.477 10 10 10z"></path>
                  </svg>
                </div>
              ) : (
                "Signin"
              )}
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
  );
};

export default Register;
