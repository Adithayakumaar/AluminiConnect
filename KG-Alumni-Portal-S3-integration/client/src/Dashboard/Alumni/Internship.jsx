import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Calendar, 
  Globe2, 
  GraduationCap, 
  FileText,
  Clock
} from 'lucide-react';

const Internship = ({ onSubmit }) => {
  const [internshipData, setInternshipData] = useState({
    title: "",
    company: "",
    location: "",
    duration: "",
    type: "On-site",
    stipend: "",
    eligibility: "",
    description: "",
    startDate: "",
  });

  const handleChange = (e) => {
    setInternshipData({
      ...internshipData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!internshipData.title || !internshipData.company || !internshipData.description) {
      alert("Please fill in required fields.");
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/postIntern', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...internshipData,
          internPostedBy: "652a1234abcd5678ef901234" // Replace with actual logged-in user's ID
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Internship posted successfully!");
        // Reset form after successful submission
    setInternshipData({
      title: "",
      company: "",
      location: "",
      duration: "",
      type: "On-site",
      stipend: "",
      eligibility: "",
      description: "",
      startDate: "",
    });
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error posting internship:", error);
      alert("There was an error posting the internship.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 px-6 py-8 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
          <h2 className="text-3xl font-bold text-white text-center relative z-10">Post an Internship</h2>
          <p className="text-blue-100 text-center mt-2 relative z-10">Create a new internship opportunity</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                Internship Title *
              </label>
              <input
                type="text"
                name="title"
                placeholder="e.g. Software Development Intern"
                value={internshipData.title}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                Company Name *
              </label>
              <input
                type="text"
                name="company"
                placeholder="e.g. Tech Solutions Inc"
                value={internshipData.company}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g. New York, NY"
                value={internshipData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                Duration
              </label>
              <input
                type="text"
                name="duration"
                placeholder="e.g. 3 months"
                value={internshipData.duration}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Globe2 className="w-5 h-5 mr-2 text-blue-600" />
                Type
              </label>
              <select
                name="type"
                value={internshipData.type}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option>On-site</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={internshipData.startDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium">
              <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
              Eligibility
            </label>
            <input
              type="text"
              name="eligibility"
              placeholder="e.g. Computer Science students in their third year"
              value={internshipData.eligibility}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium">
              <FileText className="w-5 h-5 mr-2 text-blue-600" />
              Description *
            </label>
            <textarea
              name="description"
              placeholder="Enter detailed internship description..."
              value={internshipData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent h-32"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Post Internship
          </button>
        </form>
      </div>
    </div>
  );
};

export default Internship;