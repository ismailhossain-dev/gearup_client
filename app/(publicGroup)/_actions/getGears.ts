export const getGears = async () => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/gear`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch gears");
  }

  const result = await res.json();

  return result;
};