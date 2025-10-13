import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, packageName, price } = await req.json();

    const data = await resend.emails.send({
      from: "Your Travel Site <onboarding@resend.dev>", // You can verify a custom domain later
      to: [
        "riccireese13@gmail.com",
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
