'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import axios from 'axios';

export default function NavLinks() {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false); //state for if the mobile menu is opeo
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
      <div className="DESKTOP-MENU hidden md:flex">
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

      <div className="MOBILE-MENU flex md:hidden">
        <div
          className={`${isNavOpen ? 'hidden' : ''} HAMBURGER-ICON space-y-2`}
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <span className="block h-0.5 w-8  bg-white"></span>
          <span className="block h-0.5 w-8  bg-white"></span>
          <span className="block h-0.5 w-8  bg-white"></span>
        </div>

        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
          {' '}
          <div
            className="CROSS-ICON absolute top-0 right-0 px-1 py-1"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-row items-center justify-between mr-6">
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
          </ul>
        </div>
      </div>
      <form
        action=""
        className={`${isNavOpen ? 'hidden' : ''} relative mx-auto w-max`}
      >
        <input
          type="search"
          className="peer cursor-pointer relative z-10 h-8 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-white px-3.5 peer-focus:border-white peer-focus:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
    </>
  );
}
