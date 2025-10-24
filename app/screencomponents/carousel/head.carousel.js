"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import Header from "../header/header";
import { sanityDestination } from "@/lib/data/destination";
import Link from "next/link";
import { urlFor } from "@/lib/sanityClient";

export default function HeadCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [destinations, setDestinations] = useState([]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 8000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);
  useEffect(() => {
    async function fetchDestinations() {
      try {
        const data = await sanityDestination();
        console.log(data);
        setDestinations(data); // save data in state
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    }
    fetchDestinations();
  }, []);

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
    <div className="relative max-w-[1920px] w-full h-[80vh] md:h-screen flex  overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0 -z-10" ref={emblaRef}>
        <div className="flex h-full">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${urlFor(item.image).width(600).height(400).url()})`,
              }}
            >
              <div className="absolute inset-0 h-full bg-black/30"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content above carousel */}
      <div className="relative z-10 flex flex-col justify-end items-start h-full p-4 md:p-8 text-white">
        {/* Title & Description */}
        <div className="flex flex-col gap-4 md:gap-6 max-w-xl md:max-w-4xl px-2 md:px-24">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold drop-shadow-lg transition-opacity duration-700">
            {destinations[selectedIndex]?.title}
          </h1>
          <p className="text-sm sm:text-base md:text-xl line-clamp-6 font-light drop-shadow-lg max-w-6xl whitespace-pre-line">
            {destinations[selectedIndex]?.description.replace(/\\n/g, "\n")}
          </p>
          <div className="flex flex-col gap-4">
            <Link
              href={`/destinations/${destinations[selectedIndex]?.slug.current}`}
            >
              <Button className="bg-yellow-400 px-6 sm:px-8 py-2 text-sm sm:text-base text-white font-bold cursor-pointer w-fit">
                See more
              </Button>
            </Link>
            <Link href={`/customize`}>
              <Button className="bg-yellow-400 px-6 sm:px-8 py-2 text-sm sm:text-base text-white font-bold cursor-pointer w-fit">
                Customize Trip
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute bottom-4 md:bottom-8 right-12 md:right-12 translate-x-1/2 md:translate-x-0 flex gap-3 md:gap-4">
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
