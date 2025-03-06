import React from "react";
import Button from "../globalcomponents/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-end min-h-screen bg-black text-white text-center px-6 py-12 pb-24">
      <h1 className="text-3xl sm:text-5xl font-semibold text-gray-300 leading-tight">
        The Amber Pro
      </h1>
      <p className="text-gray-400 max-w-lg sm:max-w-xl mt-4 text-sm sm:text-base">
        Experience the perfect blend of elegance and technology with AMBER PRO touch panels.
        Control lighting, climate, security, and more, all at your fingertips.
      </p>

      <div className="mt-6 flex flex-col sm:flex-col space-y-4 sm:space-y-0 sm:space-x-4 max-w-xs sm:max-w-none">
        <Button 
          title="Buy now" 
          onClick={() => alert("Buy Now Clicked")} 
          className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto"
        /> 
       <Button 
          title="Talk to an expert >" 
          onClick={() => alert("Talk to an expert Clicked")} 
          className="text-white hover:bg-gray-800 w-full sm:w-auto"
        />
       </div>  
    </section>
  );
};

export default HeroSection;


