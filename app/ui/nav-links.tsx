'use client';
import { useState } from 'react'; // import state
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Movies',
    href: '/movies',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Sign In',
    href: '/singin',
  },
];

export default function NavLinks() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const pathname = usePathname();
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
              <p>{link.name}</p>
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
                  <p>{link.name}</p>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
        <form action="" className={`${isNavOpen ? 'hidden' : ''} relative mx-auto w-max`}>
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