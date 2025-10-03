import { API_BASE_URL, requestOptions } from "../config";
import { SubSegment } from "./types";

export interface GetSubSegmentsParams {
  segment_id?: number;
  sub_category_id?: number;
  category_id?: number;
  per_page?: number;
  search?: string;
}

export const getSubSegments = async (
  params: GetSubSegmentsParams
): Promise<SubSegment[]> => {
  const query = new URLSearchParams({
    per_page: params.per_page?.toString() || "20",
    search: params.search || "",
  });

  if (params.segment_id) {
    query.append("segment_id", params.segment_id.toString());
  }
  if (params.sub_category_id) {
    query.append("sub_category_id", params.sub_category_id.toString());
  }
  if (params.category_id) {
    query.append("category_id", params.category_id.toString());
  }

  const response = await fetch(
    `${API_BASE_URL}/sub-segments?${query}`,
    requestOptions
  );
  const result = await response.json();
  return result.data.data;
};

export const getSubSegment = async (id: number): Promise<SubSegment> => {
  const response = await fetch(
    `${API_BASE_URL}/sub-segments/${id}`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};