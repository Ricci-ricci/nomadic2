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
      " \n\n Manual Transmission\n Unique and classic design\nPerfect for a nostalgic driving experience \n (rate my vary depending on destination)",
    image: "/citroen.jpg",
    price: "$65/day ",
  },
  {
    title: "Hyundai Terracan-Manual 4WD\n",
    description:
      "Spacious 5-seater SUV \n Air-conditioned confort \n Strong and reliable perfect for adventure off the heaten track\n (price may vary depending on the itinerary) \n",
    image: "/hiuyndai.jpg",
    price: "$70/day",
  },
  {
    title: "Kia Sorento 4WD-Manual",
    description:
      "Spacious 5-seater (official registration) \n air-conditioned confort for every journey \nStrong,reliable,and ready for adventure \n (price may vary depending on the itinerary)",
    image: "/kia.jpg",
    price: "$70/day",
  },
  {
    title: "Nissan Patrol Y61(4WD)",
    description:
      " \n\n Manual Transmission\n Robuste and reliable SUV\n\nSpacious,powerful and comfortable \n\nPerfect for city,peripheral,and off-read adventures (price may vary depending on the itinerary)",
    image: "/nissan.jpg",
    price: "$80/day",
  },
  {
    title: "Peugeot 408 BREAM-Manual \n",
    description:
      " \n\n Spacious 5-seater station wagon\n air-conditioned comfort for families and long journeys \n reliable and pratical for all itineraries \n (price may vary depending on the itinerary)",
    image: "/peugeot.jpg",
    price: "$44/day",
  },
  {
    title: "Toyota Prado Gx(2008)",
    description:
      " \n\n Transmission manual \n Drive:4WD\n Air conditioning-full confort  \n\n Spacious ,powerful and reliable SUV-ideal for all road conditions \n (price may vary depending on destination)",
    image: "/pradox.jpg",
    price: "$80/day",
  },
  {
    title: "Toyota Gx 105(4WD)",
    description:
      " \n\n Robust and powerful\n\n air-conditioned comfort\n\n Spacious and reliable \n(price may vary depending on destinaion)",
    image: "/toyota.jpg",
    price: "$85/day",
  },
  {
    title: "Volkswagen Beetle-the timeless classic ",
    description:
      " \n\n  Manual transmission\n\n Vintage for city drives and peripheral city tours\n\n reliable and pratical for all itineraries \n\n ",
    image: "/volskwagen.jpg",
    price: "$65/day(price may vary depending on destination)",
  },
];
const GuideRentalData = [
  {
    title: "Local Guide",
    nom: "Floriel ",
    description: "Explore Madagascar with a knowledgeable local guide.",
    image: "/floriel.jpg",
  },
  {
    title: "Local Guide",
    nom: "Patrice",
    description: "Explore Madagascar with a knowledgeable local guide.",
    image: "/patrice.jpg",
  },
  {
    title: "Local Guide",
    nom: "Nambinina",
    description: "Explore Madagascar with a knowledgeable local guide.",
    image: "/nambinina.jpg",
  },
  {
    title: "Local Guide",
    nom: "Justin",
    description: "Explore Madagascar with a knowledgeable local guide.",
    image: "/justin.jpg",
  },
  {
    title: "Local Guide",
    nom: "Marc",
    description: "Explore Madagascar with a knowledgeable local guide.",
    image: "/marc.jpg",
  },
  {
    title: "Local Guide",
    nom: "Riri",
    description: "Explore Madagascar with a knowledgeable local guide.",
    image: "/riri.jpg",
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
