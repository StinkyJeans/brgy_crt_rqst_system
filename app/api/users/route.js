// pages/api/users.js
import connect from '@/app/utils/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';


const isAdmin = (user) => {
  return user && user.role === 'admin';
};

export const PUT = async (request) => {
  const { email } = request.params;

 
  const user = request.locals.session?.user;

  
  if (!isAdmin(user)) {
    return new NextResponse("Only admin users can verify users", { status: 403 });
  }

  await connect();

  try {
    const userToUpdate = await User.findOne({ email });

    if (!userToUpdate) {
      return new NextResponse("User not found", { status: 404 });
    }

 
    userToUpdate.verified = true;
    await userToUpdate.save();

    return new NextResponse("User verified successfully", { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};

export const GET = async (request) => {
  await connect();

  try {
    const users = await User.find({});
    return new NextResponse(JSON.stringify(users), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch users' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
