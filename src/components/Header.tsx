'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center py-4 px-2">
              <Image src="/myvotemyvoice.jpg" alt="Logo" width={50} height={50} className="h-10 w-auto" />
              <span className="font-bold text-xl text-blue-600 ml-2">My Vote My Voice</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/learn" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Learn</Link>
            <Link href="/factchecking" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Fact Check</Link>
            <Link href="/action-center" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Action Center</Link>
            <Link href="/officials" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Elected Officials</Link>
            <Link href="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">Log In</Link>
            <Link href="/signup" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Sign Up</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg className="w-6 h-6 text-gray-500 hover:text-blue-500"
                   fill="none"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="">
          <li><Link href="/learn" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300">Learn</Link></li>
          <li><Link href="app/factchecking" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300">Fact Check</Link></li>
          <li><Link href="/action-center" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300">Action Center</Link></li>
          <li><Link href="/officials" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300">Elected Officials</Link></li>
          <li><Link href="/login" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300">Log In</Link></li>
          <li><Link href="/signup" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
}