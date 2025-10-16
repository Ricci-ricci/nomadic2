"use client";
import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo({ day, selectedDate, onChange }) {
  const [date, setDate] = useState(selectedDate || null);

  const handleSelect = (newDate) => {
    setDate(newDate);
    onChange?.(newDate);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <span className="text-xl font-bold whitespace-pre-line text-center">
        {`Choose the day for \n${day}`}
      </span>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleSelect}
        className="rounded-md border shadow-2xl"
        captionLayout="dropdown"
      />
    </div>
  );
}
