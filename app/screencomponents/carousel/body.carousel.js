"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Section from "../bodycomponents/section";
import Container from "../bodycomponents/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function CarouselScreen({ contents }) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Section>
      <Container className="flex flex-col gap-4 w-screen">
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          className="w-full flex items-center justify-center flex-col"
        >
          <CarouselContent className="flex w-full p-2">
            {contents?.map((content, index) => (
              <CarouselItem
                key={index}
                // ✅ Mobile shows 1 item, Desktop shows 3
                className="basis-full md:basis-1/3 p-2 flex items-start justify-center h-[40vh] md:h-[50vh]"
              >
                <Link
                  href={`/gotoDestination/${content.slug}`}
                  className="relative flex flex-col gap-4 w-full h-full"
                >
                  <Image
                    className="rounded-lg cursor-pointer object-cover w-full h-full"
                    src={content.image}
                    alt={content.title}
                    width={800}
                    height={800}
                  />
                  <div className="absolute inset-0 flex items-end justify-start p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent rounded-lg">
                    <h1 className="font-bold text-white text-lg md:text-xl drop-shadow-lg">
                      {content.title}
                    </h1>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Mobile Arrows (shown only on small screens) */}
          <CarouselPrevious className="md:hidden left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />
          <CarouselNext className="md:hidden right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full" />

          {/* Desktop Arrows */}
          <div className="gap-2 mt-4 w-full justify-end items-center hidden md:flex">
            <Button
              className="flex items-center justify-center rounded-full"
              onClick={() => api && api.scrollPrev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
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
              className="flex items-center justify-center rounded-full "
              onClick={() => api && api.scrollNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
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
      </Container>
    </Section>
  );
}
