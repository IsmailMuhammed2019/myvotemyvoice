import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div
      className="max-w-7xl mx-auto pt-28 px-20 sm:px-6 lg:px-8 relative bg-no-repeat bg-white"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "contain",
        minHeight: "500px",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <img src="/logo.png" alt="Logo" className="h-14" /> {/* Replace with your logo path */}
        <p className="text-gray-300 text-md mr-20">Where kindness <br/>meets action.</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-64 px-4 sm:px-6 lg:px-8 mt-10">
        <div>
          <h3 className="text-black font-bold">About Us</h3>
          <p className="text-black">What We Do</p>
          <p className="text-black">Our Programs</p>
          <p className="text-black">Get Involved</p>
          <p className="text-black">Contact</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center'>
  <h3 className="text-black font-bold">Contact</h3>
  <p className="text-sm text-gray-400">info@myvotemyvoice.us</p>
  <p className="text-sm text-gray-400">+1 (651) 200-5560</p>
  <p className="text-black">Address</p>
  <p className="text-sm text-gray-400">2168 7th Ave, STE 1022, Anoka, MN 55303, USA</p>
</div>
        <div className="text-left"> {/* Align text to the right */}
          <h3 className="text-black font-bold">Follow Us</h3>
          <p className="text-black">LinkedIn</p>
          <p className="text-black">Twitter</p>
          <p className="text-black">Instagram</p>
          <p className="text-black">Facebook</p>
        </div>
      </div>
      <hr className="my-5 border-gray-400 mt-10" />
      <div className="max-w-7xl mx-auto text-center text-gray-300 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm">Copyright &copy; 2025 MyvoteMyvoice. All rights reserved.</p>

          <Link href="/privacy-policy" className="text-gray-300 hover:underline text-sm">Privacy Policy</Link>
          <br />
          <Link href="#top" className="text-gray-300 hover:underline text-sm">Back to the top</Link>
      </div>
    </div>
  );
};

export default Footer;