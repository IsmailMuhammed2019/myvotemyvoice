"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '@/components/Footer';

const officialsData = [
  {
    title: "President",
    description: "The President is the head of state and government, responsible for enforcing laws and leading the executive branch.",
    image: "/officials.jpg",
    link: "/officials/president"
  },
  {
    title: "Senator",
    description: "Senators represent their states in the U.S. Senate, participating in the legislative process and voting on laws.",
    image: "/senator.png",
    link: "/officials/senator"
  },
  {
    title: "Representative",
    description: "Representatives serve in the U.S. House of Representatives, advocating for their constituents' interests.",
    image: "/representatives.png",
    link: "/officials/representative"
  }
];

export default function ElectedOfficials() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOfficials = officialsData.filter(official =>
    official.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 pt-16">
        <header className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-3xl font-bold text-blue-600">Elected U.S. Government Officials</h1>
            <p className="text-gray-700">Learn about your representatives and how to engage with them.</p>
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search for officials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-4 p-2 border border-gray-300 rounded w-full md:w-1/2"
            />
          </div>
        </header>

        {/* Section: Overview of Elected Officials */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Who Are Elected Officials?</h2>
            <p className="text-gray-700 mb-4">
              Elected officials are individuals who have been chosen by voters to represent them in government. They make decisions on behalf of their constituents and are responsible for creating and enforcing laws.
            </p>
            <p className="text-gray-700 mb-5">
              In the United States, elected officials can be found at various levels of government, including federal, state, and local levels. This includes members of Congress, governors, state legislators, and mayors.
            </p>
          </div>
        </section>

        {/* Section: List of Key Officials */}
        <section className="py-10 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Key U.S. Government Officials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOfficials.length > 0 ? (
                filteredOfficials.map((official, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <Image src={official.image} alt={official.title} width={300} height={200} className="rounded-lg mb-4" />
                    <h3 className="font-bold text-xl">{official.title}</h3>
                    <p className="text-gray-700 mb-5">{official.description}</p>
                    <Link href={official.link} className="text-blue-500 hover:underline">Learn More</Link>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No officials found matching your search.</p>
              )}
            </div>
          </div>
        </section>

        {/* Section: How to Engage with Your Officials */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">How to Engage with Your Elected Officials</h2>
            <p className="text-gray-700 mb-4">
              Engaging with your elected officials is crucial for ensuring your voice is heard. Here are some ways to get involved:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Contact them via email or phone to express your opinions.</li>
              <li>Attend town hall meetings to discuss issues directly.</li>
              <li>Participate in local advocacy groups to support causes you care about.</li>
              <li>Stay informed about their actions and policies through newsletters and social media.</li>
            </ul>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-10 bg-gray-100 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Get Involved!</h2>
            <p className="text-gray-700 mb-4">Your participation is vital for a thriving democracy. Start connecting with your elected officials today!</p>
            <Link href="/signup" className="bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-400 transition duration-300">Sign Up for Updates</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}