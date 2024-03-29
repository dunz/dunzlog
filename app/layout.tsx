import './globals.css';
import { Metadata } from 'next';
import { Nanum_Gothic } from 'next/font/google';
import Link from 'next/link';

const font = Nanum_Gothic({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: {
    default: 'Dunz Log',
    template: 'Dunz Log | %s',
  },
  description: '알찬 정보를 쉽게 전달하기 위해 노력하는 개발자의 블로그입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.className} flex min-h-screen flex-col bg-white`}>
        <header className="w-full bg-white p-6">
          <div className="container mx-auto max-w-6xl items-center justify-between md:flex">
            <Link href="/" className="mb-2 block text-center text-lg font-bold text-black md:mb-0">
              Dunz Log
            </Link>
            <nav className="flex gap-6 md:text-right">
              <Link href="/" className="text-lg font-semibold text-black">
                Home
              </Link>
              <Link href="/posts" className="text-lg font-semibold text-black">
                Posts
              </Link>
              <Link href="/about" className="text-lg font-semibold text-black">
                About
              </Link>
              <Link href="/contact" className="text-lg font-semibold text-black">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <main className="w-full flex-grow px-6 py-12">{children}</main>
        <footer className="w-full px-6">
          <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between py-6">
            <a href="#" className="mb-2 block text-center text-lg font-semibold text-black md:mb-0">
              Copyright © 2023
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
