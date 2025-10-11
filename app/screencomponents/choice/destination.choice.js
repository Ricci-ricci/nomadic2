"use client";
import { Destination } from "@/lib/data/destination";
import Image from "next/image";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function DestinationChoice() {
  const destinations = Destination();
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  const toggleSelect = (id) => {
    setSelectedDestinations((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id],
    );
  };

  return (
    <div className="p-6 flex items-start flex-col gap-8">
      <h2 className="text-xl md:text-3xl font-bold mb-4 text-center">
        Where Do you Want to Go?
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {destinations.map((item) => {
          const isSelected = selectedDestinations.includes(item.id);
          return (
            <div
              key={item.id}
              className={`relative cursor-pointer rounded-xl overflow-hidden shadow-md transition-transform duration-300 ${
                isSelected ? "ring-4 ring-yellow-400 scale-105" : ""
              }`}
              onClick={() => toggleSelect(item.id)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              {isSelected && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <CheckCircle2 size={48} className="text-white" />
                </div>
              )}
              <div className="p-2 text-center font-medium">{item.title}</div>
            </div>
          );
        })}
      </div>

      {selectedDestinations.length > 0 && (
        <div className="mt-6 text-center">
          <button
            className="px-6 py-2 bg-yellow-400 text-white rounded-lg cursor-pointer transition"
            onClick={() =>
              alert(`Selected destinations: ${selectedDestinations.join(", ")}`)
            }
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
