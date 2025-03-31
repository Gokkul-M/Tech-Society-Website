import React from "react";
import Spline from "@splinetool/react-spline";
import ErrorBoundary from "../components/ErrorBoundry"; // Import the error boundary

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen px-8 md:px-16 bg-gray-900 text-white">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore the World of Innovation</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          Building the future with cutting-edge technology and seamless experiences.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
          Get Started
        </button>
      </div>

      {/* Right: Spline 3D Model */}
      <div className="md:w-1/2 h-[500px] md:h-[600px] flex justify-center items-center">
      <ErrorBoundary>
          <Spline scene="https://prod.spline.design/TZRncbzlrQnaGTXp/scene.splinecode" />
      </ErrorBoundary>
      </div>
    </div>
  );
};

export default HeroSection;