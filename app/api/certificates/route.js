
import connect from "@/app/utils/db";
import Certificates from "@/models/Certificates"; 
import { NextResponse } from "next/server";


await connect();


export const POST = async (request) => {
  
  const { firstName, email, purpose, documentTitle,status } = await request.json();

  try {
   
    const newCertificate = new Certificates({
      firstName,
      email,
      purpose,
      documentTitle,
      status: status || 'pending'
    });

   
    await newCertificate.save();

   
    return new NextResponse("Certificate is registered", { status: 200 });
  } catch (err) {
    
    return new NextResponse(err, { status: 500 });
  }
};
