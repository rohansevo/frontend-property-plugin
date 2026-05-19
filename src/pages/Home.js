import React, { useState } from "react";
import Filter from "../components/Filter";
import PropertyCard from "../components/PropertyCard";
import { getProperties } from "../services/api";
import { useEffect } from "react";
import PropertyCarousel from "../components/PropertyCarousel";
import PropertyBanner from "../components/PropertyBanner";
import SplitHero from "../components/SplitHero";
import PopularCities from "../components/PopularCities";
import CommercialSection from "../components/CommercialSection";
import NewLaunchProjects from "../components/NewLaunchProjects";

function Home() {
  const [properties, setProperties] = useState([]);
  const [searched, setSearched] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Load all properties on page load
    useEffect(() => {
     async function loadProperties() {

      const data = await getProperties();

      setProperties(data);
    }

    loadProperties();

  }, []);

  const handleSearch = async (filters) => {
    try {
    const cleanFilters = {
      category: filters.category || "",
      price: filters.price || "",
      bedrooms: filters.bedrooms || "",
      location: filters.location || "",
      search: filters.search || "",
      propertyTypes: filters.propertyTypes || [],
    };

    const data = await getProperties(cleanFilters);
    setProperties(data);
    setSearched(true);
  }catch (error) {
    console.error("Error fetching properties:", error);
    setProperties([]);
    setSearched(true);
  }
};

  return (
    
    <div>
      
      <PropertyBanner />

      

      <Filter onSearch={handleSearch}
      showAll={showAll}
        setShowAll={setShowAll}/>

       {searched && properties.length === 0 && (
        <h2 className="text-center text-2xl mt-10 text-red-500">
          Property Not Found
        </h2>
      )}

      {(showAll ? properties : properties.slice(0, 3)).map(item => (
        <PropertyCard key={item.id} item={item} />
      ))}
      <SplitHero />
      <NewLaunchProjects />
      <CommercialSection />
      <PopularCities />
      <PropertyCarousel />
    </div>
  );

}

export default Home;