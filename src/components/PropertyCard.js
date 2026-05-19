import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ item }) {
  return (
    <div  onClick={() => {
    window.location.href =
      `/property-details?id=${item.id}`; 
    }}
      className="flex flex-col lg:flex-row mt-4 p-4 gap-6 lg:gap-10 bg-white rounded-xl shadow-md">
      
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <img
          className="rounded-md w-full h-[250px] sm:h-[350px] lg:h-full object-cover"
          src={item.image}
          alt={item.title}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center w-full lg:w-1/2">
        
        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
          {item.title}
        </h3>

        <p className="text-base sm:text-lg lg:text-2xl mb-3 pb-4 border-b border-gray-200">
          <span className="font-semibold">Price:</span> Rs: {item.price}
        </p>

        {/* <p className="text-base sm:text-lg lg:text-2xl mb-3 pb-4 border-b border-gray-200">
          <span className="font-semibold">Bedrooms:</span> {item.bedrooms}
        </p> */}
        <p className="text-base sm:text-lg lg:text-2xl mb-3 pb-4 border-b border-gray-200">
        <span className="font-semibold">Bedrooms:</span>{" "}
        {item.bedrooms?.join(", ")}
        </p>

        <p className="text-base sm:text-lg lg:text-2xl pb-4 border-b border-gray-200">
          <span className="font-semibold">Location:</span> {item.location}
        </p>

      </div>
    </div>
  );
}

export default PropertyCard;
