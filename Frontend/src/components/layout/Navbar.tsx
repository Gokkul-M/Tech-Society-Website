import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle escape key and outside click for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Team', path: '/team' },
  ];

  return (
    <nav
      className={cn(
        'fixed z-50 inset-x-0 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'top-3 left-1/2 transform -translate-x-1/2 max-w-[92%] justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md rounded-full py-2 px-4'
          : 'top-3 bg-transparent py-2 px-4'
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <img src="/Tech-Society-logo.jpeg" alt="Tech Society Logo" className="h-full w-full object-cover rounded-full" />
          </div>
          <span className="hidden sm:block font-display text-xl font-bold text-foreground">
            Tech Society
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/register">
            <Button
              variant="default"
              size="sm"
              className="hidden md:flex items-center gap-1 btn-glow"
            >
              Join Us <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed top-[4.2rem] left-0 w-full z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out rounded-b-xl animate-fade-in-down"
        >
          <div className="flex flex-col gap-2 py-6 px-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground hover:bg-accent px-4 py-2 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
              <Button className="w-full btn-glow py-2">Join Us</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
