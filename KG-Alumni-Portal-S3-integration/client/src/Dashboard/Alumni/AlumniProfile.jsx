import React, { useState } from "react";
import { Briefcase, GraduationCap, LinkedinIcon, User, Calendar, BookOpen, Code, Building2, Camera } from 'lucide-react';

const AlumniProfile = () => {
  const degrees = ["B.Tech", "M.Tech", "MBA", "B.E", "Ph.D", "Other"];
  const departments = [
    "Information Technology",
    "Computer Science And Engineering",
    "Electronics And Communication Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Artificial Intelligence And Data Science",
    "Computer Science And Business Systems",
  ];
  const years = Array.from({ length: 26 }, (_, i) => 2000 + i);

  const [formData, setFormData] = useState({
    fullName: "",
    graduationYear: "",
    degree: "",
    department: "",
    jobTitle: "",
    company: "",
    skills: "",
    linkedin: "",
    photo: null
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, photo: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Profile Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-8 py-6">
            <div className="flex items-center space-x-4">
              <GraduationCap className="h-8 w-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Alumni Profile</h2>
            </div>
            <p className="mt-2 text-blue-100">Share your professional journey and stay connected with your alma mater</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Photo Upload Section */}
              <div className="md:col-span-2">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                      {photoPreview ? (
                        <img
                          src={photoPreview}
                          alt="Profile preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <User className="w-16 h-16 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <label
                      htmlFor="photo-upload"
                      className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                    >
                      <Camera className="h-5 w-5 text-white" />
                    </label>
                    <input
                      type="file"
                      id="photo-upload"
                      name="photo"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Upload your professional photo
                  </p>
                </div>
              </div>

              {/* Personal Information Section */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Information
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  Academic Information
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <Calendar className="h-4 w-4 inline mr-1 text-gray-500" />
                        Graduation Year
                      </label>
                      <select
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select Year</option>
                        {years.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <GraduationCap className="h-4 w-4 inline mr-1 text-gray-500" />
                        Degree
                      </label>
                      <select
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select Degree</option>
                        {degrees.map((degree) => (
                          <option key={degree} value={degree}>{degree}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <BookOpen className="h-4 w-4 inline mr-1 text-gray-500" />
                        Department
                      </label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                  Professional Information
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <Briefcase className="h-4 w-4 inline mr-1 text-gray-500" />
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        placeholder="Enter your current position"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <Building2 className="h-4 w-4 inline mr-1 text-gray-500" />
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Enter company name"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Code className="h-4 w-4 inline mr-1 text-gray-500" />
                      Skills & Expertise
                    </label>
                    <textarea
                      name="skills"
                      placeholder="List your key skills and areas of expertise"
                      value={formData.skills}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <LinkedinIcon className="h-4 w-4 inline mr-1 text-gray-500" />
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      placeholder="https://linkedin.com/in/your-profile"
                      value={formData.linkedin}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <GraduationCap className="h-5 w-5" />
                <span>Submit Profile</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfile;