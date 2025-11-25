import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// --- Product Card Component ---
const ProductCard = ({ product }) => {


  const ratingStars = Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(product.average_rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-600"
        }`}
      />
    ));

  const discount =
    ((product.regular_price - product.sale_price) / product.regular_price) *
    100;

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform  flex flex-col">
      {/* Image Section */}
      <div className="relative aspect-video bg-gray-700 overflow-hidden">
        <Image
          src={
            product.image_1 ||
            "https://placehold.co/600x400/1e293b/a5b4fc?text=No+Image"
          }
          alt={product.title}
          width={600}
          height={400}
          priority
          loading="eager"
          className="w-full h-full object-cover rounded-xl transition duration-500 scale-100 hover:scale-105 cursor-grab"
        />
        <div className="absolute top-2 right-2 bg-fuchsia-600 text-white text-xs font-bold py-1 px-3 rounded-full">
          {discount.toFixed(0)}% OFF
        </div>
      </div>

      {/* Details Section - FIXED HEIGHT */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-sm text-indigo-400 mb-1">{product.category}</p>

        {/* Title: clamp & fixed block height */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 min-h-14">
          {product.title}
        </h3>

        {/* Description: clamp & fixed block height */}
        <p className="text-gray-400 text-sm mb-3 line-clamp-2 min-h-[2rem]">
          {product.short_description}
        </p>

        {/* Ratings */}
        <div className="flex items-center mb-3">
          <div className="flex mr-2">{ratingStars}</div>
          <span className="text-xs text-gray-400">
            ({product.average_rating})
          </span>
        </div>

        {/* Pricing */}
        <div className="flex items-end justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 line-through">
              {product.currency} {product.regular_price.toFixed(2)}
            </span>
            <span className="text-2xl font-extrabold text-fuchsia-400">
              {product.currency} {product.sale_price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* CTA Button always at bottom */}
        <Link href={`/Products/${product._id}`}
          className="w-full mt-auto flex items-center justify-center space-x-2 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 cursor-pointer"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
