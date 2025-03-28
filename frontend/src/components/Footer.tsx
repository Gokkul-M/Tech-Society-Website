import React from "react";
import Squares from "./Square";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative w-full bg-black text-white py-12 mt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction="diagonal" 
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-8 md:px-20">
        
        {/* Branding Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">Tech Society</h2>
          <p className="text-sm text-gray-300 mt-2">
            Innovate, Create, Inspire. Join the future of technology.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#about" className="hover:text-gray-400 transition">About</a>
          <a href="#services" className="hover:text-gray-400 transition">Services</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
          <a href="#blog" className="hover:text-gray-400 transition">Blog</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative z-10 text-center text-gray-400 text-sm mt-8">
        &copy; {new Date().getFullYear()} Tech Society. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
