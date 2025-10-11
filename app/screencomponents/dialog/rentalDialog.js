import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function RentalDialog({ content, handle }) {
  return (
    <div className="flex flex-col p-4 gap-8">
      <Image
        src={content.image}
        alt={content.title}
        width={500}
        height={500}
        className="rounded-lg"
      ></Image>
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-bold text-black">{content.title}</span>
        <span className="text-lg text-gray-600">{content.description}</span>
        <span className="uppercase font-bold text-black md:text-2xl">
          {content.price}
        </span>
      </div>
      <Button onClick={handle} className="bg-yellow-400 px-4 py-2">
        Book Now
      </Button>
    </div>
  );
}
