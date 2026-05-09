// import React, { useState } from "react";

// function Filter({ onSearch }) {
//   const [price, setPrice] = useState("");
//   const [bedrooms, setBedrooms] = useState("");
//   const [location, setLocation] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     const data = {
//       price,
//       bedrooms,
//       location
//     };

//     onSearch(data);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Price"
//         onChange={function(e) {
//           setPrice(e.target.value);
//         }}
//       />

//       <input
//         placeholder="Bedrooms"
//         onChange={function(e) {
//           setBedrooms(e.target.value);
//         }}
//       />

//       <input
//         placeholder="Location"
//         onChange={function(e) {
//           setLocation(e.target.value);
//         }}
//       />

//       <button type="submit">Search</button>
//     </form>
//   );
// }

// export default Filter;






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
      className="bg-white shadow-md rounded-2xl p-6 mt-6 flex flex-col md:flex-row gap-4 items-center"
    >
      {/* Price */}
      <input
        className="w-full md:w-1/4 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      {/* Bedrooms */}
      <input
        className="w-full md:w-1/4 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Bedrooms"
        onChange={(e) => setBedrooms(e.target.value)}
      />

      {/* Location */}
      <input
        className="w-full md:w-1/4 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
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