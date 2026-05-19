import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Filter({ onSearch, showAll,setShowAll }) {
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [location, setLocation] = useState("");
  const tabs = [
    "Buy",
    "Rent",
    "New Launch",
    "Commercial",
    "Plots/Land",
    "Projects",
  ];

  const residentialOptions = [
    "Buy",
    "Rent",
    "New Launch",
    "Commercial",
    "Plots/Land",
    "Projects",
  ];

  const [activeTab, setActiveTab] = useState("Buy");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  function toggleOption(option) {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSearch({
      price,
      bedrooms,
      location,
      tab: activeTab,
      category: activeTab.toLowerCase().replace(/\s+/g, "-"),
      propertyTypes: selectedOptions.map((item) =>
        item.toLowerCase().replace(/\s+/g, "-"),
      ),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-6 gap-6 justify-center max-w-6xl mx-auto -mt-12 flex flex-col"
    >
      <div className="flex overflow-x-auto scrollbar-hide border-b">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => {
              setActiveTab(tab);

              // Run search
              onSearch({
                price,
                bedrooms,
                location,
                category: tab.toLowerCase().replace(/\s+/g, "-"),
                propertyTypes: selectedOptions,
              });

              // Scroll for New Launch
              if (tab === "New Launch") {
                const section = document.getElementById("new-launch-projects");

                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }
            }}
            className={`relative px-6 py-5 text-sm md:text-base font-medium whitespace-nowrap transition
              ${
                activeTab === tab
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
          >
            {tab}

            {/* Active Underline */}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-full"></div>
            )}

            {/* Red Dot for New Launch */}
            {tab === "New Launch" && (
              <span className="absolute top-4 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
        ))}

        {/* Post Property */}
        <button className="ml-auto px-6 py-5 text-sm font-semibold text-gray-700 whitespace-nowrap">
          Post Property
          <span className="ml-2 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded">
            FREE
          </span>
        </button>
      </div>
      {/* Price Dropdown */}
      <div className="selection relative flex flex-col min-[770px]:flex-row gap-4 md:gap-6 lg:gap-8">
        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center justify-between gap-2 w-full lg:w-[220px] text-gray-700 font-medium"
        >
          All Residential
          {showDropdown ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute left-0 top-full w-[320px] md:w-[700px] bg-white shadow-2xl border rounded-2xl p-6 z-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {residentialOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => toggleOption(option)}
                    className="w-4 h-4 accent-blue-600"
                  />

                  {option}
                </label>
              ))}
            </div>
          </div>
        )}

        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full md:w-1/4 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-[770px]:w-full"
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
          className="w-full md:w-1/4 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-[770px]:w-full"
        >
          <option value="">Select Bedrooms</option>
          <option value="1 BHK">1 BHK</option>
          <option value="2 BHK">2 BHK</option>
          <option value="3 BHK">3 BHK</option>
          <option value="4 BHK">4 BHK</option>
          <option value="5 BHK">5 BHK</option>
        </select>

        {/* Location Dropdown */}
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full md:w-1/4 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-[770px]:w-full "
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          setShowAll((prev) => !prev);
        }}
        className="text-blue-600 font-semibold hover:underline"
      >
        {showAll ? "Show Less" : "View All"}
      </button>
    </form>
  );
}

export default Filter;
