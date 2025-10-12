"use client";
import { useState } from "react";
import { Coins, Gem, Wallet } from "lucide-react";

export default function BudgetChoice({ selected, onChange }) {
  const budgets = [
    {
      id: 1,
      label: "Less than $200",
      value: "under200",
      icon: <Wallet size={48} />,
    },
    {
      id: 2,
      label: "Between $200 and $500",
      value: "between200and500",
      icon: <Coins size={48} />,
    },
    {
      id: 3,
      label: "More than $500",
      value: "over500",
      icon: <Gem size={48} />,
    },
  ];

  const handleSelect = (value) => {
    onChange?.(selected === value ? null : value);
  };

  return (
    <div className="px-6 py-10 flex flex-col items-center gap-10 w-full">
      {/* Title */}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center max-w-2xl leading-snug">
        Choose the budget that fits your dream trip!
      </h2>

      {/* Budget options grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {budgets.map((item) => {
          const isSelected = selected === item.value;
          return (
            <div
              key={item.id}
              onClick={() => handleSelect(item.value)}
              className={`cursor-pointer flex flex-col items-center justify-center p-8 sm:p-10 aspect-square rounded-2xl shadow-xl text-center font-medium transition-all duration-300 ${
                isSelected
                  ? "bg-yellow-400 text-white scale-105"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              <div className="mb-4">{item.icon}</div>
              <div className="text-lg sm:text-xl font-semibold">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
