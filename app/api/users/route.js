// pages/api/users.js

import connect from '@/app/utils/db'; 
import User from '@/models/User';

export default async function handler(req, res) {
  try {
    await connect();
    const users = await User.find({}); // Fetch all users from the database
    res.status(200).json(users); // Return the user data as JSON
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
