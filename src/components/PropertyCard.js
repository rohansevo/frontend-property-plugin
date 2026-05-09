import React from "react";

function PropertyCard({ item }) {
  return (
    <div className="flex mt-4 p-4 gap-10">
      <img className="rounded-md" src={item.image} width="600" />
      <div className="flex flex-col justify-center">
      <h3 className="text-5xl mb-10 ">{item.title}</h3>
      <p className="text-xl mb-3">Price: {item.price}</p>
      <p className="text-xl mb-3">Bedrooms: {item.bedrooms}</p>
      <p className="text-xl">Location: {item.location}</p>
    </div>
  </div> 
  );
}

export default PropertyCard;

