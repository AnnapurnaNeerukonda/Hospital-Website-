"use client"
import React, { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuList = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Contact Us", path: "/contact" },
    { id: 3, name: "Login", path: "/login" },
    { id: 4, name: "Signup", path: "/signup" }
  ];

  return (
    <nav className=" bg-blue-400 fixed w-full mt-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="ml-2">
                  <h2 className="hidden xl:block text-white text-lg font-bold">HOSPITAL</h2>
                  <h3 className="hidden xl:block text-white text-md">Bhimavaram, Andhra Pradesh</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center space-x-4">
              {menuList.map((menuItem) => (
                <div key={menuItem.id}>
                  <Link href={menuItem.path} className="text-white text-lg hover:white hover:font-bold rounded-lg p-1.5 font-serif">
                    {menuItem.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-sm text-white sm:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {<TfiAlignJustify />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-navy mt-2 relative z-20">
          <div className="ml-4 flex flex-col space-y-4">
            {menuList.map((menuItem) => (
              <div key={menuItem.id}>
                <Link href={menuItem.path} onClick={toggleNavbar} className="block hover:bg-gray-100 rounded-lg text-white hover:text-blue-700 hover:font-bold p-2">
                  {menuItem.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
