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
    <section className="space-y-4 w-full">
      <h2 className="text-xl font-semibold">{title}</h2>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="p-1">
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className=" basis-[30%] sm:basis-[50%] md:basis-[33%] lg:basis-[20%] xl:basis-[16%]"
            >
              <Card className="p-0">
                <CardContent className="flex flex-col aspect-[2/3]  justify-start p-0">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-60 sm:h-32 md:h-36 object-cover rounded-md"
                  />
                  <span className="text-[12px] sm:text-xs font-medium text-center">
                    {item.label}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-center">
                    {item.label}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
