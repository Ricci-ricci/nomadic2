import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, packageName, price } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_PASS, // your app password
      },
    });

    const data = await transporter.sendMail({
      from: "Your Travel Site <onboarding@resend.dev>", // You can verify a custom domain later
      to: [
        "riccireese13@gmail.com",
        "riccireese15@gmail.com",
        "nomadiczebu@gmail.com",
        "stephanie.nomadic@gmail.com",
        "franck.nomadiczebu@gmail.com",
        "granitixmg@gmail.com",
      ], // 👈 your destination email // Change to where you want to receive booking requests
      subject: `New Booking Request - ${packageName}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Package:</strong> ${packageName}</p>
        <p><strong>Price:</strong> $${price}</p>
        <p><strong>From:</strong> ${name} (${email})</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
