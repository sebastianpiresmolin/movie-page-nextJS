'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import axios from 'axios';

export default function FooterLinks() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); //state for if the user is logged in
  const pathname = usePathname();

  // Check if user is logged in by sending a request to api/users/check-auth
  // check-auth basically checks if the user has a valid token in their cookies
  // because check-auth is a protected route, it will return a 401 status code if the user is not authenticated
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('/api/users/check-auth');
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        console.error(error);
      }
    };

    checkLoginStatus();
  }, []);

  // Function to log the user out by sending a GET request to api/users/logout
  // logout will clear the token from the user's cookies
  // and redirect the user to the login page
  const logout = async (event: any) => {
    event.preventDefault();
    try {
      await axios.get('/api/users/logout');
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  // Array of links to be displayed in the navigation
  // boolean isLoggedIn is used to determine if the user is logged in
  const links = [
    {
      name: 'Movies',
      href: '/movies',
    },
    {
      name: 'About',
      href: '/about',
    },
    ...(isLoggedIn
      ? [
          {
            name: 'Userpage',
            href: '/userpage',
          },
          {
            name: 'Sign Out',
            href: '#',
            onClick: logout,
          },
        ]
      : [
          {
            name: 'Sign In',
            href: '/login',
          },
        ]),
  ];

  return (
    <>
      <div className="DESKTOP-MENU flex p-6 mr-2">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-xl font-bold antialiased hover:text-gray-400 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-transparent text-gray-400': pathname === link.href,
                }
              )}
            >
              <p onClick={link.onClick}>{link.name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}