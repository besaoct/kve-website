import { SubCategory, SubSegment } from "../sub-segments/types";
import { Category } from "../category/types";

export interface Segment {
    id: number;
    title: string;
    slug: string;
    sub_category_id: number;
    status: number;
    created_at: string;
    updated_at: string;
    sub_segments_count: number;
    products_count: number;
    sub_category: SubCategory;
    sub_segments: SubSegment[];
}