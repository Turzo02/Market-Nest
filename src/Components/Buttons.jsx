import { ShoppingCart } from "lucide-react";
import React from "react";

// Make text and icon configurable via props
const Button = ({ text = "Click Me", Icon = ShoppingCart}) => {
  return (
<button
  className="flex items-center justify-center bg-linear-to-r from-indigo-500 via-indigo-600 to-fuchsia-500 text-white font-semibold py-3 px-8 rounded-xl shadow-xl cursor-pointer
             transition-all duration-500 transform hover:scale-105 hover:bg-linear-to-l hover:from-indigo-500 hover:via-fuchsia-500 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 active:scale-95"
>
  {Icon && <Icon className="w-5 h-5 mr-2" />}
  {text}
</button>





  );
};

export default Button;
