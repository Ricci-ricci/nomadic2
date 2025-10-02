"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import Header from "../header/header";
import { Destination } from "@/lib/data/destination";
import Link from "next/link";

export default function HeadCarousel() {
  const data = Destination();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 8000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // Update index on slide change
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect(); // initial
  }, [emblaApi]);

  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0 -z-10" ref={emblaRef}>
        <div className="flex h-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.image})`,
              }}
            >
              <div className="absolute inset-0 h-full bg-black/30"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content above carousel */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 md:p-8 text-white">
        <Header
          menuColor="text-white"
          logo="text-white"
          button="text-white border-white"
        />

        {/* Title & Description */}
        <div className="flex flex-col gap-4 md:gap-6 max-w-xl md:max-w-4xl px-2 md:px-24">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold drop-shadow-lg transition-opacity duration-700">
            {data[selectedIndex].title}
          </h1>
          <p className="text-sm sm:text-base md:text-xl line-clamp-6 font-light drop-shadow-lg max-w-6xl">
            {data[selectedIndex].description}
          </p>
          <Link href={`/destinations/${data[selectedIndex].slug}`}>
            <Button className="bg-yellow-400 px-6 sm:px-8 py-2 text-sm sm:text-base text-white font-bold cursor-pointer w-fit">
              See more
            </Button>
          </Link>
        </div>

        {/* Navigation buttons */}
        <div className="absolute bottom-4 md:bottom-8 right-1/2 md:right-12 translate-x-1/2 md:translate-x-0 flex gap-3 md:gap-4">
          <Button
            className="flex items-center justify-center rounded-full w-8 h-8 md:w-10 md:h-10"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
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
            className="flex items-center justify-center rounded-full w-8 h-8 md:w-10 md:h-10"
            onClick={() => emblaApi && emblaApi.scrollNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
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
      </div>
    </div>
  );
}
