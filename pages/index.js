import Navbar from '../components/Navbar';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='bg-white'>
      <div className="relative min-h-screen bg-no-repeat bg-white" style={{ 
        backgroundImage: "url('/map.png')", 
        backgroundSize: '480px auto',
        backgroundPosition: 'right 174px top 0px',
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
              <p className="mt-1 mb-14 text-2xl text-black text-center lg:text-left">
                Let's help people MyvoteMyvoice is an NGO that makes schools better, helps with health, and supports women in small villages.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <img className="h-auto w-128" src="/all.png" alt="Placeholder" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 relative bg-no-repeat bg-white" style={{ 
        backgroundImage: "url('/background.png')",
        backgroundSize: 'contain',
        minHeight: '700px'
      }}>
        <h2 className="text-xl font-extrabold mt-10 text-center" style={{ 
          background: 'linear-gradient(90deg, #6AA910 0%, #EEC329 77.24%, #6AA910 154.48%)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent' 
        }}>
          Benefits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 mx-44">
          <div className="flex flex-col items-start">
            <img src="/1.png" alt="Access to help" className="h-12 w-auto" />
            <h3 className="text-sm font-bold mt-5 text-black">Access to help</h3>
            <p className="text-gray-500 text-left text-sm mt-3">Find information on education and healthcare.</p>
          </div>
          <div className="flex flex-col items-start">
            <img src="/2.png" alt="Bring people together" className="h-12 w-auto" />
            <h3 className="text-sm font-bold mt-5 text-black">Bring people together</h3>
            <p className="text-gray-500 text-left text-sm mt-3">Connect with others to work on important projects.</p>
          </div>
          <div className="flex flex-col items-start">
            <img src="/3.png" alt="Stay updated" className="h-12 w-auto" />
            <h3 className="text-sm font-bold mt-5 text-black">Stay updated</h3>
            <p className="text-gray-500 text-left text-sm mt-3">Get the latest news on program and success stories.</p>
          </div>
          <div className="flex flex-col items-start">
            <img src="/4.png" alt="Spreading awareness" className="h-12 w-auto" />
            <h3 className="text-sm font-bold mt-5 text-black">Spreading awareness</h3>
            <p className="text-gray-500 text-left text-sm mt-3">Learn about issues and how you can make a difference.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;