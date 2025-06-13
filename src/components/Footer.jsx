import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#FFFDF9] text-[#6D597A] py-12">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-600 pb-8 mb-8">
        {/* Spiritual Section */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-semibold text-[#6D597A] mb-4">Spiritual</h4>
          <ul>
            <li className="mb-2"><a href="#/about" className="hover:text-black">About us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-black">Join us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-black">Offers</a></li>
            <li className="mb-2"><a href="#" className="hover:text-black">Awards</a></li>
            <li className="mb-2"><a href="#" className="hover:text-black">Text here</a></li>
          </ul>
        </div>

        {/* Explore Section */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-semibold text-[#6D597A] mb-4">Explore</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-black">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-black">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-black">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-black">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-black">TEXT HERE</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-semibold text-[#6D597A] mb-4">Resources</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-black">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-black">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-black">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-black">TEXT HERE</a></li>
            <li className="mb-2"><a href="#" className="hover:text-black">TEXT HERE</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="mb-1">Developed by House of Marktech</p>
          <p>&copy; 2025 Nyouuta. All rights reserved.</p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="mr-2">Find us on</p>
          <a href="#" className="text-blue-500 hover:text-blue-600"><FaFacebook size={24} /></a>
          <a href="#" className="text-black hover:text-black-600"><FaInstagram size={24} /></a>
          <a href="#" className="text-red-500 hover:text-red-600"><FaYoutube size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 