import React, { useState } from "react";
import * as XLSX from "xlsx";

const alumniData =[
    { "name": "Sathish Kumar", "rollNo": "CSE021", "batch": 2022, "role": "Machine Learning Engineer", "company": "Google", "location": "Bangalore", "linkedin": "https://linkedin.com/in/sathish", "contact": "9012345678" },
    { "name": "Vidhya Mohan", "rollNo": "CSE022", "batch": 2021, "role": "Software Architect", "company": "Microsoft", "location": "Hyderabad", "linkedin": "https://linkedin.com/in/vidhya", "contact": "9023456789" },
    { "name": "Ramesh Patel", "rollNo": "CSE023", "batch": 2020, "role": "IoT Engineer", "company": "Cisco", "location": "Pune", "linkedin": "https://linkedin.com/in/ramesh", "contact": "9034567890" },
    { "name": "Anjali Nair", "rollNo": "CSE024", "batch": 2019, "role": "Robotics Engineer", "company": "Boston Dynamics", "location": "Chennai", "linkedin": "https://linkedin.com/in/anjali", "contact": "9045678901" },
    { "name": "Surya Narayan", "rollNo": "CSE025", "batch": 2018, "role": "Blockchain Consultant", "company": "Coinbase", "location": "Mumbai", "linkedin": "https://linkedin.com/in/surya", "contact": "9056789012" },
    { "name": "Meenakshi Iyer", "rollNo": "CSE026", "batch": 2022, "role": "Game Developer", "company": "Ubisoft", "location": "Delhi", "linkedin": "https://linkedin.com/in/meenakshi", "contact": "9067890123" },
    { "name": "Ganesh Murthy", "rollNo": "CSE027", "batch": 2021, "role": "Cybersecurity Analyst", "company": "Palo Alto Networks", "location": "Bangalore", "linkedin": "https://linkedin.com/in/ganesh", "contact": "9078901234" },
    { "name": "Deepa Rangan", "rollNo": "CSE028", "batch": 2020, "role": "Cloud Security Engineer", "company": "AWS", "location": "Hyderabad", "linkedin": "https://linkedin.com/in/deepa", "contact": "9089012345" },
    { "name": "Rajeshwar Singh", "rollNo": "CSE029", "batch": 2019, "role": "Mobile App Developer", "company": "Apple", "location": "Pune", "linkedin": "https://linkedin.com/in/rajeshwar", "contact": "9090123456" },
    { "name": "Kavitha Balaji", "rollNo": "CSE030", "batch": 2018, "role": "Full Stack Developer", "company": "Netflix", "location": "Chennai", "linkedin": "https://linkedin.com/in/kavitha", "contact": "9101234567" },
    { "name": "Aravind Krishnan", "rollNo": "CSE031", "batch": 2022, "role": "Data Engineer", "company": "Facebook", "location": "Delhi", "linkedin": "https://linkedin.com/in/aravind", "contact": "9112345678" },
    { "name": "Sunil Dutta", "rollNo": "CSE032", "batch": 2021, "role": "Site Reliability Engineer", "company": "Google", "location": "Bangalore", "linkedin": "https://linkedin.com/in/sunil", "contact": "9123456789" },
    { "name": "Pooja Desai", "rollNo": "CSE033", "batch": 2020, "role": "Artificial Intelligence Researcher", "company": "DeepMind", "location": "Hyderabad", "linkedin": "https://linkedin.com/in/pooja", "contact": "9134567890" },
    { "name": "Ajith Kumar", "rollNo": "CSE034", "batch": 2019, "role": "DevOps Engineer", "company": "Red Hat", "location": "Pune", "linkedin": "https://linkedin.com/in/ajith", "contact": "9145678901" },
    { "name": "Sandhya Reddy", "rollNo": "CSE035", "batch": 2018, "role": "Embedded Systems Engineer", "company": "Intel", "location": "Chennai", "linkedin": "https://linkedin.com/in/sandhya", "contact": "9156789012" },
    { "name": "Krishna V", "rollNo": "CSE036", "batch": 2022, "role": "Machine Learning Engineer", "company": "Tesla", "location": "Delhi", "linkedin": "https://linkedin.com/in/krishna", "contact": "9167890123" },
    { "name": "Gayathri Ramesh", "rollNo": "CSE037", "batch": 2021, "role": "Software Tester", "company": "IBM", "location": "Bangalore", "linkedin": "https://linkedin.com/in/gayathri", "contact": "9178901234" },
    { "name": "Manoj Shankar", "rollNo": "CSE038", "batch": 2020, "role": "Game Designer", "company": "Sony", "location": "Hyderabad", "linkedin": "https://linkedin.com/in/manoj", "contact": "9189012345" },
    { "name": "Harini Jayakumar", "rollNo": "CSE039", "batch": 2019, "role": "AI Ethics Consultant", "company": "OpenAI", "location": "Pune", "linkedin": "https://linkedin.com/in/harini", "contact": "9190123456" }
  ]
  
const AlumniData = () => {
  const [filters, setFilters] = useState({ name: "", batch: "", role: "" });
  const [filteredData, setFilteredData] = useState(alumniData);

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Apply filters
  const applyFilters = () => {
    setFilteredData(
      alumniData.filter((alumni) =>
        (filters.name === "" || alumni.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.batch === "" || alumni.batch === parseInt(filters.batch)) &&
        (filters.role === "" || alumni.role.toLowerCase().includes(filters.role.toLowerCase()))
      )
    );
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Filtered Alumni");
    XLSX.writeFile(workbook, "Filtered_Alumni_Data.xlsx");
  };

  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Alumni Data</h1>

      {/* Export Button */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={exportToExcel} 
          className="bg-green-500 text-white px-4 py-2 rounded transform transition duration-200 hover:scale-105 hover:bg-green-600 active:scale-95"
        >
          Export
        </button>
      </div>

      {/* Filters Section */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Search by Name"
          value={filters.name}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="batch"
          placeholder="Batch"
          value={filters.batch}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="role"
          placeholder="Search by Role"
          value={filters.role}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <button
          onClick={applyFilters}
          className="bg-blue-500 text-white px-4 py-2 rounded transition-all duration-200 active:bg-blue-700"
        >
          Apply
        </button>
      </div>

      {/* Alumni Data Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Roll No</th>
            <th className="border p-2">Batch</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Company Name</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">LinkedIn Profile</th>
            <th className="border p-2">Contact No</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((alumni, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{alumni.name}</td>
              <td className="border p-2">{alumni.rollNo}</td>
              <td className="border p-2">{alumni.batch}</td>
              <td className="border p-2">{alumni.role}</td>
              <td className="border p-2">{alumni.company}</td>
              <td className="border p-2">{alumni.location}</td>
              <td className="border p-2">
                <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  LinkedIn
                </a>
              </td>
              <td className="border p-2">{alumni.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlumniData;
