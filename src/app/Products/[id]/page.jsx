import Image from "next/image";
import { Star, Tag, ShoppingBag, CheckCircle, ArrowLeft } from "lucide-react";
import React from "react";
import Link from "next/link";

const RatingStars = ({ rating }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-600"
        }`}
      />
    ));
  return <div className="flex items-center space-x-0.5">{stars}</div>;
};

export default async function page({ params }) {
  const { id } = await params;
  const res = await fetch(`https://markert-nest-back-end.vercel.app/Products/${id}`);
  
  const product = await res.json();

  return (
    <div>
      <div>
        {/* Product Details Goes here */}

        <div className="min-h-screen bg-gray-900 text-white font-inter py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button / Navigation */}
            <Link
              href="/Products"
              className="flex items-center text-indigo-400 hover:text-fuchsia-400 mb-8 transition duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Back to Products</span>
            </Link>

            {/* Main Product Layout: Image and Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-800 p-6 sm:p-10 rounded-xl shadow-2xl">
              {/* Column 1: Product Image */}
              <div className="relative overflow-hidden rounded-xl bg-gray-700 aspect-video md:aspect-square">
                <Image
                  src={
                    product.image_1 ||
                    "https://placehold.co/600x400/1e293b/a5b4fc?text=No+Image"
                  }
                  alt={product.title}
                  width={600}
                  height={400}
                  loading="eager"
                  priority
                  className="w-full h-full object-cover rounded-xl transition duration-500 scale-115 hover:scale-120 cursor-grab"
                />
              </div>

              {/* Column 2: Details and CTA */}
              <div className="flex flex-col justify-between">
                <div>
                  {/* Header and Rating */}
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                    {product.title}
                  </h1>
                  <p className="text-indigo-400 font-medium mb-4">
                    {product.brand} / {product.category}
                  </p>

                  <div className="flex items-center mb-6">
                    <RatingStars rating={product.average_rating} />
                    <span className="ml-3 text-sm text-gray-400">
                      {product.average_rating} ({product.total_reviews} reviews)
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <p className="text-lg text-gray-400 line-through">
                      {product.currency} {product.regular_price.toFixed(2)}
                    </p>
                    <p className="text-5xl font-bold text-fuchsia-400">
                      {product.currency} {product.sale_price.toFixed(2)}
                    </p>
                    <p className="text-sm text-green-400 mt-1 flex items-center">
                      <Tag className="w-4 h-4 mr-1" /> Save{" "}
                      {(product.regular_price - product.sale_price).toFixed(2)}!
                    </p>
                  </div>
                </div>

                {/* Short Description & Stock */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Summary
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {product.short_description}
                  </p>

                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-400">
                      In Stock: {product.stock_quantity} units
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    SKU: {product.sku}
                  </p>
                </div>

                {/* Call to Action */}
                <div className="mt-auto">
                  <button
                    className={`w-full flex items-center justify-center space-x-3 
                                            py-3 px-6 rounded-xl text-lg font-bold transition duration-300 
                                            bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-xl shadow-fuchsia-600/50 cursor-pointer`}
                  >
                    <ShoppingBag className="w-6 h-6" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Details (Full Description) */}
            <div className="mt-12 p-8 bg-gray-800 rounded-xl shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-indigo-700 pb-2">
                Full Description
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {product.full_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
