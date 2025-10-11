"use client";
import { useState } from "react";

export default function DurationChoice({ onNext }) {
  const [selectedDuration, setSelectedDuration] = useState(null);

  const durations = [
    { id: 1, label: "Less than 1 week", value: "lessThan7" },
    { id: 2, label: "Between 7 and 14 days", value: "between7and14" },
    { id: 3, label: "More than 14 days", value: "moreThan14" },
  ];

  const handleSelect = (value) => {
    setSelectedDuration((prev) => (prev === value ? null : value));
  };

  const handleContinue = () => {
    if (selectedDuration) {
      onNext?.(selectedDuration);
    } else {
      alert("Please choose how long you want to stay before continuing.");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-6 text-center">
        How long will you stay?
      </h2>

      <div className="flex flex-col sm:flex-row gap-6">
        {durations.map((item) => {
          const isSelected = selectedDuration === item.value;
          return (
            <div
              key={item.id}
              onClick={() => handleSelect(item.value)}
              className={`cursor-pointer px-8 py-6 rounded-2xl shadow-md text-center text-lg font-medium transition-all duration-300 ${
                isSelected
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {item.label}
            </div>
          );
        })}
      </div>

      <button
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
}
