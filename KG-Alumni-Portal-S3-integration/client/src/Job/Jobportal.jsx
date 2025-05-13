import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobPortal = () => {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [popup, setPopup] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/getAllJobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching job postings:', error);
      });
  }, []);

  const handleApply = (index) => {
    setAppliedJobs([...appliedJobs, index]);
    setPopup('Successfully applied for the job!');
    setTimeout(() => setPopup(''), 2000);
  };

  if (jobs.length === 0) {
    return <div className="text-center mt-10 text-lg font-medium">Loading job postings...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 relative">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Job Openings</h1>

      {popup && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {popup}
        </div>
      )}

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-1">{job.title}</h2>
            <p className="text-sm text-gray-700 mb-2">{job.company} — <span className="italic">{job.location}</span></p>
            <p className="text-gray-600"><strong>Salary:</strong> {job.salary}</p>
            <p className="text-gray-600"><strong>Type:</strong> {job.job_type}</p>
            <p className="text-gray-500 text-sm mb-2">
              Posted on: {new Date(job.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 text-sm mb-4">{job.description}</p>
            <button
              onClick={() => handleApply(index)}
              disabled={appliedJobs.includes(index)}
              className={`w-full py-2 rounded-md font-semibold transition-all duration-200 ${
                appliedJobs.includes(index)
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {appliedJobs.includes(index) ? 'Applied' : 'Apply'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPortal;
