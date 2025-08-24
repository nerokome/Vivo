import React from 'react'
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"

const Loginpage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const  [formData, setFormData] = useState({
        email: '',
        password: ''
    });

  return (
    <div className="h-[900px] flex bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Left Form Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <div className="max-w-md w-full bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 space-y-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600">
            Log in to continue where you left off.
          </p>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:flex md:w-1/2 bg-gray-200">
        <img
          src="/dam.webp"
          alt="Login Visual"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}

   

export default Loginpage
