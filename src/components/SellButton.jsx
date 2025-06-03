import React from "react";
import { Headphones, ShoppingCart } from "lucide-react";

const SellButton = () => {
  return (
    <div className="fixed bottom-0 right-0  -translate-y-10 -translate-x-10 flex flex-col gap-4 z-40">
      <button className="bg-red-500 px-8 py-1 rounded-full flex gap-2 justify-center text-white">
        <ShoppingCart />
        Start Selling
      </button>
      <button className="bg-red-500 px-8 py-1 rounded-full flex gap-2 text-white">
        <Headphones />
        Customer Support
      </button>
    </div>
  );
};

export default SellButton;
