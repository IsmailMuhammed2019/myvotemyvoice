import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
              <button className="outline-none mobile-menu-button">
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
        <div className="hidden mobile-menu">
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
        <Image src="/hero-image.jpg" alt="Democracy" layout="fill" objectFit="cover" className="mix-blend-overlay" />
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
          <h2 className="text-3xl font-bold text-center mb-12">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Understanding the Electoral College", image: "/policies.jpg" },
              { title: "Climate Change Policies Explained", image: "/gavel-scaled.jpg" },
              { title: "How to Attend a Town Hall Meeting", image: "/townhall.jpg" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
                <Image src={item.image} alt={item.title} width={800} height={600} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <Link href="#" className="text-blue-500 hover:underline">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Center */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Take Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4">Upcoming Votes</h3>
              <p className="mb-4">Infrastructure Bill on July 30</p>
              <Link href="/votes" className="text-blue-500 hover:underline">View All Upcoming Votes</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4">Contact Representatives</h3>
              <p className="mb-4">Make your voice heard on important issues</p>
              <Link href="/contact" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "1,000,000+", label: "Informed Voters" },
              { number: "50,000+", label: "Fact-Checked Statements" },
              { number: "100,000+", label: "Constituent Messages Sent" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
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