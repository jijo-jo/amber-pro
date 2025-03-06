import React from "react";
import Button from "../globalcomponents/Button";

type HeroProps = {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
};

const OfficeSession: React.FC<HeroProps> = ({ title, description, buttonText, backgroundImage }) => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-black bg-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Text Content Positioned at Bottom Right */}
      <div className="absolute bottom-32 right-8 max-w-xl p-8 text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">{title}</h1>
        <p className="text-lg sm:text-xl text-gray-500 mb-6">{description}</p>
        <Button 
          title={buttonText} 
          onClick={() => alert("Buy Now Clicked")} 
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        /> 
      </div>
    </section>
  );
};

export default OfficeSession;

