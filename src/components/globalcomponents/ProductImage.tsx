import React from "react";
import ProductImg from "../../assests/homecontroler.png"; 

const ProductImage: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 sm:px-0 mb-8">
      <img
        src={ProductImg}
        alt="Smart Home Controller"
        className="w-[344px] h-[268.4px] sm:w-[1148.6px] sm:h-[540.26px] object-cover rounded-[7px] shadow-lg"
      />
    </div>
  );
};

export default ProductImage;
