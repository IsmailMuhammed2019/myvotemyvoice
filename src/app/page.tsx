import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
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
              <Link href="/fact-check" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Fact Check</Link>
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
        {/* Mobile menu, toggle classes based on menu state */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} mobile-menu`}>
          <ul className="">
            <li><Link href="/learn" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300">Learn</Link></li>
            <li><Link href="/fact-check" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300">Fact Check</Link></li>
            <li><Link href="/action-center" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300">Action Center</Link></li>
            <li><Link href="/officials" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300">Elected Officials</Link></li>
            <li><Link href="/login" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300">Log In</Link></li>
            <li><Link href="/signup" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300">Sign Up</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-blue-600 h-[70vh]">
        <Image src="https://source.unsplash.com/random/1920x1080/?vote" alt="Democracy" layout="fill" objectFit="cover" className="mix-blend-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Empower Your Voice, Inform Your Vote</h1>
            <p className="text-xl md:text-2xl text-white mb-8">Your trusted platform for democratic engagement</p>
            <Link href="/start" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
              Start Your Civic Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Learn & Engage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Interactive Explainer Videos", description: "Understand complex political processes in simple terms", image: "https://source.unsplash.com/random/800x600/?video" },
              { title: "Policy Breakdowns", description: "Get unbiased explanations of current policy debates", image: "https://source.unsplash.com/random/800x600/?policy" },
              { title: "Civic Engagement Guides", description: "Learn how to effectively participate in your democracy", image: "https://source.unsplash.com/random/800x600/?community" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
                <Image src={item.image} alt={item.title} width={800} height={600} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link href="#" className="text-blue-500 hover:underline">Explore More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fact-Checking Platform */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fact-Checking Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4">Verify Information</h3>
              <p className="mb-4">Search our database of fact-checked statements and claims.</p>
              <input type="text" placeholder="Search for a claim or statement" className="w-full p-2 border rounded mb-4" />
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Search Facts
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4">Latest Fact Checks</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-blue-500 hover:underline">Claim about recent economic policy</Link></li>
                <li><Link href="#" className="text-blue-500 hover:underline">Statement on environmental regulations</Link></li>
                <li><Link href="#" className="text-blue-500 hover:underline">Viral social media post on healthcare</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Action Center */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Take Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4">Upcoming Votes</h3>
              <p className="mb-4">Stay informed about important votes in your area.</p>
              <Link href="/votes" className="text-blue-500 hover:underline">View Upcoming Votes</Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4">Contact Representatives</h3>
              <p className="mb-4">Make your voice heard on important issues.</p>
              <Link href="/contact" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Contact Now
              </Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4">Voter Registration</h3>
              <p className="mb-4">Ensure you're ready to vote in upcoming elections.</p>
              <Link href="/register" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                Register to Vote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Elected Officials Database */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Elected Officials Database</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">Search for information on your elected representatives at all levels of government.</p>
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Enter your address" className="flex-grow p-2 border rounded" />
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Find My Representatives
              </button>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/officials" className="text-blue-500 hover:underline">View Full Database of Elected Officials</Link>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1,000,000+", label: "Informed Voters" },
              { number: "50,000+", label: "Fact-Checked Statements" },
              { number: "100,000+", label: "Constituent Messages Sent" },
              { number: "5,000+", label: "Elected Officials Tracked" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join My Vote My Voice today and become an informed, engaged citizen.</p>
          <Link href="/signup" className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300">
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
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
    </div>
  )
}