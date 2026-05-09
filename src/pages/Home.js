import React, { useState } from "react";
import Filter from "../components/Filter";
import PropertyCard from "../components/PropertyCard";
import { getProperties } from "../services/api";
import { useEffect } from "react";
import PropertyCarousel from "../components/PropertyCarousel";

function Home() {
  const [properties, setProperties] = useState([]);
  const [searched, setSearched] = useState(false);

  // Load all properties on page load
    useEffect(() => {

    async function loadProperties() {

      const data = await getProperties();

      setProperties(data);
    }

    loadProperties();

  }, []);

  const handleSearch = async (filters) => {
    const data = await getProperties(filters);
    setProperties(data);
    setSearched(true);
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Property Listing</h1>

      <Filter onSearch={handleSearch} />

       {/* {properties.length === 0 && (
        <h2 className="text-center text-2xl mt-10 text-red-500">
          Property Not Found
        </h2>
      )} */}

       {searched && properties.length === 0 && (
        <h2 className="text-center text-2xl mt-10 text-red-500">
          Property Not Found
        </h2>
      )}

      {properties.map(item => (
        <PropertyCard key={item.id} item={item} />
      ))}
      <PropertyCarousel />
    </div>
  );

}

export default Home;