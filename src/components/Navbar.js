import React, { useState } from 'react';

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-60 mt-5 mx-auto w-2xl max-w-3xl border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-5xl"
      aria-label="Main navigation"
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a
              aria-current="page"
              className="flex items-center justify-center h-full"
              href="/"
            >
              <span className="inline-block font-bebas px-2 text-2xl tracking-wide">
                City Explorer
              </span>
            </a>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a
              className="font-work inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:outline focus:ring-2 focus:ring-yellow-300"
              href="#"
            >
              Home
            </a>
            <a
              className="font-work inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:outline focus:ring-2 focus:ring-yellow-300"
              href="#"
            >
              Esplora
            </a>
            <a
              className="font-work inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-yellow-300 focus:outline focus:ring-2 focus:ring-blue-400"
              href="#"
            >
              Contatti
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded focus:outline focus:ring-2 focus:ring-blue-400"
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
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              className="font-work rounded-lg px-2 py-2 text-md font-medium text-gray-900 hover:bg-gray-100 focus:outline focus:ring-2 focus:ring-blue-400"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Preferiti
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Hero;