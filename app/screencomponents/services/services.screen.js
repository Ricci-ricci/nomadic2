"use client";
import Link from "next/link";
import Container from "../bodycomponents/container";
import { Button } from "@/components/ui/button";
import CarouselScreen from "../carousel/body.carousel";
import ServicesCarousel from "../carousel/services.carousel";
import { useState } from "react";
import Email from "../email/email";

const CarRentalData = [
  {
    title: "citroen 2CV-The iconic Vintage Ride",
    description:
      " \n\n Manual Transmission\n\n Unique and classic design\n\nPerfect for a nostalgic driving experience \n\n ",
    image: "/PEUGEOT406.jpg",
    price: "$65/day (rate my vary depending on destination)",
  },
  {
    title: "Hyundai Terracan-Manual 4WD",
    description:
      "Spacious 5-seater SUV \n\n Air-conditioned confort \n\n Strong and reliable perfect for adventure off the heaten track ",
    image: "/PEUGEOT406.jpg",
    price: "$70/day (price may vary depending on the itinerary)",
  },
  {
    title: "Kia Sorento 4WD-Manual",
    description:
      "Spacious 5-seater (official registration) \n\n air-conditioned confort for every journey \n\nStrong,reliable,and ready for adventure ",
    image: "/PEUGEOT406.jpg",
    price: "$70/day (price may vary depending on the itinerary)",
  },
  {
    title: "Nissan Patrol Y61(4WD)",
    description:
      " \n\n Manual Transmission\n\n Robuste and reliable SUV\n\nSpacious,powerful and comfortable \n\nPerfect for city,peripheral,and off-read adventures ",
    image: "/PEUGEOT406.jpg",
    price: "$80/day",
  },
  {
    title: "Peugeot 408 BREAM-Manual",
    description:
      " \n\n Spacious 5-seater station wagon\n\n air-conditioned comfort for families and long journeys\n\n reliable and pratical for all itineraries \n\n ",
    image: "/PEUGEOT406.jpg",
    price: "$44/day(price may vary depending on the itinerary)",
  },
  {
    title: "Toyota Prado Gx(2008)",
    description:
      " \n\n Transmission manual \n\n Drive:4WD\n\n Air conditioning-full confort  \n\n Spacious ,powerful and reliable SUV-ideal for all road conditions ",
    image: "/PEUGEOT406.jpg",
    price: "$80/day(price may vary depending on destination)",
  },
  {
    title: "Toyota Gx 105(4WD)",
    description:
      " \n\n Robust and powerful\n\n air-conditioned comfort\n\n Spacious and reliable ",
    image: "/PEUGEOT406.jpg",
    price: "$85/day(price may vary depending on destinaion)",
  },
  {
    title: "Volkswagen Beetle-the timeless classic ",
    description:
      " \n\n  Manual transmission\n\n Vintage for city drives and peripheral city tours\n\n reliable and pratical for all itineraries \n\n ",
    image: "/PEUGEOT406.jpg",
    price: "$65/day(price may vary depending on destination)",
  },
];

const servicesData = [
  {
    title: "Car Rental",
    to: "/contact",
    description:
      "Rent a car with ease and comfort. Choose from a variety of vehicles for your adventure.",
    image: "/PEUGEOT406.jpg",
  },
  {
    title: "Guided Tours",
    to: "/contact",
    description:
      "Explore the best destinations with our expert guides and curated itineraries.",
    image: "/images/western/tour2/background/second2.jpg",
  },
  {
    title: "Hotel Booking",
    to: "/contact",
    description:
      "Find and book the best hotels at competitive prices for your stay.",
    image: "/images/TheBestIsland/galery/image12.webp",
  },
];

export default function ServicesScreen() {
  const [step, setStep] = useState(false);

  const handleStep = () => {
    setStep(!step);
  };

  return (
    <Container>
      <div className="flex flex-col gap-12 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-black">
          Our Services
        </h1>
        <ServicesCarousel
          handle={handleStep}
          contents={CarRentalData}
          step={step}
        ></ServicesCarousel>
      </div>
    </Container>
  );
}
