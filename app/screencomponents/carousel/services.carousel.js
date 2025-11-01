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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check } from "lucide-react"; // ✅ Replaced Eye with Check
import { useState, useEffect } from "react";
import Email from "../email/email";
import { urlFor } from "@/lib/sanityClient";

export default function ServicesCarousel({ contents }) {
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

  const handleSendEmail = async (email, title, name, firstName) => {
    try {
      const res = await fetch("/api/car", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, contentTitle: title, name, firstName }),
      });

      const data = await res.json();
      if (data.success) {
        console.log("Email envoyé avec succès ✅");
      } else {
        console.error("Erreur lors de l'envoi:", data.error);
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
    }
  };

  return (
    <Section>
      <Container className="flex flex-col gap-8 w-screen items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-yellow-400 drop-shadow-md">
          Car Rental
        </h2>

        <div className="w-full max-w-7xl md:p-4">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="flex items-center justify-start gap-6 px-4">
              {contents?.map((content, index) => (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 flex justify-center"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 w-full h-[400px] hover:scale-105 group">
                    <Image
                      src={content.image}
                      alt={content.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-black/40">
                      <h1 className="text-white font-semibold text-sm md:text-xl uppercase tracking-wide drop-shadow-lg">
                        {content.title}
                      </h1>

                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50">
                            <Check className="text-white" size={20} />{" "}
                            {/* ✅ Changed here */}
                          </button>
                        </DialogTrigger>

                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-yellow-500">
                              {content.title}
                            </DialogTitle>

                            <Email
                              handleSend={async (email, name, firstName) =>
                                handleSendEmail(
                                  email,
                                  content.title,
                                  name,
                                  firstName,
                                )
                              }
                            />
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full hover:bg-black/70 transition md:hidden" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full hover:bg-black/70 transition md:hidden" />

            <div className="gap-3 mt-6 w-full justify-end items-center hidden md:flex">
              <Button
                variant="ghost"
                className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full p-2"
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
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </Button>

              <Button
                variant="ghost"
                className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full p-2"
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
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </Button>
            </div>
          </Carousel>
        </div>
      </Container>
    </Section>
  );
}
