import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleComingSoon = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    alert("Coming Soon"); // Show alert message
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img className="h-auto w-16" src="/logo.png" alt="NGO Logo" />
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-start">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#about" className="text-gray-500 hover:text-gray-900 hover:underline">About Us</Link>
              <Link href="#initiative" className="text-gray-500 hover:text-gray-900 hover:underline">Our Initiative</Link>
              <Link href="#programs" className="text-gray-500 hover:text-gray-900 hover:underline">Our Programs</Link>
              <Link href="#get-involved" className="text-gray-500 hover:text-gray-900 hover:underline">Get Involved</Link>
              <Link href="#contact" className="text-gray-500 hover:text-gray-900 hover:underline">Contact Us</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="#" onClick={handleComingSoon} className="text-black hover:underline mr-4">Sign Up</Link>
            <Link href="#" onClick={handleComingSoon} className="bg-[#5F990C] hover:bg-[#5F990C] text-white font-bold py-2 px-4 rounded">
              Get Started
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#about" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
          <Link href="#initiative" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Our Initiative</Link>
          <Link href="#programs" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Our Programs</Link>
          <Link href="#get-involved" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Get Involved</Link>
          <Link href="#contact" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          <Link href="#" onClick={handleComingSoon} className="text-black hover:underline block px-3 py-2 rounded-md text-base font-medium">Sign Up</Link>
          <Link href="#" onClick={handleComingSoon} className="bg-[#5F990C] hover:bg-[#5F990C] text-white font-bold py-2 px-4 rounded block text-center">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;