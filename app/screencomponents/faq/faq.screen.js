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
    answer:
      "Yes, most travelers need a visa. It can usually be obtained on arrival at the airport or online via eVisa. The Malagasy government offers less than 60 days for tourism visas. Ensure your passport is valid for at least 6 months after your travel dates.",
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

export default function FAQscreen() {
  return (
    <Container>
      {/* FAQ Section */}
      <div className="flex flex-col gap-12 py-12">
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

      {/* Privacy Policy Section */}
      <div className="flex flex-col gap-8 py-12 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-black text-center">
          Privacy Policy
        </h2>
        <div className="text-gray-700 text-lg space-y-4 overflow-auto max-h-[70vh] p-4 border rounded-lg shadow-lg">
          <p>Last updated: 8/28/2025</p>
          <p>
            At NOMADIC ZEBU Madagascar Travel Tour, we take the protection of
            your personal data very seriously. This privacy policy explains how
            we collect, use, and protect your information when you visit our
            website or use our travel services.
          </p>
          <h3 className="font-bold mt-4">1. Data We Collect</h3>
          <ul className="list-disc pl-6">
            <li>
              Personal information: name, surname, email, phone, postal address,
              DOB, passport/visa details.
            </li>
            <li>
              Payment information: only for secure processing of bookings.
            </li>
            <li>
              Browsing information: cookies, IP, login data to improve
              experience.
            </li>
          </ul>
          <h3 className="font-bold mt-4">2. Purpose of Use</h3>
          <ul className="list-disc pl-6">
            <li>Process travel requests, bookings, payments.</li>
            <li>
              Communicate with you (confirmation, updates, support,
              newsletters).
            </li>
            <li>Improve services and personalize experience.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <h3 className="font-bold mt-4">3. Data Sharing</h3>
          <p>
            We do not sell or rent your personal data. Information may be shared
            with travel partners or technical service providers as required.
          </p>
          <h3 className="font-bold mt-4">4. Data Retention</h3>
          <p>
            We keep your data only as long as necessary to complete travel
            arrangements and comply with legal obligations.
          </p>
          <h3 className="font-bold mt-4">5. Security</h3>
          <p>
            We implement appropriate technical and organizational measures to
            protect your data.
          </p>
          <h3 className="font-bold mt-4">6. Your Rights</h3>
          <p>
            You can access, update, or request deletion of your data, and
            withdraw consent. Contact us to exercise your rights.
          </p>
          <h3 className="font-bold mt-4">7. Cookies</h3>
          <p>
            Our website uses cookies to improve browsing experience and analyze
            traffic. You can manage cookies in your browser.
          </p>
          <h3 className="font-bold mt-4">8. Changes to This Policy</h3>
          <p>
            We may update this privacy policy at any time. Changes take effect
            once published on the website.
          </p>
          <h3 className="font-bold mt-4">Contact</h3>
          <p>
            Nomadic Zebu MDG-102 Antananarivo / nomadiczebu@gmail.com / +261 34
            51 516 49
          </p>
        </div>
      </div>
    </Container>
  );
}
