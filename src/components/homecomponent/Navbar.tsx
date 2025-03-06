import React, { useState } from "react";
import NavLink from "../globalcomponents/NavLink";
import Button from "../globalcomponents/Button";
import Logo from '../../assests/logo.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="text-lg font-bold">
          <img src={Logo} alt="Logo" className="h-12 w-20" />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <NavLink label="Amber Pro" href="#" />
          <NavLink label="Curiousfly Home" href="#" />
          <NavLink label="Home Controller" href="#" />
          <NavLink label="Curiousfly App" href="#" />
        </div>

        {/* Buy Now Button (Desktop) */}
        <div className="hidden md:block">
          <Button
            title="Buy now"
            onClick={() => alert("Buy Now Clicked")}
            className="bg-blue-500 text-white hover:bg-blue-600"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <div
        className={`absolute top-full left-0 w-full bg-black text-center transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 py-4">
          <NavLink label="Amber Pro" href="#" />
          <NavLink label="Curiousfly Home" href="#" />
          <NavLink label="Home Controller" href="#" />
          <NavLink label="Curiousfly App" href="#" />
          <Button
            title="Buy now"
            onClick={() => alert("Buy Now Clicked")}
            className="bg-blue-500 text-white hover:bg-blue-600 mx-auto"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


