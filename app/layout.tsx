import type { Metadata } from 'next';
import { roboto } from '@/app/ui/fonts';
import './globals.css';
import { AuthProvider } from '@/app/contexts/authContext';
import Footer from './ui/footer';
import NavBar from './ui/navbar';

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
    <AuthProvider>
      <html lang="en" className="max-w-screen">
        <body
          className={`${roboto.className} antialiased max-w-screen bg-background flex flex-grow flex-col min-h-screen`}
        >
          <NavBar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
