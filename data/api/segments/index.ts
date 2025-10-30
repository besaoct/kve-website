import { API_BASE_URL, requestOptions } from "../config";
import { SubSegment } from "../sub-segments/types";
import { Segment,  } from "./types";

export const getSegments = async (
  subCategoryId: number,
  perPage = 20,
  search = ""
): Promise<Segment[]> => {
  const response = await fetch(
    `${API_BASE_URL}/segments?sub_category_id=${subCategoryId}&per_page=${perPage}&search=${search}`,
    requestOptions
  );
  const result = await response.json();
  return result.data.data;
};

export const getAllSegments = async (perPage = 1000): Promise<Segment[]> => {
  const response = await fetch(
    `${API_BASE_URL}/segments?per_page=${perPage}`,
    requestOptions
  );
  const result = await response.json();
  return result.data.data;
};

export const getSegment = async (id: number): Promise<Segment> => {
  const response = await fetch(
    `${API_BASE_URL}/segments/${id}`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};

export const getSegmentSubSegments = async (
  id: number
): Promise<SubSegment[]> => {
  const response = await fetch(
    `${API_BASE_URL}/segments/${id}/sub-segments`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};

export const getSubSegments = async (params: any): Promise<any[]> => {
  const response = await fetch(
    `${API_BASE_URL}/sub-segments?segment_id=${params.segment_id}&per_page=${params.per_page}`,
    requestOptions
  );
  const result = await response.json();
  return result.data.data;
}

export const getSubSegment = async (id: number): Promise<SubSegment> => {
  const response = await fetch(
    `${API_BASE_URL}/sub-segments/${id}`,
    requestOptions
  );
  const result = await response.json();
  return result.data;
};
