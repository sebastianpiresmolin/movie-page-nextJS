import Link from 'next/link';
import FooterLinks from '@/app/ui/footer-links';

export default function Footer() {
  return (
    <nav className="flex m-0 items-center max-w-screen justify-between p-3 bg-neutral-200 text-stone-600">
      <Link href="/" className="text-2xl text-center font-bold p-6 ">
        Home
      </Link>
      <div className="flex space-x-4 items-center">
        <FooterLinks />
      </div>
    </nav>
  );
}
