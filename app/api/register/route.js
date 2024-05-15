import connect from "@/app/utils/db";
import User from "@/models/User";

import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {firstName, middleName, lastName, email, password, birthDate, gender, image} = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    firstName, 
    middleName, 
    lastName, 
    email,
    password: hashedPassword,
    birthDate, 
    gender,
    image,
    role: "user"
  });

  try {
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};