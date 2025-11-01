"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Container from "../bodycomponents/container";
import Section from "../bodycomponents/section";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanityClient";

export default function DestinationChoice({
  data = [],
  selected = [],
  onChange,
}) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Carousel logic
  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  // Toggle selection
  const toggleSelect = (title) => {
    const newSelection = selected.includes(title)
      ? selected.filter((item) => item !== title)
      : [...selected, title];
    onChange?.(newSelection);
  };

  return (
    <Section>
      <Container className="flex flex-col items-center justify-center gap-10 py-16 w-full">
        <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center max-w-4xl leading-snug">
          Pick all the destinations you dream of visiting! <br />
          <span className="text-yellow-400">Here in Madagascar</span>
        </span>

        {data.length > 0 && (
          <Carousel
            opts={{ loop: true, align: "start" }}
            setApi={setApi}
            className="w-full flex items-center justify-center flex-col"
          >
            <CarouselContent className="flex w-screen gap-6 p-4">
              {data.map((item, index) => {
                const isSelected = selected.includes(item.title);
                const imageUrl = item.image
                  ? urlFor(item.image).width(1000).height(600).url()
                  : null;

                return (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-1/5 flex justify-center"
                  >
                    <div
                      onClick={() => toggleSelect(item.title)}
                      className={`relative flex flex-col w-full h-[40vh] cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl ${
                        isSelected
                          ? "ring-4 ring-yellow-400 scale-105"
                          : "hover:scale-105"
                      }`}
                    >
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                          priority={index < 2}
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-600">
                          No image
                        </div>
                      )}

                      {isSelected && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <CheckCircle2
                            size={64}
                            className="text-white drop-shadow-lg"
                          />
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-4 text-center text-white font-semibold text-xl">
                        {item.title}
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Mobile Arrows */}
            <CarouselPrevious className="md:hidden left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />
            <CarouselNext className="md:hidden right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />

            {/* Desktop Controls */}
            <div className="gap-3 mt-6 w-full justify-end items-center hidden md:flex">
              <Button
                className="rounded-full"
                onClick={() => api && api.scrollPrev()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </Button>

              <Button
                className="rounded-full"
                onClick={() => api && api.scrollNext()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </Button>
            </div>
          </Carousel>
        )}
      </Container>
    </Section>
  );
}
