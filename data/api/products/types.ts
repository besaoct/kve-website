export interface Product {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  price: string;
  formatted_price: string;
  status: boolean;
  status_label: string;
  primary_image_url: string | null;
  has_images: boolean;
  images_count: number;
  images: any[];
  category: {
    id: number;
    title: string;
    slug: string;
    status: any;
    status_label: string;
    created_at: any;
    updated_at: any;
    formatted_created_at: any;
  };
  sub_category: {
    id: number;
    title: string;
    slug: string;
    status: any;
    status_label: string;
    category_id: any;
    url: string;
    created_at: any;
    updated_at: any;
    formatted_created_at: any;
    formatted_updated_at: any;
  };
  segment: {
    id: number;
    title: string;
    slug: string;
    status: any;
    sub_category_id: any;
    created_at: any;
    updated_at: any;
  };
  sub_segment: {
    id: number;
    title: string;
    slug: string;
    status: any;
    segment_id: any;
    created_at: any;
    updated_at: any;
  };
  hierarchy: {
    category: string;
    sub_category: string;
    segment: string;
    sub_segment: string;
    breadcrumb: string;
  };
  created_at: string;
  updated_at: string;
  formatted_created_at: string;
}
