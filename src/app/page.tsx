import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import HeroCarousel from '../components/HeroCarousel'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      {/* Hero Section */}
      <HeroCarousel />

      {/* Featured Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Learn & Engage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Interactive Explainer Videos", description: "Understand complex political processes in simple terms", image: "/policies.jpg" },
              { title: "Policy Breakdowns", description: "Get unbiased explanations of current policy debates", image: "/gavel-scaled.jpg" },
              { title: "Civic Engagement Guides", description: "Learn how to effectively participate in your democracy", image: "/townhall.jpg" }
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
            {[
              { 
                title: "Upcoming Votes", 
                description: "Stay informed about important votes in your area.", 
                image: "/upcomingvotes.jpg",
                link: "/votes",
                linkText: "View Upcoming Votes"
              },
              { 
                title: "Contact Representatives", 
                description: "Make your voice heard on important issues.", 
                image: "/rep.jpg",
                link: "/contact",
                linkText: "Contact Now"
              },
              { 
                title: "Voter Registration", 
                description: "Ensure you're ready to vote in upcoming elections.", 
                image: "/register.jpg",
                link: "/register",
                linkText: "Register to Vote"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
                <Image src={item.image} alt={item.title} width={800} height={600} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link 
                    href={item.link} 
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                  >
                    {item.linkText}
                  </Link>
                </div>
              </div>
            ))}
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