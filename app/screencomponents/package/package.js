"use client";
import Image from "next/image";
import Container from "../bodycomponents/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { urlFor } from "@/lib/sanityClient";

export default function Package({ Package }) {
  const router = useRouter();
  const TEXT2 =
    "Whatever your Trip plan, we have the perfect package for you. Make your choice";

  return (
    <Container>
      <div className="w-full h-full flex flex-col gap-12 items-start justify-center relative p-4">
        {/* Section Title */}
        <div className="flex w-full flex-col gap-4 text-center md:text-left">
          <span className="font-bold text-lg md:text-4xl font-edu-vic text-yellow-400">
            Packages
          </span>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black max-w-3xl">
            {TEXT2}
          </div>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-center md:justify-start">
          {Package.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] lg:w-[30%] bg-white rounded-xl flex flex-col shadow-2xl relative overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <Link
                href={`/offer/${item.slug.current}`}
                className="flex flex-col h-full"
              >
                {/* Image */}
                <Image
                  src={urlFor(item.image).width(600).height(400).url()}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="rounded-t-lg w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="flex flex-col gap-3 p-4 flex-grow">
                  {/* Timeline badge */}
                  <div className="absolute top-4 left-4 bg-white shadow-md rounded-lg px-3 py-1">
                    <span className="text-yellow-400 font-bold text-sm">
                      {item.timeline}
                    </span>
                  </div>

                  <h2 className="font-bold text-xl">{item.title}</h2>

                  {/* Price & Button */}
                  <div className="mt-auto w-full flex justify-between items-center pt-2">
                    <span className="font-bold text-lg">{item.price}</span>

                    <Button
                      onClick={() => router.push(`/offer/${item.slug.current}`)}
                      className="px-6 bg-yellow-400"
                    >
                      Book
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
