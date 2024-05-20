// "use client"
// import React, { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/react';

// export default function Example() {
//   const { data: session, status: sessionStatus } = useSession();
//   const loading = sessionStatus === 'loading';
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     if (!loading && session) {
//       const isAdmin = session.user.role === 'admin';
//       setIsAdmin(isAdmin);
//     }
//   }, [loading, session]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('/api/users');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json(); // Parse JSON here
//         setUsers(data);
//       } catch (error) {
//         console.error('Failed to fetch users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleVerify = async (email) => {
//     try {
//       const response = await fetch(`/api/users/verify`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }), // Include the email in the request body
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       // Update the user list after verification
//       const updatedUsers = users.map(user => {
//         if (user.email === email) {
//           return { ...user, verified: true };
//         }
//         return user;
//       });
//       setUsers(updatedUsers);
//     } catch (error) {
//       console.error('Error verifying user:', error);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!session) {
//     return <div>Please log in to access this page</div>;
//   }

//   if (!isAdmin) {
//     return <div>You do not have permission to view this page</div>;
//   }

//   return (
//     <div className="bg-white rounded">
//       <div className="mx-auto max-w-7xl">
//         <div className="bg-white py-10 rounded">
//           <div className="px-4 sm:px-6 lg:px-8">
//             <div className="sm:flex sm:items-center">
//               <div className="sm:flex-auto">
//                 <h1 className="text-base font-semibold leading-6 text-black">Users</h1>
//                 <p className="mt-2 text-sm text-gray-900">
//                   A list of all the users in your account including their First Name, Middle Name, Last Name, Email, Birth Date, Gender, and Role.
//                 </p>
//               </div>
//             </div>
//             <div className="mt-8 flow-root">
//               <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                 <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//                   <table className="min-w-full divide-y divide-gray-700">
//                     <thead>
//                       <tr>
//                         <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0">
//                           First Name
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
//                           Middle Name
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
//                           Last Name
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
//                           Email
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
//                           Birth Date
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
//                           Gender
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
//                           Role
//                         </th>
//                         <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
//                           <span className="sr-only">Edit</span>
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-800">
//                     {users.map((user) => (
//   <tr key={user._id}>
//     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//       {user.firstName}
//     </td>
//     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{user.middleName}</td>
//     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{user.lastName}</td>
//     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{user.email}</td>
//     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{new Date(user.birthDate).toLocaleDateString()}</td>
//     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{user.gender}</td>
//     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{user.role}</td>
//     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//       {!user.verified ? (
//         <button onClick={() => handleVerify(user.email)} className="text-indigo-600 hover:text-indigo-500">
//           Verify
//           <span className="sr-only">, {user.firstName}</span>
//         </button>
//       ) : (
//         <span className="text-green-600">Verified</span>
//       )}
//     </td>
//   </tr>
// ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
