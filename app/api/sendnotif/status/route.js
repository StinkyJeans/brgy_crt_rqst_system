import Certificates from "@/models/Certificates"; 
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; 

export const PUT = async (req) => {
  await connect();

  try {
    const { certificateId } = await req.json();
    if (!certificateId) {
      return new NextResponse("Certificate ID is required", { status: 400 });
    }
  
 
    const certificate = await Certificates.findById(new ObjectId(certificateId));
  
    if (!certificate) {
      return new NextResponse("Certificate not found", { status: 400 });
    }
  
  
    certificate.status = 'completed';
    await certificate.save();

    return new NextResponse("Certificate status updated to completed", { status: 200 });
  } catch (error) {
    console.error('Error updating certificate status:', error);
    return new NextResponse("Internal server error", { status: 500 });
  }
};
