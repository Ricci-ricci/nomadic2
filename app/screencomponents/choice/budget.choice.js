"use client";

import { useState, useEffect } from "react";
import { Wallet, Coins, Gem, Pencil } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
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
    {
      id: max / step + 3,
      label: "Custom amount",
      value: "custom",
      icon: <Pencil size={18} className="inline mr-2" />,
    },
  ];

  const [customAmount, setCustomAmount] = useState("");

  // Check si la valeur actuelle est "custom"
  const isCustomSelected =
    selected?.startsWith("custom") || selected === "custom";

  // Sync customAmount avec selected
  useEffect(() => {
    if (selected?.startsWith("custom-")) {
      const value = selected.split("-")[1];
      setCustomAmount(value || "");
    }
  }, [selected]);

  const handleSelect = (value) => {
    if (value !== "custom") {
      setCustomAmount("");
      onChange?.(value);
    } else {
      onChange?.("custom");
    }
  };

  const handleCustomChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    onChange?.(`custom-${value}`);
  };

  // 🔹 Texte affiché dans le bouton du Select
  const displayValue =
    !selected || selected === ""
      ? "Choose your budget"
      : isCustomSelected
        ? customAmount
          ? `Custom: $${customAmount}`
          : "Custom amount"
        : budgets.find((b) => b.value === selected)?.label ||
          "Choose your budget";

  return (
    <Container className="px-6 flex flex-col items-center w-full">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center max-w-2xl leading-snug">
        Choose your travel budget!
      </h2>

      <div className="flex flex-col text-xl items-center gap-4 w-full max-w-sm">
        <Select
          value={isCustomSelected ? "custom" : selected || ""}
          onValueChange={handleSelect}
          className="w-full"
        >
          <SelectTrigger className="w-full border-black/50 border">
            <SelectValue placeholder="Choose your budget">
              {displayValue}
            </SelectValue>
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

        {/* Champ custom visible si "Custom" est choisi */}
        {isCustomSelected && (
          <Input
            type="number"
            min="0"
            placeholder="Enter custom amount ($)"
            value={customAmount}
            onChange={handleCustomChange}
            className="w-full mt-2"
          />
        )}
      </div>
    </Container>
  );
}
