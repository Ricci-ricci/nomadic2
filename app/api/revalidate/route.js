import { revalidatePath } from "next/cache";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug"); // optional: dynamic page slug

  // Check secret
  if (secret !== process.env.MY_REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    // Revalidate main pages
    revalidatePath("/"); // homepage
    revalidatePath("/destinations"); // destinations listing page

    // Revalidate single destination page if slug is provided
    if (slug) {
      revalidatePath(`/destinations/${slug}`);
      revalidatePath(`/offre/${slug}`);
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    return new Response(`Error revalidating: ${err.message}`, { status: 500 });
  }
}
