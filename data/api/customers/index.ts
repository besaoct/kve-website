import { API_BASE_URL, requestOptions } from "../config";
import { Customer } from "./types";

export const getCustomers = async (): Promise<Customer[]> => {
  const response = await fetch(
    `${API_BASE_URL}/customers`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};
