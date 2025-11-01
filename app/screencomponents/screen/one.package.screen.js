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
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import Image from "next/image";
import Link from "next/link";
import MapComponent from "../map/mapcomponent";
import BookDialog from "../dialog/bookDialog";
import { urlFor } from "@/lib/sanityClient";
import { Clock, Mountain, MapPin } from "lucide-react";

export default function OnePackageScreen({ Package }) {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 py-8 md:py-16">
      <div className="relative w-full h-64 md:h-[70vh] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={urlFor(Package.image).width(1920).height(1080).quality(90).url()}
          alt={`Vue du package : ${Package.title}`}
          fill
          priority
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative -mt-16 md:-mt-24 max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10 z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h1 className="text-xl md:text-2xl max-w-lg font-bold text-gray-900 capitalize">
            {Package.title}
          </h1>

          <div className="flex gap-6 md:gap-10 flex-col md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-yellow-400 w-8 h-8 rounded-full shadow-md">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wider">
                  Duration
                </p>
                <p className="font-bold text-lg">{Package.duration}</p>
              </div>
            </div>
            {/* Difficulty */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-yellow-400 w-8 h-8 rounded-full shadow-md">
                <Mountain className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wider">
                  Difficulty
                </p>
                <p className="font-bold text-lg uppercase">
                  {Package.difficulty}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12 max-w-7xl mx-auto">
        <div className="lg:col-span-2 space-y-12">
          {/* Description */}
          <section>
            <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
              {Package.description?.replace(/\\n/g, "\n") ||
                "Aucune description disponible."}
            </p>
          </section>

          {/* Itinerary */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Itinerary
            </h2>
            <p className="text-gray-600 mb-6">
              Your journey will be extra with us
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {Package.itinerary.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`day-${index}`}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-yellow-500 hover:text-yellow-600">
                    {item.day}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-gray-700 whitespace-pre-line">
                    {item.description?.replace(/\\n/g, "\n") ||
                      "No information for this day"}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Gallery */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Package.gallery.map((item, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-xl shadow-md aspect-video">
                        <Image
                          src={urlFor(item.image).width(1200).height(800).url()}
                          alt={item.title || `Image ${index + 1} du package`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="mt-2 text-sm font-medium text-center text-gray-700 capitalize">
                        {item.title}
                      </p>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl p-0 overflow-hidden">
                    <VisuallyHidden>
                      <DialogTitle>{item.title}</DialogTitle>
                    </VisuallyHidden>
                    <Image
                      src={urlFor(item.image).width(1600).height(1200).url()}
                      alt={item.title}
                      width={1600}
                      height={1200}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar: Booking & Map */}
        <aside className="lg:col-span-1 space-y-6 z-10">
          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="p-4 border-b border-gray-200 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-500" />
              <h3 className="font-bold text-lg">Route</h3>
            </div>
            <div className="h-64 md:h-80">
              <MapComponent
                start={Package.start}
                end={Package.end}
                places={Package.place}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6 border border-gray-200">
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wider">
                from
              </p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">
                {Package.price}
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Include :</h4>
                <p className="text-gray-600 whitespace-pre-line">
                  {Package.included?.replace(/\\n/g, "\n") || "Non spécifié"}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-1">Not Include :</h4>
                <p className="text-gray-600 whitespace-pre-line">
                  {Package.notIncluded?.replace(/\\n/g, "\n") || "Non spécifié"}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-6 text-lg rounded-lg shadow-md transition-all">
                    Book
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xl h-[90vh] overflow-y-auto p-0">
                  <div className="p-6">
                    <BookDialog Package={Package} />
                  </div>
                </DialogContent>
              </Dialog>

              <Link href="/customize" className="block">
                <Button
                  variant="outline"
                  className="w-full font-bold py-6 text-lg rounded-xl border-2 hover:border-yellow-400 hover:text-yellow-600 transition-all"
                >
                  Customize
                </Button>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
