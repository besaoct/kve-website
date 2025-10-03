import { Segment } from "../segments/types";
import { Category } from "../category/types";

export interface SubSegment {
    id: number;
    title: string;
    slug: string;
    segment_id: number;
    status: number;
    created_at: string;
    updated_at: string;
    segment: Segment;
}

export interface SubCategory {
    id: number;
    title: string;
    slug: string;
    category_id: number;
    status: number;
    created_at: string;
    updated_at: string;
    segments_count: number;
    products_count: number;
    segments: Segment[];
    category: Category;
}
