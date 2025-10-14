import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { to, subject, message } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_PASS, // your app password
      },
    });

    const data = await transporter.sendMail({
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
