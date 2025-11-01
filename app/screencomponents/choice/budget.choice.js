"use client";

import { useState } from "react";
import { Wallet, Coins, Gem } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Container from "../bodycomponents/container";
export default function BudgetChoice({ selected, onChange }) {
  const step = 500;
  const max = 4000;

  const budgets = [
    {
      id: 1,
      label: "Less than $500",
      value: "under500",
      icon: <Wallet size={18} className="inline mr-2" />,
    },
    ...Array.from({ length: max / step - 1 }, (_, i) => {
      const start = (i + 1) * step;
      const end = start + step;
      return {
        id: i + 2,
        label: `$${start} – $${end}`,
        value: `${start}to${end}`,
        icon: <Coins size={18} className="inline mr-2" />,
      };
    }),
    {
      id: max / step + 2,
      label: "More than $4000",
      value: "over4000",
      icon: <Gem size={18} className="inline mr-2" />,
    },
  ];

  return (
    <Container className="px-6 flex flex-col items-center gap-10 w-full">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center max-w-2xl leading-snug">
        Choose your travel budget!
      </h2>

      <Select
        value={selected || ""}
        onValueChange={(value) => onChange?.(value)}
        className="w-72"
      >
        <SelectTrigger>
          <SelectValue placeholder="Select your budget" />
        </SelectTrigger>
        <SelectContent>
          {budgets.map((item) => (
            <SelectItem key={item.id} value={item.value}>
              {item.icon}
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Container>
  );
}
