export interface Category {
  id: number;
  title: string;
  slug: string;
  status: number;
  status_label: string;
  products_count: number;
  sub_categories_count: number;
  sub_categories: SubCategory[];
  created_at: string;
  updated_at: string;
  formatted_created_at: string;
}

export interface SubCategory {
  id: number;
  title: string;
  slug: string;
  status: number;
  status_label: string;
  category_id: number;
  segments_count: number;
  url: string;
  created_at: string;
  updated_at: string;
  formatted_created_at: string;
  formatted_updated_at: string;
  segments: Segment[];
}

export interface Segment {
  id: number;
  title: string;
  slug: string;
  products_count: number;
  sub_segments_count: number;
  sub_segments: SubSegment[];
}

export interface SubSegment {
  id: number;
  title: string;
  slug: string;
  segment_id: number;
  status: number;
  created_at: string;
  updated_at: string;
  products_count: number;
}
