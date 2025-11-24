"use client";

import React from "react";
import { Star } from "lucide-react";

// --- Testimonial Card Component ---
const TestimonialCard = ({ quote, name, title }) => {
  const renderStars = () => (
    <div className="flex text-yellow-400 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
  );

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700/50 transition duration-300 hover:border-indigo-500 flex flex-col justify-between h-full">
      {renderStars()}
      <p className="text-xl italic text-gray-200 mb-6">&quot;{quote}&quot;</p>
      <div className="w-10 h-0.5 bg-fuchsia-500 mb-4"></div>
      <div className="flex flex-col items-start">
        <h4 className="text-lg font-semibold text-white">{name}</h4>
        <span className="text-sm text-indigo-400 font-medium">{title}</span>
      </div>
    </div>
  );
};

// --- Reviews Section ---
const ReviewsSection = () => {
const reviews = [
  {
    quote: "I really like this site! It's simple to use, and my orders come very fast.",
    name: "Ananya Roy",
    title: "Verified Buyer",
  },
  {
    quote: "Finally, a marketplace I can trust. I got exactly what I needed at a good price.",
    name: "Rohan Chatterjee",
    title: "Happy Customer",
  },
  {
    quote: "Fast delivery and trustworthy sellers. I recommend Market Nest to everyone.",
    name: "Priya Sen",
    title: "Recent Buyer",
  },
  {
    quote: "The 24/7 support is very helpful. They solved my problem in minutes. Excellent service!",
    name: "Arif Hossain",
    title: "Frequent Shopper",
  },
  {
    quote: "Shopping here is so easy and safe. I always find what I want.",
    name: "Shreya Das",
    title: "Regular Customer",
  }
];

  return (
    <div className="bg-gray-900 text-white flex flex-col items-center py-20">
      <div id="testimonials" className="max-w-6xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-fuchsia-400 uppercase tracking-wider mb-2">
            Trust & Validation
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-400">
            Hear directly from the people who make Market Nest thrive.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} {...review} />
          ))}

          {/* Prompt Card */}
          <div className="hidden lg:flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-indigo-600/50 text-indigo-400 bg-gray-900/50 cursor-pointer">
            <Star className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Join the Community</h3>
            <p className="text-center text-gray-400">
              Share your own experience and help others shop with confidence!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
