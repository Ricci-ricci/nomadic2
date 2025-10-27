"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Email from "../email/email";

export default function BookDialog({ Package }) {
  const [step, setStep] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendBooking = async (userEmail, userName, userFirstName) => {
    setLoading(true);
    try {
      const res = await fetch("/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          firstName: userFirstName,
          packageName: Package.title,
          price: Package.price,
        }),
      });

      const data = await res.json();
      if (data.success) setSent(true);
      else alert("Erreur lors de l’envoi de la réservation");
    } catch (error) {
      console.error(error);
      alert("Impossible d’envoyer la réservation");
    } finally {
      setLoading(false);
    }
  };

  // Step 2 : Email form
  if (step) {
    return (
      <div className="p-4 md:p-6 w-full max-w-md mx-auto h-full overflow-y-auto">
        {sent ? (
          <p className="text-green-600 text-center font-semibold text-base md:text-lg">
            🎉 Votre demande de réservation a été envoyée avec succès !
          </p>
        ) : (
          <Email handleSend={sendBooking} />
        )}
      </div>
    );
  }

  // Step 1 : Package info
  return (
    <div className=" p-4 md:p-6 w-full max-w-md mx-auto h-full flex flex-col md:gap-4 gap-24">
      <div className="flex flex-col md:flex-col sm:flex-row sm:items-center md:items-start sm:justify-between gap-3">
        <span className="text-xl md:text-xl font-bold text-gray-900 text-center sm:text-left">
          {Package.title}
        </span>
        <span className="text-xl md:text-2xl text-yellow-500 font-extrabold text-center sm:text-right">
          {Package.price}
        </span>
      </div>

      <div className="bg-gray-50 rounded-lg max-h-[300px] p-4 md:p-5 flex md:flex md:flex-row flex-col gap-3 border border-gray-200 shadow-sm overflow-x-auto">
        <div>
          <span className="text-md md:text-base font-semibold mb-1 text-gray-700 block">
            Included:
          </span>
          <span className="text-sm md:text-xs text-gray-600 whitespace-pre-line leading-relaxed">
            {Package.included?.replace(/\\n/g, "\n") || ""}
          </span>
        </div>

        <div>
          <span className="text-md md:text-base font-semibold mb-1 text-gray-700 block">
            Not Included:
          </span>
          <span className="text-sm md:text-xs text-gray-600 whitespace-pre-line leading-relaxed">
            {Package.notIncluded?.replace(/\\n/g, "\n") || ""}
          </span>
        </div>
      </div>

      <Button
        onClick={() => setStep(true)}
        disabled={loading}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-base md:text-lg py-2 md:py-3 rounded-xl transition-all duration-300"
      >
        {loading ? "Sending..." : "Send Booking Request"}
      </Button>
    </div>
  );
}
