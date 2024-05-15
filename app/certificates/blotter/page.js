"use client"
import React, { useState } from 'react';

export default function Page() {
  const [purpose, setPurpose] = useState('');
  const [documentTitle, setDocumentTitle] = useState('');
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
      <label className="ml-[45%] font-semibold font-sans">Blotter</label>
      <div className="grid grid-cols-2 gap-5 ">
        <div>
          <img src="/Blotter.jpg" alt="Logo" className="h-50  w-auto mt-20"></img>
        </div>
        <div className='font-mono mt-20'>
          Lorem ipsum dolor sit amet. Et consequatur sequi ut facilis dolor ab nobis voluptatum sit quos accusamus. Ea ullam quidem eum nisi velit ut pariatur aliquid rem ipsam nesciunt est error accusamus ut quae galisum ut odio voluptatem. Sed quam voluptates aut sapiente iste est rerum laboriosam At nihil repellat aut explicabo dolor sit molestiae rerum non velit eligendi.
          <form onSubmit={handleSubmit}>
            <div className="pt-10 pb-7">
              <label htmlFor="purpose" className="text-white">Purpose:</label>
              <input 
                id="purpose" 
                type="text" 
                className="text-black" 
                value={purpose} 
                onChange={(e) => setPurpose(e.target.value)} 
              />
            </div>
            <div className="pt-10 pb-7">
              <label htmlFor="documentTitle" className="text-white">Document Title:</label>
              <input 
                id="documentTitle" 
                type="text" 
                className="text-black" 
                value={documentTitle} 
                onChange={(e) => setDocumentTitle(e.target.value)} 
              />
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
