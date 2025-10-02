import Best from "../best/best";
import Section from "../bodycomponents/section";
import HeadCarousel from "../carousel/head.carousel";
import Footer from "../footer/footer";
import Header from "../header/header";
import More from "../more/more";
import { Destination } from "@/lib/data/destination";

export default function DestinationScreen() {
  return (
    <>
      <HeadCarousel></HeadCarousel>
      <More contents={Destination()}></More>
      <Best></Best>
      <Footer></Footer>
    </>
  );
}
