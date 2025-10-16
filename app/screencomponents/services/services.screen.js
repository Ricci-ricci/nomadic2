"use client";
import Container from "../bodycomponents/container";
import ServicesCarousel from "../carousel/services.carousel";
import { useState } from "react";
import GuidePresentation from "../guide/guide";

const CarRentalData = [
  {
    title: "citroen 2CV-The iconic Vintage Ride",
    description:
      " \n\n Manual Transmission\n Unique and classic design\nPerfect for a nostalgic driving experience \n (rate my vary depending on destination)",
    image: "/carrental/citroen.jpg",
    price: "$65/day ",
  },
  {
    title: "Hyundai Terracan-Manual 4WD\n",
    description:
      "Spacious 5-seater SUV \n Air-conditioned confort \n Strong and reliable perfect for adventure off the heaten track\n (price may vary depending on the itinerary) \n",
    image: "/carrental/hiuyndai.jpg",
    price: "$70/day",
  },
  {
    title: "Kia Sorento 4WD-Manual",
    description:
      "Spacious 5-seater (official registration) \n air-conditioned confort for every journey \nStrong,reliable,and ready for adventure \n (price may vary depending on the itinerary)",
    image: "/carrental/kia.jpg",
    price: "$70/day",
  },
  {
    title: "Nissan Patrol Y61(4WD)",
    description:
      " \n\n Manual Transmission\n Robuste and reliable SUV\n\nSpacious,powerful and comfortable \n\nPerfect for city,peripheral,and off-read adventures (price may vary depending on the itinerary)",
    image: "/carrental/nissan.jpg",
    price: "$80/day",
  },
  {
    title: "Peugeot 408 BREAM-Manual \n",
    description:
      " \n\n Spacious 5-seater station wagon\n air-conditioned comfort for families and long journeys \n reliable and pratical for all itineraries \n (price may vary depending on the itinerary)",
    image: "/carrental/peugeot.jpg",
    price: "$44/day",
  },
  {
    title: "Toyota Prado Gx(2008)",
    description:
      " \n\n Transmission manual \n Drive:4WD\n Air conditioning-full confort  \n\n Spacious ,powerful and reliable SUV-ideal for all road conditions \n (price may vary depending on destination)",
    image: "/carrental/pradox.jpg",
    price: "$80/day",
  },
  {
    title: "Toyota Gx 105(4WD)",
    description:
      " \n\n Robust and powerful\n\n air-conditioned comfort\n\n Spacious and reliable \n(price may vary depending on destination)",
    image: "/carrental/toyota.jpg",
    price: "$85/day",
  },
  {
    title: "Volkswagen Beetle-the timeless classic ",
    description:
      " \n\n  Manual transmission\n\n Vintage for city drives and peripheral city tours\n\n reliable and pratical for all itineraries \n\n ",
    image: "/carrental/volskwagen.jpg",
    price: "$65/day(price may vary depending on destination)",
  },
];

export default function ServicesScreen() {
  const [step, setStep] = useState(false);

  const handleStep = () => {
    setStep(!step);
  };

  return (
    <Container>
      <div className="flex flex-col gap-12 py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-black">
          Our Services
        </h1>
        <ServicesCarousel
          handle={handleStep}
          contents={CarRentalData}
          step={step}
        ></ServicesCarousel>
        <GuidePresentation></GuidePresentation>
      </div>
    </Container>
  );
}
