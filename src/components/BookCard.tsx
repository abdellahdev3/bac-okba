import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  title: string;
  type: string;
  stream: string;
  coverImage?: string;
}

export const BookCard = ({
  title,
  type,
  stream,
  coverImage,
}: BookCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white rounded-2xl overflow-hidden min-w-[280px] max-w-[280px]">
      <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-sm leading-tight">
                {title}
              </h3>
            </div>
          </div>
        )}

        <div className="absolute top-3 right-3">
          <Badge
            variant="secondary"
            className="bg-white/90 text-xs font-medium"
          >
            {stream}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-gray-800 text-sm mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-gray-600 mb-3">{type}</p>

        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            PDF
          </Badge>
          <span className="text-xs text-gray-500">مجاني</span>
        </div>
      </CardContent>
    </Card>
  );
};
