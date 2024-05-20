// // use client
// import React, { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/react';

// export default function AdminPage() {
//   const { data: session, status: sessionStatus } = useSession();
//   const loading = sessionStatus === 'loading';
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [certificates, setCertificates] = useState([]);

//   useEffect(() => {
//     if (!loading && session) {
//       const isAdmin = session.user.role === 'admin';
//       setIsAdmin(isAdmin);
//     }
//   }, [loading, session]);

//   useEffect(() => {
//     const fetchCertificates = async () => {
//       try {
//         const response = await fetch('/api/certificates');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setCertificates(data);
//       } catch (error) {
//         console.error('Failed to fetch certificates:', error);
//       }
//     };

//     if (isAdmin) {
//       fetchCertificates();
//     }
//   }, [isAdmin]);

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
//                 <h1 className="text-base font-semibold leading-6 text-black">Certificates</h1>
//                 <p className="mt-2 text-sm text-gray-900">
//                   A list of all the certificates in your system including their information.
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
//                           Purpose
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
//                           Document Title
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-800">
//                       {certificates.map((certificate) => (
//                         <tr key={certificate.id}>
//                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                             {certificate.firstName}
//                           </td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{certificate.purpose}</td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{certificate.documentTitle}</td>
//                         </tr>
//                       ))}
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
