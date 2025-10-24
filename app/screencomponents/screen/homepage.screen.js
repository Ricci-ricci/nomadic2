import Content from "../bodycomponents/content";
import BackgroundCarousel from "../carousel/background.carousel";
import { destinationText, aboutText } from "@/lib/text";
import { Destination, Offers } from "@/lib/data/destination";
import ShowPackage from "../package/showPackage";
import Special from "../special/special";
import Best from "../best/best";
import Footer from "../footer/footer";
import BestDestination from "../best/best";
import Header from "../header/header";
import { sanityDestination } from "@/lib/data/destination";
import { sanityOffre } from "@/lib/data/destination";
export default async function HomePageScreen() {
  const destination = await sanityDestination();
  const offre = await sanityOffre();
  return (
    <>
      <Header
        menuColor="text-white"
        logo="text-white"
        button="border-white text-white"
      ></Header>
      <BackgroundCarousel></BackgroundCarousel>
      <Content
        content={destinationText()}
        carouselContent={destination}
      ></Content>
      <Special></Special>
      <ShowPackage pack={offre}></ShowPackage>
      <BestDestination></BestDestination>
      <Footer></Footer>
    </>
  );
}
