import { client } from "../sanityClient";

async function getSanityDestinations() {
  const query = `*[_type == "destination"]`;
  const data = await client.fetch(query);

  console.log(data);
  return data;
}
export default getSanityDestinations;
