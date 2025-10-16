import PrivacyPage from "../screencomponents/policy/policy";
import Footer from "../screencomponents/footer/footer";
import Header from "../screencomponents/header/header";
export default function FaqPage() {
  return (
    <>
      <Header menuColor="text-white" button="text-white"></Header>
      <PrivacyPage></PrivacyPage>
      <Footer></Footer>
    </>
  );
}
