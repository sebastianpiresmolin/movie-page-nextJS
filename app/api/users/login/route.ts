import { connect } from '@/app/lib/DbConnect';
import { User } from '@/app/lib/data';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();
// Calls the connect function to establish a connection to the database.

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    //check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: 'User does not exist' },
        { status: 400 }
      );
    }

    //check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
    }

    //create token data
    const tokenData = {
      id: user._id,
      email: user.email,
    };

    
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: '1d',
    });

    
    const response = NextResponse.json({
      message: 'Login successful',
      success: true,
    });

    
    response.cookies.set('token', token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
