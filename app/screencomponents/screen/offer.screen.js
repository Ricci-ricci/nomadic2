import Footer from "../footer/footer";
import Header from "../header/header";
import OnePackageScreen from "./one.package.screen";

export default function OfferScreen({ content }) {
  return (
    <>
      <Header></Header>
      <OnePackageScreen Package={content}></OnePackageScreen>;<Footer></Footer>
    </>
  );
}
