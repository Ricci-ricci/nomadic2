import { useState } from "react";

export default function Email({ handleSend }) {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [sending, setSending] = useState(false); // New state for loading animation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true); // Start animation
    try {
      await handleSend(email, name, firstName);
      setSent(true);
    } catch (error) {
      console.error("Error sending email and name:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setSending(false); // Stop animation
    }
  };

  return (
    <div className="w-full max-w-md mx-auto text-center p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-3">
        Veuillez nous fournir votre e-mail
      </h2>
      <p className="text-gray-600 mb-5">
        Pour que nous puissions vous contacter dès que possible.
      </p>

      {sent ? (
        <p className="text-green-600 font-semibold">
          Merci ! Votre e-mail a bien été envoyé.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
          <input
            type="name"
            placeholder="Please enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
            disabled={sending} // disable input during sending
          />
          <input
            type="firstname"
            placeholder="Please enter your firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
            disabled={sending} // disable input during sending
          />
          <input
            type="email"
            placeholder="Please enter your gmail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
            disabled={sending} // disable input during sending
          />
          <button
            type="submit"
            disabled={sending}
            className={`${
              sending
                ? "bg-yellow-300 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-yellow-500"
            } text-white px-4 py-2 rounded-xl transition w-full flex justify-center items-center gap-2`}
          >
            {sending ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Envoi en cours...</span>
              </>
            ) : (
              "Envoyer"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
