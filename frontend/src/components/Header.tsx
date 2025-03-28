import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faProjectDiagram,
  faCalendarAlt,
  faQuestionCircle,
  faSun,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom"; // Use Link to prevent page reloads

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Home");

  // Update active tab based on URL
  useEffect(() => {
    const currentTab = navItems.find((tab) => tab.href === location.pathname);
    if (currentTab) setActiveTab(currentTab.name);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", href: "/", icon: faHome },
    { name: "Projects", href: "/projects", icon: faProjectDiagram },
    { name: "Teams", href: "/teams", icon: faUsers },
    { name: "Events", href: "/events", icon: faCalendarAlt },
    { name: "Help", href: "/help", icon: faQuestionCircle },
  ];

  return (
    <div className="bg-black text-white">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-20 max-w-5xl backdrop-blur-lg bg-white/8 border-transparent rounded-full shadow-lg px-0 h-12 items-center justify-around w-155">
        {navItems.map((tab) => (
          <Link
            key={tab.name}
            to={tab.href}
            className={`text-sm h-12 flex items-center justify-center rounded-full transition-all w-24 ${
              activeTab === tab.name
                ? "border border-white text-white font-semibold"
                : "border border-transparent text-gray-300 hover:border-white"
            }`}
          >
            {tab.name}
          </Link>
        ))}
        <FontAwesomeIcon
          icon={faSun}
          className="text-gray-400 hover:text-white transition-all w-5 h-5 mx-2 cursor-pointer"
        />
        <Link
          to="/register"
          className="bg-white text-black h-11 w-24 flex items-center justify-center rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
        >
          Join Now
        </Link>
      </nav>

      {/* Mobile & Tablet Navbar */}
      <nav className="md:hidden fixed bottom-5 left-4 right-4 z-20 backdrop-blur-lg bg-white/10 border-transparent rounded-full shadow-lg flex items-center justify-around h-14">
        {navItems.map((tab) => (
          <Link
            key={tab.name}
            to={tab.href}
            className={`flex flex-col items-center transition-all rounded-full w-14 h-14 justify-center ${
              activeTab === tab.name
                ? "border border-white text-white"
                : "border border-transparent text-gray-300 hover:border-white"
            }`}
          >
            <FontAwesomeIcon icon={tab.icon} className="w-5 h-5" />
          </Link>
        ))}
        <Link
          to="/register"
          className="flex flex-col items-center bg-white text-black px-3 py-1 rounded-full font-semibold shadow-lg hover:scale-105 transition-all w-14 h-14 justify-center"
        >
          <FontAwesomeIcon icon={faUserPlus} className="w-5 h-5" />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
