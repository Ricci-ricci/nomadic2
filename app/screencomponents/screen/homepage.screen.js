import Content from "../bodycomponents/content";
import BackgroundCarousel from "../carousel/background.carousel";
import { destination, about } from "@/lib/text";
import { Destination, Offers } from "@/lib/data/destination";
import ShowPackage from "../package/showPackage";
import Special from "../special/special";
import Best from "../best/best";
import Footer from "../footer/footer";
import BestDestination from "../best/best";
export default function HomePageScreen() {
  return (
    <>
      <BackgroundCarousel></BackgroundCarousel>
      <Content
        content={destination()}
        carouselContent={Destination()}
      ></Content>
      <Special></Special>
      <ShowPackage pack={Offers()}></ShowPackage>
      <BestDestination></BestDestination>
      <Footer></Footer>
    </>
  );
}
