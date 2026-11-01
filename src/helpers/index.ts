export const getData = async (endpoint: string) => {

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
};