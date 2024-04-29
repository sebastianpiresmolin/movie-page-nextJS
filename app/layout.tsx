import type { Metadata } from 'next';
import { roboto } from '@/app/ui/fonts';
import './globals.css';



export const metadata: Metadata = {
  title: 'Tidaholm Cinema',
  description: 'Adventures for the whole family',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased max-w-screen`}>{children}</body>
    </html>
  );
}
