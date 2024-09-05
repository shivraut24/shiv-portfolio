import React from 'react';
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src={Logo} alt="Your Logo" className="h-28 w-28" />
          </div>
          
          {/* Expertise */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">My Expertise</h3>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Portfolio</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-300">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;