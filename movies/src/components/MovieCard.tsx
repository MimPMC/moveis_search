import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { FaStar } from "react-icons/fa";

type MovieCardProps = {
  image: string;
  label: string;
  title: string;
  rating?: number;
};

export function MovieCard({
  image,
  label,
  title,
  rating = 4.5,
}: MovieCardProps) {
  return (
    <Card className="p-0 shadow-none border-none rounded-none w-full h-full">
      <CardContent className="flex flex-col justify-start p-0 w-full h-full">
        <div className="w-full aspect-square relative">
          <img src={image} alt={label} className="w-full h-full object-cover" />
          <Badge className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 shadow-sm flex items-center gap-1">
            <FaStar className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            {rating}
          </Badge>
        </div>
        <div className="movie-text px-2 py-1 flex flex-col gap-1">
          <h3 className="text-sm md:text-md font-semibold">{title}</h3>
          <span className="text-xs md:text-sm font-medium text-muted-foreground block">
            {label} - {label}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
