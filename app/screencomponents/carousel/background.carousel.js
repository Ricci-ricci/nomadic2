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

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 8000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // Handle slide change and fade text
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

      {/* Background carousel */}
      <div className="absolute inset-0 -z-10" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((img, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
        {/* Changing subtitle */}
        <p
          className={`text-lg md:text-2xl italic mb-6 transition-opacity duration-700 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {texts[selectedIndex]}
        </p>

        {/* Animated title */}
        <motion.h1
          key={selectedIndex} // re-triggers animation with each change
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold uppercase tracking-widest drop-shadow-lg mb-2"
        >
          Nomadic Zebu Travel & MDG Tour
        </motion.h1>

        {/* Animated slogan */}
        <motion.span
          key={`slogan-${selectedIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-3xl font-light drop-shadow-md"
        >
          Travel beyond your imagination with us
        </motion.span>
      </div>
    </div>
  );
}
