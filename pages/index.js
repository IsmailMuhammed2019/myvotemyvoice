import Navbar from '../components/Navbar';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-no-repeat bg-white" style={{ 
      backgroundImage: "url('/map.png')", 
      backgroundSize: '500px auto',
      backgroundPosition: 'top right',
      backgroundRepeat: 'no-repeat'
    }}>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-48 py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <p className="mt-3 text-lg text-gray-500">
                Big Hearts, Bold Changes
              </p>
              <img src="/sign.png" alt="Underline" width='200px' />
            </div>
            <h2 className="text-5xl mt-5 font-extrabold text-gray-900 sm:text-6xl text-center lg:text-left">
              Creating a <span className="text-[#5F990C]">better</span> tomorrow for everyone
            </h2>
            <p className="mt-2 mb-2 text-lg text-gray-400 text-center lg:text-left">
              Helping everyone learn, stay healthy, and work together.
            </p>
            <div className="mt-4 mb-4 flex justify-center lg:justify-start">
              <Link href="/donate">
                <img className="h-12" src='/button.png' alt='click' />
              </Link>
            </div>
            <p className="mt-1 mb-14 text-2xl text-black text-center lg:text-left"> {/* Increased text size to text-2xl */}
              Let’s help people MyvoteMyvoice is an NGO that makes schools better, helps with health, and supports women in small villages.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <img className="h-128 w-auto" src="/all.png" alt="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;