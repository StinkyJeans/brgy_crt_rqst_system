"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'; // Importing useSession from next-auth/react
import Link from 'next/link';

function Page() {
  const { data: session, status: sessionStatus } = useSession(); // Destructuring session and sessionStatus from useSession

  // Define loading state based on sessionStatus
  const loading = sessionStatus === 'loading';

  const [showUsersTable, setShowUsersTable] = useState(false);
  const [showCertificateTable, setShowCertificateTable] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the user is an admin when the session is loaded
    if (!loading && session) {
      const isAdmin = session.user.role === 'admin';
      setIsAdmin(isAdmin);
    }
  }, [loading, session]);

  const toggleUsersTable = (event) => {
    event.stopPropagation();
    setShowUsersTable(prevState => !prevState);
    setShowCertificateTable(false); // Hide certificate table when showing user verification table
  };

  const toggleCertificateTable = (event) => {
    event.stopPropagation();
    setShowCertificateTable(prevState => !prevState);
    setShowUsersTable(false); // Hide user verification table when showing certificate table
  };

  // If the session is still loading, return a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is not logged in, return a message or redirect to login page
  if (!session) {
    return <div>Please log in to access this page</div>;
  }

  // If the user is not an admin, return null to hide the page content
  if (!isAdmin) {
    return null;
  }

  return (
    <div className="flex bg-white/8">
      <div className="w-1/4 p-4">
        <ul>
          <li onClick={(e) => toggleUsersTable(e)} className="cursor-pointer">
            Users Verification
          </li>
          <p>___________________</p>
          <li onClick={(e) => toggleCertificateTable(e)} className="cursor-pointer">
            Certificate Requests
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <div>
          {showUsersTable && (
            <div>
              <h2 className="text-2xl font-bold mb-4">User Verification Table</h2>
              <table className="table-auto border-collapse border border-gray-800">
                <thead>
                  <tr>
                    <th className="border border-gray-800 px-4 py-2">First Name</th>
                    <th className="border border-gray-800 px-4 py-2">Middle Name</th>
                    <th className="border border-gray-800 px-4 py-2">Last Name</th>
                    <th className="border border-gray-800 px-4 py-2">Email</th>
                    <th className="border border-gray-800 px-4 py-2">Birth Date</th>
                    <th className="border border-gray-800 px-4 py-2">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-800 px-4 py-2">John</td>
                    <td className="border border-gray-800 px-4 py-2">Mirk</td>
                    <td className="border border-gray-800 px-4 py-2">Doe</td>
                    <td className="border border-gray-800 px-4 py-2">john@example.com</td>
                    <td className="border border-gray-800 px-4 py-2">2002-05-12</td>
                    <td className="border border-gray-800 px-4 py-2">Male</td>
                  </tr>
                  {/* Add other table rows for user verification */}
                </tbody>
              </table>
            </div>
         
          )}
          {showCertificateTable && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Certificate Requests Table</h2>
              <table className="table-auto border-collapse border border-gray-800">
                <thead>
                  <tr>
                    <th className="border border-gray-800 px-4 py-2">First Name</th>
                    <th className="border border-gray-800 px-4 py-2">Purpose</th>
                    <th className="border border-gray-800 px-4 py-2">Document Title</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add table rows for certificate requests */}
                  <tr>
                    <td className="border border-gray-800 px-4 py-2">John</td>
                    <td className="border border-gray-800 px-4 py-2">Achievement</td>
                    <td className="border border-gray-800 px-4 py-2">Certificate of Completion</td>
                  </tr>
                  {/* Add other certificate request rows */}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
