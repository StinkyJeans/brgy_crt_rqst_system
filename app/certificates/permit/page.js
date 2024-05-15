"use client"
import React, { useState } from 'react';

export default function Page() {
  const [purpose, setPurpose] = useState('');
  const [documentTitle, setDocumentTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/certificates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,  
          purpose,
          documentTitle
        }),
      });

      if (res.status === 400) {
        setError("This Certificate has already chosen");
      } else if (res.status === 200) {
        setError("");
        // router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-auto mb-10">
      <label className="ml-[45%] font-semibold font-sans">Business Permit</label>
      <div className="grid grid-cols-2 gap-5 ">
        <div>
          <img src="/Business Permit.jpg" alt="Logo" className="h-50  w-auto mt-20"></img>
        </div>
        <div className='font-mono mt-20'>
          Lorem ipsum dolor sit amet. Et consequatur sequi ut facilis dolor ab nobis voluptatum sit quos accusamus. Ea ullam quidem eum nisi velit ut pariatur aliquid rem ipsam nesciunt est error accusamus ut quae galisum ut odio voluptatem. Sed quam voluptates aut sapiente iste est rerum laboriosam At nihil repellat aut explicabo dolor sit molestiae rerum non velit eligendi.
          <form onSubmit={handleSubmit}>
          <div className="pt-10 pb-7">
              <label htmlFor="purpose" className="text-white">First Name:</label>
              <input 
                id="firstName" 
                type="text" 
                className="text-black" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
                required 
              />
            </div>
            <div>
                  <label className="text-black text-base/8" htmlFor="gender">Purpose:</label>
                  <select
                    className="w-full border border-gray-300 text-black rounded   focus:outline-none focus:border-blue-400 focus:text-black"
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
                <div>
                  <label className="text-black text-base/8" htmlFor="gender">Document Title:</label>
                  <select
                    className="w-full border border-gray-300 text-black rounded   focus:outline-none focus:border-blue-400 focus:text-black"
                    id = "documentTitle"
                    name="documentTitle"
                    value={documentTitle}
                    onChange={(e) => setDocumentTitle(e.target.value)} 
                    required
                  >
                    <option value="">Select Document Type</option>
                    <option value="Barangay_Clearance">Barangay Clearance</option>
                    <option value="Barangay_Indigency">Barangay Idigency</option>
                    <option value="Barangay_Residency">Barangay Residency</option>
                    <option value="Business_Permit">Business Permit</option>
                    <option value="Blotter">Blotter</option>
                    <option value="Cedula">Cedula</option>
                  </select>
                </div>
            <button type="submit" className="mt-5 w-[40%] rounded bg-blue-500 text-white py-2 text-md font-bold font-mono hover:bg-blue-600 mb-10">
              Submit
            </button>
          </form>
        </div>
      </div>
      <br></br>
    </div>
  );
}
