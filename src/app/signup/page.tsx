import SignupForm from '../../components/SignupForm'; // Import the SignupForm component
import Header from '../../components/Header'; // Import the Header component
import Footer from '../../components/Footer'; // Import the Footer component

export default function Signup() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header /> {/* Use the Header component */}
      <div className="flex-grow flex items-center justify-center">
        <SignupForm /> {/* Use the SignupForm component */}
      </div>
      <Footer /> {/* Use the Footer component */}
    </div>
  );
}