import Image from "next/image";
import Container from "../bodycomponents/container";
import Link from "next/link";
import { urlFor } from "@/lib/sanityClient";
export default function ShowMore({ content }) {
  const TEXT1 = "Next adventure";
  const TEXT2 = "More Destinations";

  return (
    <Container>
      {/* Section header */}
      <div className="flex w-full flex-col gap-4 p-4">
        <span className="font-bold md:text-4xl text-lg font-edu-vic text-yellow-400">
          {TEXT1}
        </span>
        <div className="flex w-full justify-between items-center">
          <span className="text-4xl font-bold text-black">{TEXT2}</span>
          <Link
            href="/destination"
            className="cursor-pointer text-blue-600 hover:underline"
          >
            See all →
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full flex flex-col md:flex-row gap-8 py-8 items-center justify-center p-4">
        {content.slice(0, 3).map((item, index) => (
          <Link
            key={index}
            href={`/destinations/${item.slug.current}`}
            className="flex flex-col w-full md:w-1/3 relative group"
          >
            {/* Destination image */}
            <Image
              src={urlFor(item.image).width(600).height(400).url()}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-64 md:h-96 object-cover rounded-lg group-hover:scale-105 transition duration-300"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>

            {/* Title overlay */}
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
