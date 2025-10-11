import { useState } from "react";
export default function Email() {
  const [sent, setSent] = useState(false);
  const handleSend = () => {
    setSent(true);
  };
  return (
    <>
      {" "}
      <div className="w-full max-w-md mx-auto text-center p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-3">
          Veuillez nous fournir votre e-mail
        </h2>
        <p className="text-gray-600 mb-5">
          Pour que nous puissions vous contacter dès que possible.
        </p>

        {sent ? (
          <p className="text-green-600 font-semibold">
            🎉 Merci ! Votre e-mail a bien été envoyé.
          </p>
        ) : (
          <form className="flex gap-2 flex-col">
            <input
              type="email"
              placeholder="Entrez votre e-mail"
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              onClick={handleSend}
              type="submit"
              className="bg-yellow-400 text-white px-4 py-2 rounded-xl cursor-pointer transition w-full"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </>
  );
}
