import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import kiteLogo from "../assets/KiTE Logo with name.png";

const Navbar = () => {
  const location = useLocation(); // Get current path
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on page load
  useEffect(() => {
    const user = localStorage.getItem("userLoggedIn");
    if (user === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn"); // Remove user session
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="w-full bg-blue-900">
      <nav className="flex items-center w-full">
        
        {/* Logo Section */}
        <div className="bg-white px-5 py-2 flex items-center rounded-br-xl">
          <img src={kiteLogo} alt="KiTE Logo" className="h-14" />
        </div>

        {/* Menu Links */}
        <div className="flex-1 bg-blue-900 text-white py-2 px-4 flex items-center justify-end">
          <div className="flex space-x-5 text-base font-medium">
            <Link to="/" className="px-5 py-2 rounded-md hover:bg-blue-800 transition">
              Home
            </Link>
            <Link to="/about" className="px-5 py-2 rounded-md hover:bg-blue-800 transition">
              About
            </Link>
            <Link to="/alumni-directory" className="px-5 py-2 rounded-md hover:bg-blue-800 transition">
              Alumni Directory
            </Link>

            {/* Show Login & Sign Up only when NOT logged in */}
            {!isLoggedIn && (
              <>
                {/* <Link to="/login" className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-md transition">
                  Login
                </Link> */}
                {/* <Link to="/signup" className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md transition">
                  Sign Up
                </Link> */}
              </>
            )}

            {/* Show Logout when logged in */}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
