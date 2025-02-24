import React from "react";

const Login = () => {
  return (
    <div
      className="relative flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('./assets/login.png')" }} // Ensure this image exists in `public/`
    >
      {/* Gradient Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200 opacity-80 backdrop-blur-lg"></div>

      {/* Login Box */}
      <div className="relative bg-white/90 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center">Log In</h2>
        <p className="text-sm text-center mb-4">Login to your account</p>

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email-Id"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm">Remember Me</label>
          </div>
        </div>

        {/* Log In Button */}
        <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
