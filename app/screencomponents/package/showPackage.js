"use client";

import Image from "next/image";
import Container from "../bodycomponents/container";
import Link from "next/link";
import { urlFor } from "@/lib/sanityClient";
export default function ShowPackage({ pack }) {
  const TEXT1 = "Next Adventure";
  const TEXT2 = "Some of our offers";
  const safePack = pack || [];

  return (
    <Container>
      {/* Section Header */}
      <div className="flex w-full flex-col gap-2 p-4">
        <span className="font-bold font-edu-vic text-lg md:text-4xl text-yellow-400">
          {TEXT1}
        </span>
        <span className="text-3xl md:text-4xl font-bold text-black max-w-3xl">
          {TEXT2}
        </span>
      </div>

      {/* Packages */}
      <div className="w-full flex flex-col md:flex-row gap-6 py-8 items-center md:items-stretch justify-center p-4">
        {safePack.length > 0 &&
          safePack.slice(0, 3).map((item, index) => (
            <Link
              key={index}
              href={`/offer/${item.slug?.current || ""}`}
              className="flex flex-col relative w-full md:w-1/3 h-64 md:h-80 rounded-lg overflow-hidden"
            >
              <Image
                src={urlFor(item.image).width(600).height(400).url()}
                alt={item.title || "package image"}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h2 className="text-white font-bold text-lg md:text-xl">
                  {item.title || "Untitled"}
                </h2>
              </div>
            </Link>
          ))}
      </div>
    </Container>
  );
}
