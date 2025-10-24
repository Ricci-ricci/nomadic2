import Best from "../best/best";
import Section from "../bodycomponents/section";
import HeadCarousel from "../carousel/head.carousel";
import Footer from "../footer/footer";
import Header from "../header/header";
import More from "../more/more";
import { Destination } from "@/lib/data/destination";
import { sanityDestination } from "@/lib/data/destination";

export default async function DestinationScreen() {
  const destination = await sanityDestination();
  return (
    <>
      <Header
        menuColor="text-white"
        logo="text-white"
        button="text-white border-white"
      />
      <HeadCarousel></HeadCarousel>
      <More contents={destination}></More>
      <Best></Best>
      <Footer></Footer>
    </>
  );
}
