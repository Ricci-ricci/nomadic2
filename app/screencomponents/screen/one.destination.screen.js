import Package from "../package/package";
import Container from "../bodycomponents/container";
import DestinationImage from "../bodycomponents/destination.image";
import ShowMore from "../more/showMore";
import Footer from "../footer/footer";
import Header from "../header/header";

export default function OneDestinationScreen({ data, offers, destination }) {
  return (
    <div>
      <Header button="text-white border-white" menuColor="text-white"></Header>
      <DestinationImage data={data}></DestinationImage>
      <Package Package={offers}></Package>
      <ShowMore content={destination}></ShowMore>

      <Footer></Footer>
    </div>
  );
}
