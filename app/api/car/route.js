import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, contentTitle } = await req.json();

    // Create reusable transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_PASS, // your app password
      },
    });

    const recipients = [
      "riccireese13@gmail.com",
      "riccireese15@gmail.com",
      "nomadiczebu@gmail.com",
      "stephanie.nomadic@gmail.com",
      "franck.nomadiczebu@gmail.com",
      "granitixmg@gmail.com",
    ];

    // Send the email
    await transporter.sendMail({
      from: `"Trip Planner" <${process.env.GMAIL_USER}>`,
      to: recipients.join(", "),
      subject: `New Booking Request: ${contentTitle}`,
      html: `
        <p>Un utilisateur a soumis une demande de réservation.</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Service :</strong> ${contentTitle}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return Response.json({ success: false, error: error.message });
  }
}
