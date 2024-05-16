// pages/api/users/verify.js

import User from "@/models/User"; // Import your User model or database connection

export default async function handler(req, res) {
    if (req.method !== 'PUT') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    // Extract the email from the request body
    const { email } = req.body;
  
    try {
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }
  
      // Find the user by their email in the database
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the user's verification status (assuming you have a 'verified' field in your User schema)
      user.verified = true;
      await user.save();
  
      // Send back a success response
      return res.status(200).json({ message: 'User verified successfully' });
    } catch (error) {
      console.error('Error verifying user:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }