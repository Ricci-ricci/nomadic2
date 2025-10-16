"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Minus, Plus, Users } from "lucide-react";

export default function TravelersSelector({ onChange }) {
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
  });

  const total = travelers.adults + travelers.children;

  const updateCount = (type, delta) => {
    setTravelers((prev) => {
      const newValue = Math.max(0, prev[type] + delta);
      const updated = { ...prev, [type]: newValue };
      onChange?.(updated);
      return updated;
    });
  };

  return (
    <div className="w-full flex items-center justify-center flex-col gap-4">
      <span className="text-xl font-bold whitespace-pre-line text-center">
        Number of travelers
      </span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 w-1/2 border-black/50 "
          >
            <Users className="w-4 h-4" />
            {total > 0
              ? `${total} traveler${total > 1 ? "s" : ""}`
              : "Select travelers"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 p-4 space-y-4">
          <h3 className="font-semibold text-lg">Who’s traveling?</h3>

          {/* Adults */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Adults</p>
              <p className="text-sm text-gray-500">Ages 13 or above</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateCount("adults", -1)}
                disabled={travelers.adults <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-6 text-center font-semibold">
                {travelers.adults}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateCount("adults", 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Children</p>
              <p className="text-sm text-gray-500">Ages 2–12</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateCount("children", -1)}
                disabled={travelers.children <= 0}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-6 text-center font-semibold">
                {travelers.children}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateCount("children", 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
