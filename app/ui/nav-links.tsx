'use client';

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
  }
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-transparent p-3 font-bold antialiased hover:text-gray-400 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-transparent text-gray-400': pathname === link.href,
              }
            )}
          >
            <p className="text-m md:text-xl">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
