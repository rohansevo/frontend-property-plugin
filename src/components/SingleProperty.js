import React, { useEffect, useState } from "react";

import { getSingleProperty } from "../services/api";

function SingleProperty() {

  const [property, setProperty] = useState(null);

  useEffect(() => {

    const params = new URLSearchParams(
      window.location.search
    );

    const id = params.get("id");

    async function loadProperty() {

      const data = await getSingleProperty(id);

      setProperty(data);
    }

    loadProperty();

  }, []);

  if (!property) {
    return <h2>Loading...</h2>;
  }

  return (

    <div className="max-w-6xl mx-auto p-6">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        {property.title}
      </h1>

      {/* Featured Image */}
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-[500px] object-cover rounded-2xl"
      />

      {/* Details */}
      <div className="mt-6 space-y-3">

        <h2 className="text-2xl font-semibold">
          ₹ {property.price}
        </h2>

        <p>
          Location: {property.location}
        </p>

        <p>
          Bedrooms:
          {property.bedrooms?.join(", ")}
        </p>

      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">

        {property.gallery?.map((img, index) => (

          <img
            key={index}
            src={img}
            alt=""
            className="w-full h-60 object-cover rounded-xl"
          />

        ))}

      </div>

    </div>
  );
}

export default SingleProperty;