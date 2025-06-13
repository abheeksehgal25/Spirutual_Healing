import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-600 pb-8 mb-8">
        {/* Spiritual Section */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-semibold text-white mb-4">Spiritual</h4>
          <ul>
            <li className="mb-2"><a href="#/about" className="hover:text-white">About us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Join us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Offers</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Awards</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Text here</a></li>
          </ul>
        </div>

        {/* Explore Section */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">TEXT HERE</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">TEXT HERE</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="mb-1">Develope By house of marktech</p>
          <p>&copy; 2025 Nyouuta. All rights reserved.</p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="mr-2">Find us on</p>
          <a href="#" className="text-gray-300 hover:text-white"><FaFacebook size={24} /></a>
          <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={24} /></a>
          <a href="#" className="text-gray-300 hover:text-white"><FaYoutube size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 