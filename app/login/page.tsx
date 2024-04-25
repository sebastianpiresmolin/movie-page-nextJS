'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import NavBar from '../ui/navbar';

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      router.push('/');
    } catch (error: any) {
      console.log('Login failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white min-w-screen min-h-screen">
      <NavBar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center justify-center py-2 bg-gray-300 w-[375px] h-[500px] ">
          <h1>{loading ? 'Processing' : 'Sign in'}</h1>
          <input
            className="p-2 my-2 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
          />

          <input
            className="p-2 my-2 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
          />
          <button
            className="bg-red-900 hover:bg-red-800 text-white antialiased font-bold py-2 px-4 rounded m-1 w-[200px]"
            onClick={onLogin}
          >
            Sign In
          </button>
          <Link
            className="bg-transparent hover:bg-red-900 hover:text-white text-black font-bold py-2 px-4 rounded 
            m-1 w-[200px] text-center border-2 border-red-900"
            href="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
