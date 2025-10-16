"use client";
import React, { useState } from "react";

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
import { CalendarDemo } from "../screencomponents/choice/date.choice";
import TravelersSelector from "../screencomponents/choice/voyager";

export default function Customise() {
  const [choices, setChoices] = useState({
    destinations: [],
    budget: null,
    duration: null,
    travelers: { adults: 1, children: 0 },
    departureDate: null,
    arrivalDate: null,
    personalNote: "",
  });

  const resetChoices = () => {
    setChoices({
      destinations: [],
      budget: null,
      duration: null,
      travelers: { adults: 1, children: 0 },
      departureDate: null,
      arrivalDate: null,
      personalNote: "",
    });
  };

  // Update one field at a time
  const updateChoice = (key, value) => {
    setChoices((prev) => ({ ...prev, [key]: value }));
  };

  // Send email
  const sendEmail = async (userEmail, name, firstName) => {
    const {
      destinations,
      budget,
      travelers,
      departureDate,
      arrivalDate,
      personalNote,
    } = choices;

    if (
      destinations.length === 0 ||
      !budget ||
      !departureDate ||
      !arrivalDate
    ) {
      alert("⚠️ Please complete all selections before confirming your trip.");
      return;
    }

    const message = `
      <h2>✈️ New Trip Request</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Destination(s):</strong> ${destinations.join(", ")}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Travelers:</strong> Adults: ${travelers.adults}, Children: ${travelers.children}</p>
      <p><strong>Departure Date:</strong> ${departureDate.toDateString()}</p>
      <p><strong>Arrival Date:</strong> ${arrivalDate.toDateString()}</p>
      <p><strong>Personal Request:</strong> ${personalNote || "No additional notes"}</p>
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
          ],
          subject: "🌍 New Trip Customization Request",
          message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Email sent successfully!");
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
      <Header menuColor="text-white" button="text-white" />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-screen gap-4 h-[20vh] md:h-[30vh] md:mt-48 md:mb-14 mt-42">
        <span className="text-4xl md:text-8xl font-bold mb-4 text-center text-yellow-400 font-edu-vic">
          Plan your perfect trip
        </span>
        <span className="text-xl md:text-4xl font-bold mb-4 max-w-xl text-center">
          Choose your destination, your budget, and your duration — we’ll take
          care of the rest.
        </span>
      </div>

      {/* Choices Section */}
      <div className="p-6 flex flex-col items-center justify-start gap-16">
        <DestinationChoice
          selected={choices.destinations}
          onChange={(value) => updateChoice("destinations", value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          <CalendarDemo
            day="Departure"
            selectedDate={choices.departureDate}
            onChange={(date) => updateChoice("departureDate", date)}
          />
          <CalendarDemo
            day="Arrival"
            selectedDate={choices.arrivalDate}
            onChange={(date) => updateChoice("arrivalDate", date)}
          />
        </div>

        <TravelersSelector
          selected={choices.travelers}
          onChange={(value) => updateChoice("travelers", value)}
        />

        <BudgetChoice
          selected={choices.budget}
          onChange={(value) => updateChoice("budget", value)}
        />

        {/* Personal Request Input */}
        <div className="flex flex-col items-center w-full max-w-2xl gap-3">
          <label
            htmlFor="personalNote"
            className="text-lg font-semibold text-gray-700"
          >
            Feel free to ask us about your special requests or personal
            preferences
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
            Send to Designer
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
