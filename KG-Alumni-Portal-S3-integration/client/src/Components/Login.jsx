import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/students.webp';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('student'); // 'student', 'alumni', or 'admin'
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      if (formData.email && formData.password) {
        if (userType === 'admin') {
          // Simulated Admin Credentials
          if (formData.email === 'vivekanandhan.v@kgkite.ac.in' && formData.password === 'KgKite@123') {
            alert('Admin login successful!');
            navigate('/admindashboard');
          } else {
            setError('Invalid admin credentials.');
          }
        } else {
          // Simulated login for student/alumni
          alert(`${userType === 'student' ? 'Student' : 'Alumni'} login successful!`);
          navigate(userType === 'student' ? '/studentdashboard' : '/alumnidashboard');
        }
      } else {
        setError('Please enter valid credentials.');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  const handleSignUpSelection = (type) => {
    setShowSignUpModal(false);
    if (type === 'student') {
      navigate('/student-signup');
    } else {
      navigate('/alumni-signup');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-80 backdrop-blur-md rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {userType === 'student'
            ? 'Student Login'
            : userType === 'alumni'
            ? 'Alumni Login'
            : 'Admin Login'}
        </h2>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className={`w-full ${
              userType === 'student'
                ? 'bg-blue-600'
                : userType === 'alumni'
                ? 'bg-green-600'
                : 'bg-yellow-600'
            } hover:brightness-90 text-white py-3 rounded-lg`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : '🔒 Log in'}
          </button>
        </form>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => setUserType('student')}
            className={`px-4 py-2 rounded-md font-medium ${
              userType === 'student' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setUserType('alumni')}
            className={`px-4 py-2 rounded-md font-medium ${
              userType === 'alumni' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
          >
            Alumni
          </button>
          <button
            onClick={() => setUserType('admin')}
            className={`px-4 py-2 rounded-md font-medium ${
              userType === 'admin' ? 'bg-yellow-600 text-white' : 'bg-gray-200'
            }`}
          >
            Admin
          </button>
        </div>

        {userType !== 'admin' && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowSignUpModal(true)}
              className="text-sm text-gray-600 hover:text-blue-500"
            >
              New User? Sign Up
            </button>
          </div>
        )}
      </div>

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-center mb-6">Choose Account Type</h3>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleSignUpSelection('student')}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
              >
                👨‍🎓 I am a Student
              </button>
              <button
                onClick={() => handleSignUpSelection('alumni')}
                className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
              >
                👨‍💼 I am an Alumni
              </button>
            </div>
            <button
              onClick={() => setShowSignUpModal(false)}
              className="mt-6 w-full text-center text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
