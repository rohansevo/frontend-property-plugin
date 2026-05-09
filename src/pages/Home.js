import React, { useState } from "react";
import Filter from "../components/Filter";
import PropertyCard from "../components/PropertyCard";
import { getProperties } from "../services/api";

function Home() {
  const [properties, setProperties] = useState([]);

  const handleSearch = async (filters) => {
    const data = await getProperties(filters);
    setProperties(data);
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Property Listing</h1>

      <Filter onSearch={handleSearch} />

      {properties.map(item => (
        <PropertyCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Home;