// e.g. lib/category-mapping.ts
import type { Nav } from "@/data/api/nav/types";

type TitleToIdMap = {
  categories: Record<string, number>;
  subCategories: Record<string, number>;
  // segments?: Record<string, number>;     // optional later
};

export function buildTitleToIdMap(hierarchy: Nav[]): TitleToIdMap {
  const map: TitleToIdMap = {
    categories: {},
    subCategories: {},
  };

  hierarchy.forEach((cat) => {
    // Normalize title for matching (you can make this stricter)
    const catTitleNorm = cat.title.trim().toLowerCase();
    map.categories[catTitleNorm] = cat.id;

    cat.sub_categories?.forEach((sub) => {
      const subTitleNorm = sub.title.trim().toLowerCase();
      map.subCategories[subTitleNorm] = sub.id;
    });
  });

  return map;
}