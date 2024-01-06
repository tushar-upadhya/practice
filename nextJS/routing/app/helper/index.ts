import { apiData } from "../page";

export const getSingleProduct = async (id: number) => {
  const item = await apiData();

  const singleItem = await item.find((product: any) => product.id === id);
  return singleItem;
};
