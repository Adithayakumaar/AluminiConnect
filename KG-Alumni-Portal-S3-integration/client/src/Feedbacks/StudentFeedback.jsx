import { useState } from "react";
import { 
  User, Mail, Phone, BookOpen, Calendar, MessageSquare, 
  Send, CheckCircle, AlertCircle, ChevronDown 
} from "react-feather"; // You'll need to install react-feather

export default function StudentFeedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    feedback: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState(null);

  const departments = [
    "Computer Science",
    "Electronics",
    "Mechanical",
    "Civil",
    "Electrical",
    "Other",
  ];
  
  const years = ["1st Year", "2nd Year", "3rd Year", "Final Year"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({...errors, [e.target.name]: null});
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.department) newErrors.department = "Please select a department";
    if (!formData.year) newErrors.year = "Please select your year of study";
    if (!formData.feedback.trim()) newErrors.feedback = "Feedback is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          department: "",
          year: "",
          feedback: "",
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out scale-105">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your feedback has been submitted successfully.
            </p>
            <p className="text-sm text-gray-500">
              We appreciate your time and valuable input.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Student Feedback
          </h2>
          {/* <p className="mt-2 text-gray-600">
            We value your opinion! Please share your thoughts with us.
          </p> */}
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Progress Bar */}
          <div className="w-full  rounded-full h-1.5 mb-6">
            <div 
              className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
              style={{ 
                width: `${Object.values(formData).filter(Boolean).length * 100/6}%` 
              }}
            ></div>
          </div>
          
          {/* Name */}
          <div className="relative">
            <label className={`block text-sm font-medium ${focused === 'name' ? 'text-blue-600' : 'text-gray-700'} mb-1 transition-colors duration-200`}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className={`flex items-center border ${errors.name ? 'border-red-300' : focused === 'name' ? 'border-blue-400' : 'border-gray-300'} rounded-lg overflow-hidden transition-all duration-200 ${focused === 'name' ? 'ring-2 ring-blue-100' : ''}`}>
              <div className="px-3 py-2 bg-gray-50">
                <User size={20} className={`${focused === 'name' ? 'text-blue-500' : 'text-gray-400'}`} />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                required
                className="w-full p-3 outline-none"
                placeholder="Enter your full name"
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <label className={`block text-sm font-medium ${focused === 'email' ? 'text-blue-600' : 'text-gray-700'} mb-1 transition-colors duration-200`}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className={`flex items-center border ${errors.email ? 'border-red-300' : focused === 'email' ? 'border-blue-400' : 'border-gray-300'} rounded-lg overflow-hidden transition-all duration-200 ${focused === 'email' ? 'ring-2 ring-blue-100' : ''}`}>
              <div className="px-3 py-2 bg-gray-50">
                <Mail size={20} className={`${focused === 'email' ? 'text-blue-500' : 'text-gray-400'}`} />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                required
                className="w-full p-3 outline-none"
                placeholder="your.email@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.email}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label className={`block text-sm font-medium ${focused === 'phone' ? 'text-blue-600' : 'text-gray-700'} mb-1 transition-colors duration-200`}>
              Phone Number <span className="text-gray-400">(Optional)</span>
            </label>
            <div className={`flex items-center border ${focused === 'phone' ? 'border-blue-400' : 'border-gray-300'} rounded-lg overflow-hidden transition-all duration-200 ${focused === 'phone' ? 'ring-2 ring-blue-100' : ''}`}>
              <div className="px-3 py-2 bg-gray-50">
                <Phone size={20} className={`${focused === 'phone' ? 'text-blue-500' : 'text-gray-400'}`} />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
                className="w-full p-3 outline-none"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>

          {/* Two columns for Department and Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Department Dropdown */}
            <div className="relative">
              <label className={`block text-sm font-medium ${focused === 'department' ? 'text-blue-600' : 'text-gray-700'} mb-1 transition-colors duration-200`}>
                Department <span className="text-red-500">*</span>
              </label>
              <div className={`flex items-center border ${errors.department ? 'border-red-300' : focused === 'department' ? 'border-blue-400' : 'border-gray-300'} rounded-lg overflow-hidden transition-all duration-200 ${focused === 'department' ? 'ring-2 ring-blue-100' : ''} relative`}>
                <div className="px-3 py-2 bg-gray-50">
                  <BookOpen size={20} className={`${focused === 'department' ? 'text-blue-500' : 'text-gray-400'}`} />
                </div>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  onFocus={() => handleFocus('department')}
                  onBlur={handleBlur}
                  required
                  className="w-full p-3 outline-none appearance-none bg-transparent pr-10"
                >
                  <option value="">Select Department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={18} className="text-gray-400" />
                </div>
              </div>
              {errors.department && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" /> {errors.department}
                </p>
              )}
            </div>

            {/* Year of Study Dropdown */}
            <div className="relative">
              <label className={`block text-sm font-medium ${focused === 'year' ? 'text-blue-600' : 'text-gray-700'} mb-1 transition-colors duration-200`}>
                Year of Study <span className="text-red-500">*</span>
              </label>
              <div className={`flex items-center border ${errors.year ? 'border-red-300' : focused === 'year' ? 'border-blue-400' : 'border-gray-300'} rounded-lg overflow-hidden transition-all duration-200 ${focused === 'year' ? 'ring-2 ring-blue-100' : ''} relative`}>
                <div className="px-3 py-2 bg-gray-50">
                  <Calendar size={20} className={`${focused === 'year' ? 'text-blue-500' : 'text-gray-400'}`} />
                </div>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  onFocus={() => handleFocus('year')}
                  onBlur={handleBlur}
                  required
                  className="w-full p-3 outline-none appearance-none bg-transparent pr-10"
                >
                  <option value="">Select Year</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={18} className="text-gray-400" />
                </div>
              </div>
              {errors.year && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" /> {errors.year}
                </p>
              )}
            </div>
          </div>

          {/* Feedback Message Box */}
          <div className="relative">
            <label className={`block text-sm font-medium ${focused === 'feedback' ? 'text-blue-600' : 'text-gray-700'} mb-1 transition-colors duration-200`}>
              Your Feedback <span className="text-red-500">*</span>
            </label>
            <div className={`flex border ${errors.feedback ? 'border-red-300' : focused === 'feedback' ? 'border-blue-400' : 'border-gray-300'} rounded-lg overflow-hidden transition-all duration-200 ${focused === 'feedback' ? 'ring-2 ring-blue-100' : ''}`}>
              <div className="px-3 py-3 bg-gray-50 self-start">
                <MessageSquare size={20} className={`${focused === 'feedback' ? 'text-blue-500' : 'text-gray-400'}`} />
              </div>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                onFocus={() => handleFocus('feedback')}
                onBlur={handleBlur}
                required
                className="w-full p-3 outline-none min-h-[120px] resize-y"
                placeholder="Please share your Feedback..."
                rows="4"
              />
            </div>
            {errors.feedback && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.feedback}
              </p>
            )}
            <div className="mt-1 text-right text-xs text-gray-500">
              {formData.feedback.length} characters
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center font-medium"
          >
            <Send size={18} className="mr-2" />
            Submit Feedback
          </button>
          
          {/* <p className="text-center text-xs text-gray-500 mt-4">
            Your feedback helps us improve our services. Thank you for your time!
          </p> */}
        </form>
      </div>
    </div>
  );
}
