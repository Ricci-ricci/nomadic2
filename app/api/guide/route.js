import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, contentTitle } = await req.json();

    await resend.emails.send({
      from: "Trip Planner <onboarding@resend.dev>",
      to: [
        "riccireese13@gmail.com",
        "nomadiczebu@gmail.com",
        "stephanie.nomadic@gmail.com",
        "franck.nomadiczebu@gmail.com",
        "granitixmg@gmail.com",
      ], // 👈 your destination email
      subject: `New Booking Request: ${contentTitle}`,
      html: `<p>Un utilisateur a soumis une demande de réservation.</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Guide :</strong> ${contentTitle}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return Response.json({ success: false, error: error.message });
  }
}
