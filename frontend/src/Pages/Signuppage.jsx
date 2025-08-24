import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    return formData.fullname && formData.email && formData.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fill in all fields.");
      return;
    }
    await signup(formData);
  };

  return (
    <div className="h-[1000px] flex bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <div className="max-w-md w-full bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 space-y-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Create an Account
          </h2>
          <p className="text-center text-gray-600">
            Join us today and enjoy exclusive features.
          </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Fullname
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSigningUp}
              className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg transition ${
                isSigningUp ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {isSigningUp ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Signing Up...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 bg-gray-200">
        <img
          src="/gou.webp"
          alt="Signup Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
