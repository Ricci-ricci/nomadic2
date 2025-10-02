import Image from "next/image";
import Container from "../bodycomponents/container";

export default function Special() {
  const TEXT1 = "About Us";
  const TEXT2 = "What's Special About Us";
  const special = [
    {
      title: "Why We’re Special",
      description:
        "We design personalized itineraries tailored to your interests, and our local expertise ensures you experience authentic hidden gems beyond the usual tourist paths.",
      image: "/destination/Antananarivo/principal.jpg",
    },
    {
      title: "Our Expertise",
      description:
        "With years of experience, we know how to balance comfort and adventure. We connect you with local communities and hidden destinations for unforgettable memories.",
      image: "/destination/The West Baobab and Tsingy Tour/principal.jpg",
    },
  ];

  return (
    <Container>
      {/* Section Header */}
      <div className="flex w-full flex-col gap-2 p-4">
        <span className="font-bold font-edu-vic text-lg md:text-4xl text-yellow-400">
          {TEXT1}
        </span>
        <div className="flex w-full items-center">
          <span className="text-3xl md:text-4xl font-bold text-black max-w-3xl">
            {TEXT2}
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full flex flex-col md:flex-row gap-8 py-8 items-center justify-center">
        {special.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white border border-black/50  rounded-lg overflow-hidden w-full md:w-1/2 p-12"
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-56 md:h-auto">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-4 p-6 w-full md:w-1/2">
              <h2 className="text-black font-bold text-2xl md:text-4xl">
                {item.title}
              </h2>
              <span className="text-base md:text-lg text-gray-600">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
