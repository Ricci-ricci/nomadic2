"use client";
import { Destination } from "@/lib/data/destination";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function DestinationChoice({ selected = [], onChange }) {
  const destinations = Destination();

  const toggleSelect = (title) => {
    const newSelection = selected.includes(title)
      ? selected.filter((item) => item !== title)
      : [...selected, title];
    onChange?.(newSelection);
  };

  return (
    <div className="px-6 py-10 flex flex-col items-center justify-center gap-8 w-full">
      {/* Title */}
      <span className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center max-w-3xl leading-snug">
        Pick all the destinations you dream of visiting! <br />
        <span className="text-yellow-400">Here in Madagascar </span>
      </span>

      {/* Carousel container */}
      <div className="w-full max-w-7xl md:p-4">
        <Carousel className="w-full">
          <CarouselContent className="flex items-center justify-center md:p-4 gap-4">
            {destinations.map((item) => {
              const isSelected = selected.includes(item.title);
              return (
                <CarouselItem
                  key={item.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center"
                >
                  <div
                    onClick={() => toggleSelect(item.title)}
                    className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 w-[90%] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[400px] ${
                      isSelected
                        ? "ring-4 ring-yellow-400 scale-105"
                        : "hover:scale-105"
                    }`}
                  >
                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    {/* Overlay when selected */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <CheckCircle2
                          size={56}
                          className="text-white drop-shadow-lg"
                        />
                      </div>
                    )}

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/40 py-3 text-center text-white font-semibold text-lg">
                      {item.title}
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious className="" />
          <CarouselNext className="" />
        </Carousel>
      </div>
    </div>
  );
}
