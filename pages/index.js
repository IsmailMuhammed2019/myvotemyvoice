import Navbar from '../components/Navbar';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-no-repeat bg-white" style={{ 
      backgroundImage: "url('/map.png')", 
      backgroundSize: '600px 282px',
      backgroundPosition: 'top right',
      backgroundRepeat: 'no-repeat'
    }}>
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Creating A Better Tomorrow For Everyone
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Helping everyone learn, stay healthy, and work together.
            </p>
            <div className="mt-8">
              <Link href="/donate"className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  Donate Now
              </Link>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="flex justify-center py-8 px-8 bg-gray-50">
              <img className="h-24" src="/placeholder.svg" alt="Placeholder" />
            </div>
            <div className="flex justify-center py-8 px-8 bg-gray-50">
              <img className="h-24" src="/placeholder.svg" alt="Placeholder" />
            </div>
            <div className="flex justify-center py-8 px-8 bg-gray-50">
              <img className="h-24" src="/placeholder.svg" alt="Placeholder" />
            </div>
            <div className="flex justify-center py-8 px-8 bg-gray-50">
              <img className="h-24" src="/placeholder.svg" alt="Placeholder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;