import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="flex m-0 flex-row items-center justify-between p-3 bg-red-900 text-white">
      <div>
        <Link
          href="/"
          className=""
        >
          <Image src="/images/home.png" alt="logo" width={150} height={150} className='bg-white rounded-full' />
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <NavLinks />
      </div>
    </nav>
  );
}
