"use client";
import Container from "../bodycomponents/container";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    title: "Car Rental",
    description:
      "Rent a car with ease and comfort. Choose from a variety of vehicles for your adventure.",
    image: "/slide1.jpg",
  },
  {
    title: "Guided Tours",
    description:
      "Explore the best destinations with our expert guides and curated itineraries.",
    image: "/slide1.jpg",
  },
  {
    title: "Hotel Booking",
    description:
      "Find and book the best hotels at competitive prices for your stay.",
    image: "/slide1.jpg",
  },
];

export default function ServicesScreen() {
  return (
    <Container>
      <div className="flex flex-col gap-12 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-black">
          Our Services
        </h1>

        {servicesData.map((service, index) => (
          <div
            key={index}
            className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden flex items-center p-6 md:p-12"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Text overlay */}
            <div className="flex flex-col gap-4 text-white md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold">
                {service.title}
              </h2>
              <p className="text-base md:text-lg">{service.description}</p>
              <Button className="bg-yellow-400 text-black w-fit px-6 py-2 mt-4">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
