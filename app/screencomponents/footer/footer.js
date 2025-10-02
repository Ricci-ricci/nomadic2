import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerData = {
    slogan: "Travel beyond your imagination with our travel agency",
    address: {
      line1: "102 M/car",
      city: "Antananarivo",
      area: "Fenoarivo",
      faqandprivacy: "Faq and privacy",
    },
    contact: {
      phone: "+261 34 97 776 45",
      email: "nomadiczebu@gmail.com",
      whatsapp: "+261 34 97 776 45",
      facebook: "NomadicZebu",
    },
  };

  return (
    <div
      className="w-full bg-cover bg-center relative flex flex-col md:flex-row text-white p-8 md:p-12 gap-8 md:gap-16"
      style={{
        backgroundImage: `url("/footer/background.png")`,
      }}
    >
      {/* Slogan */}
      <div className="flex-1 flex items-start">
        <span className="font-bold text-3xl md:text-6xl max-w-lg leading-tight">
          {footerData.slogan}
        </span>
      </div>

      {/* Address */}
      <div className="flex flex-col gap-3 md:gap-4">
        <Link href="/contact" className="font-bold text-lg md:text-xl">
          Address
        </Link>
        <span>{footerData.address.line1}</span>
        <span>{footerData.address.city}</span>
        <span>{footerData.address.area}</span>
        <Link href="/faq">{footerData.address.faqandprivacy}</Link>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-3 md:gap-4">
        <Link href="/contact" className="font-bold text-lg md:text-xl">
          Contact
        </Link>
        <span>{footerData.contact.phone}</span>
        <span>{footerData.contact.email}</span>
        <span>{footerData.contact.whatsapp}</span>
        <span>{footerData.contact.facebook}</span>
      </div>

      {/* Logo (goes to bottom on mobile, right side on desktop) */}
      <div className="flex justify-center md:justify-end items-center">
        <Image
          src="/footer/logo.png"
          alt="Logo"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>
    </div>
  );
}
