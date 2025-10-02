import OfferScreen from "@/app/screencomponents/screen/offer.screen";

import { getAboutOffer } from "@/lib/api/api";

async function getOfferData(params) {
  const { offer } = await params;
  const data = getAboutOffer(offer);
  return data;
}

export default async function onePageOffers({ params }) {
  const data = await getOfferData(params);
  console.log(data);
  return <OfferScreen content={data}></OfferScreen>;
}
