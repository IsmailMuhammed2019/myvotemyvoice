import Navbar from "../components/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-white">
      <div
        className="relative min-h-screen bg-no-repeat bg-white"
        style={{
          backgroundImage: "url('/map.png')",
          backgroundSize: "480px auto",
          backgroundPosition: "right 174px top 0px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="max-w-7xl mx-auto mt-48 py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <p className="mt-3 text-lg text-gray-500">
                  Big Hearts, Bold Changes
                </p>
                <img src="/sign.png" alt="Underline" width="200px" />
              </div>
              <h2 className="text-5xl mt-5 font-extrabold text-gray-900 sm:text-6xl text-center lg:text-left">
                Creating a <span className="text-[#5F990C]">better</span>{" "}
                tomorrow for everyone
              </h2>
              <p className="mt-2 mb-2 text-lg text-gray-400 text-center lg:text-left">
                Helping everyone learn, stay healthy, and work together.
              </p>
              <div className="mt-4 mb-4 flex justify-center lg:justify-start">
                <Link href="/donate">
                  <img className="h-12" src="/button.png" alt="click" />
                </Link>
              </div>
              <p className="mt-1 mb-14 text-2xl text-black text-center lg:text-left">
                Let's help people MyvoteMyvoice is an NGO that makes schools
                better, helps with health, and supports women in small villages.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <img className="h-auto w-128" src="/all.png" alt="Placeholder" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 relative bg-no-repeat bg-white"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "contain",
          minHeight: "400px",
        }}
      >
        <h2
          className="text-xl font-extrabold mt-10 text-center"
          style={{
            background:
              "linear-gradient(90deg, #6AA910 0%, #EEC329 77.24%, #6AA910 154.48%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Benefits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 mx-44">
          <div className="flex flex-col items-start">
            <img src="/1.png" alt="Access to help" className="h-12 w-auto" />
            <h3 className="text-sm font-bold mt-5 text-black">
              Access to help
            </h3>
            <p className="text-gray-500 text-left text-sm mt-3">
              Find information on education and healthcare.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img
              src="/2.png"
              alt="Bring people together"
              className="h-12 w-auto"
            />
            <h3 className="text-sm font-bold mt-5 text-black">
              Bring people together
            </h3>
            <p className="text-gray-500 text-left text-sm mt-3">
              Connect with others to work on important projects.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img src="/3.png" alt="Stay updated" className="h-12 w-auto" />
            <h3 className="text-sm font-bold mt-5 text-black">Stay updated</h3>
            <p className="text-gray-500 text-left text-sm mt-3">
              Get the latest news on program and success stories.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img
              src="/4.png"
              alt="Spreading awareness"
              className="h-12 w-auto"
            />
            <h3 className="text-sm font-bold mt-5 text-black">
              Spreading awareness
            </h3>
            <p className="text-gray-500 text-left text-sm mt-3">
              Learn about issues and how you can make a difference.
            </p>
          </div>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto mt-10 py-5 px-4 sm:px-6 lg:px-8 relative bg-no-repeat bg-white"
        style={{
          backgroundImage: "url('/background2.png')",
          backgroundSize: "contain",
          minHeight: "fit-content",
        }}
      >
        <h2
          className="text-xl font-extrabold mt-10 text-center"
          style={{
            background:
              "linear-gradient(90deg, #6AA910 0%, #EEC329 77.24%, #6AA910 154.48%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Us
        </h2>
        <p className="mb-4 mt-5 text-3xl text-black text-center lg:text-center">
          Working to empower communities through <br /> education,health women's
          support and <br />
          civic awareness
        </p>
        <p className="mt-2 mb-7 text-sm text-gray-400 text-center lg:text-center">
          Creating opportunities, changing lives, Building stronger communities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-14 mt-20 mx-44">
          <div className="flex flex-col items-center">
            <div className="flex">
              <div className="mb-5 mr-5">
                <img
                  className="h-auto w-400"
                  src="/image-2.png"
                  alt="Placeholder"
                />
              </div>
              <div>
                <img
                  className="h-auto w-400 mb-3"
                  src="/image-3.png"
                  alt="Placeholder"
                />
                <img
                  className="h-auto w-400"
                  src="/image-5.png"
                  alt="Placeholder"
                />
              </div>
            </div>
            <div>
              <img
                className="h-auto w-800"
                src="/image-4.png"
                alt="Placeholder"
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-start mb-10">
              {" "}
              {/* Flex container for title and subtext */}
              <img
                src="/group1.png"
                alt="Access to Education"
                className="h-10 w-auto mr-4"
              />{" "}
              {/* Image beside text */}
              <div>
                <h3 className="text-black font-bold">
                  Access to Education in Rural Areas
                </h3>
                <p className="text-gray-500 text-xs">
                  We create rural learning centers and promote quality education
                  to empower communities and build a strong democratic society.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-10">
              {" "}
              {/* Flex container for title and subtext */}
              <img
                src="/group2.png"
                alt="Health Advocacy"
                className="h-10 w-auto mr-4"
              />{" "}
              {/* Image beside text */}
              <div>
                <h3 className="text-black font-bold">Health Advocacy</h3>
                <p className="text-gray-500 text-xs">
                  We support better access to healthcare, improve child and
                  women's nutrition and promote wellness programs to reduce
                  inequalities and create healthier communities.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-10">
              {" "}
              {/* Flex container for title and subtext */}
              <img
                src="/group3.png"
                alt="Women's Empowerment"
                className="h-10 w-auto mr-4"
              />{" "}
              {/* Image beside text */}
              <div>
                <h3 className="text-black font-bold">Women's Empowerment</h3>
                <p className="text-gray-500 text-xs">
                  We help women succeed by supporting women-owned businesses and
                  creating opportunities for economic independence and
                  leadership.
                </p>
              </div>
            </div>
            <div className="flex justify-center mx-auto">
              <img src="/button-6.png" alt="prod" className="h-10 w-auto " />
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 relative mt-10 bg-no-repeat bg-white"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "contain",
          minHeight: "400px",
        }}
      >
        <h2
          className="text-xl font-extrabold mt-10 text-center"
          style={{
            background:
              "linear-gradient(90deg, #6AA910 0%, #EEC329 77.24%, #6AA910 154.48%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          What We Do
        </h2>
        <p className="mb-4 mt-5 text-3xl text-black text-center lg:text-center">
          We Make a Difference
        </p>
        <p className="mt-2 mb-7 text-sm text-gray-400 text-center lg:text-center">
          Turning ideas into impact, one community at a time.
        </p>
        <div className="flex flex-col lg:flex-row gap-15 mt-15 mx-40">
          {" "}
          {/* Use flexbox for layout */}
          <div className="flex-1 flex flex-col items-start mr-10">
            {" "}
            {/* Left div with paragraph */}
            <p className="text-black">
              At the heart of everything we do is the drive to create meaningful
              change. From building education programs in rural areas to
              supporting healthcare initiatives and empowering women, we are
              committed to improving lives. By raising awareness about civic
              responsibilities and fostering community engagement, we help
              individuals take charge of their futures. Together, we are making
              the world a healthier, fairer, and more hopeful place—one step at
              a time.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {" "}
            {/* Right div with statistics */}
            <div className="flex flex-col justify-center items-center bg-[#E5FBE6] rounded-lg p-2">
              {/* First div */}
              <h3 className="text-2xl font-bold" style={{ color: "#83CC20" }}>
                150K
              </h3>
              <p className="text-gray-500 text-sm">Human impact</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#EBF2FE] rounded-lg p-2">
              {/* Second div */}
              <h3 className="text-2xl font-bold" style={{ color: "#1168F5" }}>
                800
              </h3>
              <p className="text-gray-500 text-sm">Assisted communities</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#FEF3E9] rounded-lg p-2">
              {/* Third div */}
              <h3 className="text-2xl font-bold" style={{ color: "#F88115" }}>
                200K
              </h3>
              <p className="text-gray-500 text-sm">Donations</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#FDF7E1] rounded-lg p-2">
              {/* Fourth div */}
              <h3 className="text-2xl font-bold" style={{ color: "#E2B10C" }}>
                800K
              </h3>
              <p className="text-gray-500 text-sm">Collaborations</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 relative mt-10 bg-no-repeat bg-white"
        style={{
          backgroundImage: "url('/background2.png')",
          backgroundSize: "contain",
          minHeight: "400px",
        }}
      >
        <h2
          className="text-xl font-extrabold mt-10 text-center"
          style={{
            background:
              "linear-gradient(90deg, #6AA910 0%, #EEC329 77.24%, #6AA910 154.48%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Intitiative
        </h2>
        <p className="mb-4 mt-5 text-3xl text-black text-center lg:text-center">
          Empowering communities through action
        </p>
        <p className="mt-2 mb-7 text-sm text-gray-400 text-center lg:text-center">
          Discover our programs making a lasting impact on education, health and
          equality.
        </p>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 mx-44">
  <div className="flex flex-col items-center bg-white rounded-lg ">
    <div>
      <img src="/image-6.png" alt="Education" className="rounded-lg mb-3 h-38 w-auto" />
    </div>
    <div className="p-1">
      <h3 className="text-sm font-bold text-black text-left">Education</h3>
      <p className="text-gray-500 text-left text-xs mt-2">
        Building learning centers and improving schools in rural areas.
      </p>
      <div className="mt-auto"> {/* Push button to the bottom */}
        <Link href="/learn-more-education">
          <button className="mt-3 border border-[#83CC20] text-[#83CC20] bg-white rounded-lg px-4 py-2 hover:bg-[#83CC20] hover:text-white">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  </div>
  <div className="flex flex-col items-center bg-white rounded-lg ">
    <div>
      <img src="/image-8.png" alt="Healthcare" className="rounded-lg mb-3 h-38 w-auto" />
    </div>
    <div className="p-1">
      <h3 className="text-sm font-bold text-black text-left">Healthcare</h3>
      <p className="text-gray-500 text-left text-xs mt-2">
        Helping children and women to stay healthy with better nutrition and care.
      </p>
      <div className="mt-auto"> {/* Push button to the bottom */}
        <Link href="/learn-more-healthcare">
          <button className="mt-3 border border-[#83CC20] text-[#83CC20] bg-white rounded-lg px-4 py-2 hover:bg-[#83CC20] hover:text-white">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  </div>
  <div className="flex flex-col items-center bg-white rounded-lg ">
    <div>
      <img src="/image-9.png" alt="Women’s Empowerment" className="rounded-lg mb-3 h-38 w-auto" />
    </div>
    <div className="p-1">
      <h3 className="text-sm font-bold text-black text-left">Women’s Empowerment</h3>
      <p className="text-gray-500 text-left text-xs mt-2">
        Support women to start businesses and gain financial independence.
      </p>
      <div className="mt-auto"> {/* Push button to the bottom */}
        <Link href="/learn-more-women-empowerment">
          <button className="mt-3 border border-[#83CC20] text-[#83CC20] bg-white rounded-lg px-4 py-2 hover:bg-[#83CC20] hover:text-white">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  </div>
  <div className="flex flex-col items-center bg-white rounded-lg">
    <div>
      <img src="/image-10.png" alt="Civic Engagement" className="rounded-lg mb-3 h-38 w-auto" />
    </div>
    <div className="p-1">
      <h3 className="text-sm font-bold text-black text-left">Civic Engagement</h3>
      <p className="text-gray-500 text-left text-xs mt-2">
        Teaching people about their rights and how to make a difference in their communities.
      </p>
      <div className="mt-auto"> {/* Push button to the bottom */}
        <Link href="/learn-more-civic-engagement">
          <button className="mt-3 border border-[#83CC20] text-[#83CC20] bg-white rounded-lg px-4 py-2 hover:bg-[#83CC20] hover:text-white">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Home;
