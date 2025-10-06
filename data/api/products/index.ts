import { API_BASE_URL, requestOptions } from "../config";
import { Product } from "./types";

export interface GetProductsParams {
  per_page?: number;
  page?: number;
  sort_by?: string;
  sort_order?: "asc" | "desc";
  search?: string;
  category_id?: number;
  sub_category_id?: number;
  segment_id?: number;
  sub_segment_id?: number;
  min_price?: number;
  max_price?: number;
}

export const getProducts = async (params: GetProductsParams): Promise<Product[]> => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      query.append(key, value.toString());
    }
  });

  const response = await fetch(
    `${API_BASE_URL}/products?${query}`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};

export const getProduct = async (slug: string): Promise<Product> => {
  const response = await fetch(`${API_BASE_URL}/products/${slug}`, { ...requestOptions, cache: 'no-store' });
  const result = await response.json();
  return result.data;
};

export const getProductsByCategory = async (
  id: number,
  perPage = 20
): Promise<Product[]> => {
  const response = await fetch(
    `${API_BASE_URL}/products/category/${id}?per_page=${perPage}`,
    requestOptions,
  
  );
  const result = await response.json();
  return result.data;
};

export const getProductsBySubCategory = async (
  id: number,
  perPage = 15
): Promise<Product[]> => {
  const response = await fetch(
    `${API_BASE_URL}/products/sub-category/${id}?per_page=${perPage}`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};

export const getProductsBySegment = async (
  id: number,
  perPage = 10
): Promise<Product[]> => {
  const response = await fetch(
    `${API_BASE_URL}/products/segment/${id}?per_page=${perPage}`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};

export const getProductsBySubSegment = async (
  id: number,
  perPage = 25
): Promise<Product[]> => {
  const response = await fetch(
    `${API_BASE_URL}/products/sub-segment/${id}?per_page=${perPage}`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};


export const getFeaturedProducts = async (limit: number = 4): Promise<Product[]> => {
  return getProducts({
    per_page: limit,
    sort_by: "created_at",
    sort_order: "desc",
  });
};
