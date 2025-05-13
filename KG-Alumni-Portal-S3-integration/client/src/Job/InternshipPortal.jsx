import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InternshipPortal = () => {
  const [internships, setInternships] = useState([]);
  const [appliedIndexes, setAppliedIndexes] = useState([]);
  const [popup, setPopup] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getAllIntern');
      setInternships(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching internships:', error);
      setError('Failed to load internships. Please try again later.');
      setLoading(false);
    }
  };

  const handleApply = (index) => {
    setAppliedIndexes([...appliedIndexes, index]);
    setPopup('Successfully applied for the internship!');
    setTimeout(() => setPopup(''), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading internships...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button 
            onClick={fetchInternships}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 relative">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Internship Openings</h1>

      {popup && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {popup}
        </div>
      )}

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {internships.length > 0 ? (
          internships.map((intern, index) => (
          <div
              key={intern.userId}
            className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-1">{intern.title}</h2>
            <p className="text-sm text-gray-700 mb-2">{intern.company} — <span className="italic">{intern.location}</span></p>
              <p className="text-gray-600"><strong>Type:</strong> {intern.type}</p>
            <p className="text-gray-600"><strong>Duration:</strong> {intern.duration}</p>
            <p className="text-gray-500 text-sm mb-2">
              Posted on: {new Date(intern.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 text-sm mb-4">{intern.description}</p>
            <button
              onClick={() => handleApply(index)}
              disabled={appliedIndexes.includes(index)}
              className={`w-full py-2 rounded-md font-semibold transition-all duration-200 ${
                appliedIndexes.includes(index)
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {appliedIndexes.includes(index) ? 'Applied' : 'Apply'}
            </button>
          </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No internships available at the moment.</p>
            <p className="text-gray-400">Please check back later for new opportunities.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipPortal;
