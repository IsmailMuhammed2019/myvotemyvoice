import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header'; // Import the Header component
import Footer from '../../components/Footer'; // Import the Footer component

export default function ActionCenter() {
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <Header /> {/* Use the Header component */}

      {/* Action Center Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to the Action Center</h1>
          <p className="text-lg mb-8">Empowering you to make a difference in your community.</p>
          <Link href="/signup" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            Sign Up for Updates
          </Link>
        </div>
      </section>

      {/* Importance of Taking Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">Why Taking Action Matters</h2>
          <div className="flex flex-col md:flex-row items-center justify-center mb-8">
            <Image 
              src="/takeaction.png" 
              alt="Importance of Taking Action" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6 transition-transform transform hover:scale-105" 
            />
            <p className="text-lg text-gray-700 md:max-w-md">
              Taking action is essential for creating change. Whether it&apos;s advocating for a cause, participating in local governance, or educating others, your involvement can make a significant impact.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get Involved</h2>
          <p className="text-lg mb-8 text-gray-700">
            Here are some ways you can take action in your community:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image src="/volunteer.png" alt="Volunteer" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Volunteer</h3>
              <p className="text-gray-700">Join local organizations and contribute your time to causes you care about.</p>
              <Link href="/actioncenter/volunteer" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image src="/advocacy.jpg" alt="Advocacy" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Advocate</h3>
              <p className="text-gray-700">Speak up for issues that matter to you and influence decision-makers.</p>
              <Link href="/actioncenter/advocacy" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image src="/educate.png" alt="Educate" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Educate</h3>
              <p className="text-gray-700">Share knowledge and resources with your community to raise awareness.</p>
              <Link href="/actioncenter/educate" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image src="/register.jpg" alt="Register" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Register to Vote</h3>
              <p className="text-gray-700">Make sure you&apos;re registered to vote and know your voting rights.</p>
              <Link href="/vote.jpeg" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image src="/community.jpg" alt="Community Events" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Attend Community Events</h3>
              <p className="text-gray-700">Participate in local events to connect with others and learn more.</p>
              <Link href="/actioncenter/events" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image src="/petition.png" alt="Petition" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Start a Petition</h3>
              <p className="text-gray-700">Gather support for causes you believe in and make your voice heard.</p>
              <Link href="/actioncenter/petition" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-lg mb-8 text-gray-700">
            Your actions can create a ripple effect in your community. Get involved today!
          </p>
          <Link href="/signup" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Sign Up for Updates
          </Link>
        </div>
      </section>

      <Footer /> {/* Use the Footer component */}
    </div>
  );
}