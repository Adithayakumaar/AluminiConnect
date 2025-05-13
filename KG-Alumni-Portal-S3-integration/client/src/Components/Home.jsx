import { Link } from "react-router-dom";
import bannerImage from "../assets/students.webp";
import TypingEffect from "./TypingEffect";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img src={bannerImage} alt="Graduation" className="w-full h-full object-cover" />

      {/* Text Positioned at the Top */}
      <div className="absolute top-20 inset-x-0 flex flex-col items-center text-center">
        {/* Typing Animation for Title */}
        <h1 className="text-4xl font-extrabold drop-shadow-lg" style={{ color: "#0a1931" }}>
          <TypingEffect text="WELCOME TO ALUMNI PORTAL" speed={75} />
        </h1>

        {/* Typing Animation for Subtitle */}
        <h2 className="text-lg mt-2 font-bold drop-shadow-lg" style={{ color: "#0a1931" }}>
          <TypingEffect text="GUIDE, INSPIRE, CONNECT - BUILDING BRIDGES ACROSS GENERATIONS" speed={50} />
        </h2>
      </div>

      {/* Get Started Button Positioned Higher */}
      <div className="absolute bottom-28 inset-x-0 flex justify-center">
        <Link to="/login">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
