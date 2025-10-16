import Footer from "../screencomponents/footer/footer";
import Header from "../screencomponents/header/header";
import ServicesScreen from "../screencomponents/services/services.screen";
export default function ServicePage() {
  return (
    <div>
      <Header menuColor="text-white" button="text-white"></Header>
      <ServicesScreen></ServicesScreen>
      <Footer></Footer>
    </div>
  );
}
