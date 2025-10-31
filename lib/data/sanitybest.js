import { cache } from "react";
import { client } from "../sanityClient";

async function getSanityBest() {
  const query = `*[_type == "best"]`;
  const data = await client.fetch(
    query,
    {},
    { cache: "no-store" },
    { next: { revalidate: 60 } },
  );

  console.log(data);
  return data;
}
export default getSanityBest;
