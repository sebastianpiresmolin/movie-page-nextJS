import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';

export default function NavBar() {
  return (
    <nav className="flex items-center  justify-between p-4 bg-red-900 text-white">
      <Link
        href="/"
        className="text-2xl text-center font-bold border-solid border-2 w-8 rounded-md"
      >
        T
      </Link>
      <div className="flex space-x-4 items-center">
        <NavLinks />
          <form action="" className="relative mx-auto w-max">
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
      </div>
    </nav>
  );
}
