import React, { useState } from "react";
import {
  FaUserGraduate,
  FaEnvelope,
  FaLock,
  FaIdCard,
  FaChartLine,
  FaClipboardList,
  FaHistory,
  FaPercentage,
} from "react-icons/fa";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    email: "",
    password: "",
    cgpa: "",
    standingArrears: "",
    historyOfArrears: "",
    attendance: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const inputStyle =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  const formFields = [
    { label: "Name", name: "name", icon: <FaUserGraduate />, type: "text" },
    { label: "Roll Number", name: "rollNumber", icon: <FaIdCard />, type: "text" },
    { label: "Email", name: "email", icon: <FaEnvelope />, type: "email" },
    { label: "Password", name: "password", icon: <FaLock />, type: "password" },
    { label: "CGPA", name: "cgpa", icon: <FaChartLine />, type: "number", step: "0.01" },
    { label: "Standing Arrears", name: "standingArrears", icon: <FaClipboardList />, type: "number" },
    { label: "History of Arrears", name: "historyOfArrears", icon: <FaHistory />, type: "number" },
    { label: "Attendance (%)", name: "attendance", icon: <FaPercentage />, type: "number", step: "0.01" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200 p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-black mb-6">
          Student Registration
        </h2>

        {submitted ? (
          <div className="text-center bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">
            <div className="text-green-600 text-4xl mb-3">✅</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Registration Successful!
            </h3>
            <p className="text-gray-700">
              Thank you for registering. We’ve received your information and will process it shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {formFields.map(({ label, name, icon, type, step }) => (
              <div key={name} className="flex flex-col">
                <label className="text-sm font-semibold mb-1 text-gray-600">{label}</label>
                <div className="flex items-center bg-gray-100 rounded-lg px-3">
                  <span className="text-gray-500 mr-2">{icon}</span>
                  <input
                    type={type}
                    step={step}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    className={`${inputStyle} bg-transparent border-none focus:ring-0`}
                  />
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-transform transform hover:scale-105"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default StudentRegistration;
