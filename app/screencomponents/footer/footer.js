import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerData = {
    slogan: "Travel beyond your imagination with our travel agency",
    address: {
      line1: "102 Madagascar",
      city: "Antananarivo",
      area: "Fenoarivo",
      faqandprivacy: "Privacy and policy",
    },
    contact: {
      phone: "+261 34 97 776 45",
      email: "nomadiczebu@gmail.com",
      whatsapp: "+261 34 97 776 45",
      facebook: "NomadicZebu",
      instagram: "NomadicZebu",
    },
    autorisation: {
      autorisation1: "N°: 68-MTA/SG/DGT/SAT-EDBM.25",
      autorisation2: "N°: 69-MTA/SG/DGT/SAT-EDBM.25",
    },
    logoText: "© 2025 Nomadic . All rights reserved.",
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
        <span className="font-bold text-3xl md:text-4xl max-w-lg leading-tight">
          {footerData.slogan}
        </span>
      </div>

      {/* Address */}
      <Link href="/policy" className="font-bold">
        {footerData.address.faqandprivacy}
      </Link>
      <div className="flex flex-col gap-3 md:gap-4">
        <Link href="/contact" className="font-bold text-lg md:text-xl">
          Address
        </Link>
        <span>{footerData.address.line1}</span>
        <span>{footerData.address.city}</span>
        <span>{footerData.address.area}</span>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-3 md:gap-4">
        <Link href="/contact" className="font-bold text-lg md:text-xl">
          Contact
        </Link>
        <span>{footerData.contact.phone}</span>
        <span>{footerData.contact.email}</span>
        <span>{footerData.contact.facebook}</span>

        {/* Social buttons without background */}
        <div className="flex gap-3 mt-2 text-white">
          {/* WhatsApp */}
          <Link
            href={`https://wa.me/${footerData.contact.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            className="hover:text-green-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12c0 2.11.553 4.084 1.514 5.804L0 24l6.308-1.515C7.916 23.447 9.889 24 12 24c6.628 0 12-5.372 12-12S18.628 0 12 0zm6.35 16.173c-.287.808-1.665 1.537-2.324 1.634-.617.092-1.417.13-5.01-1.896-1.85-1.052-3.01-2.355-3.572-3.118-.577-.78-.61-1.256-.064-1.8.55-.549 1.113-1.005 1.567-1.537.464-.542.617-.905.927-1.48.303-.569.15-1.06-.075-1.48-.212-.395-.902-.948-1.23-1.06-.34-.117-.777-.106-1.138-.106-.348 0-.886.106-1.357.515-.488.429-1.847 1.83-1.847 4.457 0 2.628 2.113 5.21 2.41 5.556.293.341 4.06 6.552 10.02 6.552 2.564 0 3.658-1.028 4.12-1.768.462-.739.462-1.372.323-1.486z" />
            </svg>
          </Link>

          {/* Facebook */}
          <Link
            href={`https://www.facebook.com/${footerData.contact.facebook}`}
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
            </svg>
          </Link>

          {/* Instagram */}
          <Link
            href={`https://www.instagram.com/${footerData.contact.instagram}`}
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.013 7.052.072 5.765.131 4.548.394 3.513 1.429 2.478 2.464 2.215 3.681 2.156 4.968 2.097 6.248 2.084 6.653 2.084 12s.013 5.752.072 7.032c.059 1.287.322 2.504 1.357 3.539 1.035 1.035 2.252 1.298 3.539 1.357C8.332 23.987 8.737 24 12 24s3.668-.013 4.948-.072c1.287-.059 2.504-.322 3.539-1.357 1.035-1.035 1.298-2.252 1.357-3.539.059-1.28.072-1.685.072-7.032s-.013-5.752-.072-7.032c-.059-1.287-.322-2.504-1.357-3.539C19.452.394 18.235.131 16.948.072 15.668.013 15.263 0 12 0z" />
              <circle cx="12" cy="12" r="3.6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Logo + Text + Autorisation */}
      <div className="flex flex-col justify-center items-center text-center">
        <Image
          src="/footer/logo.png"
          alt="Logo"
          width={180}
          height={180}
          className="object-contain"
        />
        <span className="mt-2 text-sm text-white">{footerData.logoText}</span>
        <span className="mt-1 text-xs text-white">
          {footerData.autorisation.autorisation1}
        </span>
        <span className="text-xs text-white">
          {footerData.autorisation.autorisation2}
        </span>
      </div>
    </div>
  );
}
