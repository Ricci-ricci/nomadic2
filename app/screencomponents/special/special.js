import Image from "next/image";
import Container from "../bodycomponents/container";

export default function Special() {
  const TEXT2 = "What's Special About Us?";
  const special = [
    {
      title: "Why We’re Special",
      description: {
        textBefore1: "We design ",
        italic1: "personalized itineraries",
        textMiddle1: "tailored to your",
        italic2: "interests",
        textMiddle2: ", and our local",
        italic3: "expertise",
        textMiddle3: "ensures you ",
        italic4: " experience authentic",
        textAfter: "hidden gems beyond the usual tourist paths.",
      },
      image: "/destination/Antananarivo/principal.jpg",
    },
    {
      title: "Our Expertise",
      description: {
        textBefore1: "With years of",
        italic1: "experience",
        textMiddle1: ", we know how to",
        italic2: "balance",
        textMiddle2: "comfort and adventure. We connect you with ",
        italic3: "local communities",
        textMiddle3: "and ",
        italic4: "hidden destinations",
        textMiddle4: "for unforgettable",
        italic5: "memories",
        textAfter: ".",
      },
      image: "/destination/TheWestBaobabandTsingyTour/principal.jpg",
    },
  ];

  return (
    <Container>
      {/* Section Header */}
      <div className="flex w-full flex-col gap-2 p-4">
        <div className="flex w-full items-center">
          <span className="text-3xl md:text-5xl font-bold  text-yellow-400 max-w-3xl font-edu-vic">
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
              <p className="text-base md:text-lg text-gray-600">
                {item.description.textBefore1}{" "}
                <span className="italic">{item.description.italic1}</span>{" "}
                {item.description.textMiddle1}{" "}
                <span className="italic">{item.description.italic2}</span>{" "}
                {item.description.textMiddle2}{" "}
                <span className="italic">{item.description.italic3}</span>{" "}
                {item.description.textMiddle3}{" "}
                <span className="italic">{item.description.italic4}</span>{" "}
                {item.description.textMiddle4}{" "}
                <span className="italic">{item.description.italic5}</span>
                {item.description.textAfter}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
