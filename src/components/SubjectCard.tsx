import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Clock } from "lucide-react";

interface SubjectCardProps {
  title: string;
  lastUpdate: string;
  items: string[];
}

export const SubjectCard = ({ title, lastUpdate, items }: SubjectCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white rounded-2xl overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-bold text-gray-800 mb-2">
          {title}
        </CardTitle>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 ml-1" />
          <span>آخر تحديث: {lastUpdate}</span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3 mb-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-sm leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 rounded-xl"
        >
          <span>عرض المزيد</span>
          <ChevronLeft className="h-4 w-4 mr-2" />
        </Button>
      </CardContent>
    </Card>
  );
};
