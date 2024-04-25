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
    <main>
        <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onLogin}
        >
          Sign in
        </button>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/signup"
        >
          Visit signup page
        </Link>
      </div>
    </main>
  );
}
