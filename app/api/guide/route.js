import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, firstName, email, contentTitle } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_PASS, // your app password
      },
    });

    await transporter.sendMail({
      from: "Trip Planner <onboarding@resend.dev>",
      to: [
        "riccireese13@gmail.com",
        "riccireese15@gmail.com",
        "nomadiczebu@gmail.com",
        "stephanie.nomadic@gmail.com",
        "franck.nomadiczebu@gmail.com",
        "granitixmg@gmail.com",
      ], // 👈 your destination email
      subject: `New Booking Request: ${contentTitle}`,
      html: `<p>Un utilisateur a soumis une demande de réservation.</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Guide :</strong> ${contentTitle}</p>
            <p><strong>Name :</strong> ${name}</p>
             <p><strong>First Name :</strong> ${firstName}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return Response.json({ success: false, error: error.message });
  }
}
