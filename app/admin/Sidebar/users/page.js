"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function UserPage() {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  const loading = sessionStatus === 'loading';
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showUserVerification, setShowUserVerification] = useState(true);
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


  const nextPage = () => {
    const remainingUnverifiedUsers = users.length - currentPage * usersPerPage;

    if (remainingUnverifiedUsers > 0) {
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

  const indexOfLastCert = currentCertPage * certsPerPage;
  const indexOfFirstCert = indexOfLastCert - certsPerPage;


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

      {/* Main Content */}
      <div className={`p-5 ${showUserVerification}`}>
        {showUserVerification && (
          <>
            <div className="mt-[10px] flow-root bg-white rounded p-5">
              <div className="mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="p-10 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <h1 className="text-base font-semibold leading-6 text-black">Users</h1>
                    <p className="mt-2 text-sm text-gray-900 pb-10">
                      A list of all the users.
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
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                            Verified
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {currentUsers
                            .filter(user => user.role !== 'admin') // Filter out users with the role of admin
                            .map(user => (
                              <tr key={user.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-0">
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
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{user.verified.toString()}</td>

                          </tr>
                          
                        ))}
                      </tbody>
                    </table>
                    <div className="mt-4 flex justify-between">
                      <button
                        onClick={prevPage}
                        className="inline-flex items-center px-4 py-2 bg-gray-200 text-sm font-medium text-gray-800 rounded hover:bg-gray-300"
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                      <button
                        onClick={nextPage}
                        className="inline-flex items-center px-4 py-2 bg-gray-200 text-sm font-medium text-gray-800 rounded hover:bg-gray-300"
                        ddisabled={currentPage * usersPerPage >= users.length}
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

        
      </div>
    </div>
  );
}
