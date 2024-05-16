import connect from '@/app/utils/db';
import Certificates from '@/models/Certificates';
import { NextResponse } from 'next/server';


export const GET = async (request) => {
    await connect();
  
    try {
      const certificates = await Certificates.find({});
      return new NextResponse(JSON.stringify(certificates), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      return new NextResponse(JSON.stringify({ error: 'Failed to fetch certificates' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  };
  