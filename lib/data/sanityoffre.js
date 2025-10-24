import { client } from "../sanityClient";

async function getSanityOffre() {
  const query = `*[_type == "offre"]`;
  const data = await client.fetch(query);
  console.log(data);
  return data;
}
export default getSanityOffre;
