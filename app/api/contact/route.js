import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_PASS, // your app password
      },
    });
    // Define the recipients
    const recipients = [
      "riccireese13@gmail.com",
      "riccireese15@gmail.com",
      "nomadiczebu@gmail.com",
      "stephanie.nomadic@gmail.com",
      "franck.nomadiczebu@gmail.com",
      "granitixmg@gmail.com",
    ];

    await transporter.sendMail({
      from: `"Trip Planner" <${process.env.GMAIL_USER}>`,
      to: recipients.join(", "),
      subject: `New Booking Request: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return Response.json({ success: false, error: error.message });
  }
}
