import OneDestinationScreen from "@/app/screencomponents/screen/one.destination.screen";
import { getProjectByDestination } from "@/lib/api/api";
import { getOffersBySlug } from "@/lib/api/api";
import { Destination } from "@/lib/data/destination";

async function getData(params) {
  const { destination } = await params;
  const data = getProjectByDestination(destination);
  const offers = getOffersBySlug(destination);
  return { data, offers };
}

export default async function Page({ params }) {
  const { data, offers } = await getData(params);
  console.log(data);
  console.log(offers);
  return (
    <OneDestinationScreen
      data={data}
      offers={offers}
      destination={Destination()}
    ></OneDestinationScreen>
  );
}
