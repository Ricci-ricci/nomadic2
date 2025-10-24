import { client } from "../sanityClient";

async function getSanityDestinationSlug({ slug }) {
  const query = `*[_type == "offre" && destinationSlug.current == $slug]{
    destinationSlug
    }`;

  const params = { slug }; // pass the slug value here
  const data = await client.fetch(query, params);

  console.log(data);
  return data;
}

export default getSanityDestinationSlug;
