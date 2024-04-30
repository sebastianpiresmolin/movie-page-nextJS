'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RedirectToLogin() {
    const redirect = () => {
        setTimeout(() => {
            window.location.href = '/login';
        }, 5000);
    }

    useEffect(() => {
        redirect();
    }, []);

  return (
    <main className="flex items-center justify-center h-screen max-w-screen">
      <div className="flex-col gap-20 rounded-lg py-2 text-neutral-600 text-4xl flex items-center p-10 justify-center text-center">
        <h1>Sign up was successful!<br></br> You will soon be redirected to the
        login page.</h1>
        <Image src="/images/confetti.png" width={500} height={300} alt="" />
        <Link href="/login">
          <h2>If you are not redirected, <span className='text-blue-500'>click here.</span></h2>
        </Link>
      </div>
    </main>
  );
}
