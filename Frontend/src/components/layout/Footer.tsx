import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-7 w-7 relative">
                <img
                  src="/Tech-Society-logo.jpeg"
                  alt="Tech Society Logo"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <h2 className="font-display text-xl font-bold">Tech Society</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              A vibrant community of tech enthusiasts focused on innovation, growth, and collaboration. Be part of something extraordinary.
            </p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'instagram', 'linkedin', 'github'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-secondary hover:bg-primary text-primary-foreground hover:scale-105 transition-all duration-200"
                  aria-label={social}
                >
                  <img
                    src={`/${social}.svg`}
                    alt={social}
                    className="w-4 h-4 filter invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Projects', path: '/projects' },
                { name: 'Our Team', path: '/team' },
                { name: 'Join Us', path: '/register' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>
                  Saveetha Engineering College,<br />
                  Chennai, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a 
                  href="mailto:techsociety@saveetha.ac.in"
                  className="hover:text-foreground transition-colors"
                >
                  techsociety@saveetha.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-background border border-border rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-gray-300 dark:border-gray-600 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tech Society. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made by Tech Society
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
