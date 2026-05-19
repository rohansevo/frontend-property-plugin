import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProperty from "../components/SingleProperty";


function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/property/:id"
          element={<SingleProperty />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;




const BASE_URL = "http://localhost:10043/wp-json";

export const getProperties = async (filters = {}) => {
   const params = new URLSearchParams();

  if (filters.price) {
    params.append("price", filters.price);
  }

  if (filters.bedrooms) {
    params.append("bedrooms", filters.bedrooms);
  }

  if (filters.location) {
    params.append("location", filters.location);
  }

  if (filters.category) {
    params.append("category", filters.category);
  }
  if (filters.propertyTypes?.length > 0) {
  params.append(
    "propertyTypes",
    filters.propertyTypes.join(",")
  );
}

  const url = `${BASE_URL}/plp/v1/properties?${params.toString()}`;

  const res = await fetch(url);
  return res.json();
};

export const getFeaturedProperties = async () => {

  try {

    const res = await fetch(
      `${BASE_URL}/properties/featured-properties`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }

    return await res.json();

  } catch (error) {

    console.error(error);

    return [];
  }
};



//New Launched Prokects API Call
export const getNewLaunchProjects = async () => {

  const res = await fetch(
    `${BASE_URL}/properties/new-launch-projects`
  );

  return await res.json();
};



export const getSingleProperty = async (id) => {

  const res = await fetch(
    `http://localhost:10043/wp-json/plp/v1/properties/${id}`
  );

  return await res.json();
};