
import React, { useState } from "react";

function Filter({ onSearch }) {
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSearch({
      price,
      bedrooms,
      location
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-center max-w-7xl mx-auto -mt-12"
    >
      {/* Price Dropdown */}
      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full md:w-1/4 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Price</option>
        <option value="10000-20000">10,000 - 20,000</option>
        <option value="20000-30000">20,000 - 30,000</option>
        <option value="30000-40000">30,000 - 40,000</option>
        <option value="40000-50000">40,000 - 50,000</option>
        <option value="50000-plus">50,000 Above</option>
      </select>

       {/* Bedrooms Dropdown */}
      <select
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        className="w-full md:w-1/4 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Bedrooms</option>
        <option value="1">1 BHK</option>
        <option value="2">2 BHK</option>
        <option value="3">3 BHK</option>
        <option value="4">4 BHK</option>
        <option value="5">5 BHK</option>
      </select>

        {/* Location Dropdown */}
        <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full md:w-1/4 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      


      {/* Button */}
      <button
        type="submit"
        className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}

export default Filter;