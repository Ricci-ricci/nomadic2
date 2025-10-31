import Image from "next/image";
import Container from "../bodycomponents/container";
import Link from "next/link";
import getSanityBest from "@/lib/data/sanitybest";

export default async function BestDestination() {
  const TXT2 = "One of our flagship destination :";
  const destinations = await getSanityBest();

  return (
    <Container classname="flex flex-col gap-8 p-4">
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full  justify-between items-center">
          <span className="text-3xl md:text-5xl font-edu-vic font-bold text-yellow-400  w-[120vh]">
            {TXT2}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-lg shadow-lg">
        {/* Right side: image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={urlFor(destinations.image).width(600).height(400).url()}
            alt={destinations.title}
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        {/* Left side: text */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-black uppercase">
            {destinations.title}
          </h2>
          <p className="text-gray-600 text-lg line-clamp-7 whitespace-pre-line italic">
            {destinations.description}
          </p>
          <Link href={`/destinations/${destinations.slug.current}`}>
            <button className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 transition">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
