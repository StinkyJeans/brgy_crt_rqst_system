// pages/api/users.js
import connect from '@/app/utils/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';

// Function to check if the user is an admin
const isAdmin = (user) => {
  return user && user.role === 'admin';
};

export const PUT = async (request) => {
  const { email } = request.params;

  // Get the authenticated user from request.locals
  const user = request.locals.session?.user;

  // Check if the authenticated user is an admin
  if (!isAdmin(user)) {
    return new NextResponse("Only admin users can verify users", { status: 403 });
  }

  await connect();

  try {
    // Find the user by email
    const userToUpdate = await User.findOne({ email });

    if (!userToUpdate) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Update the user's verification status to true
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
