import React from "react";

function PropertyCard({ item }) {
  return (
    <div className="flex mt-4 p-4 gap-10">
      <img className="rounded-md" src={item.image} width="600" />
      <div className="flex flex-col justify-center">
      <h3 className="text-6xl mb-10 ">{item.title}</h3>
      <p className="text-2xl mb-3 pb-4 border-b-2 border-gray-100">Price: Rs:{item.price}</p>
      <p className="text-2xl mb-3 pb-4 border-b-2 border-gray-100">Bedrooms: {item.bedrooms}</p>
      <p className="text-2xl pb-4 border-b-2 border-gray-100">Location: {item.location}</p>
    </div>
  </div> 
  );
}

export default PropertyCard;

