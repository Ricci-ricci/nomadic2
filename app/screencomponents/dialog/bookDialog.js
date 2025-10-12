"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Email from "../email/email"; // ← ton composant d’email

export default function BookDialog({ Package }) {
  const [step, setStep] = useState(false); // false = info, true = email
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // 📨 Fonction d’envoi appelée par <Email handleSend={sendBooking} />
  const sendBooking = async (userEmail) => {
    setLoading(true);
    try {
      const res = await fetch("/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          packageName: Package.title,
          price: Package.price,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        alert("Erreur lors de l’envoi de la réservation");
      }
    } catch (error) {
      console.error(error);
      alert("Impossible d’envoyer la réservation");
    } finally {
      setLoading(false);
    }
  };

  if (step) {
    // Étape 2 : affichage du composant Email
    return (
      <div className="p-4">
        {sent ? (
          <p className="text-green-600 text-center font-semibold">
            🎉 Votre demande de réservation a été envoyée avec succès !
          </p>
        ) : (
          <Email handleSend={sendBooking} />
        )}
      </div>
    );
  }

  // Étape 1 : affichage des infos du package
  return (
    <div className="space-y-4">
      <span className="text-center text-lg md:text-xl text-black font-bold">
        {Package.price} $
      </span>

      <div className="bg-gray-50 rounded-lg p-4 flex flex-col">
        <span className="text-md font-semibold mb-2 text-gray-700">
          Included:
        </span>
        <span className="text-sm text-gray-600 whitespace-pre-line">
          {Package.included}
        </span>

        <span className="text-md font-semibold mt-3 mb-2 text-gray-700">
          Not Included:
        </span>
        <span className="text-sm text-gray-600 whitespace-pre-line">
          {Package.notIncluded}
        </span>
      </div>

      <Button
        onClick={() => setStep(true)} // 👉 passe à l’écran email
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold"
      >
        Send Booking Request
      </Button>
    </div>
  );
}
