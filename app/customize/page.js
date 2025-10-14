"use client";
import { useState } from "react";
import DestinationChoice from "../screencomponents/choice/destination.choice";
import BudgetChoice from "../screencomponents/choice/budget.choice";
import DurationChoice from "../screencomponents/choice/time.choice";
import Header from "../screencomponents/header/header";
import Footer from "../screencomponents/footer/footer";

import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Email from "../screencomponents/email/email";

export default function Customise() {
  const [choices, setChoices] = useState({
    destinations: [],
    budget: null,
    duration: null,
    personalNote: "",
  });
  const resetChoices = () => {
    setChoices({
      destinations: [],
      budget: null,
      duration: null,
      personalNote: "",
    });
  };

  // 🧩 Helper to update one field at a time
  const updateChoice = (key, value) => {
    setChoices((prev) => ({ ...prev, [key]: value }));
  };

  // 📨 Send email to yourself with trip data and user email
  const sendEmail = async (userEmail, name, firstName) => {
    const { destinations, budget, duration, personalNote } = choices;

    if (destinations.length === 0 || !budget || !duration) {
      alert("⚠️ Please complete all selections before confirming your trip.");
      return;
    }

    // HTML formatted email
    const message = `
      <h2>✈️ New Trip Request</h2>
       <p><strong>FirstName:</strong> ${firstName}</p>
        <p><strong>name:</strong> ${name}</p>
      <p><strong>Destination(s):</strong> ${destinations.join(", ")}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Duration:</strong> ${duration}</p>
      <p><strong>Personal Request:</strong> ${
        personalNote || "No additional notes"
      }</p>
      <p><strong>User Email:</strong> ${userEmail}</p>
    `;

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [
            "riccireese13@gmail.com",
            "riccireese15@gmail.com",
            "nomadiczebu@gmail.com",
            "stephanie.nomadic@gmail.com",
            "franck.nomadiczebu@gmail.com",
            "granitixmg@gmail.com",
          ], // 👈 your destination email
          subject: "🌍 New Trip Customization Request",
          message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        resetChoices();
      } else {
        console.error("Email error:", data.error);
        alert("❌ Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error while sending email. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-screen gap-4 h-[40vh] md:h-[80vh]">
        <span className="text-4xl md:text-8xl font-bold mb-4 text-center text-yellow-400 font-edu-vic">
          Plan your perfect trip
        </span>
        <span className="text-xl md:text-4xl font-bold mb-4 max-w-xl text-center">
          Choose your destination, your budget, and your duration — we’ll take
          care of the rest.
        </span>
      </div>

      {/* Choices */}
      <div className="p-6 flex flex-col items-center justify-start gap-16">
        <DestinationChoice
          selected={choices.destinations}
          onChange={(value) => updateChoice("destinations", value)}
        />
        <BudgetChoice
          selected={choices.budget}
          onChange={(value) => updateChoice("budget", value)}
        />
        <DurationChoice
          selected={choices.duration}
          onChange={(value) => updateChoice("duration", value)}
        />

        {/* Personal Request Input */}
        <div className="flex flex-col items-center w-full max-w-2xl gap-3">
          <label
            htmlFor="personalNote"
            className="text-lg font-semibold text-gray-700"
          >
            Any special requests or personal preferences?
          </label>
          <textarea
            id="personalNote"
            placeholder="e.g., Prefer sea view, vegetarian meals, romantic getaway..."
            value={choices.personalNote}
            onChange={(e) => updateChoice("personalNote", e.target.value)}
            className="w-full p-4 text-lg rounded-2xl border border-gray-300 shadow-md focus:ring-2 focus:ring-yellow-400 outline-none resize-none h-32 transition-all duration-300"
          />
        </div>

        {/* Confirm Button + Dialog */}
        <Dialog>
          <DialogTrigger className="flex items-center gap-3 mt-8 px-10 py-6 text-xl bg-yellow-400 hover:bg-yellow-500 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            <CheckCircle size={24} />
            Confirm my trip
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Your Trip</DialogTitle>
              <DialogDescription>
                <Email handleSend={sendEmail} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <Footer />
    </div>
  );
}
