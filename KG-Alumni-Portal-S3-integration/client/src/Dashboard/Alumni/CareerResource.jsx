import React, { useState } from "react";
import { BookOpen, Upload, Youtube, FileText, Video, Trash2, Plus, FolderOpen, Link } from 'lucide-react';

const CareerResource = () => {
  const [resources, setResources] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    file: null,
    fileType: "",
    youtubeLink: "",
  });

  const categories = [
    { id: "career-tips", label: "Career Tips" },
    { id: "study-materials", label: "Study Materials" },
    { id: "interview-guidance", label: "Interview Guidance" },
    { id: "skill-development", label: "Skill Development" },
    { id: "industry-insights", label: "Industry Insights" }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.startsWith("video") ? "video" : "document";
      setFormData({ ...formData, file, fileType, youtubeLink: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulate API call with a delay
    try {
      // Show loading state (optional)
      const submitButton = e.target.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML = '<div class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div> Submitting...';
      submitButton.disabled = true;

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate successful response
      const successMessage = `✅ Career resource "${formData.title}" has been successfully added!\n\nCategory: ${formData.category}\nType: ${formData.fileType || 'YouTube Link'}`;
      alert(successMessage);

      // Add the new resource to the local state
      const newResource = {
        id: Date.now(), // Generate a unique ID
        ...formData
      };
      setResources(prevResources => [...prevResources, newResource]);
      
      // Reset form
      setFormData({
        title: "",
        description: "",
        category: "",
        file: null,
        fileType: "",
        youtubeLink: "",
      });

      // Reset button state
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;

    } catch (error) {
      console.error("Error adding career resource:", error);
      alert("There was an error adding the career resource.");
    }
  };

  const handleDelete = (id) => {
    setResources(resources.filter(resource => resource.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            Career Resources 
          </h1>
          <p className="mt-2 text-gray-600">Share and access valuable career development materials</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Upload className="h-5 w-5 text-blue-600" />
                Upload Resource
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter resource title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    placeholder="Provide a brief description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.label}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload File</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.ppt,.mp4"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200"
                      >
                        <FolderOpen className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-600">Choose file</span>
                      </label>
                    </div>
                    {formData.file && (
                      <p className="mt-2 text-sm text-gray-500">
                        Selected: {formData.file.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      YouTube Link
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        name="youtubeLink"
                        placeholder="https://youtube.com/watch?v=..."
                        value={formData.youtubeLink}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                      <Youtube className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Plus className="h-5 w-5" />
                  Add Resource
                </button>
              </form>
            </div>
          </div>

          {/* Resources List */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Link className="h-5 w-5 text-blue-600" />
                Available Resources
              </h2>

              {resources.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {resources.map((resource) => (
                    <div
                      key={resource.id}
                      className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                        <button
                          onClick={() => handleDelete(resource.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                        {resource.category}
                      </span>

                      <div className="space-y-2">
                        {resource.fileType === "document" && resource.file && (
                          <a
                            href={URL.createObjectURL(resource.file)}
                            download={resource.file.name}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                          >
                            <FileText className="h-4 w-4" />
                            <span>Download Document</span>
                          </a>
                        )}

                        {resource.fileType === "video" && resource.file && (
                          <div className="relative pt-[56.25%]">
                            <video
                              src={URL.createObjectURL(resource.file)}
                              controls
                              className="absolute top-0 left-0 w-full h-full rounded-lg"
                            />
                          </div>
                        )}

                        {resource.youtubeLink && (
                          <div className="relative pt-[56.25%]">
                            <iframe
                              className="absolute top-0 left-0 w-full h-full rounded-lg"
                              src={`https://www.youtube.com/embed/${new URL(resource.youtubeLink).searchParams.get("v")}`}
                              title="YouTube Video"
                              allowFullScreen
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No resources available yet.</p>
                  <p className="text-gray-400 text-sm">Upload your first resource to get started!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerResource;