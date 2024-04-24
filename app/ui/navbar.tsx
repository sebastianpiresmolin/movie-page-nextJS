import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';

export default function NavBar() {
  return (
    <nav className="flex items-center  justify-between p-3 bg-red-900 text-white">
      <Link
        href="/"
        className="text-2xl text-center font-bold border-solid border-2 w-8 rounded-md"
      >
        T
      </Link>
      <div className="flex space-x-4 items-center">
        <NavLinks />
      </div>
    </nav>
  );
}
