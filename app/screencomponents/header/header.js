"use client";

import { Menu, Facebook, Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Header({ menuColor, logo, button }) {
  const MENU = [
    {
      label: "Logo",
      type: "logo",
      image: "/logo.png",
      href: "/",
      name: "Nomadic",
    },
    { label: "Home", type: "link", href: "/" },
    { label: "Services", type: "link", href: "/services" },
    { label: "Destination", type: "link", href: "/destination" },
    { label: "FAQ", type: "link", href: "/faq" },
    { label: "Contact", type: "button", href: "/contact" },
  ];

  const SOCIALS = [
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/profile.php?id=61579252721847",
      color: "text-blue-600",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/nomadiczebumdg?igsh=MXUxNHd1bjdxOTZ1Yg%3D%3D",
      color: "text-pink-500",
    },
    {
      icon: <MessageCircle size={20} />,
      href: "https://wa.me/261349777645?text=GoodMorning%2C%20I%20wish%20to%20make%20a%20trip%20reservation", // WhatsApp link
      color: "text-green-500",
    },
  ];

  return (
    <nav className="flex items-center bg-black/30 px-6 py-4 w-full fixed top-0 z-50 max-w-[1920px]">
      {/* Logo (always visible, left side) */}
      <div className="flex-1 flex justify-start">
        {MENU.filter((item) => item.type === "logo").map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`text-2xl font-bold flex flex-row items-center justify-center gap-4 ${logo}`}
          >
            <Image src={item.image} alt="Logo" width={100} height={100} />
            <span className="text-white text-lg md:text-4xl font-edu-vic">
              {item.name}
            </span>
          </Link>
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

      {/* Desktop Button + Socials */}
      {/* Desktop Button + Socials */}
      <div className="hidden md:flex flex-1 justify-end items-center gap-4">
        {/* Social Icons first (left of button) */}
        {SOCIALS.map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full bg-white hover:bg-yellow-400 transition ${social.color}`}
          >
            {social.icon}
          </a>
        ))}

        {/* Contact Button */}
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
              <Menu className="w-6 h-6 text-white" />
            </button>
          </SheetTrigger>
          <SheetContent className="w-54 p-4 flex flex-col gap-4">
            {MENU.filter(
              (item) => item.type === "link" || item.type === "button",
            ).map((item, i) => (
              <SheetDescription key={i} asChild>
                <a href={item.href} className="w-full text-xl font-bold">
                  {item.label}
                </a>
              </SheetDescription>
            ))}

            {/* Social Icons Mobile */}
            <div className="flex gap-4 mt-4">
              {SOCIALS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full hover:bg-gray-200 transition ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
