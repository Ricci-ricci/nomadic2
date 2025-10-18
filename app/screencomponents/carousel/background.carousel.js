"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Header from "../header/header";
export default function BackgroundCarousel({ images }) {
  const slides = images || [
    "/background/b1.png",
    "/background/b2.png",
    "/background/b3.png",
    "/background/b4.png",
    "/background/b5.png",
    "/background/b6.png",
    "/background/b7.png",
  ];

  const texts = [
    "Unforgettable sunset in the heart of Baobab",
    "Relaxing moment",
    "The Malagasy smiling people",
    "Unique fauna and flora",
    "Rodéo Malagasy",
    "The emblem of Madagascar in its real state",
    "Variety of spectacular landscapes",
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Gérer l’autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 8000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // Mettre à jour le texte quand le slide change
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect(); // initial
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-[1920px] h-screen overflow-hidden">
      {/* Carousel en background */}
      <div className="absolute inset-0 -z-10" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((img, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 h-full bg-black/30"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Contenu au-dessus */}
      <div className="relative z-10 flex items-center justify-start h-full flex-col p-4 text-white">
        <div className="flex w-full h-full items-center md:items-end justify-center md:justify-start p-4">
          <div className="w-[80vh] py-8">
            <h1 className="text-4xl text-center md:text-6xl font-bold drop-shadow-lg transition-opacity duration-700">
              {texts[selectedIndex]}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
