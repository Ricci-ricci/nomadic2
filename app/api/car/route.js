import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, contentTitle } = await req.json();

    await resend.emails.send({
      from: "Trip Planner <onboarding@resend.dev>", // remplace par ton domaine validé Resend
      to: "riccireese13@gmail.com", // ton adresse où tu veux recevoir les demandes
      subject: `New Booking Request: ${contentTitle}`,
      html: `<p>Un utilisateur a soumis une demande de réservation.</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Service :</strong> ${contentTitle}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return Responce.json({ success: false, error: error.message });
  }
}
