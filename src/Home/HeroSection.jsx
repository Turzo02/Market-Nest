'use client';

import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import Button from "@/Components/Button";

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white flex items-center justify-center p-4 font-inter">
      <div id="hero" className="max-w-6xl w-full text-center py-20 px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-fuchsia-500">
          Your One-Stop Marketplace for Everything You Love
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Discover, compare, and shop products from trusted sellers around the
          globe, all in one seamless experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button text="Shop Now" Icon={ShoppingCart} />

          <button
            className="flex items-center justify-center bg-transparent border border-gray-700 text-gray-300 hover:text-indigo-400 hover:border-indigo-500 font-semibold py-3 px-8 rounded-xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 cursor-pointer"
          >
            Learn More
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
