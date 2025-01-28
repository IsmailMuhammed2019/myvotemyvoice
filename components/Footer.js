import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const handleComingSoon = (e) => {
        e.preventDefault(); // Prevent the default link behavior
        alert("Coming Soon"); // Show alert message
      };

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
          <Link href="#about" className="text-black hover:underline">What We Do</Link>
          <Link href="#initiative" className="text-black hover:underline">Our Programs</Link>
          <Link href="#testimonials"  className="text-black hover:underline">Testimonials</Link>
          <Link href="#get-involved" className="text-black hover:underline">Get Involved</Link>
          <Link href="#contact" className="text-black hover:underline">Contact</Link>
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
          <Link href="#" onClick={handleComingSoon} className="text-black hover:underline">LinkedIn</Link>
          <Link href="#" onClick={handleComingSoon} className="text-black hover:underline">Twitter</Link>
          <Link href="#" onClick={handleComingSoon} className="text-black hover:underline">Instagram</Link>
          <Link href="#" onClick={handleComingSoon} className="text-black hover:underline">Facebook</Link>
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