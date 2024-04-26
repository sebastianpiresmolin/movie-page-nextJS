'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    name: '',
    name_last: '',
    phone: '',
  });

  const onSignup = async () => {
    try {
      const response = await axios.post('/api/users/signup', user);
      router.push('/login');
    } catch (error: any) {
      console.log('Signup failed', error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <label htmlFor="email">Email</label>
      <input
        className="p-2 my-2 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label htmlFor="name">First Name</label>
      <input
        className="p-2 my-2 text-black"
        id="name"
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder="First Name"
      />
      <label htmlFor="name_last">Last Name</label>
      <input
        className="p-2 my-2 text-black"
        id="name_last"
        type="text"
        value={user.name_last}
        onChange={(e) => setUser({ ...user, name_last: e.target.value })}
        placeholder="Last Name"
      />

      <label htmlFor="password">Password</label>
      <input
        className="p-2 my-2 text-black"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        className="p-2 my-2 text-black"
        id="phone"
        type="number"
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
        placeholder="Phone Number"
      />
      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
      onClick={onSignup}>
        Sign Up
      </button>

      <Link 
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      href="/login">Visit login page</Link>
    </div>
  );
}
