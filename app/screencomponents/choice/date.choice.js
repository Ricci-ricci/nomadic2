"use client";
import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import Container from "../bodycomponents/container";

export function CalendarDemo({ day, selectedDate, onChange }) {
  const [date, setDate] = useState(selectedDate || null);

  const handleSelect = (newDate) => {
    setDate(newDate);
    onChange?.(newDate);
  };

  return (
    <Container className="flex flex-col gap-24 items-center justify-center w-full ">
      <span className="text-xl font-bold whitespace-pre-line text-center">
        {`Choose the day for \n${day}`}
      </span>
      <div className="md:w-[400px] md:h-[400px]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          className="rounded-md border shadow-2xl w-full h-full"
          captionLayout="dropdown"
        />
      </div>
    </Container>
  );
}
