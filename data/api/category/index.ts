import { API_BASE_URL, requestOptions } from "../config";
import { Category } from "./types";

export const getCategories = async (
  perPage = 20,
  search = "",
  page = 1
): Promise<Category[]> => {
  const response = await fetch(
    `${API_BASE_URL}/categories?per_page=${perPage}&search=${search}&page=${page}`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};

export const getCategory = async (id: number): Promise<Category> => {
  const response = await fetch(
    `${API_BASE_URL}/categories/${id}`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};

export const getCategorySubCategories = async (id: number): Promise<any> => {
  const response = await fetch(
    `${API_BASE_URL}/categories/${id}/sub-categories`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};

export const getCategoryHierarchy = async (id: number): Promise<Category> => {
  const response = await fetch(
    `${API_BASE_URL}/categories/${id}/hierarchy`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};
