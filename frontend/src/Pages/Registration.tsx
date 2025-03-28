import React, { useState } from "react";
import SplashCursor from "../components/SplashCursor";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    regNo: "",
    year: "",
    department: "",
    community: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/background.jpg')] bg-cover bg-center p-4 mt-15">
      <div className="bg-white/10 backdrop-blur-xl shadow-2xl border-transparent rounded-3xl p-8 md:p-10 w-full max-w-lg transition-all duration-300">
        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
          Join the Community
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Fields */}
          {[
            { name: "name", type: "text", placeholder: "Full Name" },
            { name: "regNo", type: "text", placeholder: "Register Number" },
            { name: "phone", type: "tel", placeholder: "Phone Number" },
            { name: "email", type: "email", placeholder: "Email Address" },
          ].map(({ name, type, placeholder }) => (
            <input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-3 bg-white/20 text-white rounded-xl border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-300 hover:bg-white/30"
              required
            />
          ))}

          {/* Dropdowns */}
          {[
            {
              name: "year",
              options: ["Select Year", "1st Year", "2nd Year", "3rd Year", "4th Year"],
            },
            {
              name: "department",
              options: ["Select Department", "CSE", "IT", "ECE", "EEE", "MECH", "CIVIL"],
            },
            {
              name: "community",
              options: [
                "Select Community",
                "AI Club",
                "Cybersecurity Club",
                "Web Development Club",
                "Robotics Club",
              ],
            },
          ].map(({ name, options }) => (
            <select
              key={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-3 bg-white/20 text-white rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-300 hover:bg-white/30"
              required
            >
              {options.map((option, index) => (
                <option key={index} value={index === 0 ? "" : option} disabled={index === 0}>
                  {option}
                </option>
              ))}
            </select>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            Register Now
          </button>
        </form>
      </div>
      <SplashCursor />
    </div>
    
  );
};

export default RegistrationForm;
