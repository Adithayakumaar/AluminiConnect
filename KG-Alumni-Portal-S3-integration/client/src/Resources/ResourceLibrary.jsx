import React, { useState } from 'react';

const resources = [
  {
    title: "Attention Is All You Need",
    department: "Computer Science",
    link: "https://arxiv.org/pdf/1706.03762.pdf"
  },
  {
    title: "A Survey on Deep Learning Techniques",
    department: "Computer Science",
    link: "https://arxiv.org/pdf/1807.07987.pdf"
  },
  {
    title: "Blockchain Technology Overview",
    department: "Computer Science",
    link: "https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8202.pdf"
  },
  {
    title: "Signal Processing for 5G",
    department: "Electronics",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7010535"
  },
  {
    title: "Internet of Things: A Literature Review",
    department: "Electronics",
    link: "https://arxiv.org/pdf/1804.01747.pdf"
  },
  {
    title: "Introduction to Thermodynamics",
    department: "Mechanical",
    link: "https://ocw.mit.edu/courses/2-05-thermal-fluids-engineering-i-fall-2004/resources/lecture01/"
  },
  {
    title: "Mechanical Engineering Design Book (Shigley's)",
    department: "Mechanical",
    link: "https://b-ok.lat/book/3412862/189a6b"
  },
  {
    title: "Design of Reinforced Concrete",
    department: "Civil",
    link: "https://archive.org/download/design-of-reinforced-concrete-nilson/design-of-reinforced-concrete-nilson.pdf"
  },
  {
    title: "Sustainable Urban Infrastructure",
    department: "Civil",
    link: "https://www.sciencedirect.com/science/article/pii/S235255412030039X/pdfft?md5=1f4a46b8722bb8ea0257e3b0640b44ab&pid=1-s2.0-S235255412030039X-main.pdf"
  },
  {
    title: "Data Mining Concepts and Techniques (Han & Kamber)",
    department: "Computer Science",
    link: "https://www.cs.uvm.edu/~icdm/Resources/Books/dmbook.pdf"
  },
  {
    title: "VLSI Design Fundamentals",
    department: "Electronics",
    link: "https://nptel.ac.in/content/storage2/courses/117101058/downloads/Lec-01.pdf"
  },
  {
    title: "Embedded Systems - Rajkamal",
    department: "Electronics",
    link: "https://b-ok.lat/book/2546891/e15a44"
  },
  {
    title: "Introduction to CAD/CAM",
    department: "Mechanical",
    link: "https://nptel.ac.in/courses/112/105/112105125/"
  },
  {
    title: "Fluid Mechanics - White",
    department: "Mechanical",
    link: "https://b-ok.lat/book/2770957/112e4e"
  },
  {
    title: "Environmental Engineering Notes",
    department: "Civil",
    link: "https://www.vssut.ac.in/lecture_notes/lecture1428556014.pdf"
  },
];

const departments = ["All", ...new Set(resources.map(r => r.department))];

const ResourceLibrary = () => {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter(r =>
    (selectedDept === "All" || r.department === selectedDept) &&
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
<div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 p-6">
  <h1 className="text-4xl font-bold text-center text-blue-700 mb-10 tracking-tight">
    📚 Academic Resource Library
  </h1>

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
      placeholder="🔍 Search resources..."
      className="border border-blue-300 bg-white text-gray-700 px-4 py-2 rounded-full shadow-sm focus:ring-2 focus:ring-blue-400 transition w-full md:w-2/3"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>

  <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {filteredResources.map((res, index) => (
      <a
        key={index}
        href={res.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all rounded-2xl p-6 flex flex-col justify-between"
      >
        <h2 className="text-lg font-bold text-blue-700 mb-2">{res.title}</h2>
        <p className="text-sm text-gray-600">{res.department}</p>
      </a>
    ))}
  </div>

  {filteredResources.length === 0 && (
    <div className="text-center text-gray-500 mt-10">No resources found.</div>
  )}
</div>


  );
};

export default ResourceLibrary;
