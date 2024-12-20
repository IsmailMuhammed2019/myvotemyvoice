import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header'; // Import the Header component
import Footer from '../../components/Footer'; // Import the Footer component

export default function Learn() {
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <Header /> {/* Use the Header component */}

      {/* Learn Hero Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
          <Image src="/learn.jpg" alt="Civic Engagement" width={600} height={400} className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-8" />
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Learn About Civic Engagement</h1>
            <p className="text-lg mb-8">Empowering you with knowledge to make your voice heard.</p>
            <Link href="/signup" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">
              Sign Up for Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Importance of Learning Section */}
      <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-20 text-blue-600">Why Learning Matters</h2>
    <div className="flex flex-col md:flex-row items-center justify-center mb-20">
      <Image 
        src="/know.png" 
        alt="Importance of Learning" 
        width={400} 
        height={200} 
        className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6 transition-transform transform hover:scale-105" 
      />
      <p className="text-lg text-gray-700 md:max-w-md">
        Understanding your rights and responsibilities as a citizen is crucial for effective civic engagement. 
        Knowledge empowers you to make informed decisions, advocate for your community, and participate in the democratic process.
      </p>
    </div>
    <Link href="/learn/more" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
      Learn More
    </Link>
  </div>
</section>

      {/* Topics to Learn Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-700" >Topics to Explore</h2>
          <p className="text-lg mb-8 text-gray-700">
            Explore the following topics to enhance your understanding of civic engagement:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <Image src="/VotingRights.jpg" alt="Voting Rights" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Voting Rights</h3>
              <p className="text-gray-700">Learn about your voting rights and how to ensure your voice is heard in elections.</p>
              <Link href="/learn/voting-rights" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <Image src="/waystoengage.png" alt="Civic Engagement" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Civic Engagement</h3>
              <p className="text-gray-700">Discover ways to engage with your community and participate in local governance.</p>
              <Link href="/learn/civic-engagement" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <Image src="/understand.jpg" alt="Election Process" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">Understanding the Election Process</h3>
              <p className="text-gray-700">Get informed about how elections work, from primaries to general elections.</p>
              <Link href="/learn/election-process" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <Image src="/advocacy.jpg" alt="Community Advocacy" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-3">Community Advocacy</h3>
              <p className="text-gray-700">Learn how to advocate for issues that matter to you and your community.</p>
              <Link href="/learn/community-advocacy" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <Image src="/legislation.png" alt="Understanding Legislation" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-3">Understanding Legislation</h3>
              <p className="text-gray-700">Gain insights into how laws are made and how you can influence legislation.</p>
              <Link href="/learn/understanding-legislation" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <Image src="/vote.jpeg" alt="Voter Registration" width={300} height={200} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-3">Voter Registration</h3>
              <p className="text-gray-700">Find out how to register to vote and the importance of keeping your information updated.</p>
              <Link href="/learn/voter-registration" className="text-blue-500 hover:underline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Get Involved and Make a Difference</h2>
          <p className="text-lg mb-8 text-gray-700">
            Knowledge is power! Equip yourself with the information you need to make a positive impact in your community.
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