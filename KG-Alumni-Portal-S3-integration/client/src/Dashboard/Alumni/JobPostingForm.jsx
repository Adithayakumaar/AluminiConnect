import React, { useState } from 'react';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    skills: "",
    description: "",
    job_type: "Full-time",
    experience: "0-3 Years",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/postJob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          skills: formData.skills.split(',').map(skill => skill.trim()), // Split skills into array
          jobPostedBy: "652a1234abcd5678ef901234" // Replace with actual logged-in user's ID
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Job posted successfully!");
        // Reset form after successful submission
        setFormData({
          title: "",
          company: "",
          location: "",
          salary: "",
          skills: "",
          description: "",
          job_type: "Full-time",
          experience: "0-3 Years",
        });
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert("There was an error posting the job.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 px-6 py-4">
          <h2 className="text-3xl font-bold text-white text-center">Create Job Posting</h2>
          <p className="text-blue-100 text-center mt-2">Fill in the details to post a new job opportunity</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Job Title Input */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Job Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Senior React Developer"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            />
          </div>

          {/* Company Name Input */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="e.g. Tech Solutions Inc"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            />
          </div>

          {/* Location Input */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Location</label>
            <input
              type="text"
              name="location"
              placeholder="e.g. New York, NY"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            />
          </div>

          {/* Salary Input */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Salary</label>
            <input
              type="text"
              name="salary"
              placeholder="e.g. ₹80,000 - ₹120,000"
              value={formData.salary}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          {/* Employment Type Select */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Employment Type</label>
            <select
              name="job_type"
              value={formData.job_type}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Freelance</option>
            </select>
          </div>

          {/* Experience Level Select */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Experience Level</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            >
              <option>0-3 Years</option>
              <option>3-5 Years</option>
              <option>5-8 Years</option>
              <option>More than 8 Years</option>
            </select>
          </div>

          {/* Skills Input */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Required Skills</label>
            <input
              type="text"
              name="skills"
              placeholder="e.g. React, Node.js, SQL (comma separated)"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            />
          </div>

          {/* Job Description Textarea */}
          <div className="space-y-2">
            <label className="text-gray-700 font-medium">Job Description</label>
            <textarea
              name="description"
              placeholder="Enter detailed job description..."
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent h-32"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPostingForm;