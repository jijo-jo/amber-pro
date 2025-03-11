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
      <p
        className="font-inter font-medium text-[12px] md:text-[16px] leading-[19.2px] 
             tracking-[1.92px] text-center align-middle 
             text-gray-700 uppercase mt-4 md:mt-8"
      >
        Curiouslyfly
      </p>


      <h1 className="font-inter font-medium text-[44px] md:text-[64px] leading-[70px] 
             tracking-[-3px] text-center align-middle">
        Introducing
      </h1>
      <h1 className="font-inter font-medium text-[44px] md:text-[64px] leading-[70px] 
             tracking-[-3px] text-center align-middle">
        Home Controller
      </h1>

      <p
        className="font-inter font-medium text-[12px] md:text-[13.89px] leading-[19px] 
             tracking-[0%] text-center align-middle text-gray-600 
             w-[80%] md:max-w-2xl mx-auto mt-4"
      >
        The central intelligence of your smart home, seamlessly integrating and managing all connected
        devices for a smooth automation experience.
      </p>
      
      <div className="mt-6">
  <button
    className="bg-black text-white px-6 py-3 rounded-full 
               text-[15.88px] leading-[100%] tracking-[0%] 
               text-center align-middle font-inter font-medium 
               hover:bg-gray-900 transition"
  >
    Explore
  </button>
</div>

    </div>
  );
};

export default ControllerPage;
