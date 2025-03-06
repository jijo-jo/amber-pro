import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, className }) => {
  return (
    <button
      className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition 
                  active:scale-95 
                  disabled:bg-gray-400 disabled:cursor-not-allowed 
                  ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

