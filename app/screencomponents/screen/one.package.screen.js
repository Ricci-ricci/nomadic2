"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import Image from "next/image";
import Link from "next/link";
import Map from "../map/map";
import MapComponent from "../map/mapcomponent";
import BookDialog from "../dialog/bookDialog";

export default function OnePackageScreen({ Package }) {
  return (
    <div className="relative w-full flex flex-col gap-12 p-6 md:p-24 max-w-[1920px]">
      {/* Header Image */}
      <div className="relative w-full h-60 md:h-[60vh] rounded-xl overflow-hidden">
        <Image
          src={Package.image}
          alt={Package.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Package Info Card */}
      <div className="bg-white w-full md:w-[110vh] rounded-xl shadow-2xl p-6 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">
        <span className="font-extrabold text-2xl md:text-3xl">
          {Package.title}
        </span>
        <div className="flex flex-row gap-6 md:gap-12 flex-wrap">
          {/* Duration */}
          <div className="flex gap-4 items-center">
            <div className="flex items-center justify-center bg-yellow-400 w-10 h-10 md:w-12 md:h-12 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white w-5 h-5 md:w-6 md:h-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <span className="font-bold text-lg md:text-xl">
              {Package.duration}
            </span>
          </div>

          {/* Difficulty */}
          <div className="flex gap-4 items-center">
            <div className="flex items-center justify-center bg-yellow-400 w-10 h-10 md:w-12 md:h-12 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white w-5 h-5 md:w-6 md:h-6"
              >
                <path d="M3 3l6 18h6l6-18" />
                <path d="M12 6v3M12 11v2M12 15v2" />
              </svg>
            </div>
            <span className="font-bold uppercase text-lg md:text-xl">
              {Package.difficulty}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-12 w-full">
        {/* Left Content */}
        <div className="flex flex-col gap-8 md:gap-4 md:w-2/3">
          <span className="text-base md:text-lg whitespace-pre-line">
            {Package.description}
          </span>

          {/* Itinerary */}
          <span className="text-2xl md:text-4xl font-bold">Itinerary</span>
          <span className="text-base md:text-lg">
            We have carefully planned out each day to give you the best possible
            experience.
          </span>

          {Package.itinerary.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-lg md:text-2xl text-yellow-400 font-bold">
                  {item.day}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg whitespace-pre-line">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}

          {/* Gallery */}
          <span className="text-2xl md:text-4xl font-bold">Gallery</span>
          <div className="flex flex-wrap gap-4 md:gap-12">
            {Package.gallery.map((item, index) => (
              <Dialog key={index}>
                <VisuallyHidden>
                  <DialogTitle>{item.title}</DialogTitle>
                </VisuallyHidden>

                <DialogTrigger>
                  <Image
                    src={item.image}
                    alt=""
                    width={300}
                    height={200}
                    className="rounded-lg w-[250] h-[200] cursor-pointer"
                  />
                  <p className="mt-2 text-center capitalize text-gray-700 font-medium">
                    {item.title}
                  </p>
                </DialogTrigger>
                <DialogContent>
                  <Image
                    src={item.image}
                    alt="gallery"
                    width={1400}
                    height={800}
                    className=" h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <div className="flex flex-col gap-4 border border-black rounded-lg p-4 bg-white shadow-lg">
            <MapComponent
              className="z-0"
              start={Package.start}
              end={Package.end}
            />
          </div>
          <div className="flex flex-col gap-4 border border-black rounded-lg p-4 bg-white shadow-lg">
            <span className="font-bold">Price</span>
            <span className="uppercase font-bold text-xl md:text-xl">from</span>
            <span className="font-extrabold text-xl md:text-4xl">
              {Package.price}
            </span>
            <span>Included: </span>
            <span className="whitespace-pre-line">{Package.included}</span>
            <span>Not Included: </span>
            <span className="whitespace-pre-line">{Package.nonIncluded}</span>

            <Dialog>
              <DialogTrigger className="bg-yellow-400 cursor-pointer text-white font-bold py-2 px-4 rounded">
                Book
              </DialogTrigger>
              <DialogContent className="h-[400px] md:h-[600px] ">
                <DialogHeader>
                  <DialogTitle className="font-bold">OFFRE</DialogTitle>

                  <BookDialog Package={Package}></BookDialog>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Link href="/customize">
              <Button className="bg-yellow-400 text-white font-bold py-2 px-4 rounded w-full">
                Customise
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
