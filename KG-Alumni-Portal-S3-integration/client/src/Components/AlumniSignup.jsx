"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import bannerImage from "../assets/students.webp"

const AlumniSignup = () => {
  const navigate = useNavigate()

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    designation: "",
    passoutYear: "",
    location: "",
    company: "",
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

    // Redirect to alumni dashboard or confirmation page
    navigate("/alumnidashboard")
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Alumni Registration</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                <label className="block text-gray-700 font-medium mb-1">Designation</label>
                <input
                  type="text"
                  name="designation"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your current job title"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Passout Year</label>
                <input
                  type="number"
                  name="passoutYear"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Year of graduation"
                  min="1900"
                  max="2099"
                  value={formData.passoutYear}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your current city/country"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your current company"
                  value={formData.company}
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
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105 w-full md:w-1/2"
            >
              Register as Alumni
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

export default AlumniSignup

