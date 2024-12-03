import Header from "./components/Header";
import Banner from './components/HomeBanner';
import Features from "./components/Features";
import TrustefPartner from "./components/trustedPartner";
import AboutUs from "./components/AboutUs";
import BlueCounter from "./components/BlueCounter";

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <Features />
    <TrustefPartner />
    <AboutUs />
    <BlueCounter />
    </>
  );
}
