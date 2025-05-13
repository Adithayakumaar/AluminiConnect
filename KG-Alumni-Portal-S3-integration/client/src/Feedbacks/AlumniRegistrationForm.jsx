import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';

const departments = [
  'Information Technology',
  'Computer Science And Engineering',
  'Electronics And Communication Engineering',
  'Civil Engineering',
  'Mechanical Engineering',
  'Artificial Intelligence And Data Science',
  'Computer Science And Business Systems'
];

const batches = Array.from({ length: 15 }, (_, i) => {
  const startYear = 2008 + i;
  return `${startYear}-${(startYear % 100) + 4}`;
});

const presentStatusOptions = ['COMPLETED', 'PURSUING'];

function AlumniRegistrationForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    email: '',
    name: '',
    mobile: '',
    department: '',
    batch: '',
    
    // Address Information
    currentAddress: '',
    communicationAddress: '',
    
    // Work Profile
    designation: '',
    company: '',
    workLocation: '',
    domain: '',
    experience: '',
    
    // Higher Studies
    highestDegree: '',
    presentStatus: '',
    institution: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-lg border border-gray-200 p-8 mb-1">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">KITE ALUMNI REGISTRATION FORM</h1>
          </div>
          <p className="text-gray-600">KSISL INSTITUTE OF TECHNOLOGY, SARAVANAMPATTI, COIMBATORE - 641035</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-1">
          {/* Personal Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile No. (Preferably WhatsApp No.) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department <span className="text-red-500">*</span>
                </label>
                <select
                  name="department"
                  id="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select Department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="batch" className="block text-sm font-medium text-gray-700 mb-1">
                  Batch <span className="text-red-500">*</span>
                </label>
                <select
                  name="batch"
                  id="batch"
                  required
                  value={formData.batch}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select Batch</option>
                  {batches.map((batch, index) => (
                    <option key={index} value={batch}>
                      {batch}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Address Information</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="currentAddress"
                  id="currentAddress"
                  required
                  value={formData.currentAddress}
                  onChange={handleChange}
                  rows={3}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="communicationAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Address for Communication <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="communicationAddress"
                  id="communicationAddress"
                  required
                  value={formData.communicationAddress}
                  onChange={handleChange}
                  rows={3}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Work Profile */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Work Profile</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Designation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Name of the Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="workLocation" className="block text-sm font-medium text-gray-700 mb-1">
                  Work Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="workLocation"
                  id="workLocation"
                  required
                  value={formData.workLocation}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
                  Domain of Work <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="domain"
                  id="domain"
                  required
                  value={formData.domain}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="experience"
                  id="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Higher Studies */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Higher Studies Detail (If Any)</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="highestDegree" className="block text-sm font-medium text-gray-700 mb-1">
                  Highest Degree
                </label>
                <input
                  type="text"
                  name="highestDegree"
                  id="highestDegree"
                  value={formData.highestDegree}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="presentStatus" className="block text-sm font-medium text-gray-700 mb-1">
                  Present Status
                </label>
                <select
                  name="presentStatus"
                  id="presentStatus"
                  value={formData.presentStatus}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select Status</option>
                  {presentStatusOptions.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
                  Name and Location of the University / Institution
                </label>
                <input
                  type="text"
                  name="institution"
                  id="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AlumniRegistrationForm;
