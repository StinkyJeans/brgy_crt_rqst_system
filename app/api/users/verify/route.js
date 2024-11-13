import User from "@/models/User";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const PUT = async (req) => {

  await connect();

  try {
    const body = await req.json();
    const { email } = body;
    if (!email) {
     return new NextResponse("email is required", { status: 400 });
    }
  

    const user = await User.findOne({ email });
  
    if (!user) {
      return new NextResponse("user not found", { status: 400 });
    }
  

    user.verified = true;
    await user.save();
  

    return new NextResponse("user is verified", { status: 200 });
  } catch (error) {
    
    console.error('Error verifying user:', error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
