import { Button } from "@/components/ui/button";
import { useState } from "react";

export const FilterTabs = () => {
  const [activeYear, setActiveYear] = useState("2025");
  const years = [
    "بكالوريا 2020",
    "بكالوريا 2021",
    "بكالوريا 2022",
    "بكالوريا 2023",
    "بكالوريا 2024",
    "بكالوريا 2025",
  ];

  return (
    <div className="w-full bg-gray-50 border-y border-gray-200 py-4 sticky top-[88px] z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide gap-3 pb-2">
          {years.map((year, index) => {
            const yearValue = year.split(" ")[1];
            const isActive = activeYear === yearValue;

            return (
              <Button
                key={index}
                variant={isActive ? "default" : "outline"}
                onClick={() => setActiveYear(yearValue)}
                className={`
                  flex-shrink-0 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200
                  ${
                    isActive
                      ? "bg-primary text-white shadow-md hover:bg-primary/90"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-primary/50"
                  }
                `}
              >
                {year}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
