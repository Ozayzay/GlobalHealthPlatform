import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext"; // Import the Auth context

export default function Navbar() {
  const { user, logout } = useAuth(); // Access the user state and logout function
  const navigate = useNavigate(); // Use navigate for programmatic routing

  const handleLogout = () => {
    logout(); // Call the logout function
    navigate("/"); // Redirect to home after logout
  };

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200">
      <Link to="/" className="flex items-center justify-center">
        <span className="text-2xl font-bold text-green-600">GlobalHealth</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          to="/how-it-works"
          className="text-sm font-medium hover:text-orange-500 transition-colors"
        >
          How It Works
        </Link>
        <Link
          to="/services"
          className="text-sm font-medium hover:text-orange-500 transition-colors"
        >
          Services
        </Link>
        <Link
          to="/about"
          className="text-sm font-medium hover:text-orange-500 transition-colors"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-sm font-medium hover:text-orange-500 transition-colors"
        >
          Contact
        </Link>

        {/* Log In / Log Out Button */}
        {user ? (
          <button
            onClick={handleLogout}
            className="text-sm font-medium hover:text-orange-500 transition-colors"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/auth"
            className="text-sm font-medium hover:text-orange-500 transition-colors"
          >
            Log In
          </Link>
        )}
      </nav>
    </header>
  );
}
