"use client";
import { Clock, Sun, Globe2 } from "lucide-react";

export default function DurationChoice({ selected, onChange }) {
  const durations = [
    {
      id: 1,
      label: "Less than 1 week",
      value: "lessThan7",
      icon: <Clock size={48} />,
    },
    {
      id: 2,
      label: "Between 7 and 14 days",
      value: "between7and14",
      icon: <Sun size={48} />,
    },
    {
      id: 3,
      label: "More than 14 days",
      value: "moreThan14",
      icon: <Globe2 size={48} />,
    },
  ];

  const handleSelect = (value) => {
    onChange?.(selected === value ? null : value);
  };

  return (
    <div className="p-6 sm:p-10 flex flex-col items-center gap-8 sm:gap-12">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center max-w-2xl px-4">
        Decide how long you’d love your journey to last!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl px-4">
        {durations.map((item) => {
          const isSelected = selected === item.value;
          return (
            <div
              key={item.id}
              onClick={() => handleSelect(item.value)}
              className={`cursor-pointer flex flex-col items-center justify-center p-8 sm:p-10 h-[220px] sm:h-[280px] rounded-2xl shadow-xl text-center text-lg font-medium transition-all duration-300 ${
                isSelected
                  ? "bg-yellow-400 text-white scale-105"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              <div className="mb-4">{item.icon}</div>
              <div className="text-lg sm:text-xl">{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
