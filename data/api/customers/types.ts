export interface Customer {
  id: number | null;
  category_id: number | null;
  customer_name: string;
  logos: string[];
  category: {
    id: number;
    title: string;
    slug: string;
  } | null;
  created_at: string;
}
