export const BASE = "https://api.escuelajs.co";

export type Category = {
  id: number;
  name: string;
  image: string;
};

export const fetchCategories = async () => {
  const url = new URL("/api/v1/categories", BASE);
  const response = await fetch(url.toString());
  const data = await response.json();

  return data as Category[];
};
