"use client"
import React, { useState } from 'react';
import { MailIcon, PhoneIncomingIcon } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

    const { data: session } = useSession();
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const sendEmail = async (event) => {
        event.preventDefault();
        setLoading(true);


        try {
          console.log({
            firstName,
            lastName,
            email,
            phoneNumber,
            message

        });

  
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  firstName,
                  lastName,
                  email,
                  phoneNumber,
                  message
                }),
            });
            const data = await response.json();
            setResult(data);
            setSubmitted(true);
            
        } catch (error) {
            setResult({ error: 'Something went wrong. Please try again later.' });
        }
        setLoading(false);
    };


    return (
        <div className="relative isolate bg-white/[.9] mb-20 rounded">

                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 pt-10 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                                <div
                                    className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                                        style={{
                                            clipPath:
                                                'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                                        }}
                                    />
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-500">Get in touch</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-500">
                                Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
                                integer elementum id sem. Arcu sed malesuada et magna.
                            </p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-500">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>

                                    </dt>
                                    <dd>
                                        Barangay Rizal
                                        <br />
                                        Buenavista, Agusan Del Norte
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Telephone</span>
                                        <PhoneIncomingIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-white" href="tel:+1 (555) 234-5678">
                                            +639063954153
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <MailIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-white" href="mailto:hello@example.com">
                                            barangayrizal@gmail.com
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <form onSubmit={sendEmail} className="px-6 pb-10 pt-10">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg text-black">
                            {submitted ? (
                                <p className="text-green-500">Message sent successfully!</p>
                            ) : (
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 text-black">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 ">
                                            First name
                                        </label>
                                        <div className="mt-2.5">
                                        <input
                                         type="text"
                                          name="firstName"
                                         value={firstName}
                                         required
                                          onChange={(e) => setFirstName(e.target.value)}
                                          className="border-solid block w-full rounded-md border-0  px-3.5 py-2  sm:text-sm sm:leading-6"
                                      />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 ">
                                            Last name
                                        </label>
                                        <div className="mt-2.5">
                                        <input
                                         type="text"
                                         name="lastName"
                                          value={lastName}
                                          required
                                          onChange={(e) => setLastName(e.target.value)}
                                          className="border-solid block w-full rounded-md border-0  px-3.5 py-2  sm:text-sm sm:leading-6"
                                      />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-semibold leading-6 ">
                                            Email
                                        </label>
                                        <div className="mt-2.5">
                                        <input
                                         type="email"
                                         name="email"
                                         value={email}
                                         required
                                         onChange={(e) => setEmail(e.target.value)}
                                          className="border-solid block w-full rounded-md border-0  px-3.5 py-2 sm:text-sm sm:leading-6"
                                      />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 ">
                                            Phone number
                                        </label>
                                        <div className="mt-2.5">
                                        <input
                                         type="tel"
                                          name="phoneNumber"
                                          value={phoneNumber}
                                          required
                                          onChange={(e) => setPhoneNumber(e.target.value)}
                                         className="border-solid block w-full rounded-md border-0  px-3.5 py-2  sm:text-sm sm:leading-6"
                                      />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 ">
                                            Message
                                        </label>
                                        <div className="mt-2.5">
                                        <textarea
                                          name="message"
                                         value={message}
                                         required
                                         onChange={(e) => setMessage(e.target.value)}
                                         rows={4}
                                         className="border-solid block w-full rounded-md border-0  px-3.5 py-2  sm:text-sm sm:leading-6"
                                         defaultValue={''}
                                      />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="mt-8 flex justify-end">
                             {/* Button with spinner */}
                             <button
                               type="submit"
                               className={`relative rounded-md bg-blue-500 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${loading ? 'cursor-not-allowed' : ''}`}
                               disabled={loading} // Disable button when loading
                               style={{ padding: '0.75rem' }} // Add padding to the button
                             >
                               {/* Conditional rendering of text or spinner */}
                               {loading ? (
                                 <div className="flex items-center">
                                    <span className="mr-2">Sending...</span>
                                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.997c-1.302 0-2.525.314-3.608.854L6 11.291zM12 20v-4a8.003 8.003 0 01-4-6.928L4.728 13.9A9.967 9.967 0 002 12c0 5.523 4.477 10 10 10z"></path>
                                  </svg>
                                </div>
                             ) : (
                                "Send message"
                              )}
                             </button>
                            </div>




                        </div>
                    </form>
                    {loading && <p>Loading...</p>}
                </div>
            
        </div>
    )
}
