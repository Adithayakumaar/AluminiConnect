import React, { useState } from "react";
import AlumniCard from "./AlumniCard";
import AravindhanS from "../assets/Alumni-Photos/Aravindhan S.jpeg";
const alumniData = [
  { name: "Aravindhan S", role:"Software Engineer", joiningYear: 2014, batch: 2014, program: "BE CSE", domain: "Software Engineering", location: "Coimbatore", company: "Ugam Solutions ", designation: "Senior Developer", linkedin: "https://linkedin.com/in/Prakash", image: "src/assets/Alumni-Photos/Aravindhan S.jpeg" },
  { name: "Priyanka R", role: "Data Scientist", joiningYear: 2014, batch: 2014, program: "BE CSE", domain: "Data Science", location: "Bangalore", company: "Face", designation: "Data Analyst", linkedin: "https://linkedin.com/in/Aaditaya Kumar", image: "src/assets/Alumni-Photos/Priyanka R.jpeg" },
  { name: "Krishna Divya", role: "Cybersecurity Engineer", joiningYear: 2015, batch: 2015, program: "BE CSE", domain: "Cybersecurity", location: "Bangalore", company: "TCS", designation: "Security Analyst", linkedin: "https://linkedin.com/in/Rajesh Kumar", image: "src/assets/Alumni-Photos/Krishna Divya.jpeg" },
  { name: "Prema S", role: "AI Researcher", joiningYear: 2015, batch: 2015, program: "BE CSE", domain: "Artificial Intelligence", location: "Chennai", company: "Valtech India Private Limited ", designation: "ML Engineer", linkedin: "https://linkedin.com/in/Neha", image: "src/assets/Alumni-Photos/Prema S.jpeg" },
  { name: "Meenakshi H", role: "Cloud Engineer", joiningYear: 2016, batch: 2016, program: "BE CSE", domain: "Cloud Computing", location: "Pune", company: "Capgemini ", designation: "Cloud Architect", linkedin: "https://linkedin.com/in/Vikram", image: "src/assets/Alumni-Photos/Meenakshi H.jpeg" },
  { name: "Kishore Raj R ", role: "UI/UX Designer", joiningYear: 2016, batch: 2016, program: "BE CSE", domain: "UI/UX Design", location: "Chennai", company: "Coding Mart", designation: "Senior Designer", linkedin: "https://linkedin.com/in/Shalini", image: "src/assets/Alumni-Photos/Kishore Raj R .jpeg" },
  { name: "Rahul Prabhu", role: "Backend Developer", joiningYear: 2017, batch: 2017, program: "BE CSE", domain: "Web Development", location: "Coimbatore", company: "Presidio ", designation: "Software Engineer", linkedin: "https://linkedin.com/in/Karan", image: "src/assets/Alumni-Photos/Rahul Prabhu.jpeg" },
  { name: "Solomon Raj", role: "DevOps Engineer", joiningYear: 2017, batch: 2017, program: "BE CSE", domain: "DevOps", location: "Chennai", company: "Presidio ", designation: "Site Reliability Engineer", linkedin: "https://linkedin.com/in/Priya", image: "src/assets/Alumni-Photos/Solomon Raj.jpeg" },
  { name: "Hemalatha K", role: "Blockchain Developer", joiningYear: 2018, batch: 2018, program: "BE CSE", domain: "Blockchain", location: "Hyderabad", company: "CTS", designation: "Smart Contract Engineer", linkedin: "https://linkedin.com/in/Anitha", image: "src/assets/Alumni-Photos/Hemalatha K.jpeg" },
  { name: "Santhosh M", role: "Game Developer", joiningYear: 2017, batch: 2017, program: "BE CSE", domain: "Game Development", location: "Chennai", company: "QAD India Pvt. Ltd", designation: "Unity Developer", linkedin: "https://linkedin.com/in/Pooja", image: "src/assets/Alumni-Photos/Santhosh M.jpeg" },
  { name: "Saravanan G", role: "Network Engineer", joiningYear: 2018, batch: 2019, program: "BE CSE", domain: "Networking", location: "Bangalore", company: "Raja Software Labs Pvt. Ltd.", designation: "Network Analyst", linkedin: "https://linkedin.com/in/Arjun", image: "src/assets/Alumni-Photos/Saravanan G.jpeg" },
  { name: "Deepak Chakravarthy", role: "Embedded Systems Engineer", joiningYear: 2018, batch: 2018, program: "BE CSE", domain: "Embedded Systems", location: "Coimbatore", company: "Kovai.co", designation: "Hardware Engineer", linkedin: "https://linkedin.com/in/Sanjay", image: "src/assets/Alumni-Photos/Deepak Chakravarthy.jpeg" },
  { name: "Sathasivam T", role: "Data Engineer", joiningYear: 2019, batch: 2019, program: "BE CSE", domain: "Big Data", location: "Mumbai", company: "Coimbatore", designation: "Kovai.co", linkedin: "https://linkedin.com/in/Krishna Kumar", image: "src/assets/Alumni-Photos/Sathasivam T.jpeg" },
  { name: "Suveksha A", role: "Database Administrator", joiningYear: 2019, batch: 2019, program: "BE CSE", domain: "Database Management", location: "Bangalore", company: "Samsung", designation: "DBA Specialist", linkedin: "https://linkedin.com/in/Ramesh", image: "src/assets/Alumni-Photos/Suveksha A.jpeg" },
  { name: "Subhiksha C R", role: "Computer Vision Engineer", joiningYear: 2020, batch: 2023, program: "BE CSE", domain: "Computer Vision", location: "Hyderabad", company: "Tesla", designation: "Vision AI Developer", linkedin: "https://linkedin.com/in/Suresh", image: "src/assets/Alumni-Photos/Subhiksha C R.jpeg" }
];


