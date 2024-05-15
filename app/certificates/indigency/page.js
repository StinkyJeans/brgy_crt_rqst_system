import React from 'react'

export default function page() {
  return (
    <div>
      <label className="ml-[45%] font-semibold font-sans">BARANGAY INDIGENCY</label>
      <div className="grid grid-cols-2 gap-5 mb-">
        <div>
          <img src="/certificate Indigency.jpg" alt="Logo" class="h-50 w-auto mt-20"></img>
        </div>
        <div className='font-mono mt-20'>
        Lorem ipsum dolor sit amet. Et consequatur sequi ut facilis dolor ab nobis voluptatum sit quos accusamus. Ea ullam quidem eum nisi velit ut pariatur aliquid rem ipsam nesciunt est error accusamus ut quae galisum ut odio voluptatem. Sed quam voluptates aut sapiente iste est rerum laboriosam At nihil repellat aut explicabo dolor sit molestiae rerum non velit eligendi.
        <div>
          <div className="pt-10 pb-7">
            <label className="text-white">Purpose:</label>
            <input className="text-black" type="text"  

            />
          </div>
          <button className="mt-5 w-[40%] rounded bg-blue-500 text-white py-2 text-md font-bold font-mono hover:bg-blue-600 mb-10">
            submit
            </button>
        </div>
        </div>

      </div>
    </div>
  )
}