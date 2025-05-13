import React from "react";
import kiteLogo from "../assets/logo.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.jpg";
import linkedin from "../assets/linkedin.png";
import x from "../assets/x.png";
import youtube from "../assets/youtube.jpg";
import aboutbg from "../assets/aboutbg.jpg";

const About = () => {
  return (
    <div
      className="text-white font-sans"
      style={{
        backgroundImage: `url(${aboutbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Footer */}
      <footer className="px-10 py-16 bg-[#0d3b5e] bg-opacity-90">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          {/* Address */}
          <div>
            <img src={kiteLogo} alt="KGiSL Logo" className="h-20 mb-4" />
            <h3 className="text-lg font-semibold mb-2">ADDRESS</h3>
            <p>
              KGiSL INSTITUTE OF TECHNOLOGY<br />
              KGiSL Campus, 365, Thudiyalur Road,<br />
              Saravanampatti, Coimbatore – 641035
            </p>

            <h3 className="text-lg font-semibold mt-4">FOR ADMISSION, CONTACT:</h3>
            <p className="mt-2">
              +91-9095244488, +91-9080927613,<br />
              0422-4419999, EXTN:9942
            </p>

            <div className="mt-4 text-sm space-y-1">
              <a href="#" className="hover:underline block">Terms & Conditions</a>
              <a href="#" className="hover:underline block">Privacy Policy</a>
            </div>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-lg font-semibold mb-2">ACADEMICS</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Departments</a></li>
              <li><a href="#" className="hover:underline">Programmes</a></li>
              <li><a href="#" className="hover:underline">Vision & Mission</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">USEFUL LINKS</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Governing Council</a></li>
              <li><a href="#" className="hover:underline">Internal Quality Assurance Cell</a></li>
              <li><a href="#" className="hover:underline">Anti-Ragging Cell</a></li>
              <li><a href="#" className="hover:underline">Grievance Redressal Committee</a></li>
              <li><a href="#" className="hover:underline">News and Events</a></li>
              <li><a href="#" className="hover:underline">Academic Calendar</a></li>
              <li><a href="#" className="hover:underline">Learning Resources</a></li>
              <li><a href="#" className="hover:underline">Online Grievance Redressal Form</a></li>
              <li><a href="#" className="hover:underline">AICTE Feedback Facility - Students & Faculty</a></li>
            </ul>
          </div>

          {/* Buttons and Social */}
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold mb-2">FOLLOW US ON</h3>
              <div className="flex space-x-3">
                <a href="#"><img src={fb} className="h-8" alt="Facebook" /></a>
                <a href="#"><img src={insta} className="h-8" alt="Instagram" /></a>
                <a href="#"><img src={linkedin} className="h-8" alt="LinkedIn" /></a>
                <a href="#"><img src={x} className="h-8" alt="Twitter" /></a>
                <a href="#"><img src={youtube} className="h-8" alt="YouTube" /></a>
              </div>
            </div>
            <div className="space-y-2">
              <button className="w-full bg-white text-[#0d3b5e] py-2 px-4 font-semibold rounded">Online Fees Payment</button>
              <button className="w-full bg-white text-[#0d3b5e] py-2 px-4 font-semibold rounded">Ecampus</button>
              <button className="w-full bg-white text-[#0d3b5e] py-2 px-4 font-semibold rounded">Alumni</button>
              <button className="w-full bg-white text-[#0d3b5e] py-2 px-4 font-semibold rounded">Staff Portal</button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-white/30 pt-6">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold">News Letter</h3>
          </div>
          <form className="mt-4 md:mt-0 flex w-full md:w-auto">
            <input type="email" placeholder="Your Email Address" className="p-2 w-full md:w-80 rounded-l bg-white text-black" />
            <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-r font-bold">SUBSCRIBE</button>
          </form>
        </div>

        <footer className="bg-[#00334d] text-center text-white py-3 mt-10 text-sm">
          Copyright © 2025 KGiSL Institute of Technology. All rights reserved.
        </footer>
      </footer>
    </div>
  );
};

export default About;
