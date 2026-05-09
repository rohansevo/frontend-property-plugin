const BASE_URL = "http://localhost:10023/wp-json/plp/v1";

export const getProperties = async (filters = {}) => {
   let url = `${BASE_URL}/properties?`;

  if (filters.price) url += `price=${filters.price}&`;
  if (filters.bedrooms) url += `bedrooms=${filters.bedrooms}&`;
  if (filters.location) url += `location=${filters.location}&`;

  const res = await fetch(url);
  return res.json();
};