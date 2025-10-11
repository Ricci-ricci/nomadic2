"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header({ menuColor, logo, button }) {
  const MENU = [
    {
      label: "Logo",
      type: "logo",
      image: "/logo.png",
      href: "/", // home
    },
    {
      label: "Home",
      type: "link",
      href: "/",
    },
    {
      label: "Services",
      type: "link",
      href: "/services",
    },
    {
      label: "Destination",
      type: "link",
      href: "/destination",
    },
    {
      label: "FAQ",
      type: "link",
      href: "/faq",
    },
    {
      label: "Contact",
      type: "button",
      href: "/contact",
    },
  ];

  return (
    <nav className="flex items-center bg-transparent px-6 py-4 w-full">
      {/* Logo (always visible, left side) */}
      <div className="flex-1 flex justify-start">
        {MENU.filter((item) => item.type === "logo").map((item, i) => (
          <a key={i} href={item.href} className={`text-2xl font-bold ${logo}`}>
            <Image src={item.image} alt="Logo" width={100} height={100} />
          </a>
        ))}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-center gap-12">
        {MENU.filter((item) => item.type === "link").map((item, i) => (
          <a
            key={i}
            href={item.href}
            className={`hover:text-yellow-400 font-bold ${menuColor}`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Desktop Button */}
      <div className="hidden md:flex flex-1 justify-end">
        {MENU.filter((item) => item.type === "button").map((item, i) => (
          <a
            key={i}
            href={item.href}
            className={`rounded-lg bg-transparent border-2 ${button} font-bold px-4 py-2 hover:bg-yellow-400 hover:text-white hover:border-yellow-400`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-end">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md border border-gray-300">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent className="w-54 p-4">
            {MENU.filter(
              (item) => item.type === "link" || item.type === "button",
            ).map((item, i) => (
              <SheetDescription key={i} asChild>
                <a href={item.href} className="w-full text-xl font-bold">
                  {item.label}
                </a>
              </SheetDescription>
            ))}
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
