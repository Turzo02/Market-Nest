'use client';

import React from "react";
import { Truck, ShieldCheck, Headset, Zap, Star, ShoppingBag } from "lucide-react";
import Button from "@/Components/Button";

// --- Benefits Card Component ---
const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700/50 hover:border-fuchsia-500 transition duration-300 transform hover:scale-102 flex flex-col items-center text-center h-full">
    <div className="p-3 mb-4 rounded-full bg-fuchsia-600/20 text-fuchsia-400">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const MarketplaceBenefitsSection = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Get your orders quickly with reliable, express shipping partners globally.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Sellers",
      description:
        "All our partners are vetted and certified to ensure high-quality products and service.",
    },
    {
      icon: Headset,
      title: "24/7 Premium Support",
      description:
        "Our dedicated support team is always ready to help you with any issue, day or night.",
    },
    {
      icon: Zap,
      title: "Seamless Checkout",
      description:
        "Enjoy a friction-less and lightning-fast purchasing process every single time.",
    },
    {
      icon: Star,
      title: "Money-Back Guarantee",
      description:
        "Shop with confidence knowing that your purchase is protected by our guarantee.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white flex flex-col items-center py-20">
      <div id="benefits" className="max-w-6xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-fuchsia-400 uppercase tracking-wider mb-2">
            Core Values
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Why Choose Market Nest?
          </h2>
          <p className="text-lg text-gray-400">
            Our commitment to quality, speed, and trust defines your shopping experience.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center flex justify-center">
          <Button text="Start Shopping Today" Icon={ShoppingBag} />
        </div>
      </div>
    </div>
  );
};

export default MarketplaceBenefitsSection;
