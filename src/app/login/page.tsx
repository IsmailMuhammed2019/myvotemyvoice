import Header from '../../components/Header'; // Import the Header component
import Footer from '../../components/Footer'; // Import the Footer component

export default function Login() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header /> {/* Use the Header component */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center">Welcome Back!</h1>
          <p className="text-lg mb-6 text-center">Please enter your email and password to log in to your account.</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Your Password" required />
            </div>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
      <Footer /> {/* Use the Footer component */}
    </div>
  );
}