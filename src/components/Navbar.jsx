import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50 w-full transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap md:pt-3 md:pb-2 p-3">
          <h5 className="text-gray-500  ">
            World's Largest Medical Equipment Market Place
          </h5>
          <div className="flex items-center md:gap-2 gap-1 ">
            <a href="#" className="hover:text-rose-500 duration-200 ease-in">
              My account
            </a>
            <span>|</span>
            <a href="#" className="hover:text-rose-500 duration-200 ease-in">
              Contact Us
            </a>
          </div>
        </div>
        <hr className="text-gray-400" />

        {/* Navbar content */}
        <div className="flex justify-between items-center p-3 transition-all duration-300 ease-in-out">
          {/* Logo */}
          <div className="logo">
            <a href="#">
              <img
                src="https://1mdm.com/about/assets/1mdm-168x58.png"
                alt="Company logo"
                className="h-10 transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? (
                <X className="h-8 w-8 text-gray-600 transition-all duration-300" />
              ) : (
                <Menu className="h-8 w-8 text-gray-600 transition-all duration-300" />
              )}
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-gray-600 font-medium">
              {["About Us", "Our Story", "Sell on 1MDM", "Pricing"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-rose-500 transition-colors duration-300 ease-in-out"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>

        {/* Mobile nav with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 pb-4">
            <ul className="flex flex-col gap-3 text-gray-600">
              {["About Us", "Our Story", "Sell on 1MDM", "Pricing"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-rose-500 transition-colors duration-300 ease-in-out"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
