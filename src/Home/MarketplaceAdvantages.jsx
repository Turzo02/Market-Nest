"use client";

import React from "react";
import { Tags, Shield, Users, Compass } from "lucide-react";
import Button from "@/Components/Button";

const MarketplaceAdvantages = () => {
  const advantages = [
    {
      icon: Compass,
      title: "Discover New Brands",
      description:
        "Find trusted sellers and exciting, innovative brands you won't see anywhere else.",
    },
    {
      icon: Tags,
      title: "Compare & Save",
      description:
        "Easily compare prices, features, and specs to choose the absolute best deals.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Benefit from secure payment gateways and reliable, tracked delivery services.",
    },
    {
      icon: Users,
      title: "Community Insights",
      description:
        "See authentic reviews and unbiased recommendations from real customers.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white flex flex-col items-center py-20">
      <div id="solutions" className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">
            Why Choose Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            How Market Nest Works for You
          </h2>
          <p className="text-lg text-gray-400">
            Simplifying your online shopping experience in 4 easy ways
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) => (
            <AdvantageCard key={index} {...adv} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button text="View All Features" Icon={null} />
        </div>
      </div>
    </div>
  );
};

export default MarketplaceAdvantages;

// --- Advantages Card Component ---
const AdvantageCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700/50 hover:border-indigo-500 transition duration-300 transform hover:scale-[1.02] flex flex-col items-center text-center h-full">
    <div className="p-3 mb-4 rounded-full bg-indigo-600/20 text-indigo-400">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);
