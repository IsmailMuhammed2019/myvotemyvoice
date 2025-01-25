import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sborder-none mb-10 mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
                <img className="h-auto w-16" src="/logo.png" alt="NGO Logo" />
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/about" className="text-gray-500 hover:text-gray-900 hover:underline hover:decoration-[#73B741] hover:decoration-2">About Us</Link>
              <Link href="/initiative" className="text-gray-500 hover:text-gray-900 hover:underline hover:decoration-[#73B741] hover:decoration-2">Our Initiative</Link>
              <Link href="/get-involved" className="text-gray-500 hover:text-gray-900 hover:underline hover:decoration-[#73B741] hover:decoration-2">Get Involved</Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-900 hover:underline hover:decoration-[#73B741] hover:decoration-2">Contact Us</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/signup" className="text-black hover:underline mr-4">Sign Up</Link>
            <Link href="/donate" className="bg-[#5F990C] hover:bg-[#5F990C] text-white font-bold py-2 px-4 rounded">
                Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;