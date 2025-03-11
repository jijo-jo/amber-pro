import React from "react";
import Button from "../globalcomponents/Button";

type HeroProps = {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
};

const OfficeSession: React.FC<HeroProps> = ({
  title,
  description,
  buttonText,
  backgroundImage,
}) => {
  return (
    <section
      className="relative w-full h-screen flex items-start sm:items-center justify-center text-black bg-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div
        className="absolute top-8 left-4 md:!bottom-32 md:!right-8 max-w-xl p-4 sm:p-8 text-left"
      >
        <h1
          className="font-inter font-medium text-[28px] md:text-[44px] leading-[32px] md:leading-[57.2px] text-[#000000]"
        >
          {title}
        </h1>
        <p className="font-inter font-medium text-[13px] md:text-[13.89px] leading-[18px] md:leading-[19px] text-[#000000] mb-4 md:mb-6 w-full md:w-[450px]">
          {description}
        </p>
        <Button
          title={buttonText}
          onClick={() => alert("Buy Now Clicked")}
          className="w-auto bg-black text-white px-6 py-2 rounded-full text-center align-middle 
             font-inter font-medium text-[15.88px] leading-[100%] 
             tracking-[0%] hover:bg-gray-800 transition"
        />
      </div>
    </section>
  );
};

export default OfficeSession;



