import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-news.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="bg-cyan-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img className="h-12 w-auto" src={Logo} alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-200 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/activities" className="text-white hover:text-cyan-200 px-3 py-2 rounded-md text-sm font-medium">
              Activities
            </Link>
            <Link to="/news" className="text-white hover:text-cyan-200 px-3 py-2 rounded-md text-sm font-medium">
              News
            </Link>
            <Link to="/login" className="text-white hover:text-cyan-200 px-3 py-2 rounded-md text-sm font-medium">
              Log In
            </Link>
            <Link to="/signUp" className="text-white hover:text-cyan-200 px-3 py-2 rounded-md text-sm font-medium">
              Sign Up
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full bg-cyan-500 text-white placeholder-cyan-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg 
                  className="h-5 w-5 text-cyan-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeWidth="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </div>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-200 p-2"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block text-white hover:bg-cyan-500 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/activities" className="block text-white hover:bg-cyan-500 px-3 py-2 rounded-md">
              Activities
            </Link>
            <Link to="/news" className="block text-white hover:bg-cyan-500 px-3 py-2 rounded-md">
              News
            </Link>
            <Link to="/login" className="block text-white hover:bg-cyan-500 px-3 py-2 rounded-md">
              Log In
            </Link>
            <Link to="/signUp" className="block text-white hover:bg-cyan-500 px-3 py-2 rounded-md">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
