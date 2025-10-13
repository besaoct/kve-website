export interface ProductImage {
  id: number;
  product_id: number;
  image_path: string;
  alt_text: string;
  sort_order: number;
  is_primary: boolean;
  created_at: string;
  updated_at: string;
}

export interface Link {
  link_text: string;
  link: string;
}

export interface Partner {
  label: string;
  link: string;
}

export interface Category {
  id: number;
  title: string;
  slug: string;
  status: boolean | null;
  status_label: string;
  created_at: string | null;
  updated_at: string | null;
  formatted_created_at: string | null;
}

export interface SubCategory {
  id: number;
  title: string;
  slug: string;
  status: boolean | null;
  status_label: string;
  category_id: number | null;
  url: string;
  created_at: string | null;
  updated_at: string | null;
  formatted_created_at: string | null;
  formatted_updated_at: string | null;
}

export interface Segment {
  id: number;
  title: string;
  slug: string;
  status: boolean | null;
  sub_category_id: number | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface SubSegment {
  id: number;
  title: string;
  slug: string;
  status: boolean | null;
  segment_id: number | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface Hierarchy {
  category: string;
  sub_category: string;
  segment: string;
  sub_segment: string;
  breadcrumb: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  sku: string | null;
  short_description: string;
  product_details: string;
  specifications: string;
  price: string | null;
  formatted_price: string;
  status: boolean;
  status_label: string;
  primary_image_url: string | null;
  has_images: boolean;
  images_count: number;
  images: ProductImage[];
  disclaimer: string | null;
  features: string[];
  service_info: Link[] | null;
  has_service_info: boolean;
  included: string[] | null;
  has_included: boolean;
  documentation: Link[];
  has_documentation: boolean;
  partner: Partner | null;
  has_partner: boolean;
  input_types: string[];
  has_input_types: boolean;
  output_types: string[];
  has_output_types: boolean;
  is_sustainable: boolean;
  category: Category;
  sub_category: SubCategory;
  segment: Segment;
  sub_segment: SubSegment;
  hierarchy: Hierarchy;
  created_at: string;
  updated_at: string;
  formatted_created_at: string;
}

export interface singleProductResponse {
  product: Product;
  related_products: Product[];
  popular_products: Product[];
  you_may_also_need: Product[];
} 