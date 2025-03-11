import React from "react";
import Button from "../globalcomponents/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-end min-h-screen bg-black text-white text-center px-6 py-12 pb-24">
      <h1 className="text-[36px] md:text-[44px] font-semibold bg-gradient-to-r from-[#4D4D4D] to-[#FFFFFF] text-transparent bg-clip-text leading-tight">
        The Amber Pro
      </h1>
      <p className="text-[#FFFFFFAA] max-w-lg sm:max-w-xl mt-4 text-[12px] md:text-[14px] sm:text-base">
        Experience the perfect blend of elegance and technology with AMBER PRO touch panels.
        Control lighting, climate, security, and more, all at your fingertips.
      </p>

      <div className="mt-6 flex flex-col sm:flex-col space-y-4 sm:space-y-0 sm:space-x-4 max-w-xs sm:max-w-none">
        <Button
          title="Buy now"
          onClick={() => alert("Buy Now Clicked")}
          className="bg-white text-[#000000] hover:bg-gray-200 w-full sm:w-auto 
             text-[15.88px] leading-[100%] tracking-[0%] 
             text-center align-middle font-inter font-medium"
        />

        <Button
          title="Talk to an expert >"
          onClick={() => alert("Talk to an expert Clicked")}
          className="text-white hover:bg-gray-800 w-full sm:w-auto text-[14px] md:text-[16px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;


