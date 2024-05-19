"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  const loading = sessionStatus === 'loading';
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showUserVerification, setShowUserVerification] = useState(false);
  const [showCertificateVerification, setShowCertificateVerification] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCertPage, setCurrentCertPage] = useState(1);
  const certsPerPage = 10;
  const usersPerPage = 10;

  useEffect(() => {
    if (!loading && session) {
      const isAdmin = session.user.role === 'admin';
      setIsAdmin(isAdmin);
    }
  }, [loading, session]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse JSON here
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch('/api/certificateverification');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse JSON here
        setCertificates(data);
      } catch (error) {
        console.error('Failed to fetch certificates:', error);
      }
    };

    fetchCertificates();
  }, []);

  const handleVerify = async (email) => {
    try {
      console.log(email);
      const response = await fetch(`/api/users/verify`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Include the email in the request body
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // If the response is OK, update the user list after verification
      const updatedUsers = users.map(user => {
        if (user.email === email) {
          return { ...user, verified: true }; // Mark the user as verified
        }
        return user;
      });
  
      // Update the state with the updated user list
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error verifying user:', error);
    }
  };
  

  const handleUserVerification = () => {
    setShowUserVerification(prevState => !prevState);
    setActiveButton(prevState => prevState === 'userVerification' ? null : 'userVerification');
  };

  const handleCertificateVerification = () => {
    setShowCertificateVerification(prevState => !prevState);
    setActiveButton(prevState => prevState === 'certificateVerification' ? null : 'certificateVerification');
  };

  const nextPage = () => {
    if (currentPage * usersPerPage < users.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const nextCertPage = () => {
    if (currentCertPage * certsPerPage < certificates.length) {
      setCurrentCertPage(currentCertPage + 1);
    }
  };

  const prevCertPage = () => {
    if (currentCertPage > 1) {
      setCurrentCertPage(currentCertPage - 1);
    }
  };

  const indexOfLastCert = currentCertPage * certsPerPage;
  const indexOfFirstCert = indexOfLastCert - certsPerPage;
  const currentCertificates = certificates.slice(indexOfFirstCert, indexOfLastCert);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please log in to access this page</div>;
  }

  if (!isAdmin) {
    return <div>You do not have permission to view this page</div>;
  }

  return (
    <div className="flex text-center">
      {/* Sidebar */}
      <div className="bg-gray-200 w-1/4 p-4 mb-[700px]  w-[170px] rounded">
        <h2 className="text-lg font-semibold mb-4 text-black">Admin Dashboard</h2>
        <ul>
          <li className="mb-2">
            <button
              onClick={handleUserVerification}
              className={`${
                activeButton === 'userVerification' ? 'bg-blue-600 text-white' : 'bg-transparent text-blue-600'
              } hover:text-blue-800 px-2 py-1 rounded`}
            >
              User Verification
            </button>
          </li>
          <li>
            <button
              onClick={handleCertificateVerification}
              className={`${
                activeButton === 'certificateVerification' ? 'bg-blue-600 text-white' : 'bg-transparent text-blue-600'
              } hover:text-blue-800 px-2 py-1 rounded`}
            >
              Certificate Verification
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={` w-[500x] rounded p-5 ${showUserVerification || showCertificateVerification}`}>
        {showUserVerification && (
          <>

            <div className="mt-8 flow-root bg-white rounded">
  <div className="mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <div className="p-10 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
      <h1 className="text-base font-semibold leading-6 text-black">Users</h1>
            <p className="mt-2 text-sm text-gray-900 pb-10">
              A list of all the users that is needed to be verified.
            </p>
        <table className="min-w-full divide-y divide-gray-700 bg-white">
          
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0">
                First Name
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                Middle Name
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                Last Name
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                Email
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                Birth Date
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                Gender
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                Role
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                User ID Image
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
          {currentUsers
          .filter(user => !user.verified) 
          .map((user) => (
              <tr key={user._id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  {user.firstName}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{user.middleName}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{user.lastName}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{user.email}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{new Date(user.birthDate).toLocaleDateString()}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{user.gender}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{user.role}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                  <div className="flex items-center justify-between">
                    <div className="truncate max-w-[100px]">{user.image}</div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(user.image);
                        alert('URL copied to clipboard');
                      }}
                      className="ml-2 p-1 text-gray-500 hover:text-gray-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M2 2a2 2 0 012-2h5a2 2 0 012 2v2h6a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v1h14V2a1 1 0 00-1-1H4zm1 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm12 13a1 1 0 01-1 1H4a1 1 0 01-1-1V9h16v9zM6 8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V10a2 2 0 00-2-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{user.verified}</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  {!user.verified ? (
                    <button onClick={() => handleVerify(user.email)} className="text-indigo-600 hover:text-indigo-500">
                      Verify
                      <span className="sr-only">, {user.firstName}</span>
                    </button>
                  ) : (
                    <span className="text-green-600">Verified</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-600 text-white'} hover:bg-blue-700`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage * usersPerPage >= users.length}
            className={`px-3 py-1 rounded ${currentPage * usersPerPage >= users.length ? 'bg-gray-300' : 'bg-blue-600 text-white'} hover:bg-blue-700`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

          </>
        )}

      {showCertificateVerification && (
          <>
            <h1 className="text-base font-semibold leading-6 text-black">Certificates</h1>
            <p className="mt-2 text-sm text-gray-900">
              A list of all the certificates including their First Name, Purpose, and Document Title.
            </p>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0">
                          First Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                          Purpose
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                          Document Title
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {currentCertificates.map((certificate) => (
                        <tr key={certificate._id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {certificate.firstName}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{certificate.purpose}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{certificate.documentTitle}</td>
                          <td>
                            <button onClick={() => handleVerify(certificate.email)} className="text-indigo-600 hover:text-indigo-500 text-sm">
                              Send Notification
                              <span className="sr-only">, {certificate.firstName}</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="ml-[25%] flex gap-10 mt-4">
                    <button
                      onClick={prevCertPage}
                      disabled={currentCertPage === 1}
                      className={`px-3 py-1 rounded ${currentCertPage === 1 ? 'bg-gray-300' : 'bg-blue-600 text-white'} hover:bg-blue-700`}
                    >
                      Previous
                    </button>
                    <button
                      onClick={nextCertPage}
                      disabled={currentCertPage * certsPerPage >= certificates.length}
                      className={`px-3 py-1 rounded ${currentCertPage * certsPerPage >= certificates.length ? 'bg-gray-300' : 'bg-blue-600 text-white'} hover:bg-blue-700`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
