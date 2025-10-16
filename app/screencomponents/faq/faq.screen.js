"use client";
import Container from "../bodycomponents/container";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is the best time to visit Madagascar?",
    answer:
      "The best time to travel is from April to September, when the weather is pleasant. However, it can be visited year-round depending on your preferences.",
  },
  {
    question: "Do I need a visa to travel to Madagascar?",
    answer: (
      <>
        Yes, most travelers need a visa. It can usually be obtained on arrival
        at the airport or online via{" "}
        <a
          href="https://evisamada-mg.com/fr/home"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-yellow-400"
        >
          eVisa
        </a>
        . The Malagasy government offers less than 60 days for tourism visas.
        Ensure your passport is valid for at least 6 months after your travel
        dates.
      </>
    ),
  },

  {
    question: "Are vaccinations required?",
    answer:
      "No recommended vaccination but it will be great if you can do the necessary. Please consult your doctor before traveling. You can ask information at the embassy or consulate nearest to you.",
  },
  {
    question: "What is the local currency and can I use credit cards?",
    answer:
      "The local currency is the ARIARY (MGA). ATMs are available in major cities. Credit cards are accepted in hotels and larger restaurants, but carry cash for remote areas.",
  },
  {
    question: "Is it safe to travel to Madagascar?",
    answer:
      "Yes, Madagascar is generally safe for tourists. As in any country, remain cautious with belongings and follow local advice.",
  },
  {
    question: "What language is spoken?",
    answer:
      "The official language is Malagasy. Most Malagasy people speak French. In tourist areas, many guides and hotel staff also speak English and French. Some speak other languages such as German, Spanish, Italian…",
  },
  {
    question: "What should I pack?",
    answer:
      "Light clothing, a jacket for cooler evenings, comfortable walking shoes, sun protection (hat, sunscreen, sunglasses), raincoat for the rainforest, insect repellent, mosquito cream, and personal medication.",
  },
  {
    question: "How do I get around?",
    answer:
      "We provide private transfers, guided tours, and can assist with domestic flights. Local taxis and car rentals exist, but booking through NOMADIC ZEBU is recommended for safety and comfort.",
  },
  {
    question: "What is the local food like?",
    answer:
      "Madagascar offers a variety of local and international cuisine. Don’t miss Henankisoa sy ravintoto (cassava leaf with pork). Special diets (vegetarian, halal, gluten-free) can be arranged upon request.",
  },
  {
    question: "Who do I contact in case of emergency?",
    answer:
      "You will receive a 24/7 emergency contact number from our agency after booking. We also provide a WhatsApp group for tour follow-up and emergencies.",
  },
];

export default function FAQPage() {
  return (
    <Container>
      <div className="flex flex-col gap-12 py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-black">
          Frequently Asked Questions
        </h1>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqData.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-2xl font-bold text-yellow-400">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </Container>
  );
}
