import React, { useState } from 'react';

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="absolute inset-x-0 top-6 z-50 mt-2 mx-auto w-2/3 sm:w-2/3 md:w-3/4 lg:w-1/2 max-w-3xl border border-gray-100 bg-white py-3 shadow backdrop-blur-lg rounded-2xl lg:max-w-5xl focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
      aria-label="Main navigation"
    >
      <div className="px-2 sm:px-4">
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
                  className="h-7 w-auto sm:h-9 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0" />
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
            className="md:hidden p-2 cursor-pointer"
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
              className="font-work relative rounded-lg px-2 py-2 text-md font-medium text-gray-900 group"
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Homepage
              <span className="block absolute left-0 bottom-0 w-full h-1 bg-amber-500 rounded origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a
              className="font-work relative rounded-lg px-2 py-2 text-md font-medium text-gray-900 group"
              href="/explore"
              onClick={() => setMenuOpen(false)}
            >
              Explore
              <span className="block absolute left-0 right-0 bottom-0 h-1 bg-amber-500 rounded origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Hero;