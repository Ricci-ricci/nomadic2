import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { to, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "Trip Planner <onboarding@resend.dev>",
      to,
      subject,
      html: message,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json({ success: false, error: error.message });
  }
}
