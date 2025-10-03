import { API_BASE_URL, requestOptions } from "../config";
import { Nav } from "./types";

export const getNavbarHierarchy = async (): Promise<Nav[]> => {
  const response = await fetch(
    `${API_BASE_URL}/navbar/hierarchy`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};

export const getNavbarCategoryChildren = async (
  id: number,
  type: string
): Promise<any> => {
  const response = await fetch(
    `${API_BASE_URL}/navbar/categories/${id}/children?type=${type}`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};
