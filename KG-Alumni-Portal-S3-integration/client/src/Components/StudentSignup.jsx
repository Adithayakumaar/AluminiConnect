"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import bannerImage from "../assets/students.webp"

const StudentSignup = () => {
  const navigate = useNavigate()

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rollNumber: "",
    course: "",
    year: "",
    branch: "",
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)

    // Redirect to student dashboard or confirmation page
    navigate("/studentdashboard")
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Student Registration</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Roll Number</label>
                <input
                  type="text"
                  name="rollNumber"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your student ID"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Course</label>
                <input
                  type="text"
                  name="course"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your course name"
                  value={formData.course}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Year</label>
                <select
                  name="year"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Branch</label>
                <input
                  type="text"
                  name="branch"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your branch/department"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex flex-col items-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105 w-full md:w-1/2"
            >
              Register as Student
            </button>

            <button type="button" onClick={() => navigate("/login")} className="mt-4 text-gray-600 hover:text-gray-800">
              Already have an account? Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentSignup;

