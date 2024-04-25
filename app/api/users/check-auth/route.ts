import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
  try {
    // Retrieve the token from the request cookies
    const token = request.cookies.get('token');

    // If no token is found, user is not authenticated
    if (!token) {
        return NextResponse.json({ isLoggedIn: false });
    }

    // Verify the token
    const decodedToken = jwt.verify(token.value, process.env.TOKEN_SECRET!);

    // If token is valid, user is authenticated
    if (decodedToken) {
        return NextResponse.json({ isLoggedIn: true });
    }

    // Token verification failed, user is not authenticated
    return NextResponse.json({ isLoggedIn: false });
  } catch (error) {
    console.error('Error checking authentication:', error);
    return NextResponse.json({ isLoggedIn: false }, { status: 500 });
  }
}
