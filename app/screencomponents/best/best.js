import Image from "next/image";
import Container from "../bodycomponents/container";
import Link from "next/link";

export default function BestDestination() {
  const TXT2 = "One of our flagship destination :";
  const destinations = {
    id: 5,
    title: "nosy be",
    slug: "nosy-be",
    teinte: "The best island in Madagascar",
    italic: "The Ultimate Island Escape in Madagascar",
    description1: "Looking for the Best Island in Madagascar?",
    description2: "\nDiscover Nosy Be!\n",
    description:
      "Nosy Be, located off Madagascar’s northwestern coast, is the country’s top tourist destination.\nIn the southeast of the island, a hike through Lokobe National Park will take you deep into lush forest, where you’ll encounter a fascinating variety of reptiles and lemurs. The island’s capital, Hell-Ville, is known for its charming French colonial architecture and its bustling local market perfect for picking up souvenirs.\nLemuria Land is another highlight, home to many species of lemurs and other native wildlife.\nNosy Be is also surrounded by beautiful smaller islands like Nosy Iranja, Nosy Sakatia, and Nosy Komba, each offering unique marine fauna and flora, ideal for snorkeling and diving.\nUnwind with unforgettable moments at the Blue Lagoon, where white sandy beaches and crystal-clear waters await. For a truly breathtaking view, don’t miss the hike up Mont Passot, which offers a panoramic lookout over crater lakes and lush landscapes.\nSo don’t hesitate, join our team and come explore the unforgettable beauty of Madagascar! Discover Nosy Be!",
    image: `/destination/ThebestIsland/principal.jpg`,
    thumbnail: [
      `/destination/ThebestIsland/second1.jpg`,
      `/destination/ThebestIsland/second2.jpg`,
    ],
  };

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
            src={destinations.image}
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

          <div className="flex flex-col gap-1">
            <span className="text-black font-bold text-xl">
              {destinations.description1}.
            </span>
            <span className=" text-gray-600 text-lg">
              {destinations.description2}
            </span>
          </div>

          <p className="text-gray-600 text-lg line-clamp-7 whitespace-pre-line italic">
            {destinations.description}
          </p>
          <Link href={`/destinations/${destinations.slug}`}>
            <button className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 transition">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
