'use client';

import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-40">
        <div className="flex flex-col lg:flex-row justify-between items-center flex-wrap">
          <h2 className="text-3xl font-semibold mb-6 lg:mb-0">Walter<span className='text-orange-500'>.dev</span></h2>
          <ul className="flex flex-wrap justify-center gap-6 text-lg mb-6 lg:mb-0">
            <li className="hover:cursor-pointer hover:text-gray-400 transition">Home</li>
            <li className="hover:cursor-pointer hover:text-gray-400 transition">About</li>
            <li className="hover:cursor-pointer hover:text-gray-400 transition">Services</li>
            <li className="hover:cursor-pointer hover:text-gray-400 transition">Portfolio</li>
            <li className="hover:cursor-pointer hover:text-gray-400 transition">Blog</li>
            <li className="hover:cursor-pointer hover:text-gray-400 transition">Contact</li>
            <li className="hover:cursor-pointer flex items-center hover:text-gray-400 transition">
              <FaInstagram className="h-6 w-6" />
            </li>
            <li className="hover:cursor-pointer flex items-center hover:text-gray-400 transition">
              <FaLinkedinIn className="h-6 w-6" />
            </li>
          </ul>
        </div>
        <div className="text-center mt-8 border-t border-gray-800 pt-8">
          <p className="text-sm">&copy; {currentYear} Walter.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
