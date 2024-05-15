// pages/api/certificates.js
import connect from "@/app/utils/db";
import Certificates from "@/models/Certificates"; // Assuming your model is named Certificates
import { NextResponse } from "next/server";

// Ensure that the database connection is established
await connect();

// Define the POST request handler
export const POST = async (request) => {
  // Extract purpose and documentTitle from the request body
  const { purpose, documentTitle } = await request.json();

  try {
    // Create a new instance of the Certificates model
    const newCertificate = new Certificates({
      purpose,
      documentTitle
    });

    // Save the new certificate to the database
    await newCertificate.save();

    // Respond with a success message
    return new NextResponse("Certificate is registered", { status: 200 });
  } catch (err) {
    // If an error occurs during saving, respond with an error message
    return new NextResponse(err, { status: 500 });
  }
};
