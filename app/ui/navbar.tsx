import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';

export default function NavBar() {
  return (
    <nav className="flex m-0 flex-row items-center justify-between p-3 bg-red-900 text-white">
      <div>
        <Link
          href="/"
          className="text-2xl text-center font-bold border-solid border-2 w-8"
        >
          T
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <NavLinks />
      </div>
    </nav>
  );
}
