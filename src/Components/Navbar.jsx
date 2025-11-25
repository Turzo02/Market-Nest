"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  Home,
  Package,
  PlusSquare,
  Settings,
  Store,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/Products" },
    { name: "Add New", href: "/AddNewProduct" },
    { name: "Manage", href: "/ManageProduct" },
  ];

  const linksContent = (
    <>
      {navLinks.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.name}>
            <a
              href={link.href}
              className={`flex items-center space-x-2 p-2 rounded-lg text-gray-400 hover:text-white transition duration-200 lg:px-4 lg:py-2 ${
                pathname === link.href
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/50"
                  : "text-gray-400 hover:bg-indigo-500/30 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
          
              <span>{link.name}</span>
            </a>
          </li>
        );
      })}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-white/20 font-inter">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <Link href="/" className="flex items-center space-x-2">
            <Store className="w-7 h-7 text-fuchsia-400" />
            <span className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-fuchsia-500">
              Market Nest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex space-x-1">{linksContent}</ul>
          </div>

          {/* Auth Button (Desktop/Tablet) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center bg-fuchsia-600 text-white font-semibold py-2 px-5 rounded-xl transition duration-300 hover:bg-fuchsia-700 shadow-lg shadow-fuchsia-600/50">
              <User className="w-5 h-5 mr-2" />
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fuchsia-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-label="Close menu" />
              ) : (
                <Menu className="block h-6 w-6" aria-label="Open menu" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="lg:hidden absolute w-full bg-gray-900 shadow-xl border-t border-indigo-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ul className="flex flex-col space-y-1">
              {linksContent}
              <li className="pt-2">
                <button
                  className="w-full flex items-center justify-center bg-fuchsia-600 text-white font-semibold py-2 px-5 rounded-full transition duration-300 hover:bg-fuchsia-700 shadow-md"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <User className="w-5 h-5 mr-2" />
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
