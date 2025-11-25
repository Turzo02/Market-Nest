"use client";

import React, { useState } from "react";
import {
  PlusCircle,
  DollarSign,
  TextCursorInput,
  Mail,
  Package,
  Zap,
  Send,
} from "lucide-react";

// Define the initial state structure for the form
const initialFormData = {
  title: "",
  category: "",
  brand: "",
  short_description: "",
  full_description: "",
  regular_price: 0,
  sale_price: 0,
  currency: "USD",
  in_stock: true,
  stock_quantity: 0,
  sku: "",
  image_1: "", // URL for the main image
  userEmail: "", // The extra requested field
};

// --- Main Component ---
const AddProductPage = () => {
  const [formData, setFormData] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const API_ENDPOINT = "http://localhost:3000/products";

  // FIX: Optimized handleChange to ensure state updates correctly for all input types
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Store everything as string (even numbers) to avoid cursor jump issues
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Helper component for styled input fields
  const FormInput = ({ label, name, type = "text", icon: Icon, ...props }) => {
    // Use state directly, fallback to empty string if undefined/null
    const value = formData[name] ?? "";

    return (
      <div className="flex flex-col space-y-2">
        <label htmlFor={name} className="text-sm font-medium text-gray-300">
          {label}
        </label>
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-indigo-400" />
          )}
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            required
            className={`w-full py-3 ${
              Icon ? "pl-10" : "pl-4"
            } pr-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition duration-200`}
            {...props}
          />
        </div>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Prepare the payload (removing the userEmail before sending to a typical product API)
    const { userEmail, ...productPayload } = formData;

    // Convert prices and stock to numbers. Use || 0 to default to zero if the input is empty ('').
    productPayload.regular_price =
      parseFloat(productPayload.regular_price) || 0;
    productPayload.sale_price = parseFloat(productPayload.sale_price) || 0;
    productPayload.stock_quantity =
      parseInt(productPayload.stock_quantity, 10) || 0;

    // Add calculated/default fields usually set by the system during creation
    const finalPayload = {
      ...productPayload,
      in_stock: true,
      average_rating: 0,
      total_reviews: 0,
      created_at: new Date().toISOString(),
      submitted_by_email: userEmail, // Keeping the email in the payload as per user intent
    };

    // --- Actual API Call Implementation ---
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalPayload),
      });

      if (!response.ok) {
        // Attempt to read a detailed error message from the server
        const errorData = await response
          .json()
          .catch(() => ({ message: response.statusText }));
        throw new Error(
          errorData.message ||
            `Server responded with status: ${response.status}`
        );
      }

      const result = await response.json();
      console.log("Product successfully added:", result);

      setMessage("Product added successfully!");
      setFormData(initialFormData); // Reset form
    } catch (error) {
      console.error("API Error:", error);
      setMessage(
        `Error adding product: ${error.message || "Network request failed."}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 flex items-center justify-center">
            <PlusCircle className="w-8 h-8 mr-3 text-fuchsia-400" />
            Add New Product
          </h1>
          <p className="text-indigo-300 text-lg max-w-xl mx-auto">
            Input all required details to list a new item on the marketplace.
          </p>
        </header>

        {/* Submission Message */}
        {message && (
          <div
            className={`p-4 mb-6 rounded-lg font-medium text-center ${
              message.startsWith("Error")
                ? "bg-red-900/50 text-red-300"
                : "bg-green-900/50 text-green-300"
            }`}
          >
            {message}
          </div>
        )}

        {/* Product Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-xl shadow-2xl space-y-8"
        >
          {/* User Info (Extra Field) */}
          <div className="border-b border-gray-700 pb-6 mb-6">
            <h2 className="text-xl font-semibold text-indigo-400 mb-4">
              Submission Details
            </h2>
            <FormInput
              label="Your Email"
              name="userEmail"
              type="email"
              icon={Mail}
              placeholder="e.g., yourname@example.com"
              value={formData.userEmail}
            />
          </div>

          {/* Main Product Details */}
          <h2 className="text-xl font-semibold text-indigo-400 mb-4">
            Product Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Product Title"
              name="title"
              icon={TextCursorInput}
              placeholder="e.g., Stellar Gaming Mouse"
            />

            <FormInput
              label="SKU (Stock Keeping Unit)"
              name="sku"
              icon={Package}
              placeholder="e.g., ST-GM-001"
            />

            <FormInput
              label="Brand"
              name="brand"
              icon={Zap}
              placeholder="e.g., HyperNova Tech"
            />

            {/* Category Dropdown (Simple implementation) */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                onChange={handleChange}
                value={formData.category}
                required
                className="w-full py-3 pl-4 pr-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-fuchsia-500 focus:border-fuchsia-500 transition duration-200"
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Peripherals">Electronics</option>
                <option value="Wearables">Wearables</option>
                <option value="Audio">Home Appliances</option>
                <option value="Furniture">Office</option>
                <option value="Others">Accessories</option>
                <option value="Others">Gaming</option>
                <option value="Others">Lifestyle</option>
                <option value="Others">Home & Office</option>
              </select>
            </div>
          </div>

          {/* Descriptions */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="short_description"
                className="text-sm font-medium text-gray-300"
              >
                Short Description
              </label>
              <textarea
                id="short_description"
                name="short_description"
                onChange={handleChange}
                value={formData.short_description}
                rows="3"
                required
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition duration-200"
                placeholder="A concise, one-line summary of the product."
              ></textarea>
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="full_description"
                className="text-sm font-medium text-gray-300"
              >
                Full Description
              </label>
              <textarea
                id="full_description"
                name="full_description"
                onChange={handleChange}
                value={formData.full_description}
                rows="6"
                required
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition duration-200"
                placeholder="Detailed features, specifications, and use cases."
              ></textarea>
            </div>
          </div>

          {/* Pricing and Stock */}
          <h2 className="text-xl font-semibold text-indigo-400 mb-4 pt-4 border-t border-gray-700">
            Pricing & Inventory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormInput
              label="Regular Price"
              name="regular_price"
              type="number"
              step="0.01"
              icon={DollarSign}
            />

            <FormInput
              label="Sale Price"
              name="sale_price"
              type="number"
              step="0.01"
              icon={DollarSign}
            />

            <FormInput
              label="Stock Quantity"
              name="stock_quantity"
              type="number"
              min="0"
              icon={Package}
            />
          </div>

          {/* Image URL and Status */}
          <div className="">
            <FormInput
              label="Main Image URL"
              name="image_1"
              placeholder="https://image-url.com/product.png"
              icon={Zap}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center space-x-3 
                                    py-3 px-6 rounded-xl text-lg font-bold transition duration-300 
                                    ${
                                      isSubmitting
                                        ? "bg-fuchsia-800/50 cursor-not-allowed"
                                        : "bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-xl shadow-fuchsia-600/50"
                                    }`}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <>
                <Send className="w-6 h-6" />
                <span>Submit New Product</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
