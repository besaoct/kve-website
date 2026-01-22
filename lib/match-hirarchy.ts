// utils/matchHierarchy.ts  (or inside the component file)

type HierarchyItem = {
  id: number;
  title: string;
  slug: string;
  // ... other fields
};

function findBestMatch(
  searchTitle: string,
  items: HierarchyItem[]
): HierarchyItem | undefined {
  const normalize = (t: string) =>
    t
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[&\/\\]+/g, " "); // handle & , / etc

  const normSearch = normalize(searchTitle);

  return items.find((item) => {
    const normItem = normalize(item.title);
    return (
      normItem === normSearch ||
      normItem.includes(normSearch) ||
      normSearch.includes(normItem)
    );
  });
}