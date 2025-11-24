"use client";

import React from "react";
import {
  ShoppingCart,
  Twitter,
  Youtube,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Package,
  Users,
  Briefcase,
  Globe,
  FacebookIcon,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  const primaryColor = "text-fuchsia-400";
  const accentColor = "hover:text-fuchsia-500 transition-colors duration-200";
  const textColor = "text-gray-400 hover:text-white transition-colors duration-200";

  return (
    <footer className="bg-gray-900 border-t border-white/20 pt-16 pb-8 font-inter">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">

          <nav>
            <h6 className="text-lg font-semibold text-white mb-4">Marketplace</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className={textColor}>
                  <Package className="inline w-4 h-4 mr-2" /> Browse Products
                </a>
              </li>
              <li>
                <a href="#" className={textColor}>
                  <Users className="inline w-4 h-4 mr-2" /> Verified Sellers
                </a>
              </li>
              <li>
                <a href="#" className={textColor}>
                  <Briefcase className="inline w-4 h-4 mr-2" /> Become a Seller
                </a>
              </li>
              <li>
                <a href="#" className={textColor}>
                  <Globe className="inline w-4 h-4 mr-2" /> International Shipping
                </a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className="text-lg font-semibold text-white mb-4">Company</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className={textColor}>About Us</a>
              </li>
              <li>
                <a href="#" className={textColor}>Careers</a>
              </li>
              <li>
                <a href="#" className={textColor}>Blog</a>
              </li>
              <li>
                <a href="#" className={textColor}>Press Kit</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className="text-lg font-semibold text-white mb-4">Support</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className={textColor}>Help Center</a>
              </li>
              <li>
                <a href="#" className={textColor}>Shipping & Returns</a>
              </li>
              <li>
                <a href="#" className={textColor}>FAQ</a>
              </li>
              <li>
                <a href="#" className={textColor}>Privacy Policy</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className="text-lg font-semibold text-white mb-4">Connect</h6>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className={`text-gray-400 ${accentColor}`}>
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Facebook" className={`text-gray-400 ${accentColor}`}>
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" aria-label="YouTube" className={`text-gray-400 ${accentColor}`}>
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </nav>

        </div>

        {/* Copyright Section */}
        <div className="pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Market Nest, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
