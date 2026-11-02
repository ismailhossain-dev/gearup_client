export const getGearyById = async ({ id }: { id: string }) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/gear/${id}`);
  const result = await res.json();

  return result;
};
