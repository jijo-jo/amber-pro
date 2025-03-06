import React from "react";
import Iphone1 from "../../assests/iphone1screen1.png";
import Iphone2 from "../../assests/iphonescreen2.png";
import Iphone3 from "../../assests/iphonescreen3.png";
import Iphone4 from "../../assests/iphone1screen1.png";

const images = [Iphone1, Iphone2, Iphone3, Iphone4];

const SmartDashboard: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans flex flex-col items-center px-2 py-12 w-full">

      <div className="w-full max-w-6xl text-left">
        <h2 className="text-3xl sm:text-5xl font-semibold">
          Control your home, anytime, anywhere.
        </h2>
      </div>

      <div className="mt-10 w-full max-w-6xl">
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto sm:overflow-visible whitespace-nowrap snap-x snap-mandatory">
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 sm:w-auto w-3/4 snap-center">
              <img
                src={src}
                alt={`Smart Home Dashboard ${index + 1}`}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>


      <DownloadSection />
    </div>
  );
};

const DownloadSection: React.FC = () => {
  return (
    <div className="text-center text-gray-400 px-6 mt-16 max-w-3xl">
      <p className="text-lg md:text-xl leading-relaxed">
        The Curiousfly App is your ultimate smart home companion, providing seamless control over
        lighting, climate, security, entertainment, and energy management -{" "}
        <span className="text-white font-semibold">all from your smartphone.</span>
        Designed for convenience and efficiency, the app allows you to automate routines, monitor
        real-time energy usage, and manage your home remotely with just a tap.
      </p>

      <div className="flex flex-col items-center md:flex-row md:justify-around gap-4 mt-6">
        <a href="/" className="text-blue-400 text-base md:text-xl hover:underline text-center">
          Download for iOS &gt;
        </a>
        <a href="/" className="text-blue-400 text-base md:text-xl hover:underline text-center">
          Download for Android &gt;
        </a>
      </div>

    </div>
  );
};

export default SmartDashboard;


