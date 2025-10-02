import Image from "next/image";
import Link from "next/link";
import Container from "../bodycomponents/container";

export default function More({ contents }) {
  return (
    <Container className="flex w-full justify-center items-center flex-col gap-8 p-8">
      {/* Title */}
      <div className="font-bold text-3xl md:text-5xl w-full m-4">
        <span>More Destinations</span>
      </div>
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 text-black w-full">
        {contents.map((item, index) => (
          <Link
            href={`/destinations/${item.slug}`}
            className="flex flex-col gap-3 cursor-pointer group"
            key={index}
          >
            {/* Wrapper div to enforce consistent image size */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg p-4">
              <Image
                className="transition-transform duration-300 group-hover:scale-105"
                src={item.image}
                alt={item.title}
                fill // Use fill to make the image fill the parent container
                style={{ objectFit: "cover" }} // Ensures image covers the area without distortion
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Responsive sizes for performance
              />
            </div>
            <span className="font-bold text-lg">{item.title}</span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
