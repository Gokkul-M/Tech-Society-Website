import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full 10 backdrop-blur-lg shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-wide text-white drop-shadow-lg">
          Tech Society
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition">Events</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition"
        >
          Join Us
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white/20 backdrop-blur-md text-center py-4 space-y-2 shadow-md">
          <a href="#" className="block text-white hover:text-blue-400 transition">Home</a>
          <a href="#" className="block text-white hover:text-blue-400 transition">About</a>
          <a href="#" className="block text-white hover:text-blue-400 transition">Events</a>
          <a href="#" className="block text-white hover:text-blue-400 transition">Contact</a>
          <a
            href="#"
            className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition w-fit mx-auto"
          >
            Join Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
