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
const guide = [
  {
    title: "Floriel",
    skills: "	Accompanier Guide & Experienced Driver",
    description:
      "Floriel is a highly experienced guide and driver, recognized for his excellent timing and extensive knowledge of Madagascar’s tourist sites and attractions.\n Having worked with several travel agencies across the country, he brings both reliability and expertise to every journey.\n Passionate about the road, cars, and tourism, he ensures smooth and enjoyable trips for all travelers",
    image: `/floriel.jpg`,
  },
  {
    title: "Patrice",
    skills: "Bilingual Nature Guide (English & French)",
    description:
      "Patrice is a passionate tour guide fluent in both English and French.\n Born and raised in Andasibe, he began his career inside the rainforest itself.\n His deep knowledge of Madagascar’s fauna and flora makes him an excellent guide for nature lovers, always ensuring an enriching and satisfying experience",
    image: `/patrice.jpg`,
  },
  {
    title: "Nambinina ",
    skills: "English-Speaking Tour Guide",
    description:
      "Nambinina is a specialist in guiding and accompanying groups across Madagascar.\n Passionate about the island’s unique biodiversity, he shares his knowledge with enthusiasm. \n Known for his sense of humor, he ensures that every journey is not only informative but also full of joy.",
    image: `/nambinina.jpg`,
  },
  {
    title: "Justin",
    skills: "Trekking & Climbing Specialist",
    description:
      "Justin is one of our expert accompaniers, specializing in trekking, rock climbing, \n and the ascent of Pic Boby Madagascar’s second-highest accessible peak.\n With his deep knowledge of the trails and passion for adventure, he ensures every climb is both safe and unforgettable.",
    image: `/justin.jpg`,
  },
  {
    title: "Marc 	",
    skills: "Experienced Bilingual Guide",
    description:
      "Marc is one of our highly experienced guides, fluent in both English and French. Having worked with several renowned travel agencies as a freelance guide, he brings a wealth of knowledge and professionalism to every journey.\n In addition to guiding, Marc also teaches and serves as a local guide in a private park in Antananarivo,\n where he shares his passion for Madagascar’s unique biodiversity and culture.\n His deep understanding of the country ensures that every traveler enjoys a well-guided, insightful, and memorable experience.",
    image: `/marc.jpg`,
  },
  {
    title: "Riri ",
    skills: "Specialist Pirogue & River Guide",
    description:
      "Riri is our pirogue and boat specialist, guiding travelers along the beautiful Pangalanes River from Manakara to Ampasimanjeva.\n With his warm personality and sense of humor, he knows how to create joyful moments and make every bivouac between the Pangalanes River and the Indian Ocean unforgettable.\n Riri is also an excellent cook, especially when it comes to preparing fresh, typical seafood dishes from Madagascar’s southeast coast, a true highlight of the journey.",
    image: `/riri.jpg`,
  },
];

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
  const handleSendEmail = async (email, guideName, name, firstName) => {
    try {
      const res = await fetch("/api/guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          firstName,
          email,
          contentTitle: guideName,
        }),
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

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
          {guide.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 items-center justify-center flex flex-col md:flex-row p-4"
            >
              {/* Image with fixed height */}
              <div className="w-64 h-64 relative">
                <Image
                  src={guide.image}
                  alt={`${guide.nom} - ${guide.title}`}
                  fill
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-black">
                    {guide.title}
                  </h2>
                  <p className="text-lg text-yellow-400">{guide.skills}</p>
                  <p className="text-gray-600 mt-2">{guide.description}</p>
                </div>

                {/* Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="mt-4 bg-yellow-400 text-white font-bold px-4 py-1  md:px-6 md:py-2 rounded-lg hover:bg-yellow-500 transition">
                      Book This Guide
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Book Guide: {guide.nom}</DialogTitle>

                      <Email
                        handleSend={(email, name, firstName) =>
                          handleSendEmail(email, guide.nom, name, firstName)
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
