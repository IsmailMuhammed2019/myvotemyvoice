import Navbar from '../components/Navbar';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-no-repeat bg-white" style={{ 
      backgroundImage: "url('/map.png')", 
      backgroundSize: '450px ',
      backgroundPosition: 'top right',
      backgroundRepeat: 'no-repeat'
    }}>
      <Navbar />
      <div className="max-w-7xl mt-77 mx-auto py-40 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col">
            <p className="mt-3 text-lg text-gray-500 text-center lg:text-left">
              Big Hearts, Bold Changes
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center lg:text-left">
              Creating a better tomorrow for everyone
            </h2>
            <p className="mt-3 text-lg text-gray-500 text-center lg:text-left">
              Helping everyone learn, stay healthy, and work together.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link href="/donate">
                <img className="h-12" src='/button.png' alt='click' />
              </Link>
            </div>
          </div>
          <div className="mt-8 flex ">
            <img className="h-auto w-45 " src="/all.png" alt="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;