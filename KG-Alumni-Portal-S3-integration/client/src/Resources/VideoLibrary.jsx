import React, { useState } from 'react';

const videoResources = [
  {
    title: "Computer Science Crash Course",
    department: "Computer Science",
    link: "https://www.youtube.com/embed/O5nskjZ_GoI",
  },
  {
    title: "Intro to Machine Learning - MIT",
    department: "Computer Science",
    link: "https://www.youtube.com/embed/ukzFI9rgwfU",
  },
  {
    title: "Introduction to Electronics",
    department: "Electronics",
    link: "https://www.youtube.com/embed/mc979OhitAg",
    
  },
  {
    title: "Basics of Electrical Circuits",
    department: "Electrical",
    link:"https://www.youtube.com/embed/CIv6vu9d73c?si=xddm3Cj9VhwFB5J-"

  },
  {
    title: "Introduction to Quantum Mechanics",
    department: "Physics",
    link: "https://www.youtube.com/embed/p7bzE1E5PMY",
  },
  {
    title: "Organic Chemistry Basics",
    department: "Chemistry",
    link: "https://www.youtube.com/embed/FSyAehMdpyI",
  },
  {
    title: "Engineering Mechanics Lecture 1",
    department: "Mechanical",
    link: "https://www.youtube.com/embed/AwaVPJJEjAQ?si=xVK3jw-pb-2UcKMs",
  },
  {
    title: "Biology - Cell Structure",
    department: "Biology",
    link: "https://www.youtube.com/embed/URUJD5NEXC8",
  },
  {
    title: "Civil Engineering: Surveying",
    department: "Civil",
    link: "https://www.youtube.com/embed/FSwAc4i0zLo?si=cXYMwAVBuTeDEh4a",
  },
  
];

const departments = ["All", ...new Set(videoResources.map(res => res.department))];

const VideoResources = () => {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVideos = videoResources.filter((video) => {
    return (
      (selectedDept === "All" || video.department === selectedDept) &&
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">🎥 Educational Video Resources</h1>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        <select
          className="border border-blue-300 bg-white text-gray-700 px-4 py-2 rounded-full shadow-sm focus:ring-2 focus:ring-blue-400 transition w-full md:w-1/3"
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="🔍 Search videos..."
          className="border border-blue-300 bg-white text-gray-700 px-4 py-2 rounded-full shadow-sm focus:ring-2 focus:ring-blue-400 transition w-full md:w-2/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all rounded-2xl p-4 flex flex-col gap-3"
          >
            <iframe
              src={video.link}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-full h-48"
            ></iframe>
            <h2 className="text-md font-bold text-blue-700">{video.title}</h2>
            <p className="text-sm text-gray-600">{video.department}</p>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center text-gray-500 mt-10">No videos found.</div>
      )}
    </div>
  );
};

export default VideoResources;
