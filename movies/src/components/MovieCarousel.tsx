import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type MovieCarouselProps = {
  title: string;
  items: { id: string; image: string; label: string }[];
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
              <Card className="p-0 shadow-none border-none rounded-none">
                <CardContent className="flex flex-col justify-start p-0">
                  <div className="w-full aspect-square">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="movie-text px-2 py-1 flex flex-col gap-1">
                    <h3 className="text-sm md:text-md font-semibold">
                      People stopped telling jokes
                    </h3>
                    <span className="text-xs md:text-sm font-medium text-muted-foreground block">
                      {item.label} - {item.label}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex " />
        <CarouselNext className="hidden lg:flex " />
      </Carousel>
    </section>
  );
}
