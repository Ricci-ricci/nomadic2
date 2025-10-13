import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();
    await resend.emails.send({
      from: "Trip Planner <onboarding@resend.dev>", // Replace with your validated Resend domain
      to: [
        "riccireese13@gmail.com",
        "nomadiczebu@gmail.com",
        "stephanie.nomadic@gmail.com",
        "franck.nomadiczebu@gmail.com",
        "granitixmg@gmail.com",
      ], // 👈 your destination email // Your email address for receiving requests
      subject: `New Booking Request: ${subject}`,
      html: `<p>An user has submitted a booking request.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return Response.json({ success: false, error: error.message });
  }
}
