import { createUser } from '@/database/firebase';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const body = await req.json()

    const { password, email } = body;

    if (!password || !email) {
      return res.status(400).json({ success: false, message: 'Missing name or email' });
    }

    // Normally you'd save to a database or do something useful here
    console.log(password,email)
    const resp = await createUser({email,password})
    console.log(resp)
    return NextResponse.json({ success: true, message:resp });
 

  // return NextResponse.json({ success: false, message: 'Method not allowed' });
}
