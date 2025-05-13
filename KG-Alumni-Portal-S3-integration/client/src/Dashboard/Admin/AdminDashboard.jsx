import React, { useState, useRef, useEffect } from "react";
import bannerImage from "../../assets/background.jpg";

const AdminDashboard = () => {
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
    <div className="flex flex-col min-h-screen">
      {/* 🔹 Top Navbar */}
      <nav className="bg-blue-900 text-white py-4 shadow-lg z-10">
        <div className="flex justify-center space-x-16" ref={dropdownRef}>
          {/* Dropdowns (same as your original) */}
          {[
            {
              key: "dataManagement",
              label: "Data Management",
              links: [
                { href: "studentdata", label: "Student Data" },
                { href: "alumnidata", label: "Alumni Data" },
              ],
            },
            {
              key: "studentEngagement",
              label: "Student Engagement",
              links: [
                { href: "JobPostingForm", label: "Job Posting" },
                { href: "CareerResource", label: "Career Resource" },
              ],
            },
            {
              key: "events",
              label: "Events",
              links: [
                { href: "UpcomingEvents", label: "Upcoming Events" },
                
              ],
            },
            {
              key: "donation",
              label: "Donation",
              links: [
                { href: "Donation", label: "Donation" },
                { href: "CrowdFundingPage", label: "Financial Campaign" },
              ],
            },
          ].map((menu) => (
            <div className="relative" key={menu.key}>
              <button
                onClick={() => toggleDropdown(menu.key)}
                className="relative px-6 py-3 font-semibold text-white bg-blue-900 transition-all duration-300 hover:bg-indigo-700"
              >
                {menu.label} ▾
              </button>
              {openDropdown === menu.key && (
                <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2 z-50">
                  {menu.links.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2 hover:bg-blue-200 ${
                        index === menu.links.length - 1 ? "rounded-b-lg" : ""
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* 🔹 Full Background Image Area */}
      <div
        className="flex-grow bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        {/* Optional overlay content can go here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
