import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "0ig4x50q", // replace with your projectId
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-01",
  token: process.env.TOKEN_SANITY,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
