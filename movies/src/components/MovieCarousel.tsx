import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCard } from "./MovieCard";

type MovieCarouselProps = {
  title: string;
  items: { id: string; image: string; label: string; year:string; rating:string, genres:string }[];
};

export function MovieCarousel({ title, items }: MovieCarouselProps) {
  return (
    <section className="space-y-2 w-full">
      <h2 className="text-xl font-semibold">{title}</h2>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="p-1">
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-[45%] xs:basis-[45%] sm:basis-[30%] md:basis-[30%] lg:basis-[17%] xl:basis-[16%]"
            >
              <MovieCard
                image={item.image}
                year={item.year}
                title={item.label}
                rating={item.rating}
                genres={item.genres}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex " />
        <CarouselNext className="hidden lg:flex " />
      </Carousel>
    </section>
  );
}
