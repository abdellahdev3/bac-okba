import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6">
      <div className="relative">
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="ابحث عن موضوع، درس، أو ملخص..."
          className="w-full h-14 pr-12 pl-6 text-lg bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl focus:shadow-xl transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
          style={{ textAlign: "right" }}
        />
      </div>
    </div>
  );
};
