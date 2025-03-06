import React from "react";
import ProductImage from "../globalcomponents/ProductImage";

const ControllerPage: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center w-full px-4">
      <HeroSection />
      <ProductImage />
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="text-center px-6 py-16 flex flex-col items-center">
      <p className="text-sm uppercase tracking-widest text-gray-700 mt-8">Curiouslyfly</p>
      
      {/* Title in Two Lines */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
        Introducing 
      </h1>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
         Home Controller
      </h1>

      <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mt-4">
        The central intelligence of your smart home, seamlessly integrating and managing all connected
        devices for a smooth automation experience.
      </p>

      {/* Explore Button */}
      <div className="mt-6">
        <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition">
          Explore
        </button>
      </div>
    </div>
  );
};

export default ControllerPage;
