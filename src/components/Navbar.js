import React, { useState } from 'react';

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="absolute inset-x-0 top-0 z-50 mt-2 mx-auto w-2xl max-w-3xl border border-gray-100 bg-white py-3 shadow backdrop-blur-lg md:top-6 md:rounded-2xl lg:max-w-5xl focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
      aria-label="Main navigation"
    >
      <div className="px-4">
        <div className="flex items-center justify-between focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
          <div className="flex shrink-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
            <a
              aria-current="page"
              className="flex items-center justify-center h-full focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
              href="/"
            >
              <span className="inline-block font-bebas text-2xl tracking-wide focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
                <img src="../img/logo.png" 
                  alt="City Explorer Logo" 
                  className="h-8 w-auto focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0" />
              </span>
            </a>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a
              className="font-work inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 relative group"
              href="/"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-amber-500 rounded transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              className="font-work inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 relative group"
              href="/explore"
            >
              Explore
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-amber-500 rounded transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded focus:outline focus:ring-2 focus:ring-amber-500"
            aria-label="Apri menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-6 w-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 flex flex-col gap-2">
            <a
              className="font-work rounded-lg px-2 py-2 text-md font-medium text-gray-900 hover:bg-gray-100 focus:outline focus:ring-2 focus:ring-blue-400"
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              className="font-work rounded-lg px-2 py-2 text-md font-medium text-gray-900 hover:bg-gray-100 focus:outline focus:ring-2 focus:ring-blue-400"
              href="/explore"
              onClick={() => setMenuOpen(false)}
            >
              Explore
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Hero;