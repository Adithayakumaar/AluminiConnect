// 📁 src/pages/Student.jsx

import React, { useState, useRef, useEffect } from "react";
import bannerImage from "../../assets/background.jpg";

const Student = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle function for dropdowns
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* 🔹 Top Navbar */}
      <nav className="bg-blue-900 text-white py-4 shadow-lg">
        <div className="flex justify-center space-x-10" ref={dropdownRef}>
          {/* 🟦 Study Materials */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("materials")}
              className="flex items-center gap-1 px-6 py-3 font-semibold text-white bg-blue-900 rounded-md transition-all duration-300 hover:bg-indigo-700"
            >
              Resource <span className="ml-1">▾</span>
            </button>
            {openDropdown === "materials" && (
              <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2 z-10">
                <a href="ViewMaterials" className="block px-4 py-2 hover:bg-blue-200">Documents</a>
                <a href="ViewVideos" className="block px-4 py-2 hover:bg-blue-200">Video</a>
              </div>
            )}
          </div>

          {/* 🟦 Job Opportunities */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("job")}
              className="flex items-center gap-1 px-6 py-3 font-semibold text-white bg-blue-900 rounded-md transition-all duration-300 hover:bg-indigo-700"
            >
              Job Application <span className="ml-1">▾</span>
            </button>
            {openDropdown === "job" && (
              <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2 z-10">
                <a href="/intern-portal" className="block px-4 py-2 hover:bg-blue-200">Apply Internship</a>
                <a href="/job-portal" className="block px-4 py-2 hover:bg-blue-200">Job Portal</a>
                <a href="studentfeedback" className="block px-4 py-2 hover:bg-blue-200">Feedback</a>
              </div>
            )}
          </div>

          {/* 🟦 Events and Engagement */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("feedback")}
              className="flex items-center gap-1 px-6 py-3 font-semibold text-white bg-blue-900 rounded-md transition-all duration-300 hover:bg-indigo-700"
            >
              Event Engagement <span className="ml-1">▾</span>
            </button>
            {openDropdown === "feedback" && (
              <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2 z-10">
                <a href="/events" className="block px-4 py-2 hover:bg-blue-200">View Upcoming Events</a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 🔹 Background Image Section */}
      <div
        className="flex-grow bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        {/* Optional: Add any overlay or text here if needed */}
      </div>

      {/* 🔹 Fixed Bottom Section */}
      <footer className="w-full bg-gray-200 py-4 flex justify-center space-x-10">
        <button className="w-60 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition">
          📚 Study Resources
        </button>
        <button className="w-60 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition">
          📋 Surveys
        </button>
      </footer>
    </div>
  );
};

export default Student;
