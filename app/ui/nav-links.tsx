'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import axios from 'axios';
import { useAuth } from '../contexts/authContext';


export default function NavLinks() {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const pathname = usePathname();
  const { setLoggedIn } = useAuth();
  const [placeholder, setPlaceholder] = useState('Search for movies...');
  const [searchValue, setSearchValue] = useState({
    title: '',
  });
  const [inputValue, setInputValue] = useState(''); // Local state for the input field

  // Function to log the user out by sending a GET request to api/users/logout
  // logout will clear the token from the user's cookies
  // and redirect the user to the login page
  const logout = async (event: any) => {
    event.preventDefault();
    try {
      await axios.get('/api/users/logout');
      setLoggedIn(false);
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  // api call searching for movie title and returning the id of the movie
  // if the movie is found, the user is redirected to the movie page
  // if the movie is not found, the user is redirected to /movies
  const searchResults = async (title: any) => {
    try {
      console.log(title);
      const response = await axios.get('/api/movies/search', {
        params: { title },
      });
      const id = response.data.id;
      console.log(id);
      if (!id) {
        setPlaceholder('No movies found');
        return;
      }
      router.push(`/movies/${id}`);
      setInputValue('');
    } catch (error: any) {
      console.log('Failed to load movies', error.message);
    }
  };

  // Function to handle the search input value
  const handleSetSearchValue = (event: any) => {
    event.preventDefault();
    setSearchValue({ title: inputValue });
    searchResults(inputValue);
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
            name: 'Profile',
            href: '/profile',
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
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-3xl font-bold antialiased hover:text-gray-400 md:flex-none md:justify-start md:p-2 md:px-3',
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
            className="CROSS-ICON absolute top-2 right-2 px-1 py-1"
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
          <ul className="MENU-LINK-MOBILE-OPEN flex-col md:flex-row items-center justify-between mr-14">
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 text-lg font-bold antialiased hover:text-gray-400 md:text-xl md:flex-none md:justify-start md:p-2 md:px-3',
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
        onSubmit={handleSetSearchValue}
        className={`${isNavOpen ? 'hidden' : ''} relative mx-auto w-max`}
      >
        <input
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="peer cursor-pointer relative z-10 h-8 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4"
          placeholder={placeholder}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-white px-3.5 peer-focus:border-white peer-focus:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
    </>
  );
}
