// pages/api/users/verify.js

import User from "@/models/User"; // Import your User model or database connection
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const PUT = async (req) => {

  await connect();

  try {
      // Extract the email from the request body
    const body = await req.json();
    const { email } = body;
    if (!email) {
     return new NextResponse("email is required", { status: 400 });
    }
  
    // Find the user by their email in the database
    const user = await User.findOne({ email });
  
    if (!user) {
      return new NextResponse("user not found", { status: 400 });
    }
  
    // Update the user's verification status (assuming you have a 'verified' field in your User schema)
    user.verified = true;
    await user.save();
  
    // Send back a success response
    return new NextResponse("user is verified", { status: 200 });
  } catch (error) {
    
    console.error('Error verifying user:', error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
