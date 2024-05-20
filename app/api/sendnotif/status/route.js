// pages/api/certificates/verify.js

import Certificates from "@/models/Certificates"; // Import your Certificate model or database connection
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // Import ObjectId from MongoDB

export const PUT = async (req) => {
  await connect();

  try {
    // Extract the certificate ObjectID from the request body
    const { certificateId } = await req.json();
    if (!certificateId) {
      return new NextResponse("Certificate ID is required", { status: 400 });
    }
  
    // Find the certificate by its ObjectID in the database
    const certificate = await Certificates.findById(new ObjectId(certificateId));
  
    if (!certificate) {
      return new NextResponse("Certificate not found", { status: 400 });
    }
  
    // Update the certificate's completion status
    certificate.status = 'completed';
    await certificate.save();
  
    // Send back a success response
    return new NextResponse("Certificate status updated to completed", { status: 200 });
  } catch (error) {
    console.error('Error updating certificate status:', error);
    return new NextResponse("Internal server error", { status: 500 });
  }
};
