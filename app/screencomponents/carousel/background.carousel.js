"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 8000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setFade(true);
      setTimeout(() => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setFade(false);
      }, 300);
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-[1920px] h-screen overflow-hidden">
      <Header menuColor="text-white" button="text-white" />

      {/* 🌅 Background carousel */}
      <div className="absolute inset-0 -z-10" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((img, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 🌍 Foreground content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center md:justify-between items-center h-full px-6 md:px-20 text-white">
        {/* 🔹 Left changing text */}
        <div className="flex-1 flex justify-center md:justify-start items-center md:items-start h-1/2 md:h-auto text-center md:text-left mb-6 md:mb-0">
          <p
            className={`text-lg md:text-3xl italic font-light transition-opacity duration-700 max-w-[90%] md:max-w-none ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {texts[selectedIndex]}
          </p>
        </div>

        {/* 🔹 Right title + slogan */}
        <div className="flex-1 text-center md:text-right">
          <motion.h1
            key={selectedIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-widest drop-shadow-lg mb-4"
          >
            Nomadic Zebu <br /> Travel & Tour MDG
          </motion.h1>

          <motion.span
            key={`slogan-${selectedIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-light drop-shadow-md"
          >
            Travel beyond your imagination with us
          </motion.span>
        </div>
      </div>
    </div>
  );
}
