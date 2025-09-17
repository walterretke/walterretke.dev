"use client";

import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")!.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-5 px-6 lg:px-40 text-white">
        <a href="/home">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
            Walter<span className="text-orange-500">.dev</span>
          </h2>
        </a>
        <div className="hidden md:flex gap-4 md:gap-6 lg:gap-8 text-sm sm:text-lg">
          <ul className="flex gap-4 md:gap-6 lg:gap-8">
            <a href="/home">
              <li className="hover:cursor-pointer hover:text-gray-400 transition">
                Home
              </li>
            </a>
            <a href="#about" onClick={handleSmoothScroll}>
              <li className="hover:cursor-pointer hover:text-gray-400 transition">
                About
              </li>
            </a>
            <a href="#services" onClick={handleSmoothScroll}>
              <li className="hover:cursor-pointer hover:text-gray-400 transition">
                Services
              </li>
            </a>
            <a href="#portfolio" onClick={handleSmoothScroll}>
              <li className="hover:cursor-pointer hover:text-gray-400 transition">
                Portfolio
              </li>
            </a>
            <a href="/contact">
              <li className="hover:cursor-pointer hover:text-gray-400 transition">
                Contact
              </li>
            </a>
          </ul>
          <ul className="flex gap-4">
            <a href="https://www.linkedin.com/in/walter-retke/" target="blank">
              <li className="hover:cursor-pointer flex items-center hover:text-gray-400 transition">
                <FaLinkedinIn className="h-5 w-5 sm:h-6 sm:w-6" />
              </li>
            </a>
            <a href="https://www.instagram.com/walterretkee/" target="blank">
              <li className="hover:cursor-pointer flex items-center hover:text-gray-400 transition">
                <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </li>
            </a>
            <a href="https://github.com/walterretke" target="blank">
              <li className="hover:cursor-pointer flex items-center hover:text-gray-400 transition">
                <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
              </li>
            </a>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} aria-label="Toggle menu">
            <Bars3Icon className="h-8 w-8 text-white" />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-64 bg-black text-white p-4 z-50 transition-transform transform translate-x-0">
          <button
            onClick={handleMenuToggle}
            aria-label="Close menu"
            className="absolute top-4 left-[-40px] transform"
          >
            <XMarkIcon className="h-8 w-8 text-white" />
          </button>
          <ul className="flex flex-col gap-4 mt-12">
            <a href="/home">
              <li className="hover:cursor-pointer hover:text-gray-400 transition">
                Home
              </li>
            </a>
            <a href="#about" onClick={handleSmoothScroll}>
              <li className="hover:cursor-pointer hover:text-gray-400 transition">
                About
              </li>
            </a>
            <li className="hover:cursor-pointer hover:text-gray-400 transition">
              Services
            </li>
            <li className="hover:cursor-pointer hover:text-gray-400 transition">
              Portfolio
            </li>
            <li className="hover:cursor-pointer hover:text-gray-400 transition">
              Blog
            </li>
            <a href="/contact">
              <li className="hover:cursor-pointer hover:text-gray-400 transition">
                Contact
              </li>
            </a>
            <li className="hover:cursor-pointer flex items-center hover:text-gray-400 transition">
              <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
            </li>
            <li className="hover:cursor-pointer flex items-center hover:text-gray-400 transition">
              <FaLinkedinIn className="h-5 w-5 sm:h-6 sm:w-6" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
