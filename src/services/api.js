const BASE_URL = "http://localhost:10043/wp-json";

export const getProperties = async (filters = {}) => {
   let url = `${BASE_URL}/plp/v1/properties?`;

  if (filters.price) url += `price=${filters.price}&`;
  if (filters.bedrooms) url += `bedrooms=${filters.bedrooms}&`;
  if (filters.location) url += `location=${filters.location}&`;

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