"use client"
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [purpose, setPurpose] = useState('');
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('');
  const [documentTitle , setDocumentTitle] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail ] = useState('');
  const [status, setStatus] = useState('pending'); // Default status

  useEffect(() => {
    // Set document title to "Barangay Clearance" by default
    setDocumentTitle('Barangay Clearance');
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      const timeout = setTimeout(() => {
        setIsSubmitted(false);
        window.location.href = '/';
      }, 3500); 
      return () => clearTimeout(timeout);
    }
  }, [isSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !email || !purpose)  {
      setError('Please fill up all the requirements');
      return;
    }

    try {
      const res = await fetch('/api/certificates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          email,
          purpose,
          documentTitle: documentTitle,
          status
        }),
      });

      if (res.status === 400) {
        setError('This Certificate has already been chosen');
      } else if (res.status === 200) {
        setError('');
        setIsSubmitted(true);
      }
    } catch (error) {
      setError('Error, try again');
      console.error('Error:', error);
    }
  };

  return (
    <div className=" h-[850px] mb-10 bg-white rounded pl-5 pr-5">
      {isSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center">
          You have requested this document. Please wait for notification within 2-3 working days.
        </div>
      )}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      )}
      <label className="ml-[45%] font-semibold font-sans text-black">Barangay Clearance</label>
      <div className="grid grid-cols-2 gap-5">
        <div className=''>
          <img src="/Certificate Indigency.jpg" alt="Logo" className="h-50  w-auto mt-20 border-2 border-black rounded"></img>
        </div>
        <div className="font-mono mt-20">
          <div className="">
          <label className='text-gray-500'>
          Barangay Clearance: This document is an official certification issued by the 
          barangay confirming that the holder is a resident of that specific barangay and has
           no outstanding obligations such as unpaid taxes or fees. It's often required for a 
           variety of purposes, including employment, business permits, applying for government IDs, or legal transactions.
          </label>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="pt-10 pb-3">
              <label htmlFor="Enter your full name " className="text-gray-700" >Full Name:</label>
              <input
                id="firstName"
                type="=text"
                className="text-black border-2 border-black rounded focus:border-blue-500 focus:outline-none"
                // placeholder="full name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="pb-2">
              <label htmlFor="email" className="text-gray-700">Email:</label>
              <input
                id="email"
                type="text"
                className="text-black border-2 border-black rounded focus:border-blue-500 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-black text-base/8" htmlFor="purpose">Purpose:</label>
              <select
                className="w-full border border-gray-300 text-black rounded focus:outline-none focus:border-blue-400 focus:text-black"
                id="purpose"
                name="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
              >
                <option value="">Select Purpose</option>
                <option value="work">Work</option>
                <option value="incident">Incident</option>
              </select>
            </div>
            <button type="submit" className=" mt-5 w-[40%] rounded bg-blue-500 text-white py-2 text-md font-bold font-mono hover:bg-blue-600 mb-10">
              Submit
            </button>
          </form>
        </div>
      </div>
      <br></br>
    </div>
  );
}
