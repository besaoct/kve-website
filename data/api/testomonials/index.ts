import { API_BASE_URL, requestOptions } from "../config";
import { Testimonial } from "./types";

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const response = await fetch(
    `${API_BASE_URL}/testimonials`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};
