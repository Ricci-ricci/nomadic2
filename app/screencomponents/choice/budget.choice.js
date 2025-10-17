"use client";
import { useState } from "react";
import { Wallet, Coins, Gem, DollarSign } from "lucide-react";
import Container from "../bodycomponents/container";

export default function BudgetChoice({ selected, onChange }) {
  // Generate budget ranges dynamically (increments of 500 until 4000)
  const step = 500;
  const max = 4000;

  const budgets = [
    {
      id: 1,
      label: "Less than $500",
      value: "under500",
      icon: <Wallet size={48} />,
    },
    ...Array.from({ length: max / step - 1 }, (_, i) => {
      const start = (i + 1) * step;
      const end = start + step;
      return {
        id: i + 2,
        label: `$${start} – $${end}`,
        value: `${start}to${end}`,
        icon: <Coins size={48} />,
      };
    }),
    {
      id: max / step + 2,
      label: "More than $4000",
      value: "over4000",
      icon: <Gem size={48} />,
    },
  ];

  const handleSelect = (value) => {
    onChange?.(selected === value ? null : value);
  };

  return (
    <Container className="px-6 flex flex-col items-center gap-10 w-full">
      {/* Title */}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center max-w-2xl leading-snug">
        Choose your travel budget!
      </h2>

      {/* Budget grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-6xl">
        {budgets.map((item) => {
          const isSelected = selected === item.value;
          return (
            <div
              key={item.id}
              onClick={() => handleSelect(item.value)}
              className={`cursor-pointer flex flex-col items-center justify-center p-6 sm:p-8 aspect-square rounded-2xl shadow-md text-center font-medium transition-all duration-300 ${
                isSelected
                  ? "bg-yellow-400 text-white scale-105"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              <div className="mb-3">{item.icon}</div>
              <div className="text-base sm:text-lg font-semibold">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
