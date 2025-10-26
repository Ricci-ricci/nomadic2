import { client } from "../sanityClient";

async function getSanityDestinations() {
  const query = `*[_type == "destination"]`;
  const data = await client.fetch(query, { next: { revalidate: 60 } });

  console.log(data);
  return data;
}
export default getSanityDestinations;
