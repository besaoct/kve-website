"use client";

interface Tab {
  key: string;
  label: string;
}

interface ProductTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tabKey: string) => void;
}

export default function ProductTabs({ tabs, activeTab, onTabClick }: ProductTabsProps) {
  return (
    <div className="sticky top-0 lg:top-14 bg-white z-40 mt-10 border-b">
      <div className="flex flex-nowrap whitespace-nowrap overflow-x-auto scrollbar-hide justify-start gap-8 ">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabClick(tab.key)}
            className={`px-0 py-3 text-base focus:outline-0 font-medium border-b-2 transition capitalize ${
              activeTab === tab.key
                ? "border-red-600 text-red-600"
                : "border-transparent text-neutral-800 hover:text-red-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
