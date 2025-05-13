import React, { useState } from "react";
import * as XLSX from "xlsx";

const studentData = [
  { name: "Harish Kumar", rollNo: "CSE001", cgpa: 8.2, standingArrears: 0, historyArrears: 1, attendance: 85 },
  { name: "Priya Sharma", rollNo: "CSE002", cgpa: 7.5, standingArrears: 1, historyArrears: 2, attendance: 78 },
  { name: "Adithya Verma", rollNo: "CSE003", cgpa: 9.0, standingArrears: 0, historyArrears: 0, attendance: 92 },
  { name: "Nehru", rollNo: "CSE004", cgpa: 6.8, standingArrears: 2, historyArrears: 3, attendance: 70 },
  { name: "Sanjay", rollNo: "CSE005", cgpa: 7.9, standingArrears: 0, historyArrears: 1, attendance: 88 },
  { name: "Anandh", rollNo: "CSE006", cgpa: 7.2, standingArrears: 1, historyArrears: 2, attendance: 80 },
  { name: "Ravi Kannan", rollNo: "CSE007", cgpa: 8.5, standingArrears: 0, historyArrears: 0, attendance: 90 },
  { name: "Simran", rollNo: "CSE008", cgpa: 6.9, standingArrears: 2, historyArrears: 4, attendance: 65 },
  { name: "Arjunan", rollNo: "CSE009", cgpa: 8.8, standingArrears: 0, historyArrears: 1, attendance: 87 },
  { name: "Deepika", rollNo: "CSE010", cgpa: 7.6, standingArrears: 1, historyArrears: 2, attendance: 75 },
  { name: "Karnan", rollNo: "CSE011", cgpa: 9.1, standingArrears: 0, historyArrears: 0, attendance: 93 },
  { name: "Meghana", rollNo: "CSE012", cgpa: 7.0, standingArrears: 2, historyArrears: 3, attendance: 72 },
  { name: "Naveen", rollNo: "CSE013", cgpa: 8.0, standingArrears: 1, historyArrears: 1, attendance: 85 },
  { name: "Priyanka", rollNo: "CSE014", cgpa: 7.4, standingArrears: 1, historyArrears: 2, attendance: 77 },
  { name: "Vikram", rollNo: "CSE015", cgpa: 8.3, standingArrears: 0, historyArrears: 0, attendance: 89 },
  { name: "Sunitha", rollNo: "CSE016", cgpa: 6.7, standingArrears: 2, historyArrears: 4, attendance: 68 },
  { name: "Akash", rollNo: "CSE017", cgpa: 7.8, standingArrears: 1, historyArrears: 1, attendance: 80 },
  { name: "Swati", rollNo: "CSE018", cgpa: 8.6, standingArrears: 0, historyArrears: 1, attendance: 88 },
  { name: "Harsath Khan", rollNo: "CSE019", cgpa: 7.3, standingArrears: 1, historyArrears: 2, attendance: 74 },
  { name: "Arnav", rollNo: "CSE020", cgpa: 9.2, standingArrears: 0, historyArrears: 0, attendance: 95 },
];
const StudentData = () => {
  const [filters, setFilters] = useState({ name: "", cgpa: "", standingArrears: "", attendance: "" });
  const [filteredData, setFilteredData] = useState(studentData);

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Apply filters
  const applyFilters = () => {
    setFilteredData(
      studentData.filter((student) =>
        (filters.name === "" || student.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.cgpa === "" || student.cgpa >= parseFloat(filters.cgpa || 0)) &&
        (filters.standingArrears === "" || student.standingArrears === parseInt(filters.standingArrears || 0)) &&
        (filters.attendance === "" || student.attendance >= parseInt(filters.attendance || 0))
      )
    );
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Filtered Students");
    XLSX.writeFile(workbook, "Filtered_Student_Data.xlsx");
  };

  return (
    <div className="p-6 relative">
      {/* 🔹 Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Student Data</h1>

      {/* 🔹 Export Button - Top Right with Scale Animation */}
      <div className="absolute top-6 right-6">
        <button
          onClick={exportToExcel}
          className="bg-green-500 text-white px-4 py-2 rounded transform transition-transform duration-200 hover:scale-105 active:scale-95"
        >
           Export  
        </button>
      </div>

      {/* Filters Section */}
      <div className="flex space-x-4 mb-4 mt-12">
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
          name="cgpa"
          placeholder="Min CGPA"
          value={filters.cgpa}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <select name="standingArrears" value={filters.standingArrears} onChange={handleFilterChange} className="border p-2 rounded">
          <option value="">Standing Arrears</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <input
          type="number"
          name="attendance"
          placeholder="Min Attendance %"
          value={filters.attendance}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        
        {/* 🔹 Apply Button - Color Change on Click */}
        <button
          onClick={applyFilters}
          className="bg-blue-500 text-white px-4 py-2 rounded transition-all duration-200 active:bg-blue-700"
        >
          Apply
        </button>
      </div>

      {/* Student Data Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Roll No</th>
            <th className="border p-2">CGPA</th>
            <th className="border p-2">Standing Arrears</th>
            <th className="border p-2">History of Arrears</th>
            <th className="border p-2">Attendance %</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((student, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.rollNo}</td>
              <td className="border p-2">{student.cgpa}</td>
              <td className="border p-2">{student.standingArrears}</td>
              <td className="border p-2">{student.historyArrears}</td>
              <td className="border p-2">{student.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentData;
