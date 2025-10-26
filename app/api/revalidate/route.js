import { revalidatePath } from "next/cache";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (secret !== process.env.MY_REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  revalidatePath("/"); // revalidate homepage (you can target any path)
  return new Response("OK", { status: 200 });
}
