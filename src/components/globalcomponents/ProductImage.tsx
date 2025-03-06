import React from "react";
import ProductImg from "../../assests/controllerbox.png"; 

const ProductImage: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 sm:px-0 mb-8">
      <img
        src={ProductImg}
        alt="Smart Home Controller"
        className="w-full max-w-3xl h-[25rem] object-cover rounded-2xl shadow-lg"
      />
    </div>
  );
};

export default ProductImage;
