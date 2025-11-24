'use client';

import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const CallToActionBanner = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: 'info', text: 'Subscribing...' });

    setTimeout(() => {
      setIsSubmitting(false);
      setMessage({ type: 'success', text: `Success! Thanks for subscribing, 😍${email.split('@')[0]}!` });
      setEmail('');
    }, 1500);
  };

  return (
    <div className="bg-gray-900 text-white font-inter flex items-center justify-center py-20 px-6">
      <div
        id="newsletter"
        className="max-w-4xl w-full bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-700/50 text-center"
      >
        {/* Header */}
        <div className="mb-8">
          <Mail className="w-12 h-12 mx-auto text-fuchsia-400 mb-4" />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-fuchsia-500">
            Stay Updated With The Latest Deals
          </h2>
          <p className="text-lg text-gray-400">
            Subscribe to our exclusive newsletter for personalized offers and market insights.
          </p>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage(null);
            }}
            required
            className="grow p-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`shrink-0 flex items-center justify-center font-semibold py-3 px-6 rounded-xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
              isSubmitting
                ? 'bg-gray-600 cursor-not-allowed text-white'
                : 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-lg shadow-fuchsia-600/50 focus:ring-fuchsia-500'
            }`}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <Send className="w-5 h-5 mr-2" />
            )}
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {/* Submission Message */}
        {message && (
          <p
            className={`mt-4 text-sm font-medium ${
              message.type === 'error'
                ? 'text-red-400'
                : message.type === 'success'
                ? 'text-green-400'
                : 'text-indigo-400'
            }`}
          >
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default CallToActionBanner;
