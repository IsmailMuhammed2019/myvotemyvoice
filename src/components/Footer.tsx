import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src="/myvotemyvoice.jpg" alt="Logo" width={200} height={50} className="h-8 w-auto" />
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-400 transition duration-300">Terms of Service</Link>
            <Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact Us</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 My Vote My Voice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}