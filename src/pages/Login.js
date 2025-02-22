import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer"; // Ensure Footer is correctly imported

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Top Bar - Hunarbazaar */}
      <div className="w-full bg-white shadow-md py-6 flex justify-center fixed top-0 left-0">
        <h1 className="text-3xl font-extrabold text-blue-600">Hunarbazaar</h1>
      </div>

      {/* Login Box with Proper Spacing */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-32">  
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>

      {/* Quote Section */}
      <div className="mt-8 text-center text-gray-600 italic">
        <p>“Connecting talent with opportunity, effortlessly.”</p>
      </div>

      {/* Footer Section */}
      <div className="w-full mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
