'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';

export default function SignupPage() {
  const [error, setError] = React.useState('');
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    name: '',
    name_last: '',
    phone: '',
  });

  const onSignup = async () => {
    // Check if all fields are filled
    if (
      !user.email ||
      !user.name ||
      !user.name_last ||
      !user.password ||
      !user.phone
    ) {
      setError('Please fill all fields before submitting');
      return;
    }

    try {
      setError('');
      const response = await axios.post('/api/users/signup', user);
      router.push('/signup/redirect-to-login');
    } catch (error: any) {
      setError(
        'Something went wrong. Please verify your information and try again.'
      );
    }
  };

  return (
    <main className="min-w-screen min-h-screen">
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="flex flex-col items-center justify-center h-[700px] w-[375px] 2xl:w-[500px] 2xl:h-[900px] 
        drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gray-300 rounded-lg py-2"
        >
          <Image
            src="/images/home.png"
            width={100}
            height={100}
            alt=""
            className="w-40 mb-10 2xl:mb-20 2xl:w-60"
          ></Image>
          <input
            className="p-2 my-2 text-black rounded-md focus:outline-red-700 2xl:w-[300px] 2xl:h-[50px]"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
            required
          />
          <input
            className="p-2 my-2 text-black rounded-md focus:outline-red-700 2xl:w-[300px] 2xl:h-[50px]"
            id="name"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="First Name"
            required
          />
          <input
            className="p-2 my-2 text-black rounded-md focus:outline-red-700 2xl:w-[300px] 2xl:h-[50px]"
            id="name_last"
            type="text"
            value={user.name_last}
            onChange={(e) => setUser({ ...user, name_last: e.target.value })}
            placeholder="Last Name"
            required
          />
          <input
            className="p-2 my-2 text-black rounded-md focus:outline-red-700 2xl:w-[300px] 2xl:h-[50px]"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            required
          />
          <input
            className="p-2 my-2 text-black rounded-md focus:outline-red-700 2xl:w-[300px] 2xl:h-[50px]"
            id="phone"
            type="tel"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            placeholder="Phone Number"
            required
          />
          <p className="text-red-900 text-center">{error}</p>
          <button
            className="bg-red-900 hover:bg-red-800 text-white antialiased font-bold py-2 px-4 rounded m-1 w-[200px] 2xl:w-[300px] 2xl:h-[50px]"
            onClick={onSignup}
          >
            Sign Up
          </button>

          <Link
            className="bg-transparent hover:bg-red-900 hover:text-white text-black font-bold py-2 px-4 rounded 
            m-1 w-[200px] text-center border-2 border-red-900 2xl:w-[300px] 2xl:h-[50px]"
            href="/login"
          >
            Visit login page
          </Link>
        </div>
      </div>
    </main>
  );
}
