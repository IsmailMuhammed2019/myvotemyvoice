"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'; // Import useState for managing search input
import Header from '../../components/Header'; // Import the Header component
import Footer from '../../components/Footer'; // Import the Footer component

export default function ElectedOfficials() {
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <Header /> {/* Use the Header component */}

      {/* Elected Officials Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Know Your Elected Officials</h1>
          <p className="text-lg mb-8">Empowering you to engage with your representatives.</p>
          <Link href="/signup" className="bg-white text-green-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            Sign Up for Updates
          </Link>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Search for Elected Officials</h2>
          <input
            type="text"
            placeholder="Enter name or title..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-1/2 lg:w-1/3 mb-4"
          />
          <p className="text-gray-700">Search results for: <strong>{searchTerm}</strong></p>
          {/* Here you can implement the logic to display search results based on the searchTerm */}
        </div>
      </section>

      {/* Importance of Knowing Your Officials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-green-600">Why Knowing Your Officials Matters</h2>
          <div className="flex flex-col md:flex-row items-center justify-center mb-8">
            <Image 
              src="/officials.jpg" 
              alt="Importance of Knowing Your Officials" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6 transition-transform transform hover:scale-105" 
            />
            <p className="text-lg text-gray-700 md:max-w-md">
              Understanding who your elected officials are and what they stand for is crucial for effective civic engagement. 
              Engaging with your representatives can lead to positive changes in your community and ensure your voice is heard.
            </p>
          </div>
        </div>
      </section>

      {/* How to Engage with Your Officials Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">How to Engage with Your Elected Officials</h2>
          <p className="text-lg mb-8 text-gray-700">
            Here are some effective ways to connect with your elected officials:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image src="/images/contact.jpg" alt="Contact Your Officials" width={100} height={100} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Contact Your Officials</h3>
              <p className="text-gray-700">Reach out via email, phone, or social media to express your concerns and opinions.</p>
              <Link href="/elected-officials/contact" className="text-green-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image src="/images/attend-meetings.jpg" alt="Attend Town Hall Meetings" width={100} height={100} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Attend Town Hall Meetings</h3>
              <p className="text-gray-700">Participate in local meetings to ask questions and share your views directly.</p>
              <Link href="/elected-officials/meetings" className="text-green-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image src="/images/petition.jpg" alt="Start a Petition" width={100} height={100} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Start a Petition</h3>
              <p className="text-gray-700">Gather support for issues that matter to you and present them to your officials.</p>
              <Link href="/elected-officials/petition" className="text-green-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image src="/images/advocacy.jpg" alt="Advocate for Change" width={100} height={100} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Advocate for Change</h3>
              <p className="text-gray-700">Work with local organizations to advocate for policies that benefit your community.</p>
              <Link href="/elected-officials/advocacy" className="text-green-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image src="/images/vote.jpg" alt="Vote in Elections" width={100} height={100} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Vote in Elections</h3>
              <p className="text-gray-700">Make your voice heard by voting in local, state, and national elections.</p>
              <Link href="/elected-officials/vote" className="text-green-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image src="/images/community.jpg" alt="Engage with Community" width={100} height={100} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Engage with Your Community</h3>
              <p className="text-gray-700">Join community groups to stay informed and active in local issues.</p>
              <Link href="/elected-officials/community" className="text-green-500 hover:underline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Get Involved and Make Your Voice Heard</h2>
          <p className="text-lg mb-8 text-gray-700">
            Your engagement is vital for a thriving democracy. Start connecting with your elected officials today!
          </p>
          <Link href="/signup" className="bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:bg-green-700 transition duration-300">
            Sign Up for Updates
          </Link>
        </div>
      </section>

      <Footer /> {/* Use the Footer component */}
    </div>
  );
}