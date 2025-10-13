"use client";

import Image from "next/image";
import Container from "../bodycomponents/container";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Email from "../email/email";

const GuideRentalData = [
  {
    title: "Local Guide",
    nom: "Floriel",
    description: "Explore Madagascar with a knowledgeable local guide.",
    image: "/floriel.jpg",
  },
  {
    title: "Local Guide",
    nom: "Patrice",
    description: "Explore Madagascar with a knowledgeable local guide.",
    image: "/patrice.jpg",
  },
  {
    title: "Local Guide",
    nom: "Nambinina",
    description: "Explore Madagascar with a knowledgeable local guide.",
    image: "/nambinina.jpg",
  },
  {
    title: "Local Guide",
    nom: "Justin",
    description: "Explore Madagascar with a knowledgeable local guide.",
    image: "/justin.jpg",
  },
  {
    title: "Local Guide",
    nom: "Marc",
    description: "Explore Madagascar with a knowledgeable local guide.",
    image: "/marc.jpg",
  },
  {
    title: "Local Guide",
    nom: "Riri",
    description: "Explore Madagascar with a knowledgeable local guide.",
    image: "/riri.jpg",
  },
];

export default function GuidePresentation() {
  // 🔹 Email sending function using Resend
  const handleSendEmail = async (email, guideName) => {
    try {
      const res = await fetch("/api/guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, contentTitle: guideName }),
      });

      const data = await res.json();
      if (data.success) {
        console.log(data);
      } else {
        alert("Error sending booking request: " + data.error);
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  return (
    <Container>
      <div className="flex flex-col gap-12 py-12 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-black text-center">
          Meet Our Local Guides
        </h1>
        <p className="text-lg text-gray-700 text-center">
          Discover Madagascar with our experienced and passionate local guides,
          ready to make your adventure unforgettable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GuideRentalData.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-4"
            >
              {/* Image with fixed height */}
              <div className="w-full h-64 relative">
                <Image
                  src={guide.image}
                  alt={`${guide.nom} - ${guide.title}`}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-black">{guide.nom}</h2>
                  <p className="text-lg text-yellow-400">{guide.title}</p>
                  <p className="text-gray-600 mt-2">{guide.description}</p>
                </div>

                {/* Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="mt-4 bg-yellow-400 text-white font-bold px-6 py-2 rounded-lg hover:bg-yellow-500 transition">
                      Book This Guide
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Book Guide: {guide.nom}</DialogTitle>

                      <Email
                        handleSend={(email) =>
                          handleSendEmail(email, guide.nom)
                        }
                      />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