const filterOptions = {
  "Search by Role": ["Software Engineer", "Data Scientist", "Cybersecurity Engineer", "AI Researcher", "Cloud Engineer", 
"UI/UX Designer", "Backend Developer", "DevOps Engineer", "Blockchain Developer", "Game Developer", 
"Network Engineer", "Embedded Systems Engineer", "Data Engineer", "Database Administrator", 
"Computer Vision Engineer", "Full Stack Developer", "Mobile App Developer", "AI Ethics Researcher", 
"Software Quality Engineer", "Cloud Developer"
],
  "Year of Joining": [2018, 2017, 2016, 2019, 2020, 2015, 2016, 2017, 2018, 2019, 
    2016, 2017, 2018, 2019, 2020, 2016, 2017, 2018, 2019, 2019, 2019
    ],
  "Batch": [2021, 2020, 2019, 2022, 2023, 2018, 2019, 2020, 2021, 2022, 
    2019, 2020, 2021, 2022, 2023, 2019, 2020, 2021, 2022, 2022, 2022
    ],
  "Program Name": ["BE CSE"],
  "Current Location": ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata", "Delhi", 
"Hyderabad", "Pune", "Bangalore", "Delhi", "Mumbai", "Kolkata", "Hyderabad", "Pune", 
"Chennai", "Bangalore", "Coimbatore", "Bangalore", "Bangalore"
],
  "Company": ["Google", "Amazon", "Microsoft", "OpenAI", "IBM", "Adobe", "Netflix", "Amazon", 
"Coinbase", "Ubisoft", "Cisco", "Intel", "Facebook", "Oracle", "Tesla", "TCS", 
"Flipkart", "Google DeepMind", "Zoho", "Infosys", "Google"
],
  "Designation": ["Senior Developer", "Data Analyst", "Security Analyst", "ML Engineer", "Cloud Architect",  
"Senior Designer", "Software Engineer", "Site Reliability Engineer", "Smart Contract Engineer",  
"Unity Developer", "Network Analyst", "Hardware Engineer", "Big Data Analyst", "DBA Specialist",  
"Vision AI Developer", "Lead Developer", "Android Developer", "AI Ethics Specialist",  
"QA Engineer", "Develop Leader"
],
};

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});

  const handleFilterChange = (filter, value) => {
    setFilters((prev) => ({ ...prev, [filter]: value }));
  };

  const filterMappings = {
    "Search by Role": "role",
    "Year of Joining": "joiningYear",
    "Batch": "batch",
    "Program Name": "program",
    "Current Location": "location",
    "Company": "company",
    "Designation": "designation",
  };
  
  
  const filteredAlumni = alumniData.filter((alumni) => {
    return (
      Object.entries(filters).every(([key, value]) => {
        const alumniKey = filterMappings[key]; // Map the filter key to actual alumni property
        return !value || alumni[alumniKey] === value;
      }) &&
      (searchTerm === "" || alumni.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });
  
  return (
    <div className="flex">
      {/* Sidebar Filters - Added White Line on Top */}
      <div className="w-1/4 p-4 bg-gradient-to-b from-blue-900 to-blue-900 text-white min-h-screen relative">
        {/* White Line on Top */}
        <div className="absolute top-0 left-0 w-full h-4 bg-white"></div>

        <h2 className="text-xl font-bold mb-4 mt-4 text-center">Filters</h2>

        {/* Search Bar - White Background & Black Text */}
        <input
          type="text"
          placeholder="Search Alumni..."
          className="w-80 p-2 mb-4 bg-white text-black rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Display all filters */}
        {Object.entries(filterOptions).map(([filter, options]) => (
          <div key={filter} className="mb-3">
            <h3 className="text-md font-semibold mb-2">{filter}</h3>
            <select
  className="w-80 p-2 text-black rounded bg-indigo-500 text-white"
  onChange={(e) => handleFilterChange(filter, e.target.value)}
>
  <option value="" enable selected>
    Select
  </option>
  {options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">Alumni Directory</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((alumni, index) => <AlumniCard key={index} {...alumni} />)
          ) : (
            <p className="text-center text-gray-500 col-span-3">No alumni found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniDirectory;