"use client";

import React, { useState, useEffect } from "react";
import { Search, ChevronDown, Filter, Tag } from "lucide-react";
import ProductCard from "./ProductCard/ProductCard";

const CATEGORIES = [
  "All Products",
  "Electronics",
  "Wearables",
  "Home Appliances",
  "Office",
  "Accessories",
  "Gaming",
  "Lifestyle",
  "Home & Office",
];

const AllProductsListingPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [loading, setLoading] = useState(true);

  // --- Fetch data from API ---
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3000/Products", {
          cache: "no-store",
        });
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // --- Filter + Search whenever products, category, or search term changes ---
  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      let list = [...products];

      // Filter by category
      if (selectedCategory !== "All Products") {
        list = list.filter(
          (p) =>
            typeof p.category === "string" &&
            p.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      // Filter by search term
      if (searchTerm) {
        const q = searchTerm.toLowerCase();
        list = list.filter(
          (p) =>
            (p.title?.toLowerCase().includes(q) ?? false) ||
            (p.short_description?.toLowerCase().includes(q) ?? false)
        );
      }

      setFilteredProducts(list);
      setLoading(false);
    }, 200); // small debounce for smoother UI

    return () => clearTimeout(timeout);
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-3">
            Discover Our Marketplace
          </h1>
          <p className="text-indigo-300 text-lg max-w-2xl mx-auto">
            Explore the latest collection of high-quality products across
            various categories. Find exactly what you need.
          </p>
        </header>

        {/* Search + Filter */}
        <div className="mb-10 bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search Bar */}
            <div className="relative grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-10 pr-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition duration-200"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative md:w-64">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none w-full py-3 pl-10 pr-8 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-fuchsia-500 focus:border-fuchsia-500 transition duration-200 cursor-pointer"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Loading / Empty / Products Grid */}
        {loading ? (
          <div className="col-span-full text-center py-20">
            <div className="loader mx-auto mb-4"></div>
            <p className="text-indigo-400">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="col-span-full text-center py-10 bg-gray-800 rounded-xl text-indigo-400">
            <Tag className="w-10 h-10 mx-auto mb-4" />
            <p className="text-xl font-semibold">
              No products found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id ?? product._id ?? Math.random()}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProductsListingPage;
