import { client } from "../sanityClient";

async function getSanityOffre() {
  const query = `*[_type == "offre"]`;
  const data = await client.fetch(
    query,
    {},
    { cache: "no-store" },
    { next: { revalidate: 60 } },
  );
  console.log(data);
  return data;
}
export default getSanityOffre;
