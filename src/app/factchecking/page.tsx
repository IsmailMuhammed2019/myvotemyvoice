import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header'; // Import the Header component
import Footer from '../../components/Footer'; // Import the Footer component

export default function FactChecking() {
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <Header /> {/* Use the Header component */}

      {/* Fact-Checking Hero Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Fact-Checking</h1>
          <p className="text-lg mb-8">Empowering you with the truth to make informed decisions.</p>
          <Link href="/signup" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">
            Sign Up for Updates
          </Link>
        </div>
      </section>

      {/* Importance of Fact-Checking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Fact-Checking Matters</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Image src="/factchecking.png" alt="Importance of Fact-Checking" width={300} height={200} className="mx-auto mb-4 rounded-lg shadow-md" />
            <p className="text-lg mb-8 text-gray-700 md:ml-4">
              In an age of information overload, distinguishing fact from fiction is crucial. Misinformation can lead to confusion, fear, and misguided actions. 
              Our fact-checking initiatives aim to provide clarity and promote informed civic engagement.
            </p>
          </div>
        </div>
      </section>

      {/* How Fact-Checking Works Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">How Our Fact-Checking Process Works</h2>
          <p className="text-lg mb-8 text-gray-700">
            Our fact-checking process involves several key steps to ensure accuracy and reliability:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/information.png" alt="Claim Identification" width={300} height={300} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">1. Claim Identification</h3>
              <p className="text-gray-700">We monitor news and social media to identify claims that require verification.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/gathering.jpeg" alt="Research" width={300} height={300} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">2. Research</h3>
              <p className="text-gray-700">Our team conducts thorough research using credible sources to gather evidence.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/analysis.jpeg" alt="Analysis" width={300} height={300}className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">3. Analysis</h3>
              <p className="text-gray-700">We analyze the evidence to determine the accuracy of the claim.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/accessible.jpg" alt="Reporting" width={300} height={300} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">4. Reporting</h3>
              <p className="text-gray-700">We publish our findings in an accessible format for the public to review.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/encourage.jpeg" alt="Feedback" width={300} height={300} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">5. Feedback</h3>
              <p className="text-gray-700">We encourage community feedback to improve our processes and accuracy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/monitor.png" alt="Continuous Monitoring" width={300} height={300} className="mx-auto mb-4 rounded-lg" />
              <h3 className="font-bold text-xl mb-2">6. Continuous Monitoring</h3>
              <p className="text-gray-700">We continuously monitor the claims and update our findings as new information becomes available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Resources for Fact-Checking</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Image src="/factresources.png" alt="Fact-Checking Resources" width={300} height={200} className="mx-auto mb-4 rounded-lg shadow-md" />
            <p className="text-lg mb-8 text-gray-700 md:ml-4">
              We provide various resources to help you verify information and stay informed:
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center">
            <ul className="list-disc list-inside mb-8 text-left max-w-2xl mx-auto md:mr-4">
              <li><Link href="/resources/fact-checking-tools" className="text-blue-500 hover:underline">Fact-Checking Tools</Link> - Access tools to verify claims and sources.</li>
              <li><Link href="/resources/reliable-sources" className="text-blue-500 hover:underline">Reliable Sources</Link> - A list of trusted news outlets and databases.</li>
              <li><Link href="/resources/educational-materials" className="text-blue-500 hover:underline">Educational Materials</Link> - Workshops and guides on how to identify misinformation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Join Us in the Fight Against Misinformation</h2>
          <p className="text-lg mb-8 text-gray-700">
            Stay informed and help us promote truth and transparency in our communities. 
            Together, we can make a difference!
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