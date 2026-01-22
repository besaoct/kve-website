// e.g. lib/category-mapper.ts
import type { Nav } from "@/data/api/nav/types";

type StaticCategory = {
  name: string;
  image: string;
  subcategories: { name: string; image: string }[];
};

export function mapStaticToRealHierarchy(
  staticData: StaticCategory[],
  realHierarchy: Nav[]
) {
  const titleToId = new Map<string, number>();

  // Flatten real hierarchy into title → id map (case insensitive)
  realHierarchy.forEach((cat) => {
    const cleanTitle = cat.title.trim().toLowerCase();
    titleToId.set(cleanTitle, cat.id);

    cat.sub_categories?.forEach((sub) => {
      const cleanSub = sub.title.trim().toLowerCase();
      titleToId.set(cleanSub, sub.id);

      sub.segments?.forEach((seg) => {
        const cleanSeg = seg.title.trim().toLowerCase();
        titleToId.set(cleanSeg, seg.id);

        seg.sub_segments?.forEach((subSeg) => {
          const cleanSubSeg = subSeg.title.trim().toLowerCase();
          titleToId.set(cleanSubSeg, subSeg.id);
        });
      });
    });
  });

  // Now enrich static structure with real IDs
  return staticData.map((staticCat) => {
    const cleanStaticName = staticCat.name.trim().toLowerCase();
    const realCatId = titleToId.get(cleanStaticName);

    return {
      ...staticCat,
      realId: realCatId, // may be undefined
      subcategories: staticCat.subcategories.map((staticSub) => {
        const cleanSubName = staticSub.name.trim().toLowerCase();
        const realSubId = titleToId.get(cleanSubName);
        return {
          ...staticSub,
          realId: realSubId,
        };
      }),
    };
  });
}